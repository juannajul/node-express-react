# node-express-react


## Set up project and run project.
* ` $ git clone https://github.com/juannajul/node-express-react.git`.
* ` $ cd node-express-react`.
* ` $ cd server`.
* ` $ npm install`. server app will run in port 5000
*  run server : `$ npm run dev`.
* Go to cleint folder for react app ` $ cd to client folder`.
* ` $ npm install`.
* `npm start`. react app will run in port 3000.


## API:

- List Posts:
*  url: `127.0.0.1:5000/api/posts`.

   `` response: 
    "items": [
        {
        "id": 1,
        "title": "Item 1",
        "description": "This is the description for item 1."
        },
        {
        "id": 2,
        "title": "Item 2",
        "description": "This is the description for item 2."
        },
        {
        "id": 3,
        "title": "Item 3",
          "description": "This is the description for item 3."
        }
    ]``

- Restrieve Post:
* url: `127.0.0.1:3000/api/posts/1`.
    ``response:
    {
        id:1,
        title:"Item 1",
        description:"This is the description for item 1."
    }``