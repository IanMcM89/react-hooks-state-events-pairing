import React from "react";

function Comments({video}) {
    return (
        <div >
            <h3>{video.comments.length} Comments</h3>
            {video.comments.map(comment => {
                return <>
                    <h3>{comment.user}</h3>
                    <p>{comment.comment}</p>
                </>
            })}
        </div>
    );
}

export default Comments