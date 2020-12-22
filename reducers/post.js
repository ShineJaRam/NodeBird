export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname:'수혀니'
        },
        content: '첫번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }, {
            src: "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlYW18ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }],
        Comments: [{
            User: {
                nickname: '냥이'
            },
            content: '우리 혀니 사랑해~'
        },
        {
            User: {
                nickname: '엄니'
            },
            content: '아들 화이팅!'
        }]
    }],
    imagePaths: [],
    postAdded: false
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: "더미데이터입니다.",
    User: {
        id: 1,
        nickname: "수혀니"
    },
    Images: [],
    Comments: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true
            }
        default:
            return state
    }
}

export default reducer;