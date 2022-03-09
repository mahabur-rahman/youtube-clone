import React from "react";
// style
import "./rightsidevideo.scss";
import { useHistory } from "react-router-dom";

const RightSideVideo = ({ channelView = false }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/watch");
  };
  return (
    <div
      onClick={handleClick}
      className={`videoSmall ${channelView && "videoSmall_channelView"}`}
    >
      <div className="videoSmall__left">
        <img
          src="https://images.unsplash.com/photo-1551817958-c5b51e7b4a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="thumbnail"
          className={`videoSmall__thumbmail ${
            channelView && "videoSmall_channelView_img"
          }
          }`}
        />
      </div>

      <div className="videoSmall__right">
        {!channelView && (
          <p className="videoSmall__title text-white mb-0">
            Amazon Prime Video
          </p>
        )}

        <div className="videoSmall__texts videothumb__texts">
          <p className="videothumb__text mb-0">Channel Name</p>

          <p className="videothumb__text">110k views • 3 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideVideo;
