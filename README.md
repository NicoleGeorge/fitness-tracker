# Homework: Workout Tracker using MongoDB

For this assignment, based on the breif, I creates a workout tracker. The front end code was provided, but I creates the Mongo database with a Mongoose schema and handled routes with Express.

## Deployed Application

[Fitness Tracker App](https://hidden-forest-59738.herokuapp.com/)

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals quicker when they track their workout progress.

## Build Process

1. created the workout.js model
2. linked with MongoDB to create the workout schema
3. routing - api.js file - to get, and update the user data

Based on the above build, the user is able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View multiple the combined weight of multiple exercises on the `stats` page.

## References used

* api.js file based on - [SirPotatoIV - GitHub Repo]('https://github.com/SirPotatoIV/fitness-tracker')

* Stack overflow - mongodb searches, api routing examples

* Udemy courses - Edwin Diaz + Angela Yu
