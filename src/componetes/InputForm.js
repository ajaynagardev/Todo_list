import React, { useState } from 'react'

function InputForm(props) {
    const[inputText, setInputText] = useState('');

    function changeHandler(event){
        setInputText(event.target.value);
    }

    function addButton(){
        props.addList(inputText);
        setInputText("");
    }


   
  return (
    <div className=' flex w-full h-[100vh] bg-white justify-center items-center'>

        <div className='flex flex-col  bg-blue-400 rounded-2xl min-h-[400px] w-[400px] content-center'>
            <div className=' bg-slate-500 mt-6 rounded-lg '>
                <h2 className='text-center text-white font-semibold text-xl py-3'>To-Do List </h2>
            </div>
        <div className='flex flex-row mt-10'>       
        <input className=' border border-r-0 rounded-lg rounded-r-none outline-teal-50 border-cyan-100 px-3 w-[320px]  h-[50px]' type='text' placeholder='Enter your today task' onChange={changeHandler} value={inputText}/>
        <button className='border border-l-0 w-20 rounded-lg rounded-l-none bg-gray-400 text-center h-[50px]' onClick={addButton}><i className='fa-solid fa-plus'></i></button>
        </div> 
        <div className='flex flex-col text-cyan-50 text-lg w-[300px] h-full gap-3 mt-6 px-4'>

        {
            props.listData.map((listItem,i)=>{
                return(
                        <li className='font-semibold list-none'>{listItem}<span className='ml-5 text-black hover:text-red-400' ><i className='fa-solid fa-trash text-xl' onClick={e=>{props.deleteListItem(i)}}></i></span></li>
                    )
                })
            }
        </div>

        </div>
    </div>
  )
}

export default InputForm