# THE LOOK

## Iteration 02

 * Start date: October 24, 2017
 * End date: November 12, 2017

## Process

UI team starts to write UI. Backend just initialized, so we did not actually have any valid functionality. We decided to build a frame of UI that is enough for making the video, displaying functionality, then after backend follows up, we will replace those decoys with real functionalities.

Backend team starts to build backend, design of database and tag system should be completed.

#### Roles & responsibilities

#####  

##### Front-end (Heng Ye, Xi Yan and Zezhong Pan):
 > Front-end team will be responsible for UI design, implementation and video making.
 
 * Zezhong Pan and Xi Yan are full stack developers with experience on front-end implementation, Heng Ye took UI design course and has experience on GUI implementation, also his role of product manager has responsibility on user experience. So we decide they will be the UI team.

 * Zezhong is a video maker on Bilibili.com, he has a fully equipped home studio and tons of experience on making videos, he is the video guy. Heng Ye is the product manager, the video is about the app itself, so Heng knows better than the rest of the group on what we should present to the public about this app, he is the idea guy. Xi Yan in the UI team writes the main logic, so she will be needed when comes to the part of showing how to use the app.

##### Back-end (Dishu Lyu, Yuanhao Tu, Yiran Wang and Bin Yu): 
 > Back-end team will not participate in video making, they will concentrate on backend design and implementation.
 
 * Dishu Lyu is a full stack developer, he has experience on both backend and frontend, so he will be the leader of the backend team, his front end experience also helps when communicating with front-end team.

 * Yu Bin has experience in machine learning, on the previous meetings we had already seen his expertise and passion on machine learning and algorithm.

#### Events

Describe meetings (and other events) you are planning to have:

  * October 31, 2017 - In-person Meeting
On October 31, we were all busy for different midterms, so we made this meeting as not compulsory, and this meeting is only a reminder that we have to get started on D2. 

  * November 7, 2017 - Online Meeting
On November 7, due to it is in reading week and not many members are around the school, so we made it an online meeting, and it’s a quite productive one.  We made most decisions about d2, we assigned roles and responsibilities, discussed detailed implementation on how to suggest clothes to users, include some machine learning solution that can be applied. We also browsed apps and websites that related to our backend implementation to get some inspiration.
  * November 13, 2017 - Studio Recording
intro recorded.
  * November 16, 2017 - Studio Recording and coding session
had a coding session, UI was completed.
body and conclusion recorded.



#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       

 * [Trackboard:](https://docs.google.com/document/d/1FIVt9HOjWtJEGN-1Ru8d8Crb7CeDV5ArKOWB1BIJYXE/edit)
     But not much in there because we are all more comfortable with WeChat Group Chat. The WeChat Group chat history is better at maintaining our tasks and schedules. 
 
 * How do we keep track of what needs to get done?
 
    We decided what needed to get done at the 7 Nov meeting, all details are in roles and responsibilities. 
 
 * How do you prioritize tasks?
 
    We had four remaining things that need to get done for the entire project: documents, UI, Backend and the Video.
    
    We decided to put the video on the top of the list, due to video is the main thing that is going to be marked on D2, so we should put more concentration to it.
    
    Backend implementation can be tough, and D3 is when all big dues(think about csc369 A4, write a file system from nothing) lines up, so we also decide to not put the entire team on UI and video. Backend guys will keep working on the backend and will not be interfered by D2, their sole goal is to put backend online and working on D3. 
    
    Front-end implementation will concentrate on make a “decoy version” instead of a real working front end due to backend is not finished, but we guarantee to fix that by D3.
    

 * How do tasks get assigned to team members?
 
    see [Roles & responsibilities](#roles--responsibilities)


#### Git / GitHub workflow

 * Everyone creates a new branch to work on their task, when they finished, open a "pull-request" from their branch to master branch to
  request changes, if there are conflicts, that person needs to contact the person involved in the conflict files to
  resolve the conflict, if Github can auto-merge, no reviewer required.
  
 * If anyone finds or encounters a bug, they should record the bug in "Issues" and create a new branch called bug-xx to resolve it.
   
 * We follow camelcase syntax for naming class, method, variable and file/folder, we also follow Airbnb's javascript coding style.
 
  This workflow can prevent struggling on conflicts, and improve the code readability.

  ##### Why we choose this workflow?
  * Each team member has different task, commit to their separate branch will not affect others. Most of the features are Modular, they hardly rely on codes that were written by another teammate.
  
  * **prevent struggling on conflicts:** when we have some "pull-request" conflicts, we can resolve them one by one, and not affect the master branch
  before we merge. If we commit directly to master branch, multiple conflicts from more than one teammate may occur 
  when we pull the changes. Fix the conflict will be complicated.
  
  * **improve the code readability:** By following Airbnb's coding style, our code will be easier to read and understand. We all know it is painful to 
  read code with random styles or no styles at all. It makes our team members' life easier. 

## Product

#### Goals and tasks

We will concentrate on the video making, the video will be shown to investors and the public. It will need a UI that
 seems works and an excellent script that really displaying what this app does and how to use it well.

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

Above will be summaries on discussions on WeChat.


5. **Profile page drawing**

   https://drive.google.com/drive/folders/1sNR6EEWCgK7yL_T5MRVSsR3S8rV4pqA_?usp=sharing


6. **Pictures used to build The Look Interface**

   https://drive.google.com/drive/folders/1vDTRWO-ECq8pXXAS1qsv5a1Sp08ZcbId?usp=sharing

7. **Logo Design**

   https://docs.google.com/document/d/1PjyWAspYaQEpl-Vc3KFTMK9vfYTe6KlI_zlzkFznyJs/edit?usp=sharing
