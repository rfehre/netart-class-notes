# HTML/CSS

### September 12, 2018

Atom is made by github, crazy. Can access source code [here](github.com/atom).

CMD+SHIFT+P to search for shit <br>
CTRL+SHIFT+M to preview markdown <br>
CTRL+SHIFT+H to preview HTML

##### HTML Elements Review

```html
<!DOCTYPE html>
```
- Tells the browser the era that you wrote your code in. Should represent whatever the current doctype is. We are in the era of HTML5.

```html
<html lang="en" dir="ltr ">
</html>
```
- html tag is an element.
- lang & dir are attributes.
    - lang is a way of letting programs opening your file know what language it is written in.

```html
<meta charset="utf-8">
<meta name="description" content="this is just me testing stuff out">
```
- Useful for search engine stuff, when you copy paste a link and a box comes up with a bunch of information, that's meta tag info.

```html
<title>My example page</title>
```
- Title of your web page in the top of your browser.

```HTML
&nbsp;
```
- Non breaking space.
- Lots of weird ones. Greater than/less than sign also, for example.


##### Fun JS shit

```js
for (var i = 0; i < 10000; i++) {
    let div = document.createElement('div')
    div.textContent = "poop"
    document.body.appendChild(div)
}
```
- Makes 1000 divs that say "poop"

```js
setInterval(()=> {
    document.querySelectorAll('*').forEach(e=>
        e.style.background='#'+Math.floor(Math.random()*16777215).toString(16)
        )
    }, 250)
```
- Makes all backgrounds random colors

```js
    window.open('http://netart.rocks')
```
- Make a popup

##### CSS

Html is a polyglot language, meaning you can have multiple languages inside of a .html file.

Can write it inline, as a style attribute or in the head of .html file. Shouldn't tho. For a lot of reasons. External styles.css file that links to html in head.

```CSS
a {
    color:red;
    font-family: fantasy;
}
```
- property name: property value.
    - i.e. **'color:red;'**
    - Similar to attributes with names & values.
- **'a'** in this example is the **CSS SELECTOR**

Can use multiple selectors
```css
a, p {
    color:red;
}
```

More common than target specific element, targeting specific class:

**HTML**
```HTML
<h3 class="red-fantasy">
</h3>
```
**CSS**
```CSS
.red-fantasy {
    color:red;
}
```

**Browser Queries**

```CSS
img {
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,,0,0.75);
-o-box-shadow: 10px 10px 5px 0px rgba(0,0,,0,0.75);
box-shadow: 10px 10px 5px 0px rgba(0,0,,0,0.75);
}
```
- webkit = chrome or safari
- firefox = mozilla
- o = opera
- box-shadow, when every other browser has caught up, will use this final line.
- Using all of these means you won't have to update this aspect of your page.

# Programming

What a computer is has nothing to dow ith electricity. Could be done with steam, by hand, electricity just happens to be good at making it go fast.

The Analytical Engine (babbage & lovelace) used decimal rather than binary memory. Stored states (coin flips, true/false) in huge grids. Programmed with punch cards (idea stolen from jacquard loom)

LORD BYRON IS ADA LOVELACE'S DAD LOL WHAT

Ada realizes that computers can essentially do/create anything that can be represented by numbers.

# **HOMEWORK**

**READ**
[Javascript: How Did It Get So Popular?](https://news.codecademy.com/javascript-history-popularity/?utm_source=customer.io&utm_medium=email&utm_campaign=fortnightly_9_6_18&utm_content=NewPaths)<br>
**READ THEN DO**
[Eloquent Javascript (ch 1-3)](http://eloquentjavascript.net/)<br>
**THEN DO**
[Codeacademy: Learn Javascript (1-4)](https://www.codecademy.com/learn/learn-javascript)<br>
**OR DO**
[Learn X in Y Minutes: Javascript](https://learnxinyminutes.com/docs/javascript/)
