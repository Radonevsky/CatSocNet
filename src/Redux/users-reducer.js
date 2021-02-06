import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
        /** {
            id: 1,
            photoUrl: 'https://u-stena.ru/upload/iblock/99b/99bf0da8990871dcf96b379f442555e7.jpg',
            followed: true,
            fullName: 'Yana',
            status: 'I love my cats',
            location: {city: 'Bryan', country: 'Buryatiya'}
        },
         {
            id: 2,
            photoUrl: 'https://st.depositphotos.com/1766887/1938/i/950/depositphotos_19385931-stock-photo-portrait-of-young-attractive-man.jpg',
            followed: false,
            fullName: 'Ilya',
            status: 'Oh, my bike...',
            location: {city: 'Los-Santos', country: 'USA'}
        },
         {
            id: 3,
            photoUrl: 'https://images.unian.net/pb/004/thumb_files/h_500/450595.jpg',
            followed: false,
            fullName: 'Nikita',
            status: 'U u u, aaaaaa',
            location: {city: 'Chita', country: 'Russia'}
        },**/
    ],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [1, 2, 3, 4],

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;

    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (currentPage, pageSize) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(false));
    }

export const unfollow = (userId) =>
    async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersAPI.clickUnFollow(userId);
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    }

export const follow = (userId) =>
    async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersAPI.clickFollow(userId);
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    }

export default usersReducer;