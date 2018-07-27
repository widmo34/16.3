import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    } 
   
    render(){
        return(
            <div>
               <p>{this.props.task.text}</p>
            </div>    
        )
    }
}
   


    

export default TodoList;