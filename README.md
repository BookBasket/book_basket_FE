# Book Basket
A Svelte Built App for finding, storing, and accessing all your favorite books.

### Introduction
This was our first Cross-Pollinatin Project where members of a front end student team were paired up with members of a back end student team to create a web database of information, displayed beautifully for user experience, and have run on a web safe production source, Heroku. This was the final project from Mod 4 at Turing School of Software and Design. We were given just short of two weeks to create a database of books from Google Books API, mutate the information recieved and send over to the Front end team which would display the information on a newly learned language, Svelte. A major learning goal for this project was to gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams using Agile sprints, effective Git workflow, and continuous integration testing suites.

### Screenshots
![Login Page](https://user-images.githubusercontent.com/53594458/79502381-c3127e80-7fec-11ea-9a07-2550a8bd6c34.png)
![Library Search Results](https://user-images.githubusercontent.com/53594458/79502343-b68e2600-7fec-11ea-971b-02f352d55f70.png)
![Individual Book Details](https://user-images.githubusercontent.com/53594458/79502259-98282a80-7fec-11ea-91c6-4ceafc4c1707.png)

### Directions for Use
- On page load you will see a login form with the option to set up UX as a user, and view your libraries, or you can go directly to searching for a book for faster results.
- From the Search Button One Can enter into the search field any set of information, and after selecting the radio button for the type of search you want to perform, click submit and see all your books populate the page.
- Users can search by Author, Title, Genre, or ISBN Number.
- From the Users page, one can choose to see either library stored on the app, or begin a search from there. 
- The two libraries are your Want to Read Library, and your Already Read Library. These libraries update automatically with the backend database depending on the users in teractions on the app.

### Project Technologies Used
- Svelte for Frontend Framework. First encounter with Svelte.
- Cypress for Testign Framework Svelte is so new, it did not have a set testing library yet, or much documentation paired with it, so Frontend went with an outside testing suite.
- Svelte - Routing for linking pages together, similar to React Routing.
- Python for Backend Framework with GRaphQL 

### Project Learning Goals
- Ultimately, demonstrate knowledge you’ve gained throughout Turing
- Use an agile process to turn well defined requirements into deployed and production ready software
- Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams. Service oriented architecture concepts and patterns are highly encouraged.
- Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
- Practice an advanced, professional git workflow (see whole-team expectations)
- Gain more experience using continuous integration tools to build and automate the deployment of features in various environments
- Build applications that execute in development, test, CI, and production environments
- Focus on communication between front-end and back-end teams in order to complete and deploy features that have been outlined by the project spec

### How to Run on a Local Machine
1. 1. shut down any live servers you currently have running (`control` + `c`)
2. clone down this repo to desired location
3. cd to the directory where you cloned the repo
4. run `npm install`
5. then run `npm run dev` 
6. You should now be able to use Book Basket locally at `http://localhost:5000`

### This project was created by:
Virginia Ladd https://github.com/vladd-png<br>
Jomah Fangonilo https://github/jfangonilo <br>
Rachel Lew https://github/rlew421 <br>
Madelyn Romero https://github/madelynrr
