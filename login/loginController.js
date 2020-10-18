const generateToken = require('./path/to/generateToken');


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await emailExists(email);

        const { id, role } = result;

        await generateToken(res, id, role);



    } catch (err) {
        return res.status(500).json(err.toString());
    }
}