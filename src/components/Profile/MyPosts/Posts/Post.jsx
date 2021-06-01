import classes from './Post.module.css'
export default function Post(props) {
    return (
        <div className={classes.post}>
            {props.text}
            <p className={classes.likes}>Likes - {props.likes}</p>
        </div>
    )
}