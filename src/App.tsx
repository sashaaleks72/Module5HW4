import "./App.css";
import UserComponent from "./components/UserComponent/UserComponent";
import ResourceComponent from "./components/ResourceComponent/ResourceComponent";
import AuthComponent from "./components/AuthComponent/AuthComponent";

function App(): JSX.Element {
    return (
        <div className="app-block">
            <div className="app-inline-block">
                <UserComponent></UserComponent>
                <ResourceComponent></ResourceComponent>
            </div>
            <AuthComponent></AuthComponent>
        </div>
    );
}

export default App;
