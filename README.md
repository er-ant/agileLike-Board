# agileLike-Board
It is agile like board for internal project with vtiger CRM

## First start
```
npm i
```
```
npm start
```
All required sources will be build in public/dist/bundle.js. 
Start index.html to check demo version after project will be built.

## Adding to your page
1. Add bundle.js into your page.
1. Make a wrapper for the board with id "agileLike-board-wrapper" (example below). And init a table into it. 
```
<div class="wrapper" id="agileLike-board-wrapper">
  <script> table.init(); </script>
</div>
```
### Methods:

- `init(?incomingStatuses, ?data)`: Init a table. Without params will init with data mock.
