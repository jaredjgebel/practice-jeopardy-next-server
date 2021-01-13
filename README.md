# Practice Jeopardy! using NextJS

Deployed at [https://practice-jeopardy-next.vercel.app/](https://practice-jeopardy-next.vercel.app/)

This is an another implementation of [_Practice Jeopardy!_](https://github.com/jaredjgebel/practice-jeopardy) that uses NextJS instead of Create React App. In the original Create React App, the data is delivered via calls to a MongoDB database, whereas here each clue has an individual prerendered static page. During the build process, each page is generated from a JSON file (`data/clues.json`) entry. At the beginning of each game, the server sends the ID of a random clue to be linked to, ensuring that the user starts in a random place and is reading fresh clues.

## Running from a Local Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to run the app.
