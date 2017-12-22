# Foundations -> Practice Version 2 challenge

## Introduction

This document contains the requirements for completing your interview challenge as well as instructions for setup and teardown. Read the following content carefully!

### Setup

#### Completed by your interviewer:


#### For you to complete:
First, we'll need to navigate to the directory on the interview USB drive where the challenge files are. On a mac, you'll find it here:

```sh
cd "/Volumes/INTERVIEWDRIVE/[YOUR DIRECTORY NAME]"
```

Next, we need to setup the challenge. You can do so by simply running a script:

```sh
cd setup && npm run setup && cd ..
```

The folders for each part of this challenge contain a `package.json` that specifies the dependencies for that part. You can quickly install dependencies for all parts of the challenge by running this script:

```sh
cd setup && npm run install:all && cd ..
```


### Accessing the Database

A database connection string has been set in the `.env` file at the top level of this repository. You can use this to connect to the database using any client you wish.

If you would like to use [Postico](https://eggerapps.at/postico) to access the database you can simply use the `.pgfav` file in the interview root directory to automatically add the database connection configuration. Use the following command:

```sh
open postico-db-practice-a.pgfav
```

## The Interview Challenge

This challenge has three parts:

- Part 1: Create a function that uses pg-promise to execute a SQL query from within a Node.js program
- Part 2: Using Express, implement handling for a GET route that renders (returns markup for) an HTML page using a template engine (Pug or EJS)
- Part 3: Remove a row from a html page using javascript

### Part 1: SQL

##### PostgreSQL, Node.js, & pg-promise

Create a function in the file `db.js` called `getFlightPassengers`.

The function should accept a string parameter named `flightNumber`. It should use the `pg-promise` database client (already instantiated) and return a promise that resolves to the result of the query (an array of objects containing the names of all passengers on that flight. The property for the passenger name values in these objects should be called `name`).

Sample result:

```
  [ { name: 'Michael Jackson' },
    { name: 'Tito Jackson' },
    { name: 'Jackie Jackson' },
    { name: 'Baby Spice' },
    { name: 'Scary Spice' } ]
```

- [ ] __5:__ The function takes a parameter called `flightNumber`.
- [ ] __10:__ The function executes a SQL query using `pg-promise`
- [ ] __10:__ The query uses index variables (e.g. `$1`) to make the query dynamic
- [ ] __15:__ The result set of the SQL query includes one row containing a passenger name field for every passenger on the specified flight number.
- [ ] __10:__ The function returns a promise which resolves to the result of the query.

#### ER Diagram

An ER diagram has been provided that visualizes the database schema:

![ER Diagram](/part-1/flights_ERD.png)

### Part 2: Express

##### GET route

Implement handling for a route/endpoint `GET /flight_roster`. It should accept a query string parameter `flightNumber` -- a string value representing a flight number. Use the `getFlightPassengers` function provided in `db.js` to retrieve the list of passengers on the specified flight.

- [ ] __5:__ Route is a GET route
- [ ] __10:__ Route uses the `flightNumber` query string parameter and the provided `getFlightPassengers` function to retrieve the passenger data
- [ ] __10:__ Route passes data to the EJS or Pug template.
- [ ] __10:__ The template contains code to render the list of passengers retrieved.
- [ ] __10:__ The template contains code to display the text `An error occurred` in the div with the id `message`, in the case of an error.
- [ ] __10:__ A `GET /flight_roster` request can be executed using a browser without error.

##### Starting the server

To start the server, run: `npm start`.

### Part 3: Front-End

##### DOM Manipulation

In this section, the scaffolding has been created for the `/flight_roster` route described in Part 2. Choose a template engine (EJS or Pug) in `app.js`, then make a `GET` request for the `/flight_roster` resource. Include the query string `flightNumber=1147A` to retrieve passengers for that specific flight.

The challenge for this section: when a user clicks the button labeled `Give passenger a parachute`, one of the passengers (it doesn't matter which one) should be removed from the list. __Note__: The passenger only needs to be removed from the page. __There is no need to update the database or communicate with the server in any way.__

You may use vanilla JS or jQuery.

- [ ] __10:__ The code uses JavaScript or jQuery to identify and/or create a variable for the `Give passenger a parachute` button DOM element.
- [ ] __10:__ The `Give passenger a parachute` button has an on click event listener.
- [ ] __10:__ The event listener callback alters the passenger list.
- [ ] __10:__ The passenger list has one fewer row after the click.
- [ ] __10:__ If the list is empty when the button is clicked, the page displays a message in the div with the id `message`: "All out of passengers".

##### Starting the server

To start the server, run: `npm start`.

## Teardown

Let's do a little cleanup:

1. End the video recording (if applicable)
2. From your terminal, stop any running express servers
3. From your terminal, `cd` out of the usb drive directory
4. Quit your terminal application
5. Quit your text editor application
6. Close any browser windows pertaining to the challenge
7. Remove the `Postico` entry for the database connection (if applicable)
8. Eject the USB drive (`diskutil unmount INTERVIEWDRIVE`)
