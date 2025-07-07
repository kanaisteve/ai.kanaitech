// create the React app entry point
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'  // Update to lowercase app.jsx
import '../css/app.css'

console.log('React app is initializing...');
const rootElement = document.getElementById('app');
console.log('Root element found:', rootElement);

if (!rootElement) {
    console.error('Root element #app not found!');
} else {
    try {
        ReactDOM.createRoot(rootElement).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
        console.log('React app mounted successfully');
    } catch (error) {
        console.error('Error mounting React app:', error);
    }
}
