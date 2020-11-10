const worker = require("../helper/worker")

module.exports = async(req, res) => {
    var url = req.query.url
    if (url == undefined) {
        res.setHeader('Cache-Control', 's-maxage=3600')
        res.json({ status: false, msg: "Hoichoi Link is Required" })
    } else {
        var data = await worker.data(url.replace("https://www.hoichoi.tv", ""))
        if (data == "not_found") {
            res.setHeader('Cache-Control', 's-maxage=3600')
            res.json({ status: false, msg: "You are sending an Invalid Link" })
        } else if (data == "token_err") {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.json({ status: false, msg: "Your username or password seems to incorrect. Kindly recheck Environment variables or rebuild the app" })
        } else if (data == "drm") {
            res.setHeader('Cache-Control', 's-maxage=3600')
            res.json({ status: false, msg: "Sorry this content is DRM protected try with another video" })
        } else if (data == "max") {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.json({ status: false, msg: "Sorry maximum streaming, Pls don't use same account for stream on Hoichoi's official site or App" })
        } else if (data == "serious") {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.json({ status: false, msg: "Sorry something serious happened. Please Check Logs" })
        } else if (data == "other") {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.json({ status: false, msg: "Failed to recognize error. Please Check Logs" })
        } else {
            res.setHeader('Cache-Control', 's-maxage=500')
            res.json(data)
        }
    }
}