---
layout: post
title:  "Creating my Github Pages with Jekyll"
date:   2024-01-16 18:22:10 +1300
categories: github-pages
---
I have rebuilt my `Github Pages` by following the instruction in [Creating a GitHub Pages site with Jekyll][Creating a GitHub Pages site with Jekyll] of [GitHub Pages documentation][GitHub Pages documentation]. There are only 23 steps.

At first, the doc is a bit confusing, for some of the optional steps are also numbered in sequence. After reading the steps carefully, my new `Github Pages` was built successfully.

### The confusing steps:

[Splitting a subfolder out into a new repository][Splitting a subfolder out into a new repository], which is not relavent to set up my site.

---

### Resouces checked:

[Programming language syntax highlighting in Jekyll][Programming language syntax highlighting in Jekyll]

[Markdown Cheat Sheet][Markdown Cheat Sheet]

[Jekyll docs][Jekyll docs]

--- 

### shell commands used:

{% highlight shell %}
git remote add origin https://github.com/guanzhou-zhao/guanzhou-zhao.github.io.git
git branch -M main
git push -u origin main

$ jekyll new --skip-bundle .
# Creates a Jekyll site in the current directory
$ bundle exec jekyll server
{% endhighlight %}

[Creating a GitHub Pages site with Jekyll]: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll
[GitHub Pages documentation]: https://docs.github.com/en/pages
[Splitting a subfolder out into a new repository]: https://docs.github.com/en/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository
[Programming language syntax highlighting in Jekyll]: https://www.fabriziomusacchio.com/blog/2021-08-11-Syntax_Highlighting_in_Jekyll/
[Markdown Cheat Sheet]: https://www.markdownguide.org/cheat-sheet/
[Jekyll docs]: https://jekyllrb.com/docs/