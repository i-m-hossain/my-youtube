import Body from "./Components/Body";
import Button from "./Components/Button";
import ButtonList from "./Components/ButtonList";
import VideoCard from "./Components/VideoCard";
import VideoContainer from "./Components/VideoContainer";
import useFetchVideos from "./customHook/fetchYoutubeVideos";

function App() {
    const [loading, error, videos] = useFetchVideos();
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
                    {videos.map((video, i) => (
                        <VideoCard key={i} video={video} />
                    ))}
                </VideoContainer>
            </Body>
        </>
    );
}

export default App;
