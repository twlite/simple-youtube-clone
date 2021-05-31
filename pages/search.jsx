import Navbar from "../components/Navbar/Navbar";
import { Component } from "react";
import abbrev from "../utils/abbrev";
import Link from "next/link";

export default class Homepage extends Component {

    constructor(...props) {
        super(...props);

        this.state = {
            videos: []
        };
    }

    componentDidMount() {
        const q = new URLSearchParams(window.location.search).get("query");
        if (!q) return window.location.href = "/";
        if (!this.state.videos.length) fetch(`${window.location.origin}/api/search?query=${q}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ videos: data.data || null });
            })
            .catch(e => {
                this.setState({ videos: null });
            })
    }

    render() {
        if (!this.state.videos.length) return (
            <div>
                <Navbar />
                <div className="container h-full w-full">
                    <h1 className="text-5xl text-center text-gray-600 font-semibold">{ this.state.videos === null ? "No results found!" : "Searching..." }</h1>
                </div>
            </div>
        )

        return (
            <div>
                <Navbar />
                <div className="p-4">
                    <div className="container">
                        <div class="block">
                            {
                                this.state.videos.map((m, i) => (
                                    <Link href={`/watch?v=${m.id}`}>
                                        <div className="p-3 flex space-x-10 hover:bg-gray-300 cursor-pointer" key={i}>
                                            <div>
                                                <img src={m.thumbnail.url} className="h-52 w-96" alt="thumbnail" />
                                            </div>
                                            <div>
                                                <h1 className="text-gray-900 font-semibold text-xl">{m.title}</h1>
                                                <span className="font-semibold opacity-70">{abbrev(m.views)} Views • {m.uploadedAt}</span>
                                                <div className="flex space-x-2 py-1">
                                                    <img src={m.channel.icon} className="h-10 w-10 rounded-full" draggable="false" />
                                                    <h1 className="text-gray-900 font-medium opacity-70 p-2">{m.channel.name}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
