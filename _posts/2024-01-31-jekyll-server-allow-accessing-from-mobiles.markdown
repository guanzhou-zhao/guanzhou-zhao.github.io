---
layout: post
title:  "jekyll server allow accessing from mobiles"
date:   2024-01-31 18:37:10 +1300
categories: [jekyll]
---

### Jekyll server
`bundle exec jekyll server` start a server on localhost.

`bundle exec jekyll server --host=0.0.0.0` will make jekyll server accessible for other devices/mobile on same network.

`ifconfig en0 | grep "inet "` to check localhost's ip address

# Resources:

[other's github pages blogs about jekyll server](https://diamantidis.github.io/tips/2020/06/23/browsing-local-jekyll-blog-from-mobile-device)
