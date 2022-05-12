import React from 'react';

import styles from './List.module.css'

const List = (props) => {
  console.log('==========> list')
  return (
  
      <ul>
        {props.value.map((elem, index) => {
          return ( 
          <> 
             <strong>
             <li key={index} className={elem.isDone ? `${styles.list} ${styles.doneItem}` : styles.list}>
                    
                   {!elem.isEditing && (<> <div className={styles.itemList}>{elem.itemName} </div>

                   {elem.isDone &&(<button  style={{ backgroundColor: 'red', borderRadius: '7px'}} onClick={()=>{props.onDeleteHandler(index)}}>Delete</button>)} &nbsp;

                   {!elem.isDone &&( <button  style={{ backgroundColor: 'white', borderRadius: '7px'}} onClick={()=>{props.onDoneHandler(index)}}>Done</button>)} &nbsp;

                   {index !==0 && (  <button  style={{ backgroundColor: 'white', borderRadius: '7px'}}  onClick={()=>{props.onClickUp(index)}}> UP </button>)} 

                   {index !==(props.value.length-1) && (<button  style={{ backgroundColor: 'white', borderRadius: '7px'}}  onClick={()=>{props.onClickDown(index)}}> DOWN </button>)}
                   <button style={{ backgroundColor: 'white', borderRadius: '7px'}}  onClick={()=>{props.editHandler(index)}}> Edit</button> </>)}


                  {elem.isEditing && (<> <input type="text" value={elem.editItemName} onChange={(event)=>{props.editInputHandler(index,event)}} onKeyUp={(event)=>{props.keyUpHandler(index,event)}}/> 
                   <button style={{ backgroundColor: 'white', borderRadius: '7px'}}  onClick={()=>{props.editSaveHandler(index)}}> Save</button>
                   <button style={{ backgroundColor: 'white', borderRadius: '7px'}}  onClick={()=>{props.editCancelHandler(index)}} > Cancel</button> </>)}

             </li> 
             </strong> 
          </>);
        })}
     </ul>
  
  );
};

export default List;


