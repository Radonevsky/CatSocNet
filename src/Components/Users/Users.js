import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user1.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator";


let Users = (props) => {

    return <div className={styles.usersPage}>
        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   isFetching={props.isFetching}/>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>
                                Follow</button>};
                    </div>
                </span>
                <span>
                        <div>{u.name}</div>
                    {u.status ? <div>{u.status}</div> :<div>No status</div>}
                </span>
            </div>)
        }
    </div>
}

export default Users;