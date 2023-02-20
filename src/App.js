import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Body from "./Components/Body";
import Button from "./Components/Button";
import ButtonList from "./Components/ButtonList";
import VideoCard from "./Components/VideoCard";
import VideoContainer from "./Components/VideoContainer";
import { YOUTUBE_VIDEO_LIST_API } from "./config";
import useFetchData from "./customHook/fetchYoutubeVideos";
import { showMenu } from "./store/slices/sidebarSlice";

function App() {
    const dispatch = useDispatch();
    const [loading, error, data] = useFetchData(YOUTUBE_VIDEO_LIST_API);
    useEffect(() => {
        dispatch(showMenu());
        //eslint-disable-next-line
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return (
        <>
            <Body>
                <ButtonList>
                    {[
                        "Cricket",
                        "Football",
                        "React",
                        "Svelte",
                        "Tailwind",
                        "Redux",
                        "Github",
                    ].map((item, i) => (
                        <Button key={i} text={item} />
                    ))}
                </ButtonList>
                <VideoContainer>
                    {data?.items.map((video, i) => (
                        <VideoCard key={i} video={video} />
                    ))}
                </VideoContainer>
            </Body>
        </>
    );
}

export default App;
