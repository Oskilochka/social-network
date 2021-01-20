import profileReducer, {addPostActionCreator, deletePost} from "../profile-reducer";
let state = {
    posts: [
        {id: 1, message: 'Hello everyone', likesCount: '12'},
        {id: 2, message: 'Goodbye everyone', likesCount: '24'},
    ]
}

it('amount of post after added should +1', () => {
    //data for testing
    let action = addPostActionCreator('newPost')
    // testing
    let newState = profileReducer(state, action)
    // expected
    expect(newState.posts.length).toBe(3)
});
it('added and correct message of post', () => {
    //data for testing
    let action = addPostActionCreator('newPost')
    // testing
    let newState = profileReducer(state, action)
    // expected
    expect(newState.posts[2].message).toBe('newPost')
});

it('amount of post after deleted should -1', () => {
    //data for testing
    let action = deletePost(1)
    // testing
    let newState = profileReducer(state, action)
    // expected
    expect(newState.posts.length).toBe(2)
});

