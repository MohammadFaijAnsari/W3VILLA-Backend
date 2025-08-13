const express = require('express');
const app = express();
const urlRoute = require('./routes/url');
const URL=require('./models/url')
const { connectToMongoDB } = require('./connection');

const port = 8001;

// ✅ Connect to MongoDB
connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log("✅ MongoDB Connected!"))
    .catch(err => console.log("❌ Connection Error =", err));

// ✅ Middleware (must be before routes)
app.use(express.json()); // for JSON
app.use(express.urlencoded({ extended: true })); 
 // for form data

// ✅ Routes
app.use('/url', urlRoute);
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { 
                $push: { 
                    visitHistory: { timestamp: new Date() } // ✅ Proper Date object
                }
            },
            { new: true } // Return updated document
        );

        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        // Redirect to the stored URL
        return res.redirect(entry.redirectUrl);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Start server
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
});
