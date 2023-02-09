import { createSlice } from "@reduxjs/toolkit";
export const userSlice=createSlice({
    name: "user",
    initialState:{
        name:"Lê Tiến Thành",
        age:"22 tuổi",
        about:"I'm a dev, I'm a third year student at the Post and Telecommunications Institute of Technology",
        avaUrl:"https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/321933367_917467302725486_802977350896560403_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eYYBvVS4JNMAX9QJWIw&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAASv1SOFktIJmd_256mIWYkg8QMt__F_d2MPMWRM5IVQ&oe=63BC6631",
        theme:"#ff9051",
        pedding:false,
        error:false,

    },
    reducers:{
        updateStart:(state)=>{
            state.pedding=true;
        },
        updateError:(state)=>{
            state.pedding=false;
            state.error=true;
        },
        updateSuccess:(state, action)=>{
            state.pedding=false;
            state.error=false;
            state.name=action.payload.name;
            state.age=action.payload.age;
            state.about=action.payload.about;
            state.avaUrl=action.payload.avaUrl;
            state.theme=action.payload.theme;
        }
    }

})
export const {updateSuccess, updateError, updateStart}=userSlice.actions;
export default userSlice.reducer;