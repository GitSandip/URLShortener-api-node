import UrlEntry from "../Model/url.js";

const postUrl = async (req, res) => {
    try {
        // Validate that both long_url and back_half are provided
        const { long_url, back_half } = req.body;
        console.log(req.body);
        
        if (!long_url || !back_half) {
            return res.status(400).json({ message: "Both long_url and back_half are required." });
        }

        // Check if a URL with the given back_half already exists
        const exist = await UrlEntry.find({
            long_url: long_url,
            back_half: back_half
        });

        if (exist.length > 0) {
            return res.status(400).json({ message: "Try with a different back-half." });
        }

        // Create a new short URL
        const new_short_url = `${process.env.ORIGINAL_DOMAIN}/${back_half}`;

        // Create a new URL entry
        const newUrlEntry = new UrlEntry({
            long_url: long_url,
            back_half: back_half,
            short_url: new_short_url,
        });

        await newUrlEntry.save();

        return res.status(201).json({ message: "URL entry created successfully.", short_url: new_short_url });
    } catch (error) {

        console.error("Error occurred:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export default postUrl;
