const bcrypt = require('bcrypt');

const hashPassowrd = async(password) => {
    const salt  = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

exports.hashPassowrd = hashPassowrd;