import {actions, profileReducer} from "../../redux/profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hello everyone', likesCount: '12'},
        {id: 2, message: 'Goodbye everyone', likesCount: '24'},
    ]
}

it('amount of post after added should +1', () => {
    //data for testing
    let action = actions.addPostActionCreator('newPost')
    // testing
    let newState = profileReducer(state, action)
    // expected result
    expect(newState.posts.length).toBe(3)
});
it('added and correct message of post', () => {
    let action = actions.addPostActionCreator('newPost')
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('newPost')
});
it('amount of post after deleted should -1', () => {
    let action = actions.deletePost(2)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
});

