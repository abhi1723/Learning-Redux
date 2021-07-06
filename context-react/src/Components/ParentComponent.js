import React from "react";
import ChildComponent from "./ChildComponent";
import { ThemeContext } from "./ThemeContext";
export default function ParentComponent(){
    return <ThemeContext.Provider value="Pammi">
            <ChildComponent/>
    </ThemeContext.Provider>
}