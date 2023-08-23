import { useState } from "react"        //Trayendo un hug el cual será useState

export function TwitterFollowCard({userName, name}) {
    const [isFollowing, setIsFollowing] = useState(false) //Uso de estado con useState

    const textButton = isFollowing      //Se evalua si isFollowing es verdadero o falso
        ? 'Siguiendo'
        : 'Seguir'

    const buttonClassName = isFollowing //Se evalua si isFollowing es verdadero o falso
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)    //Cambia el estado de Siguiendo a Seguir
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>

                <img 
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/twitter/${userName}`} 
                    alt={`Avatar de ${userName}`}/>
            
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span 
                        className='tw-followCard-infoUserName'>
                            @{userName}
                    </span>
                </div>

            </header>

            <aside>
                <button 
                    className={buttonClassName}
                    onClick={handleClick}>
                        <span
                            className="tw-followCard-text">
                                {textButton}
                        </span>
                        <span
                            className="tw-followCard-stopFollow">
                                Dejar de seguir
                        </span>
                </button>
            </aside>
        </article>
    )
}