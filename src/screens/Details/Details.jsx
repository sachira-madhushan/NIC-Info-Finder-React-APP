/* eslint-disable no-unused-vars */
import {useState} from 'react'
import { TextField,Button,IconButton } from '@mui/material'
import box from '../../assets/box.png'
import './Details.css'
import DetailsPanel from '../../components/DetailsPanel'
import CloseIcon from '@mui/icons-material/Close';
export default function Details(){
    const [nicNO,setNicNO]=useState('NA');
    const [gender,setGender]=useState('NA');
    const [birthDay,setBirthday]=useState("2000/07/24");

    function submit(){
        
    }

    return(
        <>
            <div className="main">
                <div className="top">
                    <div className="imagewithclose">
                        <img src={box} alt="No" /><br />
                        <IconButton aria-label="delete" className='close'>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
                
                <div className="inputs">
                    <TextField onChange={(e) => setNicNO(e.target.value)} id="outlined-basic"  className='nic' label="Enter NIC No" variant="outlined" color="success"/>
                    <Button variant="contained" onClick={()=>submit()} color="success" className='submitbutton'>
                        Submit
                    </Button>
                    <DetailsPanel title={"NIC No"} value={nicNO}></DetailsPanel>
                    <DetailsPanel title={"Birthday"} value={birthDay}></DetailsPanel>
                    <DetailsPanel title={"Gender"} value={gender}></DetailsPanel>
                    <br />
                </div>
            </div>
        </>
    )
}