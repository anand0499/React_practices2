import logo from "./logo.svg";
import "./App.css";
import { useContext ,useEffect,useState} from "react";
import ThemeContext from "./color-context";



function App() {
  const [themeName, setThemeName] = useState("primary")

  const [primaryColor,setPrimaryColor]=useState('');
  const [secondaryColor,setSecondaryColor]= useState('');
  const [textColor,setTextColor] = useState('');
  const { theme, isCustom, customTheme, selectTheme } = useContext(ThemeContext);
  
  useEffect(()=>{
    setPrimaryColor(theme.backgroundColor)
    setSecondaryColor(theme.navbarColor)
    setTextColor(theme.color)
  }, [theme])

  // =============================================================
  const handleChange =(event)=>{
    setThemeName(event.target.value)
  }
  useEffect(()=>{selectTheme(themeName)}, [themeName])
  // =============================================================


  const primaryColorHandler=(event)=>{
    setPrimaryColor(event.target.value);
  }

  const secondaryColorHandler=(event)=>{
    setSecondaryColor(event.target.value);
  }

  const textColorHandler=(event)=>{
    setTextColor(event.target.value);
  }
  
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    
    customTheme({
      backgroundColor: primaryColor,
      navbarColor: secondaryColor,
      color: textColor
    });
  } 
  return (
    <>
      <div className="App">
        <div className="topnav">
          <nav style={{backgroundColor:theme.navbarColor,
            color:theme.color
          }}>

           
            
            <label>
              Select a theme from the dropdown
            </label>
            <select value={isCustom? "custom" : themeName} onChange={handleChange}>
              <option value="primary">Primary Theme</option>
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
              {
                isCustom &&
                <option value="custom">Custom</option>
              }
            </select>

            

            {/* /////////////////////////Custom Theme/////////////////////// */}
            <label>CREATE YOUR OWN THEME :</label>
            <form>
              <label>Primary Color</label>
                <input type='text' onChange={primaryColorHandler} value={primaryColor} />
              <label>Secondary Color</label>
                <input type='text'onChange={secondaryColorHandler} value={secondaryColor}/>
              <label>Text Color</label>
                <input type='text' onChange={textColorHandler} value={textColor}/>
              <button onClick={onSubmitHandler} type="button">Apply</button>
            </form>
          </nav>
        </div>
        <main
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
          }}
        >
          <img src={logo} />
        
        </main>
      </div>
    </>
  );
}

export default App;
