import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        id: 0,
        userName: 'midudev',
        name: 'Miguel Ángel Durán'
    },
    {
        id: 1,
        userName: 'samyriveratv',
        name: 'rivers'
    },
    {
        id: 2,
        userName: 'taylorswift13',
        name: 'Taylor Swift'
    },
    {
        id: 3,
        userName: 'ibai',
        name: 'Don Ibai'
    },
]

export function App() {
    return (
        <div className='App'>
            {
                users.map(user => {
                    const {id, userName, name} = user   //Se crean las variables de id, userName y name desde user

                    return (                            //Devuelve un card por cada user encontrado
                        <TwitterFollowCard
                            key={id}                    //ID unico que utiliza React para identificar el componente en el DOOM
                            userName={userName}
                            name={name}
                        />
                    )
                })
            }
        </div>

    )
}