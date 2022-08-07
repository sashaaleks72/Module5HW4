import "./App.css";
import UserComponent from "./components/UserComponent/UserComponent";
import ResourceComponent from "./components/ResourceComponent/ResourceComponent";

function App(): JSX.Element {
    return (
        <div className="app-block">
            <UserComponent></UserComponent>
            <ResourceComponent></ResourceComponent>
        </div>
    );
}

export default App;
