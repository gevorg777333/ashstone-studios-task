import React from 'react';
import './App.css';
import {AppRoutes} from "./routes";
import SharedLayout from "./components/markup";

function App() {
  return (
    <main className="App">
        <SharedLayout>
            <AppRoutes />
        </SharedLayout>
    </main>
  );
}

export default App;
