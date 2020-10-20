const User = require('../../models/user.model')

//const generateToken = require('./path/to/generateToken');

async function login(req, res) {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    
    console.log(email, password);
    res.status(200).send("hello");

}

module.exports = {
    login
}


// const login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const result = await emailExists(email);

//         const { id, role } = result;

//         await generateToken(res, id, role);



//     } catch (err) {
//         return res.status(500).json(err.toString());
//     }
// }