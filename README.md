# Foundations -> Practice Version 2 challenge

## Intro

### This challenge has three parts:

- Create a function that uses pg-promise to execute a SQL query
- Write a GET route in Express that displays a Pug or EJS template
- Change the background of table rows on mouseover
- (Part 4 is removing the challenge from your computer, and doesn't count toward your time)

### Getting to the USB drive files (from a mac)

`cd "/Volumes/INTERVIEWDRIVE/"`

### Installation

- The only installation necessary from you is to install the db by running

`cd part-1 && npm run db:init && cd ..`

### Accessing the database

- You can find the database config in the `env.sh` file at the top level of this repository.
- If you would like to use Postico to access the database you may use the `... .pgfav` file in the top interview challenge folder to automatically add the database connection details. Use the following command:

```sh
open postico-db-practice-a.pgfav
```

### Starting the server

In parts 2 and 3, the server will start with `npm start`.

## Part 1: SQL

### Node and PostgreSQL

Create a function in `db.js` called `getFlightCounts` that uses `pg-promise`.
The function takes a `minFlightCount` parameter, and returns the passenger name
and number of flights ("flight count") for all passengers who have at least that
many flights in the database.

Sample promise resolution:

```
  [ { name: 'Michael Jackson', flightcount: '7' },
    { name: 'Baby Spice', flightcount: '8' } ]
```

- [ ] __5:__ The function takes `minFlightCount` as a parameter
- [ ] __10:__ The function's query returns the name and flight count for passengers in the database.
- [ ] __10:__ The function's query returns only the passengers who have a flight count greater than or equal to the `minFlightCount` parameter.
- [ ] __10:__ The function returns a promise which resolves to the results of the query

## Part 2: Express

### GET route

Create a GET route for `/flight_counts` that receives GET data with the key
`minFlightCount` (value is the minimum number of flights a passenger must have
in order to be displayed on the page). Use the `getFlightCounts` function
provided in `db.js`.

- [ ] __5:__ Route uses GET
- [ ] __10:__ Route accesses GET data
- [ ] __10:__ Route uses the provided `getFlightCounts` function to retrieve the passenger data
- [ ] __15:__ Route uses `flight_counts.ejs` or `flight_counts.pug` to display names and flight counts of passengers returned from `getFlightCounts`
- [ ] __10:__ If there's an error, the page displays `An error occurred` in the div with the id `message`.
- [ ] __10:__ Learner demonstrates GET route non-error functionality using a browser
- [ ] __10:__ Learner demonstrates GET route error functionality using a browser

## Part 3: Front-End

### DOM Manipulation

In this section, the scaffolding has been set up for the `/flight_counts` route
as described in Part 2. Choose a template engine (EJS or Pug) in app.js and then
access the `flight_counts` route with a query string of `minFlightCount=4` to
see it in action.

The challenge for this section: when a user clicks the `Get total flights`
button, display the total flight count (the sum of the numbers in the "flight
count" column of the table) in the span with the id `flight-count-total`.

You may use vanilla JS or JQuery.

- [ ] __10:__ Each table row has the appropriate event listener(s).
- [ ] __10:__ The table row is accessed in the callback function from the event listener(s).
- [ ] __10:__ The table row background color turns light gray (#eee) when moused over.
- [ ] __10:__ The table row background color reverts to white when the mouse is no longer over the element.

## Part 4: Uninstall

1. Stop any running express servers
2. Remove Postico entry for the database (if applicable)
3. Remove command line entry/ies for the database (delete from `~/.zsh_history` or `~/.bash_history`)
4. cd out of the usb drive from the terminal
5. Close the IDE / text editor window(s) with the challenge files
6. Eject the USB drive
