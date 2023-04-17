import React from 'react';
import {connect} from 'react-redux';
import Header from './Container/Header';

const Orders = ({list}) => {
  return (
    <>
    <Header/>
   <center>
        {list.length > 0 ? 
        <div className='container'>
            <div className='row'>
                {list.map((listItem) => (
                <div className='col-md-4' key={listItem.id} style = {{padding:"10px"}}>
                  <div className='card' style={{width:"18rem",padding:"3px"}}>
                  <img src={listItem.url} className='card-img-top'/>
                   <div className='card-body'>
                      <h5 className='card-title'>{listItem.name}</h5>
                      <div className='card-text'>Billing Amount : Rs.{listItem.prize}</div>
                      <p>Table Number : {listItem.table_num}</p>
                    </div>
                  </div>
                </div>
                ))}
            </div>
        </div> 
        :
        <div className="d-flex align-items-center vh-100">
        <div className="h1 text-center mx-auto">NO ORDER PLACED</div>
        </div>
        }
    </center>
    </>
  )
}

const mapStateToProps = (state) => ({
  list : state.order_Reducer
});
export default connect(mapStateToProps)(Orders);
