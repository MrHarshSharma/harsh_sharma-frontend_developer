const intialState = [];

const setData = (state=intialState, action) =>{
    switch(action.type){
        case 'SET_DATA':
            return state = action.payload
        default:
            return state;
    }
}

export default setData;
