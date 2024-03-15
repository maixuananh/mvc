const User = require('../models/User');



exports.getHomePage = (req, res) => {
    // Example of fetching data from model (usually database)
    const user = new User("John Doe", "john@example.com");
    
    // Example of rendering view
    res.render('home', { user });
};