import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({count}) => {
  return (
    <>
     <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand" style={{color: "#586782" , fontSize: "30px" , fontWeight: "bold"}}>
        Udipi Restaurant</span>
        <button className='btn btn-secondary'>
          <Link to='/orders' style={{color:'white',textDecoration:'none'}}>Orders</Link>
            <span className='badge bg-secondary'>{count}</span>
        </button>
     </nav>      
    </>
  )
}

const mapStateToProps =(state) => ({
  count : state.order_Reducer.length
})

export default connect(mapStateToProps)(Header);
