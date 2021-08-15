import {connect} from "react-redux";
import {Users} from "./Users";
import * as React from "react";
import axios from "axios";
import {setCurrentPage, setLoading, setPageSize, setTotalCurrentUser, setUser} from "../../redux/users-reducer";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setLoading(true)
            axios.get(`https://reqres.in/api/users?page=${this.props.currentPage}`)
                .then(response => {
                        this.props.setUser(response.data.data)
                        this.props.setTotalCurrentUser(response.data.total)
                        this.props.setPageSize(response.data["per_page"])
                        this.props.setLoading(false)
                    }
                )
        }
    }
    setUser = (n) => {
        if (n !== this.props.currentPage) {
            this.props.setLoading(true)
            this.props.setCurrentPage(n)
            axios.get(`https://reqres.in/api/users?page=${n}`)
                .then(response => {
                    this.props.setUser(response.data.data)
                    this.props.setLoading(false)
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
    {setUser, setCurrentPage, setLoading, setPageSize, setTotalCurrentUser})(UsersAPIContainer)
