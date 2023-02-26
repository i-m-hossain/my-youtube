import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

import Button from "./Button";

function ButtonList({ loading, error, data }) {
    const [count, setCount] = useState(0);
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
        <div className="m-4 flex gap-4 flex-wrap items-center transition-all">
            <MdOutlineNavigateNext
                className={`rotate-180 ${
                    count < 9 ? "cursor-not-allowed" : " cursor-pointer"
                }`}
                size={25}
                onClick={() => {
                    if (count >= 9) {
                        setCount((prev) => prev - 10);
                    }
                }}
            />

            {data?.items?.slice(count, count + 10).map((item) => (
                <Button key={item.id} text={item?.snippet?.title} />
            ))}
            <MdOutlineNavigateNext
                onClick={() => {
                    if (count + 10 < data.items.length) {
                        setCount((prev) => prev + 10);
                    }
                }}
                className={`${
                    count + 10 > data.items.length
                        ? "cursor-not-allowed"
                        : " cursor-pointer"
                }`}
                size={25}
            />
        </div>
    );
}

export default ButtonList;
