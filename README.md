
/********** Summary ***********/

For this project, I created a very crude "restaurant" site that
has 3 tabs: a homepage, picture of the restaurant, and summary.
I did not use much css or html for this project. It was mainly
focused on learning how to use modules and webpack to provide
additional structure to my code. 

I was able to make coordinate 4 different javascript files split 
up functionality of the site and coordinate with one another.

/******** Relevant Files *********/

src/index.js: Creates the 3 tabs (displayed as a list) that
allow the user to navigate to different sections of the site.
Every time a user clicks on one of the tabs, the current contents
of the page are cleared and replaced with the contents pertaining
to that specific tab.

src/homepage.js: Contains the heading that is displayed when
the user clicks on the homepage tab.

src/picture.js: Displays a sample picture of a restaurant
when the user clicks on the picture tab.

src/summary.js: Displays a summary of the restaurant when
the user clicks on the summary tab.