import React from 'react';
import style from '../../TodoList.css';



class TodoList extends React.Component{
    constructor(props){
        super(props);
       
    }


    delete(event){
       this.props.toDelete(event.target.id)
    }
     
       
 
   
    render(){
        return(
            <div className={style.task}>
                <button id={this.props.task.id} onClick={event => this.delete(event)}> delete task</button>
                <p>{this.props.task.text}</p>
            </div>     
        )
    }
}
   


    

export default TodoList;