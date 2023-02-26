import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../config";
import { cacheResults } from "../store/slices/searchSlice";
import SearchSuggestionItem from "./SearchSuggestionItem";

function SearchVideos() {
    const [query, setQuery] = useState(null);
    const [result, setResult] = useState(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cachedResult = useSelector((state) => state.search.searchResult);

    useEffect(() => {
        /*
         * Debounce function will execute after 200ms(after user stop typing)
         * Clearing timeout will cancel the intermediate setTimeout
         * For further optimization, the search results are cached in the store
         * Before calling the API, the query is checked if it is present in the store
         */
        let debounceFunction;
        if (query) {
            debounceFunction = setTimeout(() => {
                if (cachedResult[query]) {
                    //getting the cache result
                    setResult(cachedResult[query]);
                } else {
                    // calling api for search result
                    getSearchSuggestions(query);
                }
            }, 200);
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

            // the search results will be added to cache
            dispatch(cacheResults({ [query]: data[1] }));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {/* Search input and button */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (query) {
                        navigate(
                            "/results?search_query=" +
                                query.split(" ").join("+")
                        );
                    }
                }}
                className="w-full flex justify-center"
            >
                <input
                    type="text"
                    onFocus={() => setShowSuggestions(true)}
                    className="border w-1/2 rounded-l-full p-2  pl-4 border-gray-400 outline-none "
                    onChange={(e) => setQuery(e.target.value)}
                    onBlur={() => {
                        setShowSuggestions(false);
                    }}
                    value={query}
                />

                <div className="border rounded-r-full border-gray-400 px-4 pt-2 bg-gray-100 hover:bg-gray-200 ">
                    <button type="submit">
                        <BsSearch />
                    </button>
                </div>
            </form>

            {/* loading shimmer */}
            {loading && (
                <div className="flex space-x-4 absolute top-11 mr-11 z-10 border rounded  w-1/2 bg-white shadow-lg animate-pulse h-16 px-4 py-5">
                    <div className="bg-slate-200 border rounded-full h-5 w-5 "></div>
                    <div className="bg-slate-200 border rounded full h-5 w-40"></div>
                </div>
            )}

            {/* result data  */}
            {result && showSuggestions && (
                <div className="absolute top-11 mr-11 z-10 border rounded  w-1/2 bg-white shadow-lg">
                    {result &&
                        result.map((item) => (
                            <SearchSuggestionItem
                                key={item}
                                item={item}
                                setQuery={setQuery}
                            />
                        ))}
                </div>
            )}
        </>
    );
}

export default SearchVideos;
