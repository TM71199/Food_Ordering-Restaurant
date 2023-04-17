import React,{useState , useEffect} from 'react';
import { connect } from 'react-redux';
import { addOrder, resetFilter, resetTableNumber } from '../ReduxStore/Actions';


const Card = ({filter,addOrder,tableNumber,resetFilter,resetTableNumber}) => {
    const [data,setData] = useState([]);
    //cloneData is required as we are filtering the data , 
    //setData gets set to filtered data and cloneData will hv all the data required
    const [cloneData,setCloneData] = useState([]);

    useEffect(() => {
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json')
        .then(response => response.json())
        .then(data => {
            setData(data.items)
            setCloneData(data.items)
        })
        .catch(err => alert(err))
    } , [])

    //to implement filtering
    useEffect(()=> {
      if(filter !== "All Items"){
        let specific = cloneData.filter(item => item.category === filter)
        setData(specific);
      }
      else{
        setData(cloneData);
      }
    },[filter])

    const addOrderHandler = async (id,name,prize,url) => {
      if(tableNumber !== null){
        await addOrder(id,name,prize,url,tableNumber);
        // to reset values once the order got placed
        await resetTableNumber();
        await resetFilter();
        alert('Order Placed succesfully');
      }
      else{
        alert('Please Select the table number');
      }
    }

  return (
    <center>
        {data.length > 0 ? 
        <div className='container'>
            <div className='row'>
                {data.map((item) => (
                <div className='col-md-4' key={item.id} style = {{padding:"10px"}}>
                  <div className='card' style={{width:"18rem",padding:"3px"}}>
                  <img src={item.url} className='card-img-top'/>
                   <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <div className='card-text'>Rs.{item.prize}</div>
                      <button className='btn btn-primary'
                      onClick={() => addOrderHandler(item.id,item.name,item.prize,item.url,tableNumber)}>Order</button>
                    </div>
                  </div>
                </div>
                ))}
            </div>
        </div> 
        :
        <div className='spinner-border text-primary'></div> 
        }
    </center>
  )
}

const mapStateToProps = (state) => ({
  filter : state.filter_Reducer.filter_name,
  tableNumber : state.table_Reducer.table_number
});


export default connect(mapStateToProps,{addOrder,resetTableNumber,resetFilter})(Card);

