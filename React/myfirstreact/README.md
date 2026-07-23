# Hands-on 1: Setting up a React Environment (create-react-app)

## Objective
Create a React app named "myfirstreact" that displays:
"Welcome to the first session of React" as an H1 heading.

## Steps to run
1. Make sure Node.js and npm are installed: https://nodejs.org/en/download/
2. Extract this folder (myfirstreact) anywhere on your machine.
3. Open the folder in Visual Studio Code (or any terminal).
4. Install dependencies:
       npm install
5. Start the app:
       npm start
6. Your browser should auto-open http://localhost:3000
   (if not, open it manually)
7. You should see the heading:
       "Welcome to the first session of React"
8. Take your screenshot here — this satisfies the lab's "take SS" requirement.

## What was changed
- src/App.js was edited to remove the default CRA boilerplate and
  replace it with a single <h1> heading as required by the lab.

## Verified
This project was scaffolded with `npx create-react-app myfirstreact`
and test-started in a sandboxed environment — webpack compiled
successfully with no errors before packaging.
