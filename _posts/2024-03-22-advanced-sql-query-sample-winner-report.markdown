---
layout: post
title:  "SQL Query Samples Winner Report"
date:   2024-03-22 10:43:10 +1300
categories: [sql]
---
### Winner Report

#### Solution (explanation in comments)
{% highlight sql %}
SET NOCOUNT ON;
with s(id, n, s) as(
    select 
        event_id, 
        participant_name, 
        cast(max(score) as numeric(10,2)) -- filter to get max score only
    from scoretable
    group by event_id, participant_name
),
sr(id, n, s, r) as(
    select 
        *,
        -- use dense_rank() so that participants in same score are in same rank
        -- and the ranks are consecutive
        dense_rank() over(partition by id order by s desc) as r -- window function
    from s
),
srt as (
select * from sr where r<=3
), 
r as (
    select 
        *,
        (
            select
                -- if same rank has more than one participants, then join their names with comma
                -- and order the names when concatenate them together
                string_agg(n, ",")within group(order by n) 
            from srt s3 where s3.id = s2.id and s3.r = s2.r
        ) as nn
    from srt s2
),
rr as (
    select id, r, min(nn) as n
    from r
    group by id, r
)
select id, [1], [2], [3]
from rr
pivot ( -- pivot (rotate data)
    min(n)
    for r in ([1], [2], [3])
) pvt
order by id
go
{% endhighlight %}


#### Challenge description:
![winner report challenge desctiption](/assets/sql-challenge/winners-report-challenge-description.jpg)

#### Scheme and sample data
![winner report schema](/assets/sql-challenge/winners-report-schema-sampla-data.jpg)

#### Expected output
The result was right, for the `within group(order by n)` was not added to `string_agg(n, ",")` at first. So the names' order wasn't same as expected.

![winner report expected output](/assets/sql-challenge/winners-report-expected-output.jpg)


### Summary:
Knowing the `string_agg(columnName, seperation)within group(order by column)` is key to my solution.


### Links:

[Link to the challenge on HackerRank](https://www.hackerrank.com/skills-verification/sql_advanced)

[SQL query sample - Weather Report](/sql/2024/03/21/advanced-sql-query-sample-weather-report.html)

[SQL query sample - Transaction Monitoring](/sql/2024/03/21/advanced-sql-query-sample-transactions-monitoring.html)