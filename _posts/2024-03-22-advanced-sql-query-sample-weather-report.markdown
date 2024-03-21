---
layout: post
title:  "SQL Query Samples Weather Report"
date:   2024-03-22 08:07:10 +1300
categories: [sql]
---
### Weather Report

#### Solution (explanation in comments)
{% highlight sql %}
SET NOCOUNT ON;
with m(m,v) as (
    select 
        datepart(month, record_date), 
        max(data_value)
    from temperature_records
    where data_type = "max"
    group by datepart(month, record_date)
),
mi(m,v) as(
    select 
        datepart(month, record_date), 
        min(data_value)
    from temperature_records
    where data_type = "min"
    group by datepart(month, record_date)
),
a(m, v) as(
    select
        datepart(month, record_date), 
        -- as the requirement is to round the result to integer,
        -- so first cast integer to float for percisely calculate the average temperature
        -- then round to integer
        -- then use cast as numeric(4, 0) to remove the trailing decimals.
        cast(round(avg(cast(data_value as numeric(10,5))),0) as numeric(4,0)) -- datatype convert, date function
    from temperature_records
    where data_type = "avg"
    group by datepart(month, record_date) -- aggregation
)

select 
    *,
    (select v from mi where mi.m = m.m), -- subquery
    (select v from a where a.m = m.m)
from m

go
{% endhighlight %}


#### Challenge description:
![weather report challenge desctiption](/assets/sql-challenge/weather-report-challenge-description.jpg)

#### Scheme and sample data
![weather report schema](/assets/sql-challenge/weather-report-schema-sample-data.jpg)

#### Expected output

| Month | Max | Min | Avg |
| :-----: | :---: | :---: | :---: |
| 7     |110  | 80  | 90 |
| 8     |  *  |  *  |  * |
| 9     |  *  |  *  |  * |
| 10    |  *  |  *  |  * |
| 11    |  *  |  *  |  * |
| 12    |  *  |  *  |  * |


### Summary:
The key part is to figure out the max temperature of the month is not the average of the max temperatures of days. It is the max of them.

Get max, avg, min temperature of the months, and use `subquery` or `join` to gather them together.


### Links:

[Link to the challenge on HackerRank](https://www.hackerrank.com/skills-verification/sql_advanced)

[SQL query sample - Transaction Monitoring](/sql/2024/03/21/advanced-sql-query-sample-transactions-monitoring.html)

[SQL query sample - Winner Report](/sql/2024/03/21/advanced-sql-query-sample-winner-report.html)