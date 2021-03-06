### Assignment: Semi-Restful TV Shows

**Objectives:**

- Practice ORM queries from the controller
- Practice RESTful routing
- Practice rendering query results to templates
- Practice using form input to create table data
#

Now that we've got a basic understanding of the flow between models, views, and templates, let's make sure we know how to implement all 4 CRUD commands!
<br>

Remember that restful routing is simply a guideline of generally accepted routing naming conventions so other consumers of our routes can easily navigate our application and anticipate what the response will be for any given route. Since many web applications perform CRUD operations, you can imagine how confusing this could get if everyone followed different conventions for creating routing and method names for these operations.
<br>

Restful routing also gives us a chance to practice being methodical in our approach to building an application. For each step of CRUD, we start with the HTML, then build the routes to show that page. We can then build out the routes that will process any form submissions.
<br>

Ultimately, it's up to you (or maybe your boss) whether you also follow these rules/conventions, but we strongly encourage you to get familiar with the following rules for RESTful routing, as you may be making requests to, or someday creating your own, API.
<br>

Create a new Django project following the specifications provided in this wireframe:

![](crud_tvshows_django.png)


- [x] Complete each of the following routes:

- [x] /shows/new- GET - method should return a template containing the form for adding a new TV show

- [x] /shows/create - POST - method should add the show to the database, then redirect to /shows/<id>

- [x] /shows/<id> - GET - method should return a template that displays the specific show's information

- [x] /shows - GET - method should return a template that displays all the shows in a table

- [x] /shows/<id>/edit - GET - method should return a template that displays a form for editing the TV show with the id specified in the url

- [x] /shows/<id>/update - POST - method should update the specific show in the database, then redirect to /shows/<id>

- [x] /shows/<id>/destroy - POST - method should delete the show with the specified id from the database, then redirect to /shows

- [x] Have your root route redirect to /shows