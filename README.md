# JobQuest

To view the production site, please visit the [JobQuest link](https://job-quest-fe.herokuapp.com).

To view the other components of the application please visit the [Github Project Organization](https://github.com/JobQuest).


### [Working](https://shawntru.github.io/Rotten-Tomatillos/)

### [Link To Our Repo](https://github.com/Shawntru/Rotten-Tomatillos)

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

---

Rancid Tomatillos is a movie rating and information site where a user can get trailers and info for new and upcoming films, which are pulled from a heroku API.

It was created as a Module 3 project in the Turing Front End Engineering course.

## Features

---

## Technologies And Tools

---

- JavaScript (ES6)
- TypeScript
- HTML
- CSS/Scss/Sass
- React
- Router
- JSX
- Cypress

## Challenges

---

- Working with custom made assets
- Learning a new language
- Working with states of React components
- Implementing HTML and JavaScript logic in React

## Wins

---

- Creating a responsive website with multiple features.
- Working with a full-stack team
- Deploying to Heroku with Continuous Intrigration with Travis CI

## ScreenShots and Demos

---

### Homepage

---



<details>
  <summary>**Under the Hood**</summary>

Homepage:

Homepage is a landing page for users. 

For displaying trailers we used [react-player](https://www.npmjs.com/package/react-player) component:

```JavaScript
<ReactPlayer
  data-testid={`${this.state.movieTrailer}`}
  className="react-player"
  url={`https:www.https://www.youtube.com/watch?v=${this.state.movieTrailer}`}
  width="100%"
  height="100%"
  controls={false}
  muted={true}
  playing={true}
  loop={true}
  config={{
    youtube: {
      playerVars: {
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        playlist: `${this.state.movieTrailer}`,
        modestbranding: 1,
      },
    },
  }}
/>

```
</details>

---

### Profile Page

---


<details>
  <summary>**Under the Hood**</summary>


</details>

---

## Roadmap

---

Future additions to include:

- Create Guilds
- Create a Leaderboard
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
