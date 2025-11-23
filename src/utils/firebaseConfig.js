import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import projectConfig from "../utils/data/project.config";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

let app;
let analytics;

if (!getApps().length && projectConfig.enableAnalytics) {
	app = initializeApp(firebaseConfig);
	analytics = getAnalytics(app);
}

export { analytics };
export default app;
