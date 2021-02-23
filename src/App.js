import React from 'react'
import Card from './components/card'
import Card2 from './components/class'
import Data from './data.json'
import Name from './name.json'
import State from './state'
import Filter from './components/Filter'
import FiltData from '../src/json/filt_data.json'
import Condition_Rendering from '../src/Condition_Rendering/Condition'
import Event from '../src/Event Handler Class/Event'

function App() {
    
    
    return <div>
        <h1 className='headingStyle'>Hi</h1>
    {Data.map((item, index) => <Card key = {index} titleText={item.titleText} descText = {item.titleDesc}/>)}
        {Name.map((s_name, f_name) => <Card2 key = {f_name} name = {s_name.name} />)}
        <State />
        {FiltData.map((data, key) => <Filter key= {key} name = {data.name} age= {data.age}/>)}
        <Condition_Rendering />
        <Event />
    </div>
}

export default App;