# THE LOOK

## Iteration 01 - Review & Retrospect

 * When: Tuesday October 10 11:00am - 1:00pm
 * Where: Bahen Centre

## Process - Reflection


#### Decisions that turned out well

* We communicated through WeChat, ideas brought up in the past can be picked up through WeChat History when it is needed. 

* We use WeChat due to it is convenience. Every member has a WeChat account and uses it as the main communication app(instead of Facebook Messenger), we can literately start a meeting anywhere on anytime when someone brings up a new idea. A lot early, brain-storm stage work are done via WeChat, It is a good complement to face-to-face meeting and on-line meeting.

* We have a _Track Board_ to help team members to keep track their goals and responsibilities. We have it in order to make sure every member is on the right track.

* We have face-to-face meetings every week. Face-to-face meeting is more productive than any other type of online meeting, that is why we keep it weekly. Since the face-to-face meeting schedule is fixed on every Tuesday morning before the tutorial, every member can guarantee to participate it. 

#### Decisions that did not turn out as well as we hoped

* Use online video meetings replace of face-to-face meetings. It is a bad decision due to its inefficiency. It took us one hour to set up the on-line meeting and some members were late. Moreover, there were some technical problems(noise from microphones) .

* Planned to have a little meeting every day, but after some discussions, we found it is unnecessary. We all have other classes, assignments and tests, daily meeting may turned out to be everyone just post a "no progress today" in WeChat group, which can be discouraging. Additional meetings will be held if we encounter important matters that we have to figure out together.

#### Planned changes

* We plan to reduce online video meetings and organize more face-to-face meetings due to face-to-face meetings are way more efficient. (hold physical meetings twice per week at current stage, more meeting after coding starts)

## Product - Review

#### Goals and/or tasks that were met/completed:

* Singled out one idea for our project. 
  * We brought out 9 ideas at the beginning. Some of them are lack of creativity(there is one that is literately Yelp), some are not convenient to use, and some are pure CRUD. After the first meeting, we screened out two ideas for discussion(the other one is Kahoot-like quiz app) with TA during tutorial. And after the first tutorial, we determined to build a men's style advisor app, due to the TA suggests that there are thousands apps that do the same thing as the Kahoot-like app, this field has reached saturation. 
  
* The goal of the product and target users
    *We have make clear that the goal of our product is to help young men improve their appearance. There are a large number of young men who hates wasting time shopping and not get a clue of fashion. However they also have the necessity to look decent. They are our target users.
   * This goal of the product and the target users had never been changed since the idea was brought out.
    
* Decision on some basic features of the product 
   * The features of the product were quite arguable. We first wanted to use Observer pattern, like a TV that shoots clothes to users. This required many fashion editors and they are out of our resources for now. Besides, our app does not have much value if the clothes are recommended only by human beings. After several rounds of discussion and under the help of TA, we decided to change the app into a intelligent recommendation system. First of all, it gains minimum necessary personal information of users, like gender, age and body shape. It gives user pictures that describes body shape to choose from, instead of filling a long form through sign up. Then it can learn user's preference, for example color, during the users' browsing and purchasing. Based on the users' basic information and preference, our app will intelligently recommend clothes. We can also add more value to the app as addition function such as comparing price for the similar style products, and providing app database interface to the clothing producers or brand owners. And also, ads. Kickstarters and brands can promote their product on our app.  

* Decided on framework/language to use for building the application
  * React Native for front end
    - React Native saves some time compared to traditional programming on two different operating systems(Android / IOS).
  * MongoDB, Node.js for back end
    - We will use _MongoDB_ for database and _Node.js_ for web server. _Node.js_ is easier for beginner, compared to _PHP_ or _JAVA Servlet_(Spring MVC), _ASP.NET_, etc, and some of us are taking CSC309, which also taught _Node.js_. _MongoDB_ is a document-oriented database, it is suitable for our product. _Node.js_ and _MongoDB_ are also a perfect combination nowadays.

#### Goals and/or tasks that were planned but not met/completed:

* Gather data, and research existing APIs to use in our product
  * we wanted to implement our key features and user workflow first using fake data first before incorporating with real-world fashion brands and outfits
  * The recommendation algorithm of fulfill the features is still under consideration
  
* UI model
  * Due to the change of the product features, the first UI model was abandoned. We do not have enough time to make a new UI model for the new product features.

## Meeting Highlights

Going into the next iteration, our main insights are:
* Get new UI deign in React Native
* Backend start to learn about the intelligent recommend system, and report their progress on iteration 3. 
