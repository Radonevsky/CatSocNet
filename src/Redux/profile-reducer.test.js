import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

    let state = {
    posts: [
        {id: 1, message: 'Hi, it\'s my first React post', likesCount: '12'},
        {id: 2, message: 'Hello, how are you?', likesCount: '7'},
    ],
    profile: null,
    status: '',
};

it('After deleting length of message should be decrement', () => {
    let action = deletePost(2)
    let newState = profileReducer(state,action)
 expect(newState.posts.length).toBe(state.posts.length-1);
})

it('After add length of message should be increment', () => {
    let action = addPostActionCreator('Some text')
    let newState = profileReducer(state,action)
 expect(newState.posts.length).toBe(state.posts.length+1);
})

it('New post text should be correct', () => {
    let action = addPostActionCreator('Some text')
    let newState = profileReducer(state,action)
    expect(newState.posts[newState.posts.length-1].message).toBe('Some text');
})

