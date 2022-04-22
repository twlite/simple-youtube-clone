import YouTube from "youtube-sr";

export default async (req, res) => {
    const query = req.query.query;
    if (!query) return res.json({ data: null });

    const entry = Date.now();
    return res.json({
        data: await YouTube.search(query, { type: "video" })
            .then((x) => x.map((m) => m.toJSON()))
            .catch((e) => null),
        time: Date.now() - entry
    });
};
