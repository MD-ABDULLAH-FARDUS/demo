import React from 'react'
import Card from './components/card'
import Card2 from './components/class'

function App() {
    return <div>
        <h1 className='headingStyle'>Hi</h1>
        <Card titleText = 'Call Mother' descText = 'Name: Jannatul Fardus'/>
        <Card titleText = 'Call Father' descText = 'Name: Md. Oliullah Anshari'/>
        <Card titleText = 'Call Sister' descText = 'Name: Feroza Akhter'/>
        <Card titleText = 'Call Sister' descText = 'Name: Farzana Akhter'/>

        <Card2 />
    </div>
}

export default App;