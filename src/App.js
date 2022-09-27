import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './screen/Login';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>  
  );
}

export default App;