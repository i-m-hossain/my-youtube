import React from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_CATEGORIES, YOUTUBE_VIDEO_LIST_API } from "../config";
import useFetchData from "../customHook/fetchYoutubeVideos";
import LiveVideoCard from "../HOC/LiveVideoCard";
import Body from "./Body";
import ButtonList from "./ButtonList";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import VideoContainer from "./VideoContainer";

const Home = () => {
  const [loading, error, data] = useFetchData(YOUTUBE_VIDEO_LIST_API);
  const [catLoading, catError, catData] = useFetchData(YOUTUBE_CATEGORIES);
  const buttonVideoList = useSelector(
    (store) => store.buttonListVideos.buttonListVideos
  );

  if (loading) {
    return (
      <Body>
        <VideoContainer>
          {new Array(12).fill("").map((item, i) => (
            <Shimmer key={i} />
          ))}
        </VideoContainer>
      </Body>
    );
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  console.log(buttonVideoList);
  return (
    <>
      <Body>
        <ButtonList loading={catLoading} error={catError} data={catData} />
        <VideoContainer>
          <LiveVideoCard
            video={
              buttonVideoList?.items
                ? buttonVideoList?.items[0]
                : data?.items[0]
            }
          />

          {buttonVideoList?.items
            ? buttonVideoList?.items
                .slice(1)
                .map((video, i) => (
                  <VideoCard key={i} video={video} id={video.id.videoId} />
                ))
            : data?.items
                .slice(1)
                .map((video, i) => (
                  <VideoCard key={i} video={video} id={video.id} />
                ))}
        </VideoContainer>
      </Body>
    </>
  );
};

export default Home;
