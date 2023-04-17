import React from 'react';
import { connect } from 'react-redux';
import {setTableNumber,resetTableNumber} from '../ReduxStore/Actions';

const Table = ({tableNumber,setTableNumber,resetTableNumber}) => {

    const tableNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const inActiveBtn = 'btn btn-outline-primary m-2';
    const activeBtn = 'btn btn-outline-primary m-2 active';

  return (
    <center className='mt-2'>
      <h4>Please select your table number:</h4>
      {tableNumbers.map((table,index) => (
        <button key={index} className={ tableNumber===table ? activeBtn : inActiveBtn } 
        onClick ={() => setTableNumber(table)}>{table}</button>
      ))}
    </center>  
  )
};

const mapStateToProps = (state) => ({
  tableNumber : state.table_Reducer.table_number
});

const mapDispatchToProps = {setTableNumber,resetTableNumber};

export default connect(mapStateToProps,mapDispatchToProps)(Table);
