
import './App.css';
import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';

import {Navbar,Exchanges,Home,CryptoCurrencies,CryptoDetails,News} from './components';

function App() {
  return (
    <div className="app">
     <div className="navbar">
        <Navbar/>
     </div>
     <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/" >
                <Home/>
              </Route>
             
              <Route path="/exchanges" >
                <Exchanges/>
              </Route>
              <Route path="/cryptocurrencies" >
                <CryptoCurrencies/>
              </Route>
              <Route path="/cryptocurrencies/:coinid" >
                <CryptoDetails/>
              </Route>
              <Route path="/news" >
                <News/>
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer" >
       <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
          CryptoWorld <br/>
          All right reserverd 
        </Typography.Title> 
        <Space>
        
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>

        </Space>
     </div>
     </div>
    
    </div>
  );
}

export default App;
