---
layout: post
title:  "Add a custom page with link on navigation"
date:   2024-02-07 12:58:10 +1300
categories: [jekyll]
---

- adding new custom page is just like adding the page of `about.markdown`, which is already in project directory.

- create new page in any project location except the ones start with`_` and add the frontmatter of `layout: page`(**different from `layout: post`**) and `title: the title`.(`permalink is optional`)

{% highlight markdown %}
---
layout: page
title: anytitle
permalink: /anytitle/
---

A new customized page shows on navigation
{% endhighlight %}

- the frontmatter of `layout and title` will allow the page to be added on navigation.

- to customize the style of the new page, add `./assets/main.scss`.

- in the `main.scss` file add frontmatter and `@import` like below.

- write custom style below in the `main.scss` file.

{% highlight scss %}
---
# Only the main Sass file needs front matter (the dashes are enough)
---

@import "minima";
/* custom style goes below */
{% endhighlight %}

# Resources:

[Extending Minima Theme: add new page on navigation](https://talk.jekyllrb.com/t/extending-minima-theme/7964)

[jekyll Adding custom styles](https://talk.jekyllrb.com/t/adding-custom-styles/5903)

[jekyll Minima theme: Customization](https://github.com/jekyll/minima/tree/v2.5.1#customization)

