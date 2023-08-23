import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    
    return (
        <div className='App'>
            <TwitterFollowCard 
                userName="midudev"
                name="Miguel Ángel Durán" 
            />
            <TwitterFollowCard 
                userName="samyriveratv" 
                name="rivers" 
                />
            <TwitterFollowCard
                userName="taylorswift13" 
                name="Taylor Swift" 
            />
        </div>

    )
}