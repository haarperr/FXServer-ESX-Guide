import React, { Component } from 'react';
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar/>
        </header>
        <main className="h-100">
          <MainPage/>
        </main>

        <Footer/>

      </div>
    );
  }
}

export default App;
