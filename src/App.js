/* handle route */
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

//import axios from 'axios';
//import { Component, useState } from "react";
import api from './api/portfolio';
import { Route, Switch, useHistory } from  'react-router-dom';
import { useState, useEffect } from "react";
//import { format  } from "date-fns";

// const api = axios.create({
//   baseUrl: `http://localhost:3000/courses/`
// })



// class App extends Component {


//   state = {
//     courses: []
//   }


//   constructor() {
//     super();
//     apiii.get('/').then(res => {
//       console.log(res.data);
//       this.setState({ courses: res.data})
//     })
//   }





//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Home />
//         <About />
//         <Skills />
//         <Work />
//         <Contact />
//       </div>
//     );
//   }
// }

function App() {
const [skills, setSkills] = useState([]);
const [work, setWork] = useState([]);
const [user, setUser] = useState([]);
const [fetchError, setFetchError] = useState(null);

useEffect(() => {
  const fetchSkills = async () => {
    try {
      const response = await api.get('/skills');
     // const response = await api.get('/projects/list')
      if(response && response.data) setSkills(response.data);
      console.log('-------', response.data)
      console.log('--ss--', skills)
      if (response.status !== 200) throw Error('SOmething went wrong! No data received from API call');
      setFetchError(null);
    } catch(err) {
        if (err.response) {
          // not ok (not in 200 response range satus code)
          console.log('err-',err.response.data);
          console.log(err.response.status);
          setFetchError(err.message);
        } else {
          console.log(`Error: ${err.message}`);
          setFetchError(err.message);
        }
    }
  }
  fetchSkills();
}, [])

useEffect(() => {
  const fetchWorks = async () => {
    try {
      const workResponse = await api.get('/projects');
      if(workResponse && workResponse.data) setWork(workResponse.data);
      console.log('-------', workResponse.data)
      console.log('--work--', work)
      console.log('[[[[[[', workResponse)
      if (workResponse.status !== 200) throw Error('SOmething went wrong! No data received from API call');
      setFetchError(null);
    } catch(err) {
        if (err.response) {
          // not ok (not in 200 response range satus code)
          console.log(err.response.data);
          console.log(err.response.status);
          setFetchError(err.message);
        } else {
          console.log(`Error: ${err.message}`);
          setFetchError(err.message);
        }
    }
  }
  fetchWorks();
}, [])

useEffect(() => {
  const fetchUser = async () => {
    try {
      const userResponse = await api.get('/user');
      if(userResponse && userResponse.data) setUser(userResponse.data[0]);
      console.log('--uset-----', userResponse.data[0])
      console.log('--user--', user)
      console.log('[[[[[[', userResponse)
      if (userResponse.status !== 200) throw Error('SOmething went wrong! No data received from API call');
      setFetchError(null);
    } catch(err) {
        if (err.response) {
          // not ok (not in 200 response range satus code)
          console.log(err.response.data);
          console.log(err.response.status);
          setFetchError(err.message);
        } else {
          console.log(`Error: ${err.message}`);
          setFetchError(err.message);
        }
    }
  }
  fetchUser();
}, [])

  return (
    <div>
      <Navbar />
      <Home user={user} />
      <About user={user} />
      <Skills skills={skills} />
      <Work work={work} />
      <Contact />
    </div>
  );
}

export default App;
