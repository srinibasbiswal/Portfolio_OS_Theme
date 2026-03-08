import store from "./utils/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./utils/routes";
import ThemeSync from "./components/base/themeSync";

function App() {
	return (
		<Provider store={store}>
			<ThemeSync />
			<Router>
				<Routes />
			</Router>
		</Provider>
	);
}

export default App;
