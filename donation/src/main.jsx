import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from "react-router-dom";
import { createContext } from "react";

const ApiBaseUrlContext = createContext('https://cacsaui.tech')

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ApiBaseUrlContext.Provider>
			<App />
		</ApiBaseUrlContext.Provider>
	</React.StrictMode>
);
