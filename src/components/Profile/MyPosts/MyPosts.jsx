import classes from './MyPosts.module.css'
import Post from './Posts/Post'
export default function MyPosts(props) {
    return (
        <div className={classes.myPost}>
            <p>MyPosts:</p>
            <Post text={'I love TypeScript'} />
            <Post text={'I love JavaScript'} />
        </div>
    )
}