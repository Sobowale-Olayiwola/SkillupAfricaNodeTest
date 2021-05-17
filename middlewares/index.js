const express = require('express'),
    layouts = require("express-ejs-layouts");
module.exports = (app) =>{
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    // Setup template
    app.set('view engine', 'ejs');
    app.use(express.static("public"));
    app.use(layouts);
}

