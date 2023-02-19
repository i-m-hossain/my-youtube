const YOUTUBE_API_KEY = "AIzaSyC2rFyDqtg1HTfDCUH0quYMkdZbFCdkRiI";
export const YOUTUBE_VIDEO_LIST_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
    YOUTUBE_API_KEY;
export const YOUTUBE_URL = "https://www.youtube.com/embed/";

export const GET_YOUTUBE_VIDEO_DESCRIPTION_API = (id) =>
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=` +
    YOUTUBE_API_KEY;
export const GET_YOUTUBE_COMMENT_THREAD_API = (id) =>
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=46&videoId=${id}&key=` +
    YOUTUBE_API_KEY;
