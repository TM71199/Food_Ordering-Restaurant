export const setTableNumber = (value) => async dispatch => { 
    dispatch({
        type : "SETTABLENUMBER",
        payload : value,
    })
}

export const resetTableNumber = () => async dispatch => { 
    dispatch({
        type : "RESETTABLENUMBER"
    })
}

export const setFilter = (value) => async dispatch => {
    dispatch({
        type: "SETFILTER",
        payload : value,
    })
}

export const resetFilter = () => async dispatch => { 
    dispatch({
        type : "RESETFILTER"
    })
}

export const addOrder = (id,name,prize,url,table_num,) => async dispatch =>{
    dispatch({
        type : "ADDORDER",
        payload:{
            id:id,
            name:name,
            prize:prize,           
            url:url,
            table_num:table_num
        }
    })
}

