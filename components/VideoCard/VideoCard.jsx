import abbrev from "../../utils/abbrev";
import Link from "next/link";

export default function VideoCard({ data }) {
    return (
        <div className="mx-auto cursor-pointer hover:bg-gray-300 p-3">
            <Link href={`/watch?v=${data.id}`}>
                <div>
                    <div className="relative">
                        <img src={data.thumbnail.url} className="rounded-sm" alt="thumbnail" draggable="false" />
                        <span className="bg-gray-800 text-white text-sm absolute bottom-0 right-0">{data.duration_formatted}</span>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-md font-semibold">{data.title}</h4>
                        <p className="mt-2 font-semibold text-sm text-grey-darker">{data.channel.name}</p>
                        <p className="mt-1 font-normal text-xs text-grey-darker">
                            {abbrev(data.views)} views • {data.uploadedAt}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
