import React from 'react'
import Card from './components/card'
import Card2 from './components/class'
import Data from './data.json'
import Name from './name.json'
function App() {
    
    
    return <div>
        <h1 className='headingStyle'>Hi</h1>
    {Data.map((item, index) => <Card key = {index} titleText={item.titleText} descText = {item.titleDesc}/>)}
        {Name.map((s_name, f_name) => <Card2 key = {f_name} name = {s_name.name} />)}
    </div>
}

export default App;