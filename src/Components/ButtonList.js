import React from "react";
import Button from "./Button";

function ButtonList({ loading, error, data }) {
    if (loading) {
        return (
            <div className="m-4 flex gap-4 flex-wrap animate-pulse">
                {new Array(10).fill("").map((item, i) => (
                    <div
                        className="w-20 h-10 border px-3 py-2 rounded bg-gray-200"
                        key={i}
                    ></div>
                ))}
            </div>
        );
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return (
        <div className="m-4 flex gap-4 flex-wrap transition-all">
            {data?.items?.slice(0, 12).map((item) => (
                <Button key={item.id} text={item?.snippet?.title} />
            ))}
        </div>
    );
}

export default ButtonList;
