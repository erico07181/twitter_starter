import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox(props) {
  // React.useEffect(() => {
  //   console.log(props);
  // }, []);

  function handleOnTweetTextChange(event) {
    props.setTweetText(event.target.value);
  }

  function handleOnSubmit() {
    var newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length,
    };
    // var newProfile = { ...props.userProfile };
    // newProfile.numTweets += 1;
    // props.setUserProfile(newProfile);
    props.setTweets([...props.tweets, newTweet]);
    props.setTweetText("");
  }

  var tweetLen = props.tweetText.length;

  return (
    <div className="tweet-box">
      <TweetInput
        value={props.tweetText}
        handleOnChange={handleOnTweetTextChange}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetLen={tweetLen} />
        <TweetSubmitButton
          handleOnSubmit={handleOnSubmit}
          tweetLen={tweetLen}
        />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  if (props.tweetLen == 0) {
    return <span></span>;
  } else {
    let rem = 140 - props.tweetLen;
    return <span>{rem}</span>;
  }
}

export function TweetSubmitButton({ handleOnSubmit, tweetLen }) {
  let isDisabled = false;
  if (tweetLen == 0 || tweetLen > 140) {
    isDisabled = true;
  }

  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button
        className="tweet-submit-button"
        onClick={handleOnSubmit}
        disabled={isDisabled}
      >
        Tweet
      </button>
    </div>
  );
}
