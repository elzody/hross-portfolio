import { useState } from "react";

import ProfileCard from "./components/ProfileCard/ProfileCard.tsx";
import Photos from "./components/Photos/Photos.tsx";
import Articles from "./components/Articles/Articles.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";

const App = () => {
    const [currentView, setCurrentView] = useState<string>("Photos");

    return (
        <>
            <div id="cover"></div>
            <ProfileCard />
            <Navigation currentView={currentView} setCurrentView={setCurrentView} />
            <Photos visible={currentView == "Photos"} />
            <Articles visible={currentView == "Articles"} />
        </>
    );
}

export default App;
