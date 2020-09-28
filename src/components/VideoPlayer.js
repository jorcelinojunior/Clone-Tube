import React from "react";
import { connect } from "react-redux";
import {
  Advertisement,
  Embed,
  Container,
  Header,
  Divider
} from "semantic-ui-react";
import reproduzVideo from "./../store/actions/reproduz-video";

const VideoPlayer = props => {
  return (
    <div className="video-player">
      {/* <div><p>{JSON.stringify(props)}</p></div> */}
      {!props.video.id && (
        <Advertisement
          style={{ height: "430px" }}
          unit="banner"
          test="Escolha um vídeo para reproduzir"
        ></Advertisement>
      )}
      {props.video.id && (
        <div>
          <Embed
            id={props.video.id.videoId}
            placeholder={props.video.snippet.thumbnails.high.url}
            source="youtube"
          />
          <Container text>
            <Header className="video-title" as="h2">{props.video.snippet.title}</Header>
            <Divider />
            <p className="video-description">{props.video.snippet.description}</p>
          </Container>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    video: state.reproduzVideo.video
  };
};

export default connect(mapStateToProps, null)(VideoPlayer);
