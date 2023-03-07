import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios'
import { Header } from '../Header/Header'
import { Products } from '../Products/Products'
import "./Home.css"
export const Home = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
        axios
        .get(`http://localhost:1337/api/Games`)
        .then((resp)=>{
            setGames(resp.data.data)
        })
        .catch(()=>{
            
        })
        .finally(()=>{

        })
    }, [])
    
  return (
    <div className='Home'>
        <Header />
        <div className='products-games'>
            {games.map((item)=>{
                return <Products item={item.attributes} key={item.id}/>
            })}
        </div>
    </div>
  )
}
