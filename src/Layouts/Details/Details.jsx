import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PokeData from '../../Components/Pokedata'
import './Details.css'
import PokeBall from '../../Iconos e imagenes/Pokeball.png'
import App from '../../App'
function Details() {
    const { id } = useParams()

    const pokemon = PokeData.find(pokemon => pokemon.id === id)
    const pokemonIndex = PokeData.indexOf(pokemon)

    const [lastPokemon, setLastPokemon] = useState(pokemon)
    const [nextPokemon, setNextPokemon] = useState(pokemon)

    useEffect(() => {
        const pokemon = PokeData.find(pokemon => pokemon.id === id)
        const pokemonIndex = PokeData.indexOf(pokemon)
        const lastIndex = PokeData.length - 1

        if (pokemonIndex !== 0) {
            setLastPokemon(PokeData[pokemonIndex - 1])
        } else {
            setLastPokemon(PokeData[lastIndex])
        }

        if (pokemonIndex !== lastIndex) {
            setNextPokemon(PokeData[(pokemonIndex + 1)])
        } else {
            setNextPokemon(PokeData[0])
        }
    }, [id])

    /*    const goToLastPokemon = () => {
           router.push('/' + lastPokemon.id)
           console.log('go to last pokemon')
       }
    */


    return (
        <div className='details'>
            <div className='background'>

                {lastPokemon === null ? null : <div className='last-pokemon-details' style={{ backgroundColor: lastPokemon.color }}>
                    <header className='pokemon-name' style={{ backgroundColor: lastPokemon.color }}>
                        <img
                            className='pokeball'
                            src={PokeBall}
                        />
                        <div className='name-div'>

                            <p>{lastPokemon.name}</p>
                        </div>
                        <p className='pokemon-id'>#{lastPokemon.id}</p>
                    </header>

                    <main className='pokemon-info'>
                        <img
                            className='pokemon-img'
                            src={lastPokemon.image}
                        />
                        <div className='about'>
                            <div className='type-container'>
                                <span style={{ backgroundColor: lastPokemon.color }}>{lastPokemon.main_type}</span>
                                {lastPokemon.secondary_type !== 'none' ? <span style={{ backgroundColor: lastPokemon.secondary_color }}>{lastPokemon.secondary_type}</span> : null}
                            </div>
                            <p style={{ color: lastPokemon.color, fontWeight: 'bolder', fontSize: '1.2rem' }}>About</p>

                            <div className='info-about'>

                                <div className='weight'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                            <path fill="#212121" d="M14 2h-2.025C11.06.793 9.627 0 8 0 6.373 0 4.94.793 4.025 2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2ZM8 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm7 13a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1.424A4.959 4.959 0 0 0 3 5c0 2.757 2.243 5 5 5s5-2.243 5-5a4.96 4.96 0 0 0-.424-2H14a1 1 0 0 1 1 1v10ZM8 8a1.494 1.494 0 0 0 1.014-2.598l.945-2.205a.5.5 0 1 0-.919-.394L8.095 5.01C6.987 4.938 6.5 5.895 6.5 6.5 6.5 7.327 7.173 8 8 8Zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z" />
                                        </svg>
                                        <span>{lastPokemon.weight}</span>
                                    </div>

                                    <h6>Weight</h6>
                                </div>

                                <div className='height'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="none" viewBox="0 0 8 16">
                                            <path fill="#212121" d="M7 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM1 15V1h6v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H1Z" />
                                        </svg>
                                        <span>{lastPokemon.height}</span>
                                    </div>
                                    <h6>Height</h6>

                                </div>

                                <div className='moves'>
                                    <p>{lastPokemon.main_ability}</p>
                                    <p>{lastPokemon.secondary_ability}</p>
                                    <h6>Moves</h6>
                                </div>
                            </div>
                            <p className='description'>{lastPokemon.description}</p>
                        </div>
                        <div className='stats'>
                            <p style={{ color: lastPokemon.color, fontWeight: 'bolder', fontSize: '1.2rem' }}>Base Stats</p>
                            <div className='stats-columns'>
                                <div className='stats-column-1' style={{ color: lastPokemon.color, fontWeight: 'bolder' }}>
                                    <p>HP</p>
                                    <p>ATK</p>
                                    <p>DEF</p>
                                    <p>SATK</p>
                                    <p>SDEF</p>
                                    <p>SPD</p>
                                </div>

                                <div className='stats-column-2'>
                                    <p>0{lastPokemon.stats.HP}</p>
                                    <p>0{lastPokemon.stats.ATK}</p>
                                    <p>0{lastPokemon.stats.DEF}</p>
                                    <p>0{lastPokemon.stats.SATK}</p>
                                    <p>0{lastPokemon.stats.SDEF}</p>
                                    <p>0{lastPokemon.stats.SPD}</p>
                                </div>

                                <div className='stats-column-3'>

                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: lastPokemon.color, width: lastPokemon.stats.HP + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: lastPokemon.color, width: '200' - (lastPokemon.stats.HP) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: lastPokemon.color, width: lastPokemon.stats.ATK + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: lastPokemon.color, width: '200' - (lastPokemon.stats.ATK) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: lastPokemon.color, width: lastPokemon.stats.DEF + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: lastPokemon.color, width: '200' - (lastPokemon.stats.DEF) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: lastPokemon.color, width: lastPokemon.stats.SATK + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: lastPokemon.color, width: '200' - (lastPokemon.stats.SATK) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: lastPokemon.color, width: lastPokemon.stats.SDEF + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: lastPokemon.color, width: '200' - (lastPokemon.stats.SDEF) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >
                                        lastP                                        <div className='progress' style={{ backgroundColor: lastPokemon.color, width: lastPokemon.stats.SPD + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: lastPokemon.color, width: '200' - (lastPokemon.stats.SPD) + 'px' }}></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </main >
                </div >}
                {nextPokemon === null ? null : <div className='next-pokemon-details' style={{ backgroundColor: nextPokemon.color }}>
                    <header className='pokemon-name' style={{ backgroundColor: nextPokemon.color }}>
                        <img
                            className='pokeball'
                            src={PokeBall}
                        />
                        <div className='name-div'>

                            <p>{nextPokemon.name}</p>
                        </div>
                        <p className='pokemon-id'>#{nextPokemon.id}</p>
                    </header>

                    <main className='pokemon-info'>
                        <img
                            className='pokemon-img'
                            src={nextPokemon.image}
                        />
                        <div className='about'>
                            <div className='type-container'>
                                <span style={{ backgroundColor: nextPokemon.color }}>{nextPokemon.main_type}</span>
                                {nextPokemon.secondary_type !== 'none' ? <span style={{ backgroundColor: nextPokemon.secondary_color }}>{nextPokemon.secondary_type}</span> : null}
                            </div>
                            <p style={{ color: nextPokemon.color, fontWeight: 'bolder', fontSize: '1.2rem' }}>About</p>

                            <div className='info-about'>

                                <div className='weight'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                            <path fill="#212121" d="M14 2h-2.025C11.06.793 9.627 0 8 0 6.373 0 4.94.793 4.025 2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2ZM8 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm7 13a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1.424A4.959 4.959 0 0 0 3 5c0 2.757 2.243 5 5 5s5-2.243 5-5a4.96 4.96 0 0 0-.424-2H14a1 1 0 0 1 1 1v10ZM8 8a1.494 1.494 0 0 0 1.014-2.598l.945-2.205a.5.5 0 1 0-.919-.394L8.095 5.01C6.987 4.938 6.5 5.895 6.5 6.5 6.5 7.327 7.173 8 8 8Zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z" />
                                        </svg>
                                        <span>{nextPokemon.weight}</span>
                                    </div>

                                    <h6>Weight</h6>
                                </div>

                                <div className='height'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="none" viewBox="0 0 8 16">
                                            <path fill="#212121" d="M7 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM1 15V1h6v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H1Z" />
                                        </svg>
                                        <span>{nextPokemon.height}</span>
                                    </div>
                                    <h6>Height</h6>

                                </div>

                                <div className='moves'>
                                    <p>{nextPokemon.main_ability}</p>
                                    <p>{nextPokemon.secondary_ability}</p>
                                    <h6>Moves</h6>
                                </div>
                            </div>
                            <p className='description'>{nextPokemon.description}</p>
                        </div>
                        <div className='stats'>
                            <p style={{ color: nextPokemon.color, fontWeight: 'bolder', fontSize: '1.2rem' }}>Base Stats</p>
                            <div className='stats-columns'>
                                <div className='stats-column-1' style={{ color: nextPokemon.color, fontWeight: 'bolder' }}>
                                    <p>HP</p>
                                    <p>ATK</p>
                                    <p>DEF</p>
                                    <p>SATK</p>
                                    <p>SDEF</p>
                                    <p>SPD</p>
                                </div>

                                <div className='stats-column-2'>
                                    <p>0{nextPokemon.stats.HP}</p>
                                    <p>0{nextPokemon.stats.ATK}</p>
                                    <p>0{nextPokemon.stats.DEF}</p>
                                    <p>0{nextPokemon.stats.SATK}</p>
                                    <p>0{nextPokemon.stats.SDEF}</p>
                                    <p>0{nextPokemon.stats.SPD}</p>
                                </div>

                                <div className='stats-column-3'>

                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: nextPokemon.color, width: nextPokemon.stats.HP + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: nextPokemon.color, width: '200' - (nextPokemon.stats.HP) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: nextPokemon.color, width: nextPokemon.stats.ATK + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: nextPokemon.color, width: '200' - (nextPokemon.stats.ATK) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: nextPokemon.color, width: nextPokemon.stats.DEF + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: nextPokemon.color, width: '200' - (nextPokemon.stats.DEF) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: nextPokemon.color, width: nextPokemon.stats.SATK + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: nextPokemon.color, width: '200' - (nextPokemon.stats.SATK) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: nextPokemon.color, width: nextPokemon.stats.SDEF + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: nextPokemon.color, width: '200' - (pokemon.stats.SDEF) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: nextPokemon.color, width: pokemon.stats.SPD + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: nextPokemon.color, width: '200' - (nextPokemon.stats.SPD) + 'px' }}></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </main >
                </div >
                }

            </div>
            <div className='main-container' >
                <Link to={`/${lastPokemon.id}`} >
                    <svg
/*                     onClick={goToLastPokemon}
 */                    className='arrow-left' xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24">
                        <path fill="#666" d="m12.23 20.512.774-.774a.469.469 0 0 0 0-.663l-6.06-6.06h13.337c.26 0 .469-.21.469-.468v-1.094a.469.469 0 0 0-.469-.469H6.944l6.06-6.06a.469.469 0 0 0 0-.662l-.774-.774a.469.469 0 0 0-.662 0l-8.18 8.18a.469.469 0 0 0 0 .664l8.18 8.18c.183.183.48.183.662 0Z" />
                    </svg>
                </Link>
                <Link to={`/${nextPokemon.id}`} >
                    <svg className='arrow-right' xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24">
                        <path fill="#666" d="m12.23 20.512.774-.774a.469.469 0 0 0 0-.663l-6.06-6.06h13.337c.26 0 .469-.21.469-.468v-1.094a.469.469 0 0 0-.469-.469H6.944l6.06-6.06a.469.469 0 0 0 0-.662l-.774-.774a.469.469 0 0 0-.662 0l-8.18 8.18a.469.469 0 0 0 0 .664l8.18 8.18c.183.183.48.183.662 0Z" />
                    </svg>
                </Link>
                <div className='pokemon-details' style={{ backgroundColor: pokemon.color }}>
                    <header className='pokemon-name' style={{ backgroundColor: pokemon.color }}>
                        <img
                            className='pokeball'
                            src={PokeBall}
                        />
                        <div className='name-div'>
                            <Link to='/' > <svg
                                className='arrow-back'
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="#FFFFFF" d="m12.23 20.512.774-.774a.469.469 0 0 0 0-.663l-6.06-6.06h13.337c.26 0 .469-.21.469-.468v-1.094a.469.469 0 0 0-.469-.469H6.944l6.06-6.06a.469.469 0 0 0 0-.662l-.774-.774a.469.469 0 0 0-.662 0l-8.18 8.18a.469.469 0 0 0 0 .664l8.18 8.18c.183.183.48.183.662 0Z" />
                            </svg>
                            </Link>

                            <p>{pokemon.name}</p>
                        </div>
                        <p className='pokemon-id'>#{pokemon.id}</p>
                    </header>

                    <main className='pokemon-info'>
                        <img
                            className='pokemon-img'
                            src={pokemon.image}
                        />
                        <div className='about'>
                            <div className='type-container'>
                                <span style={{ backgroundColor: pokemon.color }}>{pokemon.main_type}</span>
                                {pokemon.secondary_type !== 'none' ? <span style={{ backgroundColor: pokemon.secondary_color }}>{pokemon.secondary_type}</span> : null}
                            </div>
                            <p style={{ color: pokemon.color, fontWeight: 'bolder', fontSize: '1.2rem' }}>About</p>

                            <div className='info-about'>

                                <div className='weight'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                            <path fill="#212121" d="M14 2h-2.025C11.06.793 9.627 0 8 0 6.373 0 4.94.793 4.025 2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2ZM8 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm7 13a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1.424A4.959 4.959 0 0 0 3 5c0 2.757 2.243 5 5 5s5-2.243 5-5a4.96 4.96 0 0 0-.424-2H14a1 1 0 0 1 1 1v10ZM8 8a1.494 1.494 0 0 0 1.014-2.598l.945-2.205a.5.5 0 1 0-.919-.394L8.095 5.01C6.987 4.938 6.5 5.895 6.5 6.5 6.5 7.327 7.173 8 8 8Zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z" />
                                        </svg>
                                        <span>{pokemon.weight}</span>
                                    </div>

                                    <h6>Weight</h6>
                                </div>

                                <div className='height'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="none" viewBox="0 0 8 16">
                                            <path fill="#212121" d="M7 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM1 15V1h6v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H1Z" />
                                        </svg>
                                        <span>{pokemon.height}</span>
                                    </div>
                                    <h6>Height</h6>

                                </div>

                                <div className='moves'>
                                    <p>{pokemon.main_ability}</p>
                                    <p>{pokemon.secondary_ability}</p>
                                    <h6>Moves</h6>
                                </div>
                            </div>
                            <p className='description'>{pokemon.description}</p>
                        </div>
                        <div className='stats'>
                            <p style={{ color: pokemon.color, fontWeight: 'bolder', fontSize: '1.2rem' }}>Base Stats</p>
                            <div className='stats-columns'>
                                <div className='stats-column-1' style={{ color: pokemon.color, fontWeight: 'bolder' }}>
                                    <p>HP</p>
                                    <p>ATK</p>
                                    <p>DEF</p>
                                    <p>SATK</p>
                                    <p>SDEF</p>
                                    <p>SPD</p>
                                </div>

                                <div className='stats-column-2'>
                                    <p>0{pokemon.stats.HP}</p>
                                    <p>0{pokemon.stats.ATK}</p>
                                    <p>0{pokemon.stats.DEF}</p>
                                    <p>0{pokemon.stats.SATK}</p>
                                    <p>0{pokemon.stats.SDEF}</p>
                                    <p>0{pokemon.stats.SPD}</p>
                                </div>

                                <div className='stats-column-3'>

                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: pokemon.color, width: pokemon.stats.HP + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: pokemon.color, width: '200' - (pokemon.stats.HP) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: pokemon.color, width: pokemon.stats.ATK + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: pokemon.color, width: '200' - (pokemon.stats.ATK) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: pokemon.color, width: pokemon.stats.DEF + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: pokemon.color, width: '200' - (pokemon.stats.DEF) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: pokemon.color, width: pokemon.stats.SATK + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: pokemon.color, width: '200' - (pokemon.stats.SATK) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: pokemon.color, width: pokemon.stats.SDEF + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: pokemon.color, width: '200' - (pokemon.stats.SDEF) + 'px' }}></div>
                                    </div>
                                    <div className='progress-bar' >

                                        <div className='progress' style={{ backgroundColor: pokemon.color, width: pokemon.stats.SPD + 'px' }}></div>
                                        <div className='not-progress' style={{ backgroundColor: pokemon.color, width: '200' - (pokemon.stats.SPD) + 'px' }}></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </main >
                </div >
            </div>
        </div>
    )
}

export default Details
