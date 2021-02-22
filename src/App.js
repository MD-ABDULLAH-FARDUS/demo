import React from 'react'
import Card from './components/card'
import Card2 from './components/class'
import Data from './data.json'

function App() {
    
    
    return <div>
        <h1 className='headingStyle'>Hi</h1>
         {Data.map((x) => <Card titleText={x.titleText} descText = {x.titleDesc}/>)}
        <Card2 />
    </div>
}

export default App;