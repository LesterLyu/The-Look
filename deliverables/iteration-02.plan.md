# THE LOOK

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration 02

 * Start date: October 24, 2017
 * End date: November 12, 2017

## Process

UI team starts to write UI. Backend just initialized, so we did not actually have any valid functionality. We decide to build a frame of UI that is enough for making video, displaying functionality, then after backend follows up, we will replace those decoys with real functionalities.

Backend team starts to build backend, design of database and tag system should be completed.

#### Roles & responsibilities

#####  

##### Front-end (Heng Ye, Xi Yan and Zezhong Pan):
 > Front-end team will be responsible for UI design, implementation and video making.
 
 * Zezhong Pan and Xi Yan are full stack developers with experience on front end implementation, Heng Ye took UI design course and has experience on GUI implementation, also his role of product manager has responsibility on user experience. So we decide they will be the UI team.

 * Zezhong is a video maker on Bilibili.com, he has a fully equipped home studio and tons of experience on making videos, he is the video guy. Heng Ye is the product manager, the video is about the app itself, so Heng knows better than the rest of the group on what we should present to the public about this app, he is the idea guy. Xi Yan in the UI team writes the main logic, so she will be needed when comes to the part on showing how to use the app.

##### Back-end (Dishu Lyu, Yuanhao Tu, Yiran Wang and Bin Yu): 
 > Back-end team will not participate in video making, they will concentrate on backend design and implementation.
 
 * Dishu Lyu is a full stack developer, he has experience on both backend and frontend, so he will be the leader of backend team, his front end experience also helps when communicate with front end team.

 * Yu Bin has experience on machine learning, on the previous meetings we had already seen his expertise and passion on machine learning and algorithm.

#### Events

Describe meetings (and other events) you are planning to have:

  * October 31, 2017 - In-person Meeting
On October 31, we were all busy for different midterms, so we made this meeting as not compulsory, and this meeting is only a reminder that we have to get started on D2. 

  * November 7, 2017 - Online Meeting
On November 7, due to it is in reading week and not much members are around school, so we made it an online meeting, and it’s a quite productive one.  We made most decisions about d2, we assigned roles and responsibilities, discussed detailed implementation on how to suggest clothes to user, include some machine learning solution that can be applied. We also browsed apps and websites that related to our backend implementation to get some inspiration.
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
 
    We decided what needed to get done in the 7 Nov meeting, all details are in roles and responsibilities. 
 
 * How do you prioritize tasks?
 
    We had four remaining things that needs to get done for the entire project: documents, UI, Backend and the Video.
    
    We decide to put video on the top of the list, due to video is the main thing that is going to be marked on D2, so we should put more concentration to it.
    
    Backend implementation can be tough, and D3 is when all big dues(think about csc369 A4, write a file system from nothing) lines up, so we also decide to not put the entire team on UI and video. Backend guys will keep working on backend and will not be interfered by D2, their sole goal is to put backend online and working on D3. 
    
    Front end implementation will concentrate on make a “decoy version” instead of a real working front end due to back end is not finished, but we guarantee to fix that by D3.
    

 * How do tasks get assigned to team members?
 
    see [Roles & responsibilities](#roles--responsibilities)


#### Git / GitHub workflow

 * Everyone creates a new branch to work on their task, when they finished, open a "pull-request" from their branch to master branch to
  request changes, if there are conflicts, that person need to contact the person involved in the conflict files to
  resolve the conflict, if Github can auto-merge, no reviewer required.
  
 * If anyone finds or encounters a bug, they should record the bug in "Issues" and create to new branch called bug-xx to resolve it.
   
 * We follow camelcase syntax for naming class, method, variable and file/folder, we also follow Airbnb's javascript coding style.
 
  This workflow can prevent struggling on conflicts, and improve the code readability.



## Product

#### Goals and tasks

 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.

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

    If user is interested in a style and he want to make a purchase, if the app can only provide links to products
    , shirt comes from Nike,pants comes from Levis and shoes comes from Adidas, then user has to jump back-and-forth
     between The Look and browser three times, and he has to manually input his billing address and credit card 
     payment method three times, which is pretty bad user experience, and did not make the user buy style easier,
      so we decide to avoid that, and add a checkout function to the app.

 2. **Change of product mandate**

    Our original product mandate is to help men with no style shopping clothes, now, with the app coming true, and me more realizing what this app provides to its user, I think we can do more than just that. 

    I decide to change the mandate of the app to “help all men shopping clothes”. 
    
    In Chinese dictionary, there are two ways to locate a word. One is by alphabetic order, A for Armani, B for balmin, H for H&M.etc, that’s how we shop in a ordinary mall, or shop cloth online, we go to one store(or its website), then another.
    
    Another way is to look up a word by its structure. If I have to explain it in English, imagine there is a chart in your Marin-Webster that contains all words start with a prefix ”pre”, and another chart contains all words end with suffix ”ness”. When you want a specific style of word, a specific suffix or prefix, you just go to the chart, and you will know all about it. This is the shopping experience that The Look is providing, locate a specific style first, then you can see all the clothes that can be a part of that style. It is a new way to shopping for men, more straight, more determinant, and more direct.
    
    After all, what customers are buying is NOT a specific cloth, but a general look, which is the value added part that we provide.
    
3. **Discussion on machine learning**

   After discussion, we decide to give up on machine learning that we planned to use to fetch, categorize and tag clothes. Machine learning is fancy and powerful, but it is hard to implement and Bin Yu is the only one in our group who had taken all necessary classes, it needs 1000 images and 8000 tags, which is hard to accomplish in d3(two weeks), and the value added that The Look provide does not comes from a super fast processing tool but the logic of two filter system(see Product Artifact #7). So we decide to cut machine learning and concentrate on application itself.
   
4. **Discussion on text/image on user profile page**

   PM insists to use image on user profile page with no text for explanation while some member thinks it is better to use text soly or have text as description of the picture. PM insists so for Aesthetics reason. Have text below the picture kind of ruins the whole picture and different length of text are ugly, and not intuitive. Members insist so due to user might not be able to understand the picture, for example, in the shape of legs, difference are hard to notice at first sight. Eventually PM agrees on the problem of recognition, and decide to use a half measure by adding text that has the same style as picture in pictures. Picture can be found on Product Artifact #8.


5. **Discussion on “that’s me” button**

   PM insists to use only a button that labels ”that’s me” on the button of user profile page for its simplicity and well-express of idea. Some members insists that add descriptive text on the page so that user understands. PM rejected this advice due to “that’s me” is enough for user who did not know the purpose of the page to realize that this is meant for getting his body shape and skin color, descriptive text is not necessary.

6. **Tag system**

   We figured out tag system for the backend. There are four components, database of users, database of styles and a logic system that links them, and a database of clothes. This is how it works: we collect user body shape information on registration and transfer it to tags and save them in user database. For example, if I am a short chubby guy, in backend there will be “<175” and “FatBelly”. In the database of styles we store tags for styles. For example, if there is a style that contains a trench jacket, a jeans and a shirt, than trench jacket will be the determine factor. Tag of it will looks like this:(TrechCoat, Jean,Shirt,(TrenchCoat)). The logic that links them will determine if the style fits user’s body shape. For example, if we use trench coat example and chubby guy example above, the trench coat style will not be suggested to the user due to trench coat is the determine factor and trench coat will be tagged as “175-188, >188” and “NoBelly, NormalBelly” due to short guys’ legs will looks even shorter in a long trench coat and it fits slim body shape. 

7. **Invention of the two layer filter**

   We figured out his system that can guarantee our customer get the right clothes. The first layer of filter is the user profile page that each user has to click on his registration, this will screens out clothes that is not going to fit user’s body shape. For example, if you are a chubby guy then all crew neck shirt with wide crew neck will be filtered due to they will make your neck look shorter than normal. The second layer of filter is a user preference system, based on clothes passed the first filter, user can click “like” or “pass” to let system learn their preference. With the two layer filter, we can guarantee that clothes user buys fits them and they likes. 

Above will be summary on dicussions on WeChat.


8. **Profile page drawing**

   https://drive.google.com/drive/folders/1sNR6EEWCgK7yL_T5MRVSsR3S8rV4pqA_?usp=sharing


9. **Pictures used to build The Look Interface**

   https://drive.google.com/drive/folders/1vDTRWO-ECq8pXXAS1qsv5a1Sp08ZcbId?usp=sharing

10. **Logo Design**.
  
    A logo is significant to a company or a product, it is the first and the only impression that is going
    to leave in user's mind, that is why we are so careful when comes to logo design. We have developed 9 different logos
    for the icon of the app, I will explain one by one about each's pro and cons.
    ![logos](./img/logos.jpg)
 
    All logos are derived from the capital letter L, this design pattern follows from most popular application icon
    design, such as Google’s G, Uber’s U, Pinterest’s p and Uncrate’s u. We plan to combine the “The Look” text
    with its function, men style, like the way pinterest did: p and the pin.
    
    `#0`, the foot, derived from the leg of the main character of Cowboy Bebop, Spike Spiegel. The foot is just
    impossible to make a modern, elegant logo, so we give up on that, but it is an interesting thought.
    
    `#4` and `#6` are the original thoughts, but there are some problems within it: `#4`, report from online gamers in
    our group, looks way too similar to the logo of League of Legends and there is no way to fix it, that is how Times
    New Roman looks. And it also looks more like a logo for dictionary applications, due to most paperback dictionary
    uses Times New Roman.

    The font of `#6` looks like it is an initial for a university, and it gives the wrong feelings--too tough,
     too square, lack of elegance, and too student. Same problem with `#5`.

    Then we have `#2`, an image copy from internet. Helvetica with bold effect looks like the way to go, but still
     something wrong with it: the dot means nothing to us, but if we take the dot out, then it’s too empty on the
      upper-right corner.

    So we decide to move the dot to the upper-right corner to see what will that looks like, here goes `#1`. It actually
     looks not bad, and somehow it looks like men’s cuff, which is a surprise to us: both “L” and the
      functionality--men’s style are included, I think we did a better job then Pinterest on this. But there is
       still something unsatisfied: the shape of L makes it doesn’t looks like an L,and the way the L and the dot
        occupies the icon is just too dull, nothing interesting in there. So we change the shape of L
        (from vertical:horizontal 4:4 to vertical:horizontal 4:3)--`#3`, but then the dot seems out of place, 
        and the left-lower corner looks void now. So we figure, why not make the logo a part of the icon to avoid 
        the emptiness? So we move the logo up and add text to the bottom, that is `#7` and `#8`, text at the bottom,
         men’s cuff on the upper. `#7`’s text’s font’s L looks more like 4:4, so we eventually move to `#8`.
