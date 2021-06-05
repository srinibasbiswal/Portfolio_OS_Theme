import "./App.css";
import store from "./utils/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./utils/routes";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes />
			</Router>
		</Provider>
	);
}

export default App;
