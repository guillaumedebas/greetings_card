import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Authentication from './pages/Authentication/Authentication.jsx'
import Database from './pages/Database/Database.jsx'
import Functions from './pages/Functions/Functions.jsx'
import Hosting from './pages/Hosting/Hosting.jsx'
import MachineLearning from './pages/MachineLearning/MachineLearning.jsx'
import Storage from './pages/Storage/Storage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="functions" element={<Functions />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="storage" element={<Storage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
