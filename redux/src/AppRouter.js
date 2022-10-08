import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './page/Index1'
import List from './page/List1'
import Home from './page/Home'

function AppRouter() {
  const [ count , setCount ] = useState(0);
  useEffect(()=>{
    console.log(`useEffect=>You clicked ${count} times`)
  })
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>{setCount(count+1)}}>click me</button>    
        <Router>
            <ul>
                <li> <Link to="/">首页</Link> </li>
                <li><Link to="/list/123">列表</Link> </li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home} />
        </Router>
    </div>
  );
}
export default AppRouter;