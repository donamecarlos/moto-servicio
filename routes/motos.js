const express = require("express");
const router = express.Router();

const Moto = require("../models/Moto");

router.get("/", async (req, res) => {

    try {

        const motos = await Moto.find();

        res.json(motos);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;