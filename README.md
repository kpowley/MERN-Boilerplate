# MERN-Boilerplate

A super light boilerplate for MERN projects.

## Setup

The boilerplate includes a backend API under the route localhost:500/api

The frontend has a simple 'Hello' component that established state, fetches the backend API and renders the headline.

## Extra Features

Branches with extra functionality:

1. [Crud](https://github.com/kpowley/MERN-Boilerplate/tree/crud) - Create, Read, Update and Delete data from the database via API

## Starting Dev Server

Naviate to the project folder in the terminal and run `npm run dev`

This will symaltaniously run nodemon for the backend and create-react-app's frontend server

:arrow_right: When saving changes you will find the frontend server restarts faster than the backend, causing 500 server errors. Just wait a second and refresh the broswer to allow the backend time to launch.
