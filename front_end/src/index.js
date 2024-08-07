import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';


//creates a React root nd specifies the DOM element with the id 'root' as the container where the React application will be rendered.
const root = ReactDOM.createRoot(document.getElementById('root'));

//used to render the entire application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-g0xnoj8lj8v3tr4o.us.auth0.com"
        clientId ="OJrSHU5SlbyKBQgJ54OqIZ9zQWkYaGjZ"
        authorizationParams={{
          redirect_uri: window.location.origin
          }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
