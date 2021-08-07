import MyPosts from "./MyPosts";
import {addPostCreateAction, changeAreaCreateAction} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


const mapStateToProps = state => ({
    myPosts: state.profile.myPosts
})
const mapDispatchToProps = dispatch => ({
    changeArea(e) {
        dispatch(changeAreaCreateAction(e.target.value))
    },
    addPost() {
        dispatch(addPostCreateAction())
    }

})

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostContainer