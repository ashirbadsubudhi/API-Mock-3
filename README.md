# API-Mock-3
API for Questions and Options and Voting for options

## **Setup**

Cloning repository: `git clone https://github.com/ashirbadsubudhi/API-Mock-3/` 

Then goto folder: `cd API-Mock-3`

Install dependency: `npm install express`

Install dependency: `npm install mongoose`

Start App: `nodemon index.js`

#### **Routes**

`/questions/create`  (To create a question) \
`/questions/:id/options/create`  (To add options to a specific question)  \
`/questions/:id/delete` (To delete a question) \
`/options/:id/delete` (To delete an option) \
`/options/:id/add_vote` (To increment the count of votes) \
`/questions/:id` (To view a question and it’s options)
