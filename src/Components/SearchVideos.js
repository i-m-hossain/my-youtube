import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../config";
import SearchSuggestionItem from "./SearchSuggestionItem";

function SearchVideos() {
    const [query, setQuery] = useState(null);
    const [result, setResult] = useState(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        let debounceFunction;
        if (query) {
            debounceFunction = setTimeout(
                () => getSearchSuggestions(query),
                200
            );
        }

        return () => clearTimeout(debounceFunction);
        // eslint-disable-next-line
    }, [query]);
    const getSearchSuggestions = async () => {
        try {
            setLoading(true);
            const response = await fetch(YOUTUBE_SEARCH_SUGGESTION_API(query));
            const data = await response.json();

            setResult(data[1]);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <input
                type="text"
                onFocus={() => setShowSuggestions(true)}
                className="border w-1/2 rounded-l-full p-2 pl-4  border-gray-400 outline-none "
                onChange={(e) => setQuery(e.target.value)}
                onBlur={() => setShowSuggestions(false)}
            />

            <div className="border rounded-r-full border-gray-400 px-4 pt-3 bg-gray-100 hover:bg-gray-200 ">
                <BsSearch />
            </div>

            {/* loading shimmer */}
            { loading &&(
                <div className="flex space-x-4 absolute top-11 mr-11 z-10 border rounded  w-1/2 bg-white shadow-lg animate-pulse h-16 px-4 py-5">
                    <div className="bg-slate-200 border rounded-full h-5 w-5 "></div>
                    <div className="bg-slate-200 border rounded full h-5 w-40"></div>
                </div>
            )}

            {/* result data  */}
            {result && showSuggestions && (
                <div className="absolute top-11 mr-11 z-10 border rounded  w-1/2 bg-white shadow-lg">
                    {result &&
                        result.map((item, i) => (
                            <SearchSuggestionItem key={item} item={item} />
                        ))}
                </div>
            )}
        </>
    );
}

export default SearchVideos;
