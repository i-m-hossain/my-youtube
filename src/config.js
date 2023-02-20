const YOUTUBE_API_KEY = "AIzaSyC2rFyDqtg1HTfDCUH0quYMkdZbFCdkRiI";
export const YOUTUBE_VIDEO_LIST_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=BD&key=" +
    YOUTUBE_API_KEY;
export const YOUTUBE_URL = "https://www.youtube.com/embed/";

export const GET_YOUTUBE_VIDEO_DESCRIPTION_API = (videoId) =>
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=` +
    YOUTUBE_API_KEY;
export const GET_YOUTUBE_COMMENT_THREAD_API = (videoId) =>
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=46&videoId=${videoId}&key=` +
    YOUTUBE_API_KEY;
export const GET_YOUTUBE_COMMENT_REPLIES = (parentCommentId) =>
    `https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=${parentCommentId}&key=` +
    YOUTUBE_API_KEY;
export const YOUTUBE_CATEGORIES =
    "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=bd&key=" +
    YOUTUBE_API_KEY;
