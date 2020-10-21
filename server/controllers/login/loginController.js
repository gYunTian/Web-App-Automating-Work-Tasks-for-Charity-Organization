const User = require('../../models/user.model')

//const generateToken = require('./path/to/generateToken');

async function login(req, res) {

    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });

        if (!user) throw 'Email not found';

        //user exists, check password
        if (password != user.password) {
            throw 'Incorrect password';
        }
        
        console.log(email, password, 'logged in');

        res.status(200).end(JSON.stringify({
            'status': 'user logged in',
            'email': email,
            'name': user.name

        }));

    } catch (error) {
        console.log('Error logging in user');
        console.log(error);
        
        res.status(500).end(JSON.stringify({
            'status': 'Error logging in user'
        }));
    }
}

module.exports = {
    login
}