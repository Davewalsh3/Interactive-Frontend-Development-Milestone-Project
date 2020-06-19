Your Project's Name
Travelsome - Holidays
https://davewalsh3.github.io/Interactive-Frontend-Development-Milestone-Project/

For my milestone 2 project I had devised a website that enabled the user to choose a country from the
 list provided by the website owner, or a location from the search bar. 
When they had selected the country, all amenities from google maps relative to that location would appear. 
This would allow users to be informed of facilities and directions they can 
attend while on holiday at this place.
By giving numerous examples of 'sponsored' countries below the map, the user will find a variety of places to discover using the map above.
The idea was to have a viewport for the location the user has in mind (map), a suggestion section (various countries listed below, with image and hyperlink contained within), 
and a redirect button below to an external third party package holiday supplier.

UX
This website was designed for holiday goer's who were open to suggestion to where they would like to go.
The buttons in the country image below the map allowed the map to redirect to that location, and bring up local amenities of interest.
The website encouraged users to use googles streetview feature, the maps feature allowed users to utiilize it, in order to look at their
 potential destination in detail before they go.
The Map also featured an autocomplete search box which allowed users to access locations outside of the suggested countries pictured below the map,
 and would recenter on their selection from the drop down menu.

As a user I want to access a Holiday website that can show me the location I am interested in on a map. 
This website will highlight all relevant amenities that are relative to me and my holiday choice.
The website will be easy to use, easy to navigate and will be a benefit to the users knowledge of potential holiday locations.

Features
My webpage will consist of a top navbar, a search bar contained in here (non-functional)
As a landing page, the Map and Jumbotron related to the website brand will appear first.
Below the map, there will be numerous buttons sat atop picture/hyperlink buttons.
The buttons will redirect the map to a city in the named country.
The image/hyperlink below will redirect the user to third party package holiday company.

Media

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.
For this project I utilized HTML, CSS, Javscript, JQUERY and alot from https://developers.google.com/maps/documentation. 
Bootstrap for my layout and Navbar elements
The photos used in this site were obtained from https://unsplash.com/ , https://www.freeimages.com/
https://stackoverflow.com/questions/49714599/google-map-with-multiple-locations-in-html-using-javascript-on-button-click-how  - Stack overflow
https://www.youtube.com/watch?v=RVA4HoEE_q8 - TheNetNinja Youtube tutorials
https://developers.google.com/maps/documentation/javascript/places-autocomplete - Google
https://developers.google.com/maps/documentation/javascript/places -Google
https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLSL82sIxAdHxxOOIdL4u6waamJgOtTA3C&index=4&t=0s - TraversyMedia tutorial




//////////////////////////////////////////////////////////////////////////////////////////////////////




Problems Encountered
I was unable initally to allow my Maps Autocomplete function, and my JS code to relocate the map when the user clicked the image.

Testing
I utilized w3 html,css & JS validator online in order to test my code. I found various discrepencies in my work such as incorrent syntax and formatting . 
My elements were collapsing on top of each other when minimized to smaller screen sized, I therefore fix my broke media queries and this resolved the issue.
By clicking on the links in the navbar you will be redirected to content of the page titled in the nav. this makes aceess to desired content instant and intuitive. A smooth scroll CSS function was applied to generate a more pleasent user experience.

This site was tested for responsiveness on all the most popular browsers (Chrome, Internet Explorer, FireFox, though I was unable to load on Safari due to "not being able to establish secure connection" on my PC , Unsolved network issues that remain) and on mobile devices such as samsung s5, iphone 6/7/8/x ipad pro and onto larger screens. During the testing phase, I had my features change position depending on screen size, I added some media queries to counter this. I also at this time fixed my background image in a static positon.

Deployment
This project was created in an AWS CLoud 9 environment following its transition from original Cloud 9 . This site has been deployed using GitHub pages. The deployed site will update automatically upon new commits to the master branch. In order to run this code please paste the index.html style.css and assets/ folder to your IDE. To run this file locally, you can clone this repository directly into the editor of your choice by pasting git clone https://davewalsh3.github.io/MSPone/ into your terminal. Note that there are no differences between the deployed version and the development version currently.
Credits
Content Open source content provider Wikipedia is where I sourced some of my block text information relating to the monkees. Last Rose Studios for the audio player and playlist code. w3 online code validator.
Media












////////////////////////////////////////////////////////////////////////////////////////////









My website is functional accross varying screen sizes and viewports. It has media queries implemented for mobile users.
 and is particularly created for the most recent phones i.e Iphone 6/7/8 iPad and desktops.
Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.





# Code Institute

Welcome DavW,

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
