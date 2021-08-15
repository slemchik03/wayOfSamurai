import * as React from "react";
import classes from './Users.module.css'
import loadingSvg from '../../assets/loading.svg'
import {UserInfo} from "./UserInfo";

const getCountPagesArray = (totalUserCount, pageSize) => {
    const countPages = Math.ceil(totalUserCount / pageSize)
    const countPagesArr = []
    for (let i = 1; i <= countPages; i++) {
        countPagesArr.push(i)
    }
    return countPagesArr
}

export const Users = (props) => {

    if (props.isLoading) {
        return (
            <div style={{textAlign: 'center'}}>
                <img className={'loading'} src={loadingSvg} alt="loading"/>
            </div>
        )
    }
    return (
        <div>
            <div className={classes.cards}>
                {
                    props.users.map(v => {
                        return (
                            <UserInfo
                                firstName={v['first_name']}
                                lastName={v['last_name']}
                                photoSrc={v['avatar']}
                                email={v['email']}
                                subscribe={true}
                                id={v.id}
                            />
                        )
                    })
                }
            </div>

            <div>
                {

                    getCountPagesArray(props.totalUsersCount, props.pageSize).map(v => <span
                        className={props.currentPage === v ? classes.active : null}
                        onClick={() => props.setUser(v)}>{v}</span>)
                }
            </div>
        </div>
    )
}