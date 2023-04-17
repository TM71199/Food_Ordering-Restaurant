import React from 'react';
import { connect } from 'react-redux';
import { setFilter,resetFilter } from '../ReduxStore/Actions';

const Filter = ({filter,setFilter,resetFilter}) => {

    const dishes = ["All Items","Rice Items","Cold Drinks","Pizza","Hot Drinks"];

  return (
     <center className='mt-3'>
         <span className='h4 m-2'>Filter Dishes : </span>
         <select name="filter" className='p-1' onChange={(e) => setFilter(e.target.value)}>
            {dishes.map((item,index) => (
                 <option value={item} key={index}>{item}</option>
            ))}            
         </select>
     </center>  
  )
}

const mapStateToProps = (state) => ({
      filter : state.filter_Reducer.filter_name
});

const mapDispatchToProps = {setFilter,resetFilter};

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
