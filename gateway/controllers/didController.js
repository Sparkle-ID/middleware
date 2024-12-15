
// @route GET /api/did
// @access Public
const getDID = async (req, res) => {
    res.status(200).json({ message: "Retrieving DID" });
}

module.exports = { getDID };