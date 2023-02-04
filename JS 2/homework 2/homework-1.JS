const services = document.createElement('div')
services.classList.add('services')
const h1 = document.createElement('h1')
h1.textContent = ('Services.')
h1.classList.add('Showcase')


const redline = document.createElement('div')
redline.classList.add('redline')

const text = document.createElement('p')
text.textContent = ("We are a interior design service that focus on what's best for your home and what's best for you!")

const text2 = document.createElement('p')
text2.textContent = ("Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")

services.append(h1,redline,text,text2)
document.querySelectorAll('.images')[2].after(services)

const Designers = document.createElement('div')
const h0 = document.createElement('h1')
h0.textContent = ('Designers')
h0.classList.add('Showcase')

const redline2 = document.createElement('div')
redline2.classList.add('redline')

const text3 = document.createElement('p')
text3.textContent = ("The best team in the world.")

const text4 = document.createElement('p')
text4.textContent = ("We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")

Designers.append(h0, redline2, text3, text4)
document.querySelector('.services').after(Designers)
