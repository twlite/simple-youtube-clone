import Navbar from "../components/Navbar/Navbar";
import { Component } from "react";
import abbrev from "../utils/abbrev";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default class Homepage extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            video: null
        };
    }

    componentDidMount() {
        const q = new URLSearchParams(window.location.search).get("v");
        if (!q) return;

        if (!this.state.video)
            fetch(`${window.location.origin}/api/video?id=${q}`)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.data) return;
                    this.setState({ video: data.data });
                })
                .catch((e) => {
                    // window.location.href = "/404";
                });
    }

    render() {
        if (!this.state.video)
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
                <div className="container">
                    <div className="p-2 ml-10">
                        <div className="aspect-w-8 aspect-h-4">
                            <iframe src={`https://www.youtube.com/embed/${this.state.video.id}?autoplay=1&enablejsapi=1`} autoplay allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe>
                        </div>
                        <div className="info border-b-2 border-gray-500 pb-3 flex relative">
                            <div>
                                <h1 className="text-xl font-semibold text-gray-900">{this.state.video.title}</h1>
                                <span className="text-base font-medium opacity-70">
                                    {abbrev(this.state.video.views)} views • {this.state.video.uploadedAt}
                                </span>
                            </div>
                            <div className="absolute right-0 bottom-0">
                                <div className="flex text-gray-500 space-x-5 border-gray-600 border-b-2">
                                    <span className="cursor-pointer font-medium" title={this.state.video.ratings.likes.toLocaleString()}>
                                        <FontAwesomeIcon icon={faThumbsUp} className="h-8 w-8" /> {abbrev(this.state.video.ratings.likes)}
                                    </span>
                                    <span className="cursor-pointer font-medium" title={this.state.video.ratings.dislikes.toLocaleString()}>
                                        <FontAwesomeIcon icon={faThumbsDown} className="h-8 w-8" /> {abbrev(this.state.video.ratings.dislikes)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex">
                            <img src={this.state.video.channel.icon} alt="icon" className="h-14 w-14 rounded-full" />
                            <div className="ml-5">
                                <h1 className="font-semibold text-lg">{this.state.video.channel.name}</h1>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
