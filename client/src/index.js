import React from 'react'
import ReactDOM from 'react-dom';
import Routing from './components/Routing';

function Index() {
    return (
       <div>
           <Routing/>
       </div>
    )
}

ReactDOM.render(<Index/>, document.getElementById('root'));