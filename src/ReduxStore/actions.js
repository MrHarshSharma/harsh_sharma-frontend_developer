const setData = ({payload})=>{
    return {
        type:'SET_DATA',
        payload,
    }
}

const setPageNumber = ({payload})=>{
    return {
        type:'SET_PAGE_NUMBER',
        payload,
    }
}
export {setData, setPageNumber};