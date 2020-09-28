const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, it\'s my first React post', likesCount: '12'},
        {id: 2, message: 'Hello, how are you?', likesCount: '7'},
    ],
        newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            debugger;
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: '0'
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = {...state.newPostText};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;

    }
}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addPostActionCreator = () => ({type: ADD_POST});

    export default profileReducer;