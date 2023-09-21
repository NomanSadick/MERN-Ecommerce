exports.UserLogin = async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'User Login'
    })
}

exports.VerifyLogin = async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Verify Login'
    })
}

exports.UserLogout = async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'User Logout'
    })
}