import classes from './MyPosts.module.css'
import Post from './Posts/Post'
import React from "react";

export default function MyPosts(props) {

    return (
        <div className={classes.myPost}>
            <p>MyPosts:</p>
            <div className={classes.addPost}>
                <textarea  onChange={props.changeArea} value={props.myPosts._postMessage} name="addPost"
                          id="1" cols="20" rows="5">
                    gg
                </textarea>

                <div>
                    <button onClick={props.addPost}>Add post!</button>
                </div>

            </div>
            {
                props.myPosts.posts.map(value => {
                    return <Post text={value.text} likes={value.likes}/>
                })
            }
        </div>
    )
}
