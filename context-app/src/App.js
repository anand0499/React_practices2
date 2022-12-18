import { useContext } from "react";

import themeContext from "./Context/themeContext";
function App() {

  const theme = useContext(themeContext);
  return ( 
    <div>
      <div className="form-check form-switch" style={theme.state}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque autem, vel nostrum harum, enim voluptatum provident mollitia doloribus adipisci excepturi repudiandae nemo. Vitae unde sequi quam minima aliquam tempora optio excepturi accusantium voluptas nobis dolor reprehenderit quo nam nihil ullam porro soluta voluptate, enim voluptatem non quidem officiis sunt? Minima in expedita libero provident vitae veritatis voluptates, est debitis unde harum quaerat iusto tempore fuga eius animi laborum possimus officia itaque nemo et odit dolorem culpa soluta. Perferendis adipisci consequatur numquam in totam esse labore accusantium. Adipisci facere cupiditate tempora cum incidunt, et neque debitis, beatae odit inventore explicabo dolores.
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={theme.changer} defaultChecked />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
      </div>
      <h1>Hello </h1>
    </div>
  );
}

export default App;
