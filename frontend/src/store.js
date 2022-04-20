import {configureStore} from "@reduxjs/toolkit";
import { likeReducer, myPostReducer, userPostsReducer } from "./Reducers/Post";
import { userReducer,postOfFollowingReducer, allUsersReducer, userProfileReducer } from "./Reducers/User";
const initialState = {}
const store=configureStore({
    reducer:{
        user:userReducer,
        postOfFollowing:postOfFollowingReducer,
        allUsers:allUsersReducer,
        like:likeReducer,
        myPosts:myPostReducer,
        userProfile:userProfileReducer,
        userPosts:userPostsReducer
    }
});
export default store;