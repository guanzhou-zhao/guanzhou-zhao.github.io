---
layout: post
title:  "react native running on devices"
date:   2024-01-31 19:14:10 +1300
categories: [react native]
---

### Running on devices
1. enable debugging over USB on android phone

2. use `adb devices` in terminal to check if device is connect well, 

3. for wireless debug, accessing the Dev Menu by shaking phone, `Dev Settings → Debug server host & port for device.` type in machine's ip address and port number(e.g. 10.0.1.1:8081). use `ifconfig en0 | grep "inet "` to check localhost's ip address

# Resources:

[other's github pages blogs about jekyll server](https://diamantidis.github.io/tips/2020/06/23/browsing-local-jekyll-blog-from-mobile-device)
