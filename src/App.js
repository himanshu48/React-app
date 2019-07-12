import React from 'react';
import './App.css';
import Navbar from './components.js/navbar';
// import MouseContainer from './sample/MouseContainer';
// import CounterOne from './sample/counterOne';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <Navbar/>

    // <CounterOne/>

    // <UserContext.Provider value={'From usercontext'}>
    //   <ChannelContext.Provider value={'From channelcontext'}>
    //   <MouseContainer/>
    //   </ChannelContext.Provider>
    // </UserContext.Provider>
  );
}

export default App;
