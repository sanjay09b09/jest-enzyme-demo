export const GET_POSTS = 'GET_POSTS'
export const CREATE_POSTS = 'CREATE_POSTS'

export const getPosts = () =>{
    return async (dispatch) =>{

        const result = await fetch('https://reqres.in/api/users')
        const data = await result.json()
        dispatch({
            type:GET_POSTS,
            payload:data.data
        })
    }
}


export const createPost = (data)=>{
    console.log("Data", data)
    return (dispatch) => {
        dispatch({
            type:CREATE_POSTS,
            payload:data
        })
    }
}