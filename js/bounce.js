/**
 * Library that can make an element bounce
 * @returns {{init: init}}
 * @constructor
 */
var Bounce = function(selector, settings) {
    /**
     * Default settings for the module
     * @type {{selector: string, gravity: number}}
     */
    var defaultSettings = {
        selector: '.bounce',
        gravity: 9.81,
        updateSpeed: 1, //In milliseconds
        //Set standard color
        color: 'rgba(255,255,255)'
    };
    /**
     * The bouncing element
     * @type {HTMLElement}
     */
    var element;
    /**
     * The color
     * @type {number}
     */
    var newcolor;

    /**
     * The horizontal speed
     * @type {number}
     */
    var speedX;

    /**
     * The vertical speed
     * @type {number}
     */
    var speedY;

    /**
     * The timer that updates the model and the screen
     * @type {object}
     */
    var timer;

    /**
     * The x and y position of the element
     * @type {{x: number, y: number}}
     */
    var position = {
        x: 0,
        y: 0
    };

    /**
     * Updates the x and y position to the bouncing element
     */
    var updateElement = function() {
        element.style.marginLeft = position.x + 'px';
        element.style.marginTop = position.y + 'px';
    };

    /**
     * Moves changes the x and the y
     * @param {number} xChange
     * @param {number} yChange
     */
    var move = function(xChange, yChange) {

        position.x += xChange;
        position.y += yChange;

        //If the element reaches the bottom of the parent element reverse the speed
        if (element.parentElement.clientHeight <= position.y + element.clientHeight) {
            speedY = -speedY;
        }

        //If the element reaches the right or left side of the parent element reverse the speed
        if (element.parentElement.clientWidth <= position.x + element.clientWidth) {
            speedX = -speedX;
        }

        updateElement();
    };

    /**
     * Update the variables to the new reality
     */
    var update = function() {
        speedY += defaultSettings.gravity * (defaultSettings.updateSpeed / 3000);
        speedX += defaultSettings.gravity * (defaultSettings.updateSpeed / 3000);
        move(speedX, speedY);

    };

    /**
     * Overwrite the properties of the first object with the properties of the second object if they exist
     * @param {object} object1
     * @param {object} object2
     */
    var mergeObjects = function(object1, object2) {
        for (var attrname in object1) {
            if (object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
    };

    /**
     * Initializes the module
     * @param {string} [selector] Css selector that targets the element that needs to bounce
     * @param {object} [settings] Object that contain overrides for the default settings
     */
    var init = function(selector, settings) {
        mergeObjects(defaultSettings, settings || {});
        selector = selector || defaultSettings.selector;
        element = document.querySelector(selector);
        speedY = 0;
        speedX = 0;
        timer = setInterval(update, defaultSettings.updateSpeed);
        newcolor = defaultSettings.color;
        setcolor(newcolor);
            };

    var size = function() {
        var i = setInterval(function() {

            //get random number between min and max number.
            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }



            //Get the object with the class and change the height and width with a random number that is between the min and max.
            document.querySelector(".bounce").style.height = getRandomInt(50, 200) + "px";
            document.querySelector(".bounce").style.width = getRandomInt(50, 200) + "px";

            document.querySelector(".bounce2").style.height = getRandomInt(50, 200) + "px";
            document.querySelector(".bounce2").style.width = getRandomInt(50, 200) + "px";

        }, 800);
    };

    //Set active the size
    size();


    
    var setcolor = function(kleur){
        //Set element backgroundcolor
                element.style.backgroundColor = kleur;

    }

    

    //Return the functions that should be accessible from the outside. The rest is only accessible from within the object
    return {
        init: init,
        size: size
    };



};