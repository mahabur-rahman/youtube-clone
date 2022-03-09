import React from "react";
// style
import "./watch.scss";
import {
  MoreHoriz,
  PlaylistAdd,
  Reply,
  ThumbDownAlt,
  ThumbUpAlt,
} from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
// video
import videoUrl from "../../assets/videos/video.mp4";
// comp
import RightSideVideo from "../RightSideVideo/RightSideVideo";

const Watch = () => {
  return (
    <>
      <section id="watchVideo">
        <div className="watch mt-5 pt-2">
          <div className="watch__wrap">
            {/* left side video */}
            <div className="watch__left">
              <video className="watch__video" autoplay controls>
                <source src={videoUrl} type="video/mp4" />
              </video>

              <div className="watch__leftBtm">
                <h1 className="watch__title text-light">Amazon Prime Video</h1>

                <div className="watch__videoInfo">
                  <div className="watch__videoInfoLeft">
                    <p className="videothumb__text">123 views • 03 Feb 2022</p>
                  </div>

                  <div className="watch__videoInfoRight">
                    <div className="watch__likeContainer">
                      <div className="watch__likeWrap">
                        <div className="watch__likeBtnContainer color--gray">
                          <ThumbUpAlt className="watch__icon" />
                          <p>15k</p>
                        </div>

                        <div className="watch__likeBtnContainer color--gray">
                          <ThumbDownAlt className="watch__icon" />
                          <p>200</p>
                        </div>
                      </div>

                      <div className="watch__likeDislikes" />
                    </div>

                    <div className="watch__likeBtnContainer color--gray">
                      <Reply className="watch__icon share-icon" />
                      <p>SHARE</p>
                    </div>

                    <div className="watch__likeBtnContainer color--gray">
                      <PlaylistAdd className="watch__icon play-addIcon" />
                      <p>SAVE</p>
                    </div>

                    <div className="watch__likeBtnContainer color--gray">
                      <MoreHoriz className="watch__icon play-addIcon" />
                      <p>SAVE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="watch__details">
                <div className="watch__detailsContainer">
                  <div className="videothumb__details watch__avatarWrap d-flex">
                    <Avatar className="avater__ico" />

                    <div className="videothumb__channel mx-3">
                      <h6 className="videothumb__title text-light">
                        Codevaluation
                      </h6>

                      <p className="videothumb__text watch__subCount">
                        4.85M Subscribers
                      </p>
                    </div>
                  </div>
                  <Button
                    className="watch__subBtn"
                    color="primary"
                    variant="contained"
                  >
                    SUBSCRIBE
                  </Button>
                </div>

                <div className="watch__description">
                  <p className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur eum natus corrupti quibusdam autem libero omnis odio
                    incidunt nostrum quaerat.
                  </p>
                  <p className="watch__showMore">SHOW MORE</p>
                </div>
              </div>
            </div>
            {/* right side video */}
            <div className="watch__right mb-4">
              <RightSideVideo />
              <RightSideVideo />
              <RightSideVideo />
              <RightSideVideo />
              <RightSideVideo />
              <RightSideVideo />
              <RightSideVideo />
              <RightSideVideo />
              <RightSideVideo />
              <RightSideVideo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Watch;
