# YouTube playlist Maker
A localhost web application to create and store songs(videos) into a playlist

It was designed to practice Vue with MongoDB, NodeJS; **this works only on localhost, not remotely hosted anywhere**

***********

## Built using
- [VueJS](https://vuejs.org/) (client-side)
- [ExpressJS](https://expressjs.com/) (server-side) for file-server
- [Mongoose](https://www.npmjs.com/package/mongoose) (work with database) for mongodb-server


## Key features
1. Add new songs
2. Create collections (playlists) of available songs

## Basic workflow
1. Start the server
	* file server is present in `server` folder
		- works with storing data in local files
		
		```
		cd server
		npm i
		node index
		```
	* mongo server is present in `mongo-server` folder
		- need to connect to local mongodb
		- run `mongod` to start the local mongo database server

		```
		cd mongo-server
		npm i
		mongod
		node index
		```

2. Start the client (`cd client`)
	* Vue based application to show basic features of the framework

		```
		cd client
		npm i
		npm run serve
		```