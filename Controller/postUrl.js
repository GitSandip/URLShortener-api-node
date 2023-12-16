import UrlEntry from "../Model/url.js";


const postUrl = async (req, res) => {
    const { long_url, back_half } = req.body;

    try {
        const exist = await UrlEntry.find({
            back_half: back_half    
        });

        if (exist.length > 0) {
            return res.status(400).json({ message: "Try with a different back-half." });
        }

        const new_short_url = `${process.env.ORIGINAL_DOMAIN}/${back_half}`;

        const newUrlEntry = new UrlEntry({
            long_url: long_url,
            back_half: back_half,
            short_url: new_short_url,
        });

        await newUrlEntry.save();

        return res.status(201).json({ message: "URL entry created successfully.", short_url: new_short_url });
    } catch (error) {
        console.log("error occured")
        return res.status(500).json({ error: error.message });
    }
};

export default postUrl;
