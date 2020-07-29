import React from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component.jsx';
import { Switch, Route, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js'

class App extends React.Component {
  
  constructor()
  {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {this.setState({currentUser : {id : snapShot.id, ...snapShot.data()}})});
        }
        else {
          this.setState({currentUser: userAuth});
        } 
      });
      
  }

  componentWillUnmount(){ 
    this.unsubscribeFromAuth();
  }

  render(){
    return (    
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path= '/' component={HomePage}/>
          <Route path= '/shop' component={ShopPage}/>
          <Route path= '/signIn' component={SignInAndSignUp}/>
          </Switch>
      </div>
    );  
    }
  }
export default App;
