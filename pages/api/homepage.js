import YouTube from "youtube-sr";

export default async (req, res) => {
    return res.json(
        await YouTube.homepage()
            .then((x) => x.map((m) => m.toJSON()))
            .catch((e) => [])
    );
};
