# Foundations -> Practice Version 2 challenge

## Introduction

This document contains the requirements for completing your interview challenge as well as instructions for setup and teardown. Read the following content carefully!

### Setup

First, we'll need to navigate to the directory on the interview USB drive where the challenge files are. On a mac, you'll find it here:

```sh
cd "/Volumes/INTERVIEWDRIVE/[YOUR DIRECTORY NAME]"
```

Next, we need to setup the challenge. You can do so by simply running a script:

```sh
cd setup && npm run setup && cd ..
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
- Part 3: Change the background of the rows in an HTML table when hovered over

### Part 1: SQL

##### Node and PostgreSQL

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
- [ ] __15:__ The result set of the SQL query includes one row containing a passenger name field for every passenger on the specified flight number.
- [ ] __10:__ The function returns a promise which resolves to the result of the query.

### Part 2: Express

##### GET route

Implement handling for a route/endpoint `GET /flight_roster`. It should accept a query string parameter `flightNumber` -- a string value representing a flight number. Use the `getFlightPassengers` function provided in `db.js` to retrieve the list of passengers on the specified flight.

- [ ] __5:__ Route is a GET route
- [ ] __20:__ Route uses the `flightNumber` query string parameter and the provided `getFlightCounts` function to retrieve the passenger data
- [ ] __15:__ Route uses `flight_roster.ejs` or `flight_roster.pug` to render the list of passengers retrieved.
- [ ] __10:__ Passenger names are fully displayed somewhere on the rendered web page.
- [ ] __10:__ If the case of an error, the text `An error occurred` is displayed in the div with the id `message`.
- [ ] __10:__ A `GET /flight_roster` request can be executed using a browser without error.

##### Starting the server

To start the server, run: `npm start`.

### Part 3: Front-End

##### DOM Manipulation

In this section, the scaffolding has been created for the `/flight_roster` route described in Part 2. Choose a template engine (EJS or Pug) in `app.js`, then make a `GET` request for the `/flight_roster` resource. Include the query string `flightNumber=1147A` to retrieve passengers for that specific flight.

The challenge for this section: when a user clicks the button labeled `Give passenger a parachute`, one of the passengers (it doesn't matter which one) should be removed from the list. __Note__: The passenger only needs to be removed from the page. __There is no need to update the database or communicate with the server in any way.__

You may use vanilla JS or JQuery.

- [ ] __10:__ The `Give passenger a parachute` button has an on click event listener.
- [ ] __10:__ The passenger list has one fewer row after the click.
- [ ] __10:__ If the list is empty when the button is clicked, the page displays a message in the div with the id `message`: "All out of passengers"

##### Starting the server

To start the server, run: `npm start`.

## Teardown

Let's do a little cleanup:

1. End the video recording (if applicable)
2. From your terminal, stop any running express servers
3. From your terminal, `cd` out of the usb drive directory
4. Quit your terminal application
5. Quit your text editor application
6. Eject the USB drive
7. Remove the `Postico` entry for the database connection (if applicable)
