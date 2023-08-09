import React, { useState } from 'react'
import InputForm from './InputForm';
function ToDoApp() {
    const [listData, setListData] = useState([]);
    function addList(InputData){
        if(InputData !=="")

            setListData([...listData,InputData]);
        
    }

    function deleteListItem(key){
        let newListItem = [...listData];
        newListItem.splice(key,1);
        setListData(newListItem);
    }
    
  return (
    <div>
        <div>
            <InputForm addList={addList} listData={listData} deleteListItem={deleteListItem} />
            
        </div>
    </div>
  )
}

export default ToDoApp