import React from 'react';
import { ThemeContext } from './ThemeContext';
class GrandChildComponent extends React.Component{
     static contextType = ThemeContext;
    render(){
        return <div>{this.context}</div>
    }
}
 
export default GrandChildComponent;