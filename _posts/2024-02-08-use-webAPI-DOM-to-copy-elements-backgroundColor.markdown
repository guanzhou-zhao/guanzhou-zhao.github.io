---
layout: post
title:  "use webAPI to copy an element's background color into clipboard"
date:   2024-02-08 08:07:10 +1300
categories: [javascript]
---

### The finished result shows in [my github-page](https://guanzhou-zhao.github.io/colors/)

### What is DOM?

> DOM(Document Object Model) is a cross-platform, language-independent interface that treats HTML and XML as a tree structure wherein node is an object representing a part of the document.

> DOM represents the document with a logical tree. Each branch of the tree ends in nodes. Each node contains objects. DOM methods allow a programmatic way to operate document's structure, style and content. Nodes can be attached with events handlers. When event triggers, event handler will be executed.

`getComputedStyle(this)` is webAPI. `document.*` are DOM API.

### JavaScript code as below:

{% highlight javascript %}
function copyColor() {
    const style = getComputedStyle(this);
    // console.log(style.backgroundColor);
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = style.backgroundColor;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    const instruction = "click squares to copy coresponding color";
    instruction_element = document.getElementById("instruction")
    instruction_element.innerText = `color ${style.backgroundColor} copied`;
    instruction_element.style.color = style.backgroundColor;
    setTimeout(()=>{
        instruction_element.innerText = instruction;
        instruction_element.style.color="inherit"
    }, 2000);
}
const elements = document.querySelectorAll(".colors-container .e");
elements.forEach(element => {
    element.addEventListener("click", copyColor);
});
{% endhighlight %}

# References:

[Extending Minima Theme: add new page on navigation](https://talk.jekyllrb.com/t/extending-minima-theme/7964)

[jekyll Adding custom styles](https://talk.jekyllrb.com/t/adding-custom-styles/5903)

[jekyll Minima theme: Customization](https://github.com/jekyll/minima/tree/v2.5.1#customization)

