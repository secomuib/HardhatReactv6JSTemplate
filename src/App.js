import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DeliveryNew from './pages/DeliveryNew';
import DeliveryShow from './pages/DeliveryShow';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
    render() {
      console.log('App.js');
        return (
            <Container>
                <Header />
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home />}/>
                        <Route exact path='/deliveries/new' element={<DeliveryNew/>}/>
                        <Route exact path='/deliveries/:address' element={<DeliveryShow/>}/>
                    </Routes>
                </main>
            </Container>
        );
    }
}
export default App;