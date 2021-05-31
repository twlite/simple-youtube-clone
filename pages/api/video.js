import YouTube from "youtube-sr";

export default async (req, res) => {
    const id = req.query.id;
    if (!id) return res.json({ data: null });

    return res.json({ data: await YouTube.getVideo(`https://youtube.com/watch?v=${id}`).then(x => x.toJSON()).catch(e => null) });
}