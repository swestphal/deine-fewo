exports.getFewos = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route displays the holiday homes"
    })
}