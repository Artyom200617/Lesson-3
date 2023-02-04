// Lesson 12 (DOM, BOM, Events)

//! DOCUMENT OBJECT MODEL --> DOM
//! BROWSER OBJECT MODEL --> BOM

const myObj = {
	name: 'name',
	age: 10,
	lastName: 'last name',
}
const [min, max] = [10, 100]
const { age: anotherAge, ...rest } = myObj

const firstDiv = document.querySelector('#first_div')
console.dir(firstDiv.querySelectorAll('h1'), 'h1')
console.dir(document.querySelectorAll('.second_div'), 'div')
// console.dir(document.querySelectorAll('div'), 'div')

// document.querySelector(selector): Element
// document.querySelectorAll(selector): NodeList
// console.dir(document.getElementById('first_div'))
// console.dir(document.getElementsByClassName('second_div'))
// HTMLCollection
// document.getElementsByTagName(tag: string): HTMLCollection
// document.getElementsByName(name: string): NodeList
// const wrapper = document.querySelector('#wrapper');
// wrapper.getElementsByTagName('p');
// wrapper.getElementsByClassName('active');
// wrapper.getElementsByName('something');
// console.log(document.documentElement.childNodes)
// document.documentElement.childNodes[0];
// document.documentElement.firstChild.nextSibling;
// console.log(document.body.parentNode, 'body prev sibling')
// document.body.parentNode;

const element = document.querySelector('#first_div')
const className = element.attributes.class.value
console.log(className, 'className')
const firstAttribute = element.attributes[0]

// Add element

const newEL = document.createElement('div')
newEL.innerText = 'document create element'
element.appendChild(newEL)
// Get, Set, Remove attributes
// element.getAttribute('class')
// element.setAttribute('class', 'new-classname');
// element.setAttributeNode(attributeNode);
// element.removeAttribute('class');

// image.classList.add('logo-awesome');
// image.classList.remove('logo-sm');
// image.classList.toggle('active');
// image.classList.contains('this-class-doesnt-exist');
// Element.append()
// element.appendChild()

// Events

const button = document.querySelector('#button')
button.addEventListener('click', handleClick)
function handleClick(event) {
	console.log('event')
}
button.removeEventListener('click', handleClick)
// button.removeEventListener('click', handleClick);

// Mouse events:
// click, dblclick, mousedown, mouseout, mouseover, mouseup, mousemove, mouseenter

// Keyboard events:
// keydown, keypress, keyup

// HTML events:
// load, unload, abort, error, resize, change, submit, reset, scroll, focus, blur

// For more:
// https://developer.mozilla.org/en-US/docs/Web/Events

// BOM

// Window.location
// Window.history
// window.navigator
