import React from 'react';
import { ThemeContext } from './ThemeContext';
import GreatGrandChildComponent from './GreatGrandChildComponent';
function GrandChildComponent(){
    return <div>
        <ThemeContext.Consumer>
        {(name) =>(
            <h1>{name}</h1>
        )}
    </ThemeContext.Consumer>
    <GreatGrandChildComponent/>
    </div>
}
 
export default GrandChildComponent;