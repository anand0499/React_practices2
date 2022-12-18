import { useState } from "react";
import ThemeContext from "./themeContext";

const ThemeChanger = (props) => {
    const val = {
        color: 'teal',
        background: 'pink'
    }

    const [state, setState] = useState(val);
    const changer = () => {
        setState({
            color: 'black',
            background: 'white'
        })
    };

    return (
        <ThemeContext.Provider value={{ state, changer }}>{props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeChanger;