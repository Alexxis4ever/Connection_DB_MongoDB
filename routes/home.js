const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    const urls = [
        { origin: "www.google.com/bluuweb1", shortURL: "fkjask1" },
        { origin: "www.google.com/bluuweb2", shortURL: "fkjask2" },
        { origin: "www.google.com/bluuweb3", shortURL: "fkjask3" },
        { origin: "www.google.com/bluuweb4", shortURL: "fkjask4" },
    ];
    res.render("home", { urls: urls });
})

module.exports = router