import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPageNumber } from '../ReduxStore/actions';

function Pagination({nPages}) {
  
    const selectedPage = useSelector(state=>state.setPageNumber)
    const dispatch = useDispatch();
    const generatePagination = () => {
       
        let pageArray = [];
        for (let i = 1; i <= nPages; i++) {
          pageArray.push(i);
        }
    
        return pageArray.map((p, key) => (
          <span
          key={key}
            style={
              selectedPage == p ? { backgroundColor: "#000", color: "#fff" } : {}
            }
            className="p-4 h-4 w-4 bg-slate-300 flex flex-row items-center justify-center rounded-full cursor-pointer"
            onClick={() => dispatch(setPageNumber({ payload: p }))}
          >
            {p}
          </span>
        ));
      };
  return (
    <section className=" flex flex-row  align-center justify-start md:justify-end  gap-4 mt-10 mb-10" data-testid='pagination-id'>
    {generatePagination()}
    </section>
  )
}

export default Pagination