---
layout: post
title:  "Advanced SQL Query Samples - Transactions Monitoring"
date:   2024-03-22 07:21:10 +1300
categories: [sql]
---
### Transactions Monitoring

#### Solution (explanation in comments)
{% highlight sql %}
with t as(
select 
    -- use lag() function to add one more column, 
    -- which shows the datetime of the previous transaction
    lag(dt) over(partition by sender order by dt) as prev_dt,
    dt,
    -- use lead() function to add the datetime of next transaction to each rows of transactions
    lead(dt) over(partition by sender order by dt) as next_dt,
    sender,
    amount
from transactions
),
s as (
select *
from t
-- filter out the transactions which occur within one hour interval or less
where datediff(second,prev_dt, dt) <= 3600 or datediff(second,dt,next_dt)<=3600
),
se as (
select 
    *,
    -- use subquery to add the end_datetime of a sequence of suspicious transactions
    -- the transaction, which is the end of a sequence, 
    -- has the next_transaction_datetime more then one hour away or doesn't have next_transaction
    -- And the transaction is from same sender, and is later than the current transaction
    (
        select min(s1.dt) 
        from s s1 
        where 
            s1.sender = s.sender 
            and datediff(second,prev_dt, dt) <= 3600 
            and (datediff(second,dt,next_dt)>3600 or next_dt is null) 
            and s1.dt>= s.dt
    ) as end_dt
from s -- subquery, date function
)

-- As the same squence of transactions from same sender, have the same end_transaction_datetime
-- so group by sender, end_transaction_datetime
-- select min(dt) as the start of the sequencial transactions, 
-- count(dt) as quantity of the sequencial transactions, sum(amount) as sum
-- having sum(amount) > 150 as required.
select sender, min(dt), end_dt, count(dt), sum(amount)
from se
group by sender, end_dt -- aggregation
having sum(amount)>150
order by sender, min(dt)
go
{% endhighlight %}


#### Challenge description:
![transaction monitoring challenge desctiption](/assets/sql-challenge/transactions-monitoring-challenge-description.jpg)

#### Scheme
![transaction monitoring scheme](/assets/sql-challenge/transactions-monitoring-scheme.png)

#### Sample Data
![transaction monitoring sample data](/assets/sql-challenge/transactions-monitoring-sample-data.jpg)

#### Expected output
![transaction monitoring expected output](/assets/sql-challenge/transactions-monitoring-expected-output.jpg)


### Summary:
The key part is to use subquery to add end_transaction_datetime to all the transaction in same sequence, so that all the expected data can selected in a single `group by`.


### Links:

[Link to the challenge on HackerRank](https://www.hackerrank.com/skills-verification/sql_advanced)

[SQL query sample - Weather Report](/sql/2024/03/22/advanced-sql-query-sample-weather-report.html)

[SQL query sample - Winner Report](/sql/2024/03/22/advanced-sql-query-sample-winner-report.html)