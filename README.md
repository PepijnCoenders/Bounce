# Bounce

Bounce is a library based on https://github.com/drkx/bounce. We as a group of students only added a few things. This newest version is the first steady build.

A Demo can be found here:

[**Bounce Demo**](http://pepijncoenders.nl/Bounce)

# What did we change?

* Boxes grow bigger
* Boxes 'bounce' horizontally and vertically
* Boxes change size
* Boxes change color

# Getting Started

## Standard code

The easiest way to use bounce is putting it in a variable and calling the init function on it. It will than target the element with class bounce on it

```javascript
    //Initialize the first object without params so the default values are used
var bounce = Bounce();
bounce.init();
```
         
If you want however you can use a custom selector and change the gravity and the update speed using a settings object

```javascript
//Initialize the second object with a different selector and a gravity of only to so it goes...much...slower
var bounce2 = Bounce();
bounce2.init('.bounce2', {gravity: 2, updateSpeed:2});
``` 

## Change color

If you want to change te color of a flying square, you can set it's color by adding the custom selector **color**.
You can use both [RGB colors](https://www.w3schools.com/colors/colors_rgb.asp) and [Hex colorcodes](https://www.w3schools.com/colors/colors_picker.asp) for setting the color.
The standard color is set to *rgb(255,255,255)*, to change this add the folowing to your code.

```javascript
//Set the second square using a shade of red
var bounce2 = Bounce();
bounce2.init('.bounce2', {color: "#d43f3a"});
```

Make sure to use "quotation marks" when setting the color.
Remember you could also use *color: "(212,63,58)* to get the same result.

## Code for turning

For now, each time you want to make sure the boxes rotate you'll have to add some CSS. 

```css3
.bounceclassandnumber {
 height: 100px;
     width: 100px;
     border: 1px black solid;
     position: absolute;
     background: green;
     display: inline-block;
    -webkit-animation: spin 5s infinite linear;
     -moz-animation: spin 5s infinite linear;
     -o-animation: spin 5s infinite linear;
     -ms-animation: spin 5s infinite linear;
     animation: spin 5s infinite linear;
}
```

The rest will take care of itself.

## Installing

Add Javascript and CSS file to your webpage
```html  
 <script src="js/bounce.js" type="application/javascript"></script>
    <link href="css/style.css" type="text/css" rel="stylesheet">
```

# To-Do

- [ ] Automate rotation
- [ ] Easily add boxes
- [x] Easily change colors

## Acknowledgments

* Hat tip to my project group for writing the early version of this code, which can be found [here](https://git.fhict.nl/I339162/bounce2).
* Based on [this library](https://github.com/drkx/bounce).

