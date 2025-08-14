
const mongoose = require('mongoose');

const mongo = () => {
    mongoose.connect(
        'mongodb+srv://mohammadfaijansari6:FaijAnsari99720@cluster0.dx8qmzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
        .then(() => {
            console.log("MongoDB Connected ✅");
        })
        .catch(err => {
            console.error("Connection Error ❌", err);
        });
};

module.exports = mongo;
