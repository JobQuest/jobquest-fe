<br />
<p align="center">
  <a href="https://job-quest-fe.herokuapp.com/">
    <img src="https://i.imgur.com/UMSbZc5.png" alt="JobQuest Logo" width="200" height="220">
  </a>

  <h3 align="center">JobQuest</h3>

  <p align="center">
    A web app to gamify the job search!
    <br />
    <a href="https://job-quest-fe.herokuapp.com"><strong>View production site!</strong></a>
    <br />
    <br />
    <a href="https://github.com/JobQuest/jobquest-be">Back-end repo</a>
    ·
    <br />
    <a href="https://github.com/JobQuest/jobquest-fe">Front-end repo</a>
    ·
    <a href="https://github.com/JobQuest">Project organization</a>
    ·
  </p>
</p>

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies and Tools](#technologies-and-tools)
- [Challenges](#challenges)
- [Wins](#wins)
- [ScreenShots and Demos](#screenshots-and-demos)
- [Roadmap](#roadmap)
- [Credits](#credits)

## Project Overview

JobQuest is a text-based RPG-style campaign that aids in the job search process, while making it fun! A user can login or create an account to track their progress through different quests to defeat fantastical monsters. There are 3 types of quests: active, passive, and supportive. Active quests require you to perform actions such as *apply for a job* or *send out a resume* in order to conquer the beast. Passive quests will have you doing things like *update your resume* and *research potential companies* in order to triumph over evil. For supportive quests, you will be helping out friends (Guild-mates coming soon!) by completing such activities as *host a mock interview* for them or *review their solution to a coding challenge*. Once you complete an action outside the game, you will then select that option to deal damage to your demon. With each new quest level, the creatures you battle will become stronger, and therefore will be tougher to defeat. By completing every quest, you shall have taken the necessary steps to obtaining a job**.
Good luck on your journey through JobQuest!

** Disclaimer: The creators of JobQuest do not in any way guarantee employment by completing this game, and thinking so is down right silly of you.

---


## Features

---

## Technologies And Tools

---

- React
- React hooks
- TypeScript
- CSS/Sass
- Router
- JSX
- Cypress
- Auth0

## Challenges

---

- This was our first project using typescript. We had previously only used untyped languages. The more complicated the project became, the more careful we had to get with strict typing and variables. Ultimately it was a good experience, and building up modular 'type' objects turned out to be fun, despite the early frustration
- Continuous integration with TravisCI proved to be a big blocker for the front-end. We were hoping to get better practoce with it, but we ended up having to prioritise other things, making changes locally and manually deploying to heroku often.
- Our testing software, Cypress, gave us some trouble after our authentication feature was implemented, since the authentication process routed to another website, which broke some tests. We were able to get the tests back up and running after research, but it was a stressful bug.


## Wins

---

- The planning process might have been our strongest point. The entire team brainstormed and planned and re-planned through the first several days of the project, making sure to build out wireframes and schemas, and not to leave anyone out. The idea for the app ended up getting almost completely re-worked near the end of the planning phases, and the extra effort up front helped us to make a better product in the end.
- This was the first project any of us had completed where our back-end was under development at the same time as the front end. We had to make sure that our communication was strong and clear, since often changes to one meant big changes for the other. There were lots of bugs at first, but we were able to communicate clearly and get everything fixed up, even through some discomfort
- We had a strong desire for the look of the app to be pixelated, but we still wanted to maintain a familiar, modern website structure. Because of this, we had to custom design a lot of the assets from scratch. The process of going from the wireframe to the actual production assets was tricky, and required a lot if trial and error, but the team was very collaborative, and we were able to focus in on only the most important parts of the site. In the end we made something beautiful and unique. 


## ScreenShots and Demos

---

#### Login Authentication

![Login gif](https://i.imgur.com/aYRS9DM.gif)

#### Persistant progress & Exp gain

![Progress and Exp](https://i.imgur.com/1dp7K6k.gif)

### Homepage

---

<img width="800" align="center" alt="Screen Shot 2021-03-03 at 6 19 26 PM" src="https://user-images.githubusercontent.com/36242106/109895775-0a2d5080-7c4d-11eb-871d-0158745f005c.png">


<details>
  <summary>Details</summary>
  Upon visiting the website for the first time, the user will be presented with a small message and a 'login' button. Clicking the login button will route the user to an Auth0 login screen. From this point on, when users visit the website, they will see the profile page, unless they click the 'logout' button on the profile page.

</details>

---

### Profile Page

---

<img width="800" align="center" alt="Screen Shot 2021-03-03 at 6 15 34 PM" src="https://user-images.githubusercontent.com/36242106/109896126-a9524800-7c4d-11eb-8c6d-5c26d371daef.png">

<details>
  <summary>Details</summary>
  On the profile page, the user can see a simple animated character avitar, which represents them for the game. The user can check their current Exp level, their email, and a logout button. The tabs on the right will allow them to navigate to the other pages.

</details>

---

### Quests Page

---

<img width="800" align="center" alt="Screen Shot 2021-03-03 at 6 15 45 PM" src="https://user-images.githubusercontent.com/36242106/109896326-f7ffe200-7c4d-11eb-804a-9764943ce27f.png">


<details>
  <summary>Details</summary>
  On the quests page, the user can choose what quest they want to embark on. There are three main 'types' of quests, active, passive, and supportive. THe user's more current progress in each types will be shown on the card. The quest types describe the type of actions the user will be required to complete in order to damage the monsters which block their way.

</details>

---

### Active Quest Page

---

<img width="800" align="center" alt="Screen Shot 2021-03-03 at 6 16 15 PM" src="https://user-images.githubusercontent.com/36242106/109897250-a9534780-7c4f-11eb-967f-289b72a90ad8.png">


<details>
  <summary>Details</summary>
  On the active quest page, the user sees the monster they are facing. The monster's health is represented by hearts above the monster. Below the fight panel, the user can see two action cards. THe user needs to complete one of the two actions described on the cards in order to make progress against the monster. Once the user has completed the action, they click it, and the encounter is progressed. Once the monster's hearts reach zero, the user will see the 'victory' page. The quests exp is added to the user's current exp, and a log of the quest can be seen in the quest log tab.

</details>

---

## Roadmap

---

Future additions to include:

- Create Guilds where users can see and share their progress with other users
- Increase the detail of quest log to show the specific actions that a user has completed
- Add a 'proof' step to the encounter so a user must submit some form of evidence that the action was completed
- Create a Leaderboard where users and guilds can compete
- Add Chat functionality with other Users

## Credits

These are the contributors with whom without their imagination, hardwork and dedication this project would not have happened. We are all really excited to talk more about our project with you! Feel free to reach out to us!

<img src="https://avatars.githubusercontent.com/u/4582791?v=4v" alt="Shaunda Cunningham"
 width="150" height="auto" />

#### Shaunda Cunningham: [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/shaunda-cunningham/), [📬](mailto:shaunda.cunningham@gmail.com), [GitHub](https://github.com/smcunning)

<img src="https://avatars.githubusercontent.com/u/62966396?v=4" alt="George Soderholm"
 width="150" height="auto" />
 
#### George Soderholm: [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/george-soderholm-05776947/), [📬](mailto:georgesoderholm@gmail.com), [GitHub](https://github.com/GeorgieGirl24)

<img src="https://avatars0.githubusercontent.com/u/66269306?s=400&u=b59f8ccc1002269319d952aa028ee270629b2ead&v=4" alt="Olga Morgan"
 width="150" height="auto" />

#### Olga Morgan: [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/olgamorgan/), [📬](mailto:olga.morgan17@gmail.com), [GitHub](https://github.com/scripka)

<img src="https://avatars.githubusercontent.com/u/60531761?v=4" alt="Jake Heft"
 width="150" height="auto" />

#### Jake Heft: [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/jakeheft/), [📬](mailto:Jakeheft@gmail.com), [GitHub](https://github.com/jakeheft)

<img src="https://avatars.githubusercontent.com/u/36242106?v=4" alt="Caleb Cyphers"
 width="150" height="auto" />

#### Caleb Cyphers:  [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/caleb-cyphers/), [📬](mailto:caleb.j.cyphers@gmail.com), [GitHub](https://github.com/CalebCyphers)

<img src="https://avatars.githubusercontent.com/u/60277914?v=4" alt="Curis Bartell"
 width="150" height="auto" />

#### Curtis Bartell: [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/curtis-bartell/), [📬](mailto:cbartell980@gmail.com), [GitHub](https://github.com/c-bartell)

<img src="https://avatars.githubusercontent.com/u/65981543?v=4" alt="Carson Jardine"
 width="150" height="auto" />

#### Carson Jardine: [![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/carson-jardine/), [📬](mailto:carsonjardine@gmail.com), [GitHub](https://github.com/carson-jardine)
[![GitHubLogo][gitHub-sheild]](https://github.com/carson-jardine)

<!-- MARKDOWN LINKS -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[gITHub-sheild]: https://image.flaticon.com/icons/png/512/25/25231.png
[gitHub-sheild]: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
[github-shield]: https://www.google.com/url?sa=i&url=https%3A%2F%2Flogos-world.net%2Fgithub-logo%2F&psig=AOvVaw2iwK08oBZ-3qkYGs4YpZ1N&ust=1614092676032000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDrvPbh_e4CFQAAAAAdAAAAABAD


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


