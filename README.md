<h1>Milestone Project 2 </h1>


<h2>TravelSome holiday destination finder.</h2>
For my milestone 2 project I devised a website that enabled the user to choose a country from the
list provided by the website owner, or a location from the search bar. 
When they had selected the country, all amenities from google maps relative to that location would appear. 
This would allow users to be informed of facilities and directions they can attend while on holiday at this place.
By giving numerous examples of 'sponsored' countries below the map, the user will find a variety of places to discover using the map above.
The idea was to have a viewport for the location the user has in mind (map), a suggestion section (various countries listed below, with image and hyperlink contained within), 
and a redirect button below to an external third party package holiday supplier.



<h3>Goals.</h3>
Create a simple website that is easy and enjoyable to use.
Allow and encourage the user to utilize streetview on google maps which is filled with useful destination information.
Applying the usage of Javascript and different libraries and reseources such as:
Bootstrap4
jQuery
Stavckoverflow
CDNjs

<h3>UserX</h3>
As a user I want to access a simple Holiday website that can show me the location I am interested in on a map. 
This website will highlight all relevant amenities that are relative to me and my holiday choice.
The website will be free, easy to use, easy to navigate and will be a benefit to the users knowledge of potential holiday locations.

This website was designed for holiday goer's who were open to suggestion to where they would like to go.
The buttons in the country image below the map allowed the map to redirect to that location, and bring up local amenities of interest.
The website encouraged users to use googles streetview feature, the maps feature allowed users to utiilize it, in order to look at their
potential destination in detail before they go.
The Map also featured an autocomplete search box which allowed users to access locations outside of the suggested countries pictured below the map,
and would recenter on their selection from the drop down menu.


<h3>Design</h3>
For the design I I utilized a simplistic layout, with minimal buttons. having the Map take up a sizeable part of both mobile and desktop viewports.
There is minimal input for typing, as I want this website to be usable without being complex.
When the user scrolls down the page on mobile, instead of scrolling up, they can click the 'home' button which reveals from the top as you scroll back up the page.
The colours used are bright, enough that it is easy on the eye, but not bland enough to be forgetfull.

Wireframes I used for this project can be found at ms2wireframe.pdf beside my index.html file.

<h3>Features</h3>
I utilized the bootstrap grid feature to make the website responsive and structured on all devices and also implemented a reappearing Navbar on upscroll to navigate smoothly through the page.
My webpage will consist of a top navbar, a search bar contained in here (non-functional)
As a landing page, the Map and Jumbotron related to the website brand will appear first.
Below the map, there will be numerous buttons sat atop picture/hyperlink buttons.
The buttons will redirect the map to a city in the named country.
The image/hyperlink below will redirect the user to third party package holiday company.
By clicking on the 'Brand' on the navbar you will be redirected to the top of the page. This makes aceess to desired content instant and intuitive.
A smooth scroll CSS function was applied for ease of use.

<h4>Technologies</h4>
HTML 5
CSS
Bootsrap 4
Fontawesome
jQuery

<h3>Testing</h3>
For the testing of html I utilized The W3C Markup Validation at https://Servicevalidator.w3.org
For the testing of CSS I utilized The W3C Markup Validation at https://jigsaw.w3.org/css-validator/validator
and found they produced no problems other than The type attribute is unnecessary for JavaScript resources. I took this as a non critical error.
 
I found in testing my elements were collapsing on top of each other when minimized to smaller screen sized, I therefore fixed my broken media queries and this resolved the issue.
I was unable initally to allow my Maps Autocomplete function, and my JS code to relocate the map when the user clicked the image.

The return to the top Button which appears on upscroll on mobile.
Access to github repository
The website was tested across multiple browsers:
Chrome
Internet Explorer
Safari
Mozzila Firefox

The website was tested on phones such as:
- SamsungGalaxy S9
- Samsung Galaxy A50
- iPhone 6/7/8
- iPad 

<h3>Deployment </h3>
This project was devveloped using GitPod.

To deploy the project I used github pages in order to do so:

Please click here to get to the website.
https://davewalsh3.github.io/Interactive-Frontend-Development-Milestone-Project/

If you wish to contribute tothis porject, please do the following:

Login into Github
Click on my repository
Go to the button "Download" and click it
Click on either "Open in Desktop" or "Download ZIP"


Resources used: 
The photos used in this site were obtained from https://unsplash.com/ , https://www.freeimages.com/
https://stackoverflow.com/questions/49714599/google-map-with-multiple-locations-in-html-using-javascript-on-button-click-how  - Stack overflow
https://www.youtube.com/watch?v=RVA4HoEE_q8 - TheNetNinja Youtube tutorials
https://developers.google.com/maps/documentation/javascript/places-autocomplete - Google
https://developers.google.com/maps/documentation/javascript/places -Google
https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLSL82sIxAdHxxOOIdL4u6waamJgOtTA3C&index=4&t=0s - TraversyMedia tutorial




# Code Institute

We have preinstalled all of the tools you need to get started.

To run a frontend application in GitPod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: *Expose*,

Another blue button should appear to click: *Open Browser*.

To run a backend python file, type `python3 app.py`, if your python file is named `app.py` of course.

A blue button should appear to click: *Expose*,

Another blue button should appear to click: *Open Browser*.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the backend lessons. 

Happy coding!
