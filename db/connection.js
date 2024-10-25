const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        await mongoose.connect('mongodb+srv://sahupallavi300:pallavi300@cluster0.whibo.mongodb.net/chat_app?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
