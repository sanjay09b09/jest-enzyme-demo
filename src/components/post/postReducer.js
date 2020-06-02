const initialState= {
posts:[],
test:[]
}

export default function postReducer(state=initialState,action) {
    console.log("initial State", state)
    switch(action.type) {
        case 'GET_POSTS':
            return {
               posts:action.payload,
            
            }
        case 'CREATE_POSTS':
            console.log("State...", state)
           return {
               
            //    posts:[...state.posts,action.payload]
           }
            default:
                return state
    }

}