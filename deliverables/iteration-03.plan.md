# THE LOOK / TEAM 14

## Iteration 3

 * Start date: Tuesday, November 21, 2017
 * End date: Thursday, Novermber 30, 2017

## Process

We begin to fix some bugs for the UI from D2, and implement valid functionalities for the backend and intergrate these functionalities with the front-end for the final working product. 

#### Changes from previous iteration

List the most significant changes you made to your process (if any).

###### Change 1: Introduced Group Coding Sessions & Code Review Sessions
One of the biggest challenges that we faced when completing Deliverable 2 was the lack of communication when we were developing our application. For Delierable 2, we decided to assign tasks to each member and write code independently. The reason behind that decision is that it was reading week and we were hoping that working independently gives each group memeber the flexibility to manage their time, so that we can be more productive and save time for arranging meetings and traveling to meet. However, this decision did not turn out as well as we hoped because it led to lack of communication which caused the problem of implementing extra functionalities that cannot be used in our product. Thus, learning from our previous deliverable, we decided to introduce group coding sessions and code review sessions (see [Events]). We hope that with group coding sessions, we can integrate our front-end and back-end in an efficient manner. In addition, we hope these coding sessions will give every group member an opportunity to contribute their code. A success metric for this change will be that there are less bugs discovered, more bugs/issues resolved, and more contribution from every group member. 

###### Change 2: Change in Roles & Responsibilities (more full stack developers)
In D2, we made a clear separtion between the front-end team and the back-end team, where the front-end team is responsible for UI design, implementation, and video making, where as the back-end team is responsible for backend design and implementation. Since we have finished most of the work on the front-end during D2, the most important task for this deliverable is integration between front-end and back-end. Thus, we decided to have some group members take on the role of full stack developer to help implement and facilitate this front-end and back-end integration. We hope that this change will allow us to make more progress towards a final working product. 

###### Change 3: Change in communication methods (more face-to-face meetings)
We decided to have more face-to-face meetings rather than online meetings or WeChat communications. We are making this change because we found that face-to-face communication is the most effective and efficient since it was difficult to get an immediate response using group chat and it was time-consuming to plan an online meeting that fits everyone's schedule. These face-to-face meetings are very casual and flexible, and serves the purpose of allowing group memebers to know the latest progress in terms of our project. We hoep that by introducing more face-to-face meetings, each member can have a clear understanding of their tasks and the state of our product as a whole. 

#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.

##### Full Stack
> The full stack developers will be responsible for integrating back-end with the front-end, fixing bugs from UI left from previous deliverable, implementing backend functionality, communicating with both front-end and back-end teams. 

- Dishu Lyu (Lester Lyu): He is lead programmer. He is responsible for facilitating coding sessions, and assigning tasks to other group members, as well as acting as a technical mentor. 

- Yiran Wang (TechiesTheOne): He is responsible for fixing bugs on UI part, refactoring front-end code to provide a smoother navigation, and implementing backend logic. 

- Xi Yan (yanxi0830): She is responsible for overseeing the architecture for the product, and refactoring front-end code to allow user interaction, and implementing backend funcionality.  

##### Front-end
> The front end developers will be responsible for designing user workflow, implementing UI, and video making. 

- Heng Ye (leonyhenn): He is the product manager, and is responsible for maitaining the product structure and flow. He will be responsible for our product's idea, goals, and user experience. 

- Zezhong Pan (ShuiFanZZ): He is responsible for refactoring code on the front-end to integrate with backend. He has a fully equipped home studio and tons of experience on making videos. He is also responsible for video editing. 

##### Back-end
> The back end developers will be responsible on algorithm design and implementation. 
- Yuanhao Tu (w34336): He is responsible for implementing the cart page and likes page logic and functionalities. 
- Bin Yu (andrewbinyu): He is responsible for implementing machine learning algorithm for styles classification and recommendation. 

#### Events

Describe meetings (and other events) you are planning to have:

 * Tuesday, November 21, 2017 - In person meeting on November 21 at Dishu Lyu's house. In this meeting, we planned out our responsibilities and the features we have to implement for our final product. In addition, we discussed about our time schedule and planned out future coding sessions. After this meeting, some group members stayed to work on some bugs on the front end not fixed in D2, and implemented the edit profile functionalities on the backend. 
 
 * Monday, November 27, 2017 - In person meeting / coding session on November 27 at Dishu Lyu's house. In this meeting, we discussed about what we should demo for our D3 video. We also assigned tasks to each team member and had a coding session for around 4-5 hours. 
 
 * Thursday November 30, 2017 - Studio recording for our D3 video

#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       

 * [Trackboard](https://docs.google.com/document/d/1FIVt9HOjWtJEGN-1Ru8d8Crb7CeDV5ArKOWB1BIJYXE/edit): But not much in there because we are all more comfortable with WeChat Group Chat. The WeChat Group chat history is better at maintaining our tasks and schedules. 
 
 * How do we keep track of what needs to get done?
   
We decided what needed to get done during the meeting/coding sessions on November 21, and November 27. Since these are in person interviews, we discussed verbally about the tasks that we need to complete. 
   
* How do we prioritize tasks?
 
 For this deliverable, we have 3 remaining things that needed to be done: the plan and review documents, front-end & back-end integration, and the video. 

 We decided to put front-end & back-end integration on the top of the list since this requires lots of coding, debugging, and communication. This is the most important task to get to a final working product. 

 In terms of the video for D3, we decided to re-use most of the parts from our previous deliverable, since the functionalities and the main concepts of our product remain the same, and the majority of the work done in this deliverable is behind the scenes (i.e. backend implementation) which does not affect our demo. 

* How do tasks get assigned to team members?

 Since front-end & back-end integration is one of the most prioritized tasks for this deliverable. We decided to have coding sessions and assign tasks to team members during these coding sessions. For detailed explaination of the tasks, see Roles & Responsibilities. 

#### Git / GitHub workflow

* Everyone creates a new branch to work on their task, when they finished, open a "pull-request" from their branch to master branch to request changes, if there are conflicts, that person needs to contact the person involved in the conflict files to resolve the conflict. If Github can auto-merger, no reviewer required. 

* If anyone finds or encounters a bug, they should record in "Issues" and create a new branch called bug-xx to resolve it. 

* We follow camelcase syntax for naming class, method, variable and file/folder, we also follow Airbnb's Javascript coding style. 

** Why we choose this workflow? **
This workflow can prevent struggling on conflicts, and improve the code readibility. This is the same GitHub workflow that we used in our D2, we find that this workflow is very efficient so we are staying with it for D3 as well. We choose this workflow because: 

* Each team member has a different task, commit to their separate branch will not affect others. This will save lots of time and allow each team member to focus on their individual task rather than having to worry about others' code and progress. 

* **prevent struggling on conflicts**: when we have some "pull-request" conflicts, we can resolve them one by one, and not affect the master branch before we merge. If we commit directly to master branch, multiple conflicts from more than one teammate may occur when we pull the changes. Fixing the conflict will be complicated. 

* **improve the code readability**: by following Airbnb's coding style, our code will be easier to read and understand. We all know it is painful to read code with random styles or no styles at all. It makes our team memeber's life easier. 

## Product

#### Goals and tasks

 * The main goal for this iteration is to integrate our front end with the back end. To complete this goal, we will hold coding sessions where everyone will contribute to refactor, debug, and review our code. 
 * We need to decide on the main functionality and features that we plan to demo for our final product. This requires lots of communication and meetings. So we plan to hold face-to-face meetings. 

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

 1. **Product Functionality added: Cart and Checkout function**

    We did some critical thinking on the function of the app on should the app solely focus on suggesting user product
     and provide the link for purchase, or should the app have a direct way to purchase, eventually we decide to make
      the app have a cart and checkout function. 

    It doesn’t make sense at first sight, due to only do the style suggesting would be a lot easier, and make more
     sense for a startup, otherwise there will be problems on stock. But we think this is actually crucial to user
      experience.

    If user is interested in a style and he wants to make a purchase, if the app can only provide links to products
    , shirt comes from Nike, pants come from Levis and shoes comes from Adidas, then user has to jump back-and-forth
     between The Look and browser three times, and he has to manually input his billing address and credit card 
     payment method three times, which is pretty bad user experience, and did not make the user buy style easier,
      so we decide to avoid that, and add a checkout function to the app.

 2. **Change of product mandate**

    Our original product mandate is to help men with no style shopping clothes, now, with the app coming true, and me more realizing what this app provides to its user, I think we can do more than just that. 

    I decide to change the mandate of the app to “help all men shopping clothes”. 
    
    In Chinese dictionary, there are two ways to locate a word. One is by alphabetic order, A for Armani, B for Balmin, H for H&M.etc, that’s how we shop in an ordinary mall, or shop cloth online, we go to one store(or its website), then another.
    
    Another way is to look up a word by its structure. If I have to explain it in English, imagine there is a chart in your Marin-Webster that contains all words start with a prefix ”pre”, and another chart contains all words end with suffix ”ness”. When you want a specific style of word, a specific suffix or prefix, you just go to the chart, and you will know all about it. This is the shopping experience that The Look is providing, locate a specific style first, then you can see all the clothes that can be a part of that style. It is a new way of shopping for men, more straight, more determinant, and more direct.
    
    After all, what customers are buying is NOT a specific cloth, but a general look, which is the value-added part that we provide.

3. **Tag system**

   We figured out tag system for the backend. There are four components, database of users, database of styles and a logic system that links them, and a database of clothes. This is how it works: we collect user body shape information on registration and transfer it to tags and save them in user database. In the database of styles we store tags for styles. Tag of it will look like this:(TrechCoat, Jean,Shirt,(TrenchCoat)). The logic that links them will determine if the style fits user’s body shape by style's tag's determining factor(in this case, the trench coat), if it fits, the style will be suggested, otherwise won't.

4. **Invention of the two-layer filter**

   We figured out his system that can guarantee our customer get the right clothes. The first layer of the filter is the user profile page that each user has to click on his registration, this will screens out clothes that are not going to fit user’s body shape. For example, if you are a chubby guy then all crew neck shirt with wide crew neck will be filtered due to they will make your neck look shorter than normal. The second layer of the filter is a user preference system, based on clothes passed the first filter, user can click “like” or “pass” to let system learn their preference. With the two-layer filter, we can guarantee that clothes user buys fits them and they like. 


5. **Profile page drawing**

   https://drive.google.com/drive/folders/1sNR6EEWCgK7yL_T5MRVSsR3S8rV4pqA_?usp=sharing


6. **Pictures used to build The Look Interface**

   https://drive.google.com/drive/folders/1vDTRWO-ECq8pXXAS1qsv5a1Sp08ZcbId?usp=sharing

7. **Logo Design**

   https://docs.google.com/document/d/1PjyWAspYaQEpl-Vc3KFTMK9vfYTe6KlI_zlzkFznyJs/edit?usp=sharing

