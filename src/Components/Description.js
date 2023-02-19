import React from "react";

function Description({ snippet, statistics, children }) {
    return (
        <>
            <div>
                <span className="font-medium">{snippet.title} | </span>
                {snippet?.tags?.slice(0, 3).map((item, i) => (
                    <span className="font-medium" key={item}>
                        {item}{" "}
                        {i !== snippet?.tags?.slice(0, 3).length - 1 && "|"}{" "}
                    </span>
                ))}
            </div>
            <h2 className="font-med">{snippet.channelTitle}</h2>
            <div className="flex space-x-2">
                <span>
                    {statistics?.viewCount > 1000000
                        ? Math.floor(statistics.viewCount / 1000000) + "M"
                        : Math.floor(statistics.viewCount / 1000) + "K"}{" "}
                    views |
                </span>
                <span className="list-decimal">
                    published at {new Date(snippet.publishedAt).toDateString()}
                </span>
            </div>
            {children}
        </>
    );
}

export default Description;
