import { countryList } from "./lib/countryList";
export const YOUTUBE_VIDEO_LIST_API =
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${
        countryList[Math.floor(Math.random() * countryList.length)]
    }&key=` + process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_URL = "https://www.youtube.com/embed/";

export const GET_YOUTUBE_VIDEO_DESCRIPTION_API = (videoId) =>
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=` +
    process.env.REACT_APP_YOUTUBE_API_KEY;
export const GET_YOUTUBE_COMMENT_THREAD_API = (videoId) =>
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=46&videoId=${videoId}&key=` +
    process.env.REACT_APP_YOUTUBE_API_KEY;
export const GET_YOUTUBE_COMMENT_REPLIES = (parentCommentId) =>
    `https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=${parentCommentId}&key=` +
    process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_CATEGORIES =
    "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=bd&key=" +
    process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_API = (searchQuery) =>
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=` +
    process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_SUGGESTION_API = (searchTerm) =>
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
    searchTerm;
export const OFFSET_LIVE_CHAT=25
export const OFFSET_SEARCH_RESULT=50
