import {connect} from "react-redux";
import {Users} from "./Users";
import * as React from "react";
import axios from "axios";
import {setCurrentPage, setLoading, setUser} from "../../redux/users-reducer";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.currentPage}`)
            .then(response => {
                    this.props.setLoading(false)
                    this.props.setUser(response.data)

                }
            )
    }

    setUser = (n) => {
        if (n !== this.props.currentPage) {
            this.props.setLoading(true)
            this.props.setCurrentPage(n)
            axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${n}`)
                .then(response => {
                    this.props.setLoading(false)
                    this.props.setUser(response.data)
                })
        }
    }

    render() {
        return (
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                setUser={this.setUser}
                isLoading={this.props.isLoading}
                setLoading={this.props.setLoading}
            />
        )
    }

}


const mapStateToProps = state => ({
    users: state.users.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    isLoading: state.users.isLoading
})

export const UsersContainer = connect(mapStateToProps,
    {setUser, setCurrentPage, setLoading})(UsersAPIContainer)