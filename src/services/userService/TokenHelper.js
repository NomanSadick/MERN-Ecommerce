const jwt = require("jsonwebtoken");

exports.EncodeToken = (email) => {
    return token = jwt.sign({ email: email }, "abc1234", { expiresIn: '1h' });
}

exports.DecodeToken=(token)=> {
    try {
        return jwt.verify(token, 'abc1234');
    }
    catch(err) {
        return null;
    }
}