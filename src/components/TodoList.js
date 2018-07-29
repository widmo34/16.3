import React from 'react';
import style from '../../TodoList.css';



class TodoList extends React.Component{
    constructor(props){
        super(props);
    
       
    
    }
   
    
        
  
   
    
    
    
   
    render(){
        return(
            <div className={style.TodoList}>
               <p> <span>   {this.props.task.id} </span>    // {this.props.task.text}</p>
            
            </div>    
        )
    }
}
   


    

export default TodoList;