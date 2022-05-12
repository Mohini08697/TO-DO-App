import React, {useState,useEffect} from 'react'
import List from './List'
import InputText from './InputText'
import Button from './Button'

const TodoList= ()=>{
  console.log('==========> todolist')

  const [inputVal,setInputVal]=useState('')
  const [list,setList] = useState([])


  // updating the state of inputVal

  const getHandleChange=(event)=>{
    setInputVal(event.target.value)
  }

   // updating the state of List

  const onButtonHandler= ()=>{
    if(inputVal.trim()){
    setList([...list,{itemName:inputVal,editItemName:inputVal,isDone:false,isEditing:false}]);
    setInputVal('');
    }else{
      setInputVal('');
    }
  }
  console.log(typeof(inputVal))

  // setting the list items to local storage at the time of component update.
useEffect(()=>{
  const todoList = JSON.stringify(list)
  localStorage.setItem('todoList',todoList)
},[list]);

// getting the list items from local storage at the time of component mount.
  useEffect(()=>{
    let todoList = localStorage.getItem('todoList');
    if(todoList) {
        todoList = JSON.parse(todoList); 
        setList(todoList);
    } 
   // console.log('componentDidMount called====>>');
}, []);



// performing the console task on inputVal update.

useEffect(()=>{
 // console.log('inputVal is updated !!!! ');
}, [inputVal]);

// executing the onButtonHandler task on keyUp event.

  const getKeyHandler= (event)=>{
    if (event.key==="Enter"){
      onButtonHandler();
    }
  }

  // updating the list value & state for conditional renedering scenario.

  const getDoneButton= (itemIndex)=>{
   // console.log("it is done",itemIndex) 
    const todoList = [...list]
    todoList[itemIndex].isDone = true;
    setList(todoList);
  }
 
 // updating the list value (which has to delete) & state. 
 
 const deleteClickHandler = (itemIndex)=>{
   // console.log("getting delete call", itemIndex)
    const todoList = [...list];
    todoList.splice(itemIndex,1);
    setList(todoList);
};

 // updating the list value (which has to go up) & state. 

 const getUp = (itemIndex)=>{
 // console.log("getting up call", itemIndex)
  let todoList = [...list];
  let tempStore = todoList[itemIndex];
  todoList[itemIndex] = todoList [itemIndex-1]
  todoList[itemIndex-1]= tempStore; 
  setList(todoList);
 }

 // updating the list value (which has to go down) & state. 

 const getDown = (itemIndex)=>{
 // console.log("getting down call", itemIndex)
  const todoList = [...list];
  let tempStore = todoList[itemIndex];
  todoList[itemIndex] = todoList [itemIndex+1]
  todoList[itemIndex+1]= tempStore;
  setList(todoList);  
}

 // updating the list value & state for conditional renedering scenario.

const getEdit = (itemIndex)=>{
  const todoList = [...list]
  todoList[itemIndex].isEditing=true
  setList(todoList)
}


// updating the list value (which has to update its editItemName value) & state. 

const getEditInput = (itemIndex,event)=>{
  const inputValue = event.target.value
  const todoList = [...list]
  todoList[itemIndex].editItemName = inputValue
  setList(todoList)
}


// updating the list value (which has to cancel its edited task and come back to original position.) & state. 

const getEditCancel = (itemIndex)=>{
  const todoList = [...list]
  todoList[itemIndex].editItemName = todoList[itemIndex].itemName;
  todoList[itemIndex].isEditing=false
  setList(todoList)
}


// updating the list value (which has to save its edited task and come back to original position.) & state. 

const getEditSave = (itemIndex)=>{
    const todoList = [...list]
    const editedValue = todoList[itemIndex].editItemName.trim()
    if(editedValue){
      todoList[itemIndex].itemName = editedValue
      todoList[itemIndex].editItemName = editedValue
      todoList[itemIndex].isEditing = false
      setList(todoList)
    } else {
      todoList[itemIndex].editItemName = todOList[itemIndex].itemName
      todoList[itemIndex].isEditing = false
      setList(todoList)
    }
}

// executing the getEditSave task on keyUp event.


 const getKeyUp = (itemIndex,event)=>{
       if (event.key ==="Enter"){
         getEditSave(itemIndex)
         }
      }


// Rendering the Components on DOM.
  return(
    <>
       <InputText value={inputVal} onHandleChange={getHandleChange} onKeyHandler={getKeyHandler}/> &nbsp;
       <Button onClickHandler={onButtonHandler} btnTxt="Add Task"/>
       <List value={list} onDoneHandler={getDoneButton} onDeleteHandler={deleteClickHandler}
          onClickUp={getUp} onClickDown={getDown} editHandler={getEdit} editInputHandler={getEditInput} 
          editCancelHandler = {getEditCancel} editSaveHandler = {getEditSave} keyUpHandler={getKeyUp}/>
    </>
  )
}

export default TodoList;