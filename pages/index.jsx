import Navbar from "../components/Navbar/Navbar";
import VideoCard from "../components/VideoCard/VideoCard";
import { Component } from "react";

export default class Homepage extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            videos: []
        };
    }

    componentDidMount() {
        if (!this.state.videos.length)
            fetch(`${window.location.origin}/api/homepage`)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.length) return alert("Could not fetch videos");
                    this.setState({ videos: data });
                })
                .catch((e) => {
                    alert("Could not fetch videos");
                });
    }

    render() {
        if (!this.state.videos.length)
            return (
                <div>
                    <Navbar />
                    <div className="container h-full w-full">
                        <h1 className="text-5xl text-center text-gray-600 font-semibold">Loading...</h1>
                    </div>
                </div>
            );

        return (
            <div>
                <Navbar />
                <div className="p-4 w-full">
                    <div className={`grid grid-flow-col grid-cols-4 grid-rows-3 gap-4`}>
                        {this.state.videos.slice(0, 12).map((m, i) => (
                            <VideoCard data={m} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
