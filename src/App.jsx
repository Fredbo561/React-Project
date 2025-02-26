// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Make sure this is imported for Bootstrap JS functionality
import Footer from './components/footer';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='background'>
   
      <Nav />
      <main className="mx-3">
        <Outlet />
        
      </main>
<Footer />
    </div>
  );
}

export default App
