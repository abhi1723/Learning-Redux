import React from "react";
import GrandChildComponent from "./GrandChildComponent";
import { ThemeContext } from './ThemeContext';
function ChildComponent() {
    return <GrandChildComponent/>
}
export default ChildComponent;