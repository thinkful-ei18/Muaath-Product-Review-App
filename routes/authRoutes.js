'use strict';
const express = require('express');
const passport = require('passport');

module.exports = app => {
  //route handler to handle google authentication.
  //auth google is the route specified above in the callbackURL
  //string google after authenticate tells passport what strategy to use
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  //once user signs in we need to get authentication token created by google
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/currentUser', (req, res) => {
    res.send(req.user);
    console.log(req.user);
  });
};
