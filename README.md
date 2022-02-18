# Completed Divvy Homework Assignment

I have finished this take home assginment with 3+ objectives completed. The completed objectives are as follows:

<br />


## Create, Edit, Update Transactions

* Added a route to a component that allows the user to create a transaction
    * This is working and is properly adding transactions to the mongodb using the apollo client
* Added edit and delete icons in the Tx table to easily edit/delete transactions
    * There is a bug with this. I seems that the back end webserver doesn't have mutations for deleting or updating defined? But the front end functionality is there


## Convert Numbers to Roman Numerals

* Created a static class/function that performs the conversion from number to RomanNumberal
* Created a component to allow the user to toggle this setting on/off
    * Implemented with a simple solution of just caching the current setting in the users browser
* Created unit tests that properly test my algorithm implementation for this feature

## Added Pie Chart for Debit/Credit Category

* Created a route and component to render the transaction data to the user
* Used recharts to maintain the 'react' approach and usage

## Improve the User Experience

* I slightly improved on styling using material-ui
* Implemented nested views/components (Transactions)
* Added more routes in react-router

## Other Items

* I also moved all of the emotion-js styling out of their respective components and placed them in a global styles file. This allows for components to move around and have their styling stay the same (after importing the style from global)
* Added some basic jest tests for the TxTable component. And tested the RomanNumeral functionality



