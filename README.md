# Forum mockup demonstration

***

## Purpose

Project challenge - The intention was to create a forum-like application that would
render posts from a database. It consists of three pages: Posts (or Home), Details,
and Profile. On the Posts page there is a list of post titles along with the user who
created it and a star that, when clicked, indicates that the post is liked and
remembers its state while navigating (though not upon hard refresh). In the Details page,
it displays the title again, the username who created it, the entire post body, and
comments, including the comment title and body. Clicking the star here will have the
same effect as when clicking it on the Posts page. Clicking a username at any point will
navigate to the Profile page, displaying the user's name, username, and all posts by
that user. The user's name and username can also be changed by clicking the corresponding
button--triggering a 'PUT' request to update the database, even though that request has
no real effect.

## Stack

* Backend: [Node.js](http://nodejs.org/)
* Frontend: [AngularJS](http://www.angularjs.org/) on the client
* CSS based on [Twitter's bootstrap](http://getbootstrap.com/)

## Client App

* Install local dependencies (from the project root folder) to run the app:

    ```
    npm install
    bower install
    npm start
    ```

## Development

### Folders structure
The root contains the server.js file. The repository is split into a client folder and a routes folder.  The server.js contains a very basic Express based webserver that delivers and supports the application. The client folder contains all the client-side AngularJS application.  The routes folder contains a routes file that supports the server.
Within the client folder you have the following abridged structure:
```
client/
  App/
    css/ contains any css files
    directives/ contains directives used throughout
    modules/ contains bundles of html and their corresponding controllers
    services/ contains services used throughout
    App.js the entry point to the AngularJS app
  bower_components/
  index.html
```
