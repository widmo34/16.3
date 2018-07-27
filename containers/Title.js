import React from 'react';

class Title extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    
        
    }

    render(){
        (
            <div><h1>Aplikacja kucharska</h1>
                <ul>
                    <li>zrobić menu górne </li>
                    <li>napisać moduł dodawanie przepisów</li>
                    <li>napisać moduł dodawania komentarzy pod przepisem</li>
                </ul>
            </div>    
        )
    }
}

export default Title;


    

    

