import { createContext, useState } from "react";

const themeForMain = {
  // primary: {
  //   label: "Primary",
  //   theme: {
  //     backgroundColor: "grey",
  //     navbarColor: "lightblue",
  //     color: "black",
  //   }
  // },
  primary: {
    backgroundColor: "grey",
    navbarColor: "lightblue",
    color: "black",
  },
  theme1: {
    backgroundColor: "teal",
    navbarColor: "purple",
    color: "white",
  },
  theme2: {
    backgroundColor: "yellow",
    navbarColor: "Maroon",
    color: "white",
  },
  theme3: {
    backgroundColor: "orange",
    navbarColor: "black",
    color: "white",
  },
};

const ThemeContext = createContext({
  theme: themeForMain.primary,
  isCustom: false,
  customTheme: (primaryColor, secondaryColor, textColor) => {},
  selectTheme: (themeName)=>{},
});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themeForMain.primary);
  const [themeName, setThemeName] = useState("primary");
  
  
  const selectTheme = (themeName) => {
    setThemeName(themeName)
  }


  const customTheme = (customTheme) => {
    console.log(customTheme)
    if(theme.backgroundColor === customTheme.backgroundColor.trim()
        && theme.color === customTheme.color.trim()
        && theme.navbarColor === customTheme.navbarColor.trim()
      ) return;
    setTheme(customTheme);
    setThemeName("ajsdnf lkasndfijabdsnfiumaslkdf askfklasd fhas")
  };

  const state = {
    theme: themeForMain[themeName] ? themeForMain[themeName] : theme,
    isCustom: !themeForMain[themeName],
    customTheme,
    selectTheme
  }

  console.log({state, themeName})
  return (
    <ThemeContext.Provider
      value={state}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
