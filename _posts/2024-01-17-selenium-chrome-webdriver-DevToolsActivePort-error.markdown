---
layout: post
title:  "Selenium Chrome Webdriver DevToolsActivePort file doesn't exist error"
date:   2024-01-17 20:52:10 +1300
categories: [Selenium]
---
When running `Selenium` with `chromedriver`, confront errors like below:
{% highlight shell %}
Exception managing chrome: error sending request for url (https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json): error trying to connect: proxy authentication required
Webdriver not found - Message: session not created: DevToolsActivePort file doesn't exist
Stacktrace:
GetHandleVerifier [0x00007FF63C852142+3514994]
(No symbol) [0x00007FF63C470CE2]
(No symbol) [0x00007FF63C3176AA]
(No symbol) [0x00007FF63C35015F]
(No symbol) [0x00007FF63C34BB70]
(No symbol) [0x00007FF63C347F52]
(No symbol) [0x00007FF63C390AB4]
(No symbol) [0x00007FF63C385D93]
(No symbol) [0x00007FF63C354BDC]
(No symbol) [0x00007FF63C355C64]
GetHandleVerifier [0x00007FF63C87E16B+3695259]
GetHandleVerifier [0x00007FF63C8D6737+4057191]
GetHandleVerifier [0x00007FF63C8CE4E3+4023827]
GetHandleVerifier [0x00007FF63C5A04F9+689705]
(No symbol) [0x00007FF63C47C048]
(No symbol) [0x00007FF63C478044]
(No symbol) [0x00007FF63C4781C9]
(No symbol) [0x00007FF63C4688C4]
BaseThreadInitThunk [0x00007FFCDC6A7344+20]
RtlUserThreadStart [0x00007FFCDD3A26B1+33]
{% endhighlight %}

### Solution found from resources:

{% highlight python %}
from selenium import webdriver
options = webdriver.ChromeOptions()
options.add_argument("--no-sandbox")
options.add_argument("--remote-debugging-port=9222")
options.headless = True
command_executor = "http://localhost:4444/wd/hub"
driver = webdriver.Remote(command_executor, desired_capabilities=options.to_capabilities())
driver.get("https://google.com")
driver = webdriver.Chrome(options)
{% endhighlight %}



### But problem presists:

{% highlight shell %}
DevTools remote debugging is disallowed by the system admin.
{% endhighlight %}

### Conclusion:

`System admin has disabled selenium`

### Resources:

[DevToolsActivePort file doesn't exist #6049][DevToolsActivePort file doesn't exist #6049]

[Issue 2473: Error "DevToolsActivePort file doesn't exist" always appears in Docker][Issue 2473: Error "DevToolsActivePort file doesn't exist" always appears in Docker]


[DevToolsActivePort file doesn't exist #6049]: https://github.com/SeleniumHQ/selenium/issues/6049
[Issue 2473: Error "DevToolsActivePort file doesn't exist" always appears in Docker]: https://bugs.chromium.org/p/chromedriver/issues/detail?id=2473