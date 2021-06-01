import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'
const Profile = () => {
    return (
        <div>

            <div className={classes.personInfo}>
                <img src="https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg" alt="ava" />
                <div className={classes.infoText}>
                    <h2>Vadim Savin</h2>

                    <div className={classes.aboutPerson}>
                        <p>Age:</p>
                        <p>Work:</p>
                        <p>Family status:</p>
                        <p>Phone number:</p>
                    </div>
                </div>
            </div>
            <MyPosts />
        </div>


    )
}

export default Profile;