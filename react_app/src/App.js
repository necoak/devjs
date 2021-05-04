import React, { useState } from 'react';
import './App.css';

function ShowRGB(props) {

  const data = props.data;
  return (
    <div>
      <table className="table h6">
        <tbody>
          <tr><th>Color</th><td>{data.color}</td></tr>
          <tr><th>Red</th><td>{data.red}</td></tr>
          <tr><th>Green</th><td>{data.green}</td></tr>
          <tr><th>Blue</th><td>{data.blue}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

function ShowColor(props) {

  const data = props.data;
  
  let style = {
    backgroundColor: data.color,
    widht: "100px",
    height: "100px"
  };

  return (
    <div style={style}>{data.color}</div>
  );
}

function hex(red, green, blue) {
  let rString = ("00" + Number(red).toString(16)).slice(-2);
  let gString = ("00" + Number(green).toString(16)).slice(-2);
  let bString = ("00" + Number(blue).toString(16)).slice(-2);
  return "#"+rString+gString+bString;
}

function App() {
  const [red, setRed] = useState("0");
  const [green, setGreen] = useState("0");
  const [blue, setBlue] = useState("0");
  const [form, setForm] = useState({
    red: 0, green: 0, blue: 0, color: "#000000"});

  const doChangeRed = (event)=>{
    setRed(event.target.value);
  }

  const doChangeGreen = (event)=>{
    setGreen(event.target.value);
  }

  const doChangeBlue = (event)=>{
    setBlue(event.target.value);
  }

  const doSubmit = (event)=> {
    setForm({red:red, green:green, blue:blue, color:hex(red,green,blue)});
    event.preventDefault();
  }

  return (
    <div>
    <h1 className="bg-primary text-white display-4 ">React</h1>
    <div className="container">
      <h4 className="my-3">Hooks sample(ColorPanel)</h4>
      <ShowRGB data={form}/>
      <ShowColor data={form}/>
      <form onSubmit={doSubmit}>
        <div className="form-group">
          <label>Red:</label>
          <input type="number" className="form-control" 
              onChange={doChangeRed} />
        </div>
        <div className="form-group">
          <label>Green</label>
          <input type="number" className="form-control" 
              onChange={doChangeGreen} />
        </div>
        <div className="form-group">
          <label>Blue:</label>
          <input type="number" className="form-control" 
              onChange={doChangeBlue} />
        </div>
        <input type="submit" className="btn btn-primary" 
            value="Click" />
        </form>
    </div>
  </div>
  );
}


export default App;
