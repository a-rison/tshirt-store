const BigPromise = require('../middlewares/bigPromise')

exports.home = BigPromise(async(req, res) => {
    // const db = await something()
    res.status (200).json({
        success: true,
        greeting: "Hello from API"
    })
})

exports.homeDummy = (req, res) => {
    try {
        // const db = await something()
        res.status (200).json({
            success: true,
            greeting: "This is another dummy Route"
        })
    } catch (error) {
        console.log(error);
    }
}