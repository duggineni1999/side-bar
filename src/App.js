import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import { useState } from "react";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>
            {menuItems.map((menu, index) => (
              <Route
                key={menu.name}
                path={menu.to}
                element={<h1>{menu.name}</h1>}
              />
            ))}
            {menuItems.map((menu, index) =>
              menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route
                      key={subMenu.name}
                      path={subMenu.to}
                      element={<h1>{subMenu.name}</h1>}
                    />
                  ))
                : null
            )}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
