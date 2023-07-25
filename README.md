#

# Project Name: city-explorer-api

**Author**: Bernard J Fernando
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

Building own custom API server to provide data for the City Explorer front-end application. This will provide the users with information related to interested cities, in addition to the map, eg weather, interesting information about the area (provided by a variety of third party APIs that this server will manage.)

## Getting Started

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

- Created a Github repository named **city-explorer-api** (branched off the main)
- **Cloned** it to the directory on local machine
- made **city-explorer-api** pwd
- Ran **npm init** to create a new project
- Installed express - **npm install express**
- Installed cors - **npm install cors**
- Installed dotenv - **npm install dotenv**
- Manually added - **.gitignore** (on commandline **touch .gitignore**)
- Manually added - **.env** (on commandline **touch .env**)
- Added a directory named **data**, created a file in it named **weather.jason** (touch: **mkdir data**; **touch data/weather.json**)
- Created a file **serve.js**
- copied data from given **weather.json** into **data/weather.json**
- included **.env** and **nord_modules** in **.gitignore**
- included **PORT=8081** in **.env**

file server.js

1. Imported **express** from **node_module**: **const express = require("express")**
2. imported **cors** - **const cors = require("cors")**
3. run the config method of dotenv - **require("dotenv").config()**
4. specified the port - **const PORT = process.env.PORT || 8081**
5. Instanciate an instance of express **const app = express()**
6. **app.use(cors());**
7. app.listen (PORT.() => console.log(`app is running on port ${PORT}`));
8. city-explorer-api git:(main) **node server.js**
9. Browser: Nothing shows on localserver:8081
10. **app.get("/", (request, response) => {**
    **response.sent("I am working - localserver");**
    **});**
11. included **const data = require("./data/weather.json");**
12. city-explorer-api git:(main) **node server.js**
13. Thanks Sam - it now works
14. **app.get("/weather", (request, reaponse) => {**
    response.json(data)
    });
15. This works.

## Architecture

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

A local server is a software application (piece of software): creating an environment on the local computer that can handle HTTP requests and responses etc. Architecture includes the below:

1. An Operating system : Ubuntu/ Linux/Windows/MacOS
2. Nord.js - js runtime that allows JS code to be executed outside of a web browser.
3. Serverside framework: Express.
4. HTTP server: Express/Nord.js built in http module ???
5. Middleware: Axios acts like a middleware between request and response to modify before it is sent or received . Axios enhances API requests and streamline error handling.

## Change Log

This starts with just rendering a map and it is now taken a step forward.

## Credit and Collaborations

Followed Chris H's code and then Sam L helped debug. Thanks so much to you both.
