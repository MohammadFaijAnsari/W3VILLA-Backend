const shortid = require('shortid');
const URL = require('../models/url');

async function handlegenerateshortURL(req, res) {
    try {
        const body = req.body;

        // Check if body exists and has a 'url' property
        if (!body || !body.url || typeof body.url !== 'string' || body.url.trim() === '') {
            return res.status(400).json({ error: "URL is required and must be a valid string" });
        }

        const shortId = shortid();
        await URL.create({
            shortId: shortId,
            redirectUrl: body.url.trim(),
            visitHistory: []
        });

        return res.status(201).json({ id: shortId });
    } catch (err) {
        console.error("Error creating short URL:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    handlegenerateshortURL
};
