import classes from './Post.module.css'
export default function Post(props) {
    return (
        <div className={classes.post}>
            {props.text}
        </div>
    )
}