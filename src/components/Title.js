import React from 'react';
import TodoList from './TodoList';



class Title extends React.Component{
   
    constructor(props){
        super(props);
    } 

  
    
    
 

    get tasks(){
        return this.props.list.map(task => <TodoList key={task.id}  task={task} remove={this.props.remove} />)
    }

    render(){
        return(
            <div>
                {this.tasks}
            </div>    
        );
    
    }
}    
    


export default Title;


    

    

