import React from "react";
import { Col, Card } from "react-bootstrap";
// icon
import Avatar from "@mui/material/Avatar";
import { useHistory } from "react-router-dom";

const VideoCard = () => {
  const history = useHistory();

  const handlePush = () => {
    history.push("/watch");
  };

  const handleAvatar = () => {
    history.push("/preview-channel");
  };

  return (
    <>
      <Col xl={3} className="my-2">
        <Card>
          <Card.Img
            onClick={handlePush}
            variant="top"
            src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
          />
          <div className="d-flex pt-3">
            <Avatar
              style={{ cursor: "pointer" }}
              src="/broken-image.jpg"
              onClick={handleAvatar}
            />
            <div className="mx-2">
              <h6 className="mb-0 text-capitalize title">Youtube clone</h6>
              <p className="mb-0 name">John Doe</p>
              <p className="bottom_text">123 views . 10 hours ago</p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default VideoCard;
