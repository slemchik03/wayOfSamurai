import * as React from "react";
import classes from './Users.module.css'
import loadingSvg from '../../assets/loading.svg'

export const Users = (props) => {

    const countPages = Math.ceil(props.totalUsersCount / props.pageSize)
    const countPagesArr = []

    for (let i = 1; i <= countPages; i++) {
        countPagesArr.push(i)
    }
    if (props.isLoading) {
        return (
            <div style={{textAlign: 'center'}}>
                <img className={'loading'} src={loadingSvg} alt="loading"/>
            </div>
        )
    }
    return (
        <div>
            <div>
                {
                    props.users.map(v => <img src={v.thumbnailUrl} alt=""/>)
                }
            </div>

            <div>
                {
                    countPagesArr.map(v => {
                        return (
                            <span className={v === props.currentPage ? classes.active : null}
                                  onClick={() =>  props.setUser(v)}>{v}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}