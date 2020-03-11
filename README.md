# food-finders.github.io

---
permalink: /index.html
---

# Final Report
## Henry Raeder, Ellen Wade, & Sharon Wong

### Problem & Related Work
#### Inviting friends out to a meal to hang out when everyone doesn’t live within the same immediate area can pose many challenges, the main one being convenience. Trying to decide on a place to eat that is easily accessible to everyone usually requires some arbitrary searching for “food near me” and sharing these suggestions with friends. However, evaluating the quality or worthwhileness of these restaurants usually requires further information sleuthing on food review websites. As presented in this scenario, having to toggle back-and-forth between an application that handles travel logistics and an application that handles food reviews while having to communicate all of this information with friends can prove to be cumbersome and time-wasting. In order to ease this stress and difficulty, combining both the restaurant reviews and travel logistics into one interface will prove to be more efficient when solidifying mealtime plans with friends who don’t all live in the same place.

#### Many apps focus on either the logistical aspect of getting to the restaurant, or the food aspect of whether or not the restaurant is good, but not both. For example, Yelp primarily focuses on food recommendations and ratings, but does not handle meeting arrangements. Similarly, Google Maps offers vague restaurant ratings and directions for how to get there, but does not have a platform for inviting friends to join.

#### Another app, foodfriends, based in Spain, has options for users to make dining arrangements with other strangers who also use the app or make dining arrangements with friends they already know. However, foodfriends does not handle logistics of the meeting (how to get there, how far away it is, etc). Our website could build on the social foundation of foodfriends, while adding in a more practical, mathematical side that could inform friends of how difficult their commute to the meal would be.

#### Naturally, certain parts of the issue at hand are more conducive to a website than others. For example, while our website may be great at calculating ratings and travel times, promoting communication and connection between friends may be more difficult. The users themselves will need to decide to get together, and then our website can come in to help facilitate that process. Overall, our website will fix the technological gap that people must currently use multiple apps to fill, and will streamline the process of getting together to grab a bite to eat conveniently.

#### Our website would combine the logistical part of Google Maps with the social side of foodfriends. Ideally, users should be able to input their addresses and get suggestions for restaurants near both of them. They would also be able to filter options by distance, price, and cuisine. As for connecting people, there could be a “friends” and “events” system similar to Facebook, where people can create a dinner event and invite friends to it. Once in the event, people could vote on dinner places that would be convenient for them based on the information we provide. However, these design choices would have to be worked out in user research throughout the development process.

### User Research
#### We hoped to learn: 

* Features users like/dislike in similar apps
* What users see as the largest obstacles towards getting meals with friends
* How users usually communicate with friends
* Do users wish there was a more streamlined process?

### Our Research Approach
#### We took an interview approach, since we thought it would be more efficient than a contextual inquiry, as it was hard to fabricate the situation of making plans with friends in the moment. Some of the questions we asked were:

* How do you and your friends decide where to eat together? 
* Do you find making plans with friends easier in person or over the phone(text)?
* Do you ever talk about going out to eat but not go? What stops you?
* What is your normal form of transportation to meet friends?
* What do you often hear people complain about when they try to meet friends?

### Users' Needs and Goals
#### The user needs include: sharing available times with friends, directions to the meeting place. One thing that was surprising was the suggestion to use Google Calendar sharing to communicate potential meeting times. Additionally, there was a much larger focus on the type of restaurant over the ratings, which lends credence to the idea that groups may be in the “mood” for a type of food, so the place with the highest ratings takes second importance. The biggest obstacles the users would face would probably be actually finding time to meet, so the inclusion of some kind of scheduling program may be more essential than we initially realized. This can be seen as an opportunity for innovation, as previous interfaces we have studied don’t appear to have a scheduling aspect to them, even though time is one of the main factors that affect whether or not people go out to eat in the first place.

#### It is necessary to keep in mind that the circumstances of every user varies, and as such, the needs of each user varies as well. For example, some users might place scheduling as more of a priority over type of restaurant, whereas others might factor in wanting to try new places to eat more when planning an outing. While factoring all of these features, it is important to keep the application as streamlined as possible, as adding too many features may potentially complicate the application’s interface and make it harder for the user to use.

### Various Users (Personas)

### Paper Prototyping (P4) 
![P4 Prototype](https://github.com/food-finders/food-finders.github.io/blob/master/paper-prototype.PNG)

### High Fidelity Prototyping (P5, P6, & P7)
#### P5 Prototype
![P5 Prototype](https://github.com/food-finders/food-finders.github.io/blob/master/p5.PNG)
#### P6 Prototype 
![P6 Prototype](https://github.com/food-finders/food-finders.github.io/blob/master/p6.PNG)

# Describe the tasks and how app features support task
### Tasks
#### Task 1: 
#### Task 2:
#### Task 3:

### Components
#### Component 1: External Data Integration
##### We used Yelp API and APITutor to integrate Yelp's business finding tool into our project to find restaurants. This allows us to inform our users of their restaurant options!

#### Component 2: Interactive Data Filter
##### We added interactive data filters (ie. price, ratings, open now) to show restaurants with certain characteristics. Clicking the checkboxes changes the filter and determines which restaurants are shown. This helps users find the perfect restaurant!

#### Component 3: Interactive Data Selection
##### We created restaurant cards to show restaurant information. Clicking the "More Info" button selects the restaurant card and shows additional information relevant to only that restaurant. This helps users learn more about a restaurant!

### Reflection
# What we managed to accomplish
## In general, we managed to fulfill a large portion of our initial goals when it came to our prototype process. We managed to integrate a three-part search that allowed for location-based calculations, filters for most of the important factors when choosing a restaurant, and a way for users to interact with the data and gain enough information to make a plan. Additionally, we managed to implement all of these functions in a user-friendly, task-oriented fashion. One of the most common comments we got in our prototype trials was that our website was very simple to use, and we tried to push that aspect while still having very responsive results.
# What next steps would be if we had more time
## If we had more time, we would like to implement some of the other features we were looking at. For example, it would be fantastic if we could implement some kind of calendar or planning section, which would allow users to look at restaurant availability over different times. Additionally, we would like to add a share function, which would let people share these plans with their friends. The ultimate goal would be a fully collaborative process, where multiple people could log on, and then use our website to plan together using the calendar and search function. Additionally, we could further streamline the design of our website as we add more features, including multiple different pages, or automatically redirecting to the restaurant websites to look at menus. Finally, while our location search algorithm works, it is very basic. If we could integrate Google Maps data, we could look at real-time commutes from different locations, which would be a great leap towards our intended function.

### Links
#### Repository:
[https://github.com/food-finders/food-finders.github.io]
#### Live Website:
[https://food-finders.github.io/]
#### These are best viewed in Chrome on Windows
