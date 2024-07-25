import 'react'
import nic from '../../assets/nic.png'
import './Home.css'
import { Link } from 'react-router-dom'
export default function Home(){
    return(
        <>
        <h2>NIC Info Finder</h2>
        <div className='image'>
            <div className="click">
                    <h2><Link to={"/details"}>Click</Link></h2>
            </div>
            <img src={nic} alt="" width="100%"/>
        </div>
        </>
    )
}