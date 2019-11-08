import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routers from './Router'
import Layout from './components/layout'
export default function App() {
  return (
        <Router>
            <Layout>
               <Routers/>
            </Layout>
       </Router>
  );
}


