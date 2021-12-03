import React, {useState} from "react";
import video from "../data/video.js";
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);
  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);
  const [isHidden, setIsHidden] = useState(false);
  
  function handleClick() {
    setIsHidden(!isHidden)
  }

  function handleUpVote() {
    setUpVotes(upVotes + 1);
  }

  function handleDownVote() {
    setDownVotes(downVotes + 1);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={handleUpVote}>{upVotes} 👍</button>
      <button onClick={handleDownVote}>{downVotes} 👎</button>
      <br/>
      <button display={{display : 'block'}} onClick={handleClick}>{isHidden ? 'ShowComments' : 'Hide Comments'}</button>
      <br/>
      {isHidden ?  null : <Comments video={video}/>}
    </div>
  );
}

export default App;
