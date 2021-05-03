import React, { Component, useState } from 'react';
import './App.css';
import Rect from './Rect';


function AleartMessage(props) {
  const data = props.data;
  const msg = JSON.stringify(data);

  return (
    <div className="alert alert-primary h5 text-primary">
      <h5>{msg}</h5>
      <hr/>
      <table className="table h6">
        <tbody>
          <tr><th>Name</th><td>{data.name}</td></tr>
          <tr><th>Mail</th><td>{data.mail}</td></tr>
          <tr><th>Age</th><td>{data.age}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [name, setName] = useState("HogeHogeo");
  const [mail, setMail] = useState("hoge@hogehoge.com");
  const [age, setAge] = useState("31");
  const [form, setForm] = useState({
    name:'no name', mail:'no mail', age: 0
  });

  const doChangeName = (event)=>{
    setName(event.target.value);
  }

  const doChangeMail = (event)=>{
    setMail(event.target.value);
  }

  const doChangeAge = (event)=>{
    setAge(event.target.value);
  }
  const doSubmit = (event)=> {
    setForm({name:name, mail:mail, age:age});
    event.preventDefault();
  }

  return ();
}


export default App;
