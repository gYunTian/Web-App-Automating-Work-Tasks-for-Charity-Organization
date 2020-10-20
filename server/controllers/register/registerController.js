const User = require('../../models/user.model')

//const generateToken = require('./path/to/generateToken');

async function register(req, res) {

    const { email, name, password } = req.body;

    // if (await User.findOne({ email: email })) {
    if (email == 'test@email') {
        res.setHeader('Content-type', 'application/json');
        
        res.status(409).end(JSON.stringify({
            'error': 'Email already exist'
        }))
    }

}

module.exports = {
    register
}
