import classes from './MyPosts.module.css'
import Post from './Posts/Post'
import React from "react";
import {addPostCreateAction, changeAreaCreateAction} from "../../../redux/state";


export default function MyPosts(props) {
    const textAreaRef = React.createRef()
    const changeArea = () => props.store.dispatch(changeAreaCreateAction(textAreaRef.current.value))
    const addPost = () => props.store.dispatch(addPostCreateAction())

    return (
        <div className={classes.myPost}>
            <p>MyPosts:</p>
            <div className={classes.addPost}>
                <textarea ref={textAreaRef} onChange={changeArea} value={props.store.getPostMessage} name="addPost"
                          id="1" cols="20" rows="5">
                    gg
                </textarea>

                <div>
                    <button onClick={addPost}>Add post!</button>
                </div>

            </div>
            {
                props.store.getMyPosts.posts.map(value => {
                    return <Post text={value.text} likes={value.likes}/>
                })
            }
        </div>
    )
}
