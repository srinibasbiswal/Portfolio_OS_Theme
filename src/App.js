import "./App.css";
import store from "./utils/store";
import { Provider } from "react-redux";
import Windows from "./containers/Windows";

function App() {
	return (
		<Provider store={store}>
			<div>
				<Windows />
			</div>
		</Provider>
	);
}

export default App;
