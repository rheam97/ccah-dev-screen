# ccah-dev-screen

## Question 1
You are attempting to make several visual/layout changes to a web page. If you only have one chance to place your code, how do you ensure/test that it’s correct?
Short explanation - No code necessary

### Answer:
You can test the changes using readily available tools such as Chrome Dev Tools to view the changes locally in the browser to see how they render on different screen sizes. You can also use unit testing with Jest in a test folder to check how your changes render on the DOM. Additionally, use can use html and css validators on platforms such as W3C. If the changes are for HTML Email, you can use tools like Email on Acid to see how your changes may render on different clients and devices: the site also has a email editor tool where you can paste your code and view the changes in real-time. There are addtional tools such as BrowserStack which allows you to test how your changes render in different browsers. 

In general, however, it's best to test any new features and changes on a separate branch dedicated to the change prior to merging into main. 


## Question 2
Imagine you have a web page with a form for users to fill out and submit. Can you think
of a way that the page can save the user's progress if they leave (close web page or
navigate away) and come back later using front end code only?
Short explanation - No code necessary

### Answer:
There are three main ways to save user data in the browser: localStorage, sessionStorage, and cookies. Local storage will save user data in the form of key-value pairs and will persist even when the window is closed and if the user decides to open the form on another window. Session storage also stotres key-value pairs will save user data on a tab and expire once the tab closes. Both of these are easily set and retrieved from as window objects. Cookies precede both of these forms of storage in terms of history and can be used to send personalized user data from the client to the server. This is why cookies are often used for authentication. You can read and write cookies using the document.cookie property. All of these options are vulnerable to XSS (cross-site scripting) attacks, but web storage is considered more secure than cookies because data is kept on the client and not sent to the server. Both localStorage and sessionStorage offer more storage space as well. However, you are able to manually set the expiration date on cookies unlike with the latter two which either expire autonomously or persist without expiration. In order to consider the best option to use, you must take into account storage capacity, accessibilty, and expiration. 

## Question 3

### Answer:

## Question 4

### Answer:

## EC

- 
- 
- 