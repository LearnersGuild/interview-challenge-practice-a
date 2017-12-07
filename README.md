# Foundations -> Practice Version 2 challenge

## Intro

#### This challenge has three parts:

- Part 1: Create a function that uses pg-promise to execute a SQL query
- Part 2: Write a GET route in Express that displays a Pug or EJS template
- Part 3: Change the background of table rows on mouseover

(Part 4 is removing the challenge from your computer, and doesn't count toward your time)

#### Getting to the USB drive files (from a mac)

```sh
cd "/Volumes/INTERVIEWDRIVE/[YOUR PROJECT FOLDER]"
```

#### Installation

- The only installation necessary from you is to install the db by running

```sh
cd setup && npm run db:init && cd ..
```

### Accessing the database

- You can find the database connection string in the `.env` file at the top level of this repository.
- If you would like to use Postico to access the database you may use the `.pgfav` file in the top interview challenge folder to automatically add the database connection details. Use the following command:

```sh
open postico-db-practice-a.pgfav
```

## Part 1: SQL

#### Node and PostgreSQL

Create a function in `db.js` called `getFlightPassengers` that uses `pg-promise`.
The function takes a string (`flightNumber`) as a parameter. It returns a promise that
resolves to an array of passengers on that flight. Each passenger is an object with the key "name".

Sample promise resolution:

```
  [ { name: 'Michael Jackson' },
    { name: 'Tito Jackson' },
    { name: 'Jackie Jackson' },
    { name: 'Baby Spice' },
    { name: 'Scary Spice' } ]
```

- [ ] __5:__ The function takes a parameter called `flightNumber`.
- [ ] __15:__ The SQL query returns the name of every passenger on the flight with the given number.
- [ ] __10:__ The function returns a promise which resolves to the results of the query

## Part 2: Express

#### GET route

Create a GET route for `/flight_roster` that receives data from the GET
parameter `flightNumber` (the value is a string that must be included in the
passenger's name in order for the passenger to be displayed on the page). Use the
`getFlightCounts` function provided in `db.js`.

- [ ] __5:__ Route uses GET
- [ ] __10:__ Route accesses GET data from query string
- [ ] __10:__ Route uses the provided `getFlightCounts` function to retrieve the passenger data
- [ ] __10:__ Route displays flight number somewhere on the page.
- [ ] __15:__ Route uses `flight_roster.ejs` or `flight_roster.pug` to display names and flight counts of passengers returned from `getFlightCounts`
- [ ] __10:__ If there's an error, the page displays `An error occurred` in the div with the id `message`.
- [ ] __10:__ Learner demonstrates GET route *non-error* functionality using a browser

#### Starting the server

To start the server, run: `npm start`.

## Part 3: Front-End

#### DOM Manipulation

In this section, the scaffolding has been set up for the `/flight_roster` route
as described in Part 2. Choose a template engine (EJS or Pug) in app.js and then
access the `flight_roster` route with a query string of `flightNumber=1147A` to
see it in action.

The challenge for this section: when a user clicks the `Give passenger a parachute`
button, one of the passengers (it doesn't matter which one) is removed from the
list of passengers. __Note__: The passenger only needs to be removed from the
page. __There is no need to update the database or communicate with the server in any way.__

You may use vanilla JS or JQuery.

- [ ] __10:__ The "Give passenger a parachute" button has an event listener on click.
- [ ] __10:__ The passenger list has one fewer row after the click.
- [ ] __10:__ If there are no passengers left in the list when the button is clicked, the page displays a message in the div with the id `message`: "All out of passengers".

#### Starting the server

To start the server, run: `npm start`.

## Part 4: Uninstall

1. Stop any running express servers
2. Remove Postico entry for the database (if applicable)
3. Remove command line entry/ies for the database (delete from `~/.zsh_history` or `~/.bash_history`) if applicable
4. cd out of the usb drive from the terminal
5. Close the IDE / text editor window(s) with the challenge files
6. Close the terminal window where the challenge was being run
7. Eject the USB drive
8. End the Zoom recording
