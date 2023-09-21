exports.CreateProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Create Profile'
    })
}

exports.UpdateProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Update Profile'
    })
}

exports.ReadProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Read Profile'
    })
}