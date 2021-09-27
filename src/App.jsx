import React from 'react';

function App() {
let curDate = new Date(2021, 8, 30, 1);
curDate = curDate.getHours();
let greeting = '';
const greetStyle = { };

if(curDate >= 1 && curDate <12){
  greeting = "Good Morning!";
  greetStyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon!";
  greetStyle.color = "yellow";
} else {
  greeting = "Good Night!";
  greetStyle.color = "red";
}
 
return (
    <>
    <div>
    <h1> Hello Sir, <span style={greetStyle}> {greeting } </span> </h1>,
    </div>
    </>
)
}
 export default App;