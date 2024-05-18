import { createSlice } from "@reduxjs/toolkit";
console.log('empSlice');
const empSlice = createSlice({
    name: 'emp',
    initialState : { 
        empObj: {firstName: 'Sonu', salary: 10.50}  ,
        empList : []
    },
    reducers : { // more methods 
        setEmpObj : (state, action) => {
            console.log(action.payload);
            state.empObj = action.payload;
        },

        setEmpList : (state, action) =>{
            state.empList = action.payload
        }
    }
});

console.log(empSlice.reducer)
export default empSlice.reducer;

export const {setEmpObj,setEmpList} = empSlice.actions;




// const empSlice = createSlice({
//     name: 'empObj',
//     initialState : '',
//     reducers : {
        
//     }
// });




// import { createSlice } from "@reduxjs/toolkit";
// import Employee from "../components/Employee";

// const EmpSlice = createSlice({
//     name: 'em',
//     initialState: '',
//     reducers : {
//         abc: (state, action) => {
//             state.em = action.payload;
//         }
//     },
// });

// // export default 
// export const {abc}  = EmpSlice.actions;
// export default EmpSlice.reducer;

// // const EmpReducer = createReducer(
// //     {
        
// //     }

// //     );