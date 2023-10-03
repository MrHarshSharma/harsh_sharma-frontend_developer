const intialState = 1;

const setPageNumber = (state=intialState, action) =>{
    switch(action.type){
        case 'SET_PAGE_NUMBER':
            return state = action.payload
        default:
            return state;
    }
}

export default setPageNumber;
