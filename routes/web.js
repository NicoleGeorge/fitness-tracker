const router = require("express").Router();
const fs = require('fs');
const path = require('path');

router.get("/" , (req, res) => {
    console.log("I'm doing this right..woot woot");
    const appPath = path.join(__dirname, '/../public/app.html')
    res.sendFile(appPath)
});

router.get("/exercise" , (req, res) => {
    console.log("I'm doing this right..woot woot");
    const appPath = path.join(__dirname, '/../public/exercise.html')
    res.sendFile(appPath)
});

router.get("/stats" , (req, res) => {
    console.log("I'm doing this right..woot woot");
    const appPath = path.join(__dirname, '/../public/stats.html')
    res.sendFile(appPath)
});

module.exports = router;