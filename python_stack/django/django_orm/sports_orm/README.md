### Assignment: Sports ORM I

**Objectives:**

- Practice using more advanced queries
#

Using the sports_orm, complete all the following queries and show their results on index.html.

The purpose of this assignment is to practice using the Django ORM to make queries on a pre-existing database. You MUST install the sports_orm before you can complete this assignment. In your Django folder, run this terminal command:```git clone https://github.com/TheCodingDojo/sports_orm.git ``` This will create a folder named ```sports_orm;``` if you ```cd``` into this new folder, ```python mangage.py``` migrate and ```python manage.py runserver```, you should see lists of sports leagues, teams, and players. Your goal for this assignment is to modify ```leagues/views.py``` and/or ```leagues/templates/leagues/index.html``` so that instead the page shows:

1. all baseball leagues
1. all womens' leagues
1. all leagues where sport is any type of hockey
1. all leagues where sport is something OTHER THAN football
1. all leagues that call themselves "conferences"
1. all leagues in the Atlantic region
1. all teams based in Dallas
1. all teams named the Raptors
1. all teams whose location includes "City"
1. all teams whose names begin with "T"
1. all teams, ordered alphabetically by location
1. all teams, ordered by team name in reverse alphabetical order
1. every player with last name "Cooper"
1. every player with first name "Joshua"
1. every player with last name "Cooper" EXCEPT those with "Joshua" as the first name
1. all players with first name "Alexander" OR first name "Wyatt"

<br>
Hint: Try editing the context dictionary for these queries!

```m
context = {
	# commenting out the "leagues" key so they don't conflict
	# "leagues": League.objects.all(),
	"teams": Team.objects.all(),
	"players": Player.objects.all(),
	# query 1: All baseball leagues
	"leagues": League.objects.something(something=something),
}
```
