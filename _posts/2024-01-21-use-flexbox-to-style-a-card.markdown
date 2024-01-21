---
layout: post
title:  "use flexbox to style a card"
date:   2024-01-21 19:05:10 +1300
categories: [css]
---
### html card without styling
{% highlight html %}
 <body>
    <section class="features">
      <div class="feature-container">
        <img src="https://raw.githubusercontent.com/RoyChng/CSS-Flexbox-Tutorial/master/Example%202%20-%20Feature%20Showcase/navigation-icon.png" alt="Navigation Icon" />
        <h3>Feature #1</h3>
        <button>Show More</button>
      </div>
   </section>
  </body>
{% endhighlight %}

![card without style](/assets/flex-card/card-without-style.png)
### the effect we what to achieve:
![flex styled card](/assets/flex-card/flex-styled-card.png)

### to style the section into a card, follow the steps below:

1. set `background-color` to `.feature-container` and `button`(for `body` as well)
    - this gives idea about elements' size and shape
2. set the size for `.feature-container` and `button`
    - use `width height` for `<div>` and `padding font-size` for button
3. set `border-radius` for `.feature-container` and `button`, remove `border` on `button`
4. set `box-shadow` for `.feature-container` and `button`
5. set `width` for `<img>`
6. set `flex layout` on `.features` for its child element
7. set `flex layout` on `.feature-container` for its children elements

### the completed css styles:

{% highlight css %}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
/*   bg color */
  background-color: #f7f7f7;
  font-family: Arial, sans-serif;
}
.features {
  padding-top: 3rem;
  padding-left: 3rem;
/*   position of children */
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  gap: 3rem;
}
.feature-container {
/*   bg color */
  background-color: #e0e0e0;
/*   size */
  width: 300px;
  height: 300px;
/*   shape */
  border-radius: 1rem;
/*   shadow */
  box-shadow: 0 26px 29px #e8e8e8, 0 -26px 100px #ffffff;
  
/*   layout for childrens */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.features button {
/*   color */
  background-color: #5483f0;
/*   size border shape */
  padding: 15px 80px;
  border: none;
  border-radius: 1rem;
  box-shadow: 0px 3px 6px #00000044;
  
  font-size: 1.15rem;
  color: white;
  
  cursor: pointer;
}
.features img {
  width: 75px;
}
{% endhighlight %}

### Summary(steps to make elements look better in CSS):

1. `color`
2. `size(font, width, height, margin, padding) shape(border-radius) border shadow`
3. `layout(position)`


### Resources:

[challenge in code pen](https://codepen.io/guanzhou-zhao/pen/ZEPyeYw)

[A comprehensive guide to css flexbox](https://medium.com/@roy-chng/a-comprehensive-guide-to-css-flexbox-with-real-world-examples-d41c6bb9129d)