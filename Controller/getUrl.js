import UrlEntry from "../Model/url.js";

export const getUrl = async (req, res) => {
    const back_half = req.params.id;

    try {
        const exist = await UrlEntry.find({
            back_half: back_half
        });

        if (exist.length > 0) {
            const long_url = exist[0].long_url;
            return res.redirect(long_url);
        } else {
            return res.status(404).json({ message: "URL not found." });
        }
    } catch (error) {
        console.log(`Error while fetching: ${error.message}`);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
