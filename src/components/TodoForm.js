import React from 'react';

class TodoForm extends React.Component{

    constructor(props){
        
        super(props);
        this.state = {
            formText: '',
        };
   
    }


    test(event){
       this.setState(
            {
                formText: event.target.value,
            }
       );
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onSearch(this.state.formText)
       
    }

    render(){
        return(
            <div>
                <form onSubmit={event => this.onSubmit(event)}>
                <label htmlFor="searchText">Add a task to do  </label>
                <input 
                 type="text"
                 id="taskText"
                 onChange={event => this.test(event)}
                
                 />
                 </form>
               
            </div>     

        )
    }
}

export default TodoForm;