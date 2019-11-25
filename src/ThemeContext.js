import React, { createContext } from 'react';

const ThemeContext = createContext('light');

const ThemeProvider = (props) => {
    <ThemeContext.Provider value={props}>
        { props.children }
    </ThemeContext.Provider>
}

export { ThemeContext };