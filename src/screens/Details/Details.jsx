/* eslint-disable no-unused-vars */
import {useState} from 'react'
import { TextField,Button,IconButton,Alert } from '@mui/material'
import box from '../../assets/box.png'
import './Details.css'
import DetailsPanel from '../../components/DetailsPanel'
import CloseIcon from '@mui/icons-material/Close';
import {validateNic,infoNic} from 'lanka-nic-2019'
import { useNavigate } from 'react-router-dom'

export default function Details(){
    const navigate=useNavigate();
    const [nicNO,setNicNO]=useState('NA');
    const [gender,setGender]=useState('NA');
    const [birthDay,setBirthday]=useState("NA");
    const [error,setError]=useState("none");

    function submit(){
        if(!validateNic(nicNO)){
            setError("flex");
            setBirthday("NA");
            setGender("NA");
        }else{
            setError("none");
            const {birthday,gender}=infoNic(nicNO);
            setBirthday(birthday);
            setGender(gender);
        }
    }

    return(
        <>
            <div className="main">
                <div className="top">
                    <div className="imagewithclose">
                        <img src={box} alt="No" className='topimage'/><br />
                        <IconButton aria-label="delete" className='close' onClick={()=>navigate("/")}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
                
                <div className="inputs">
                    
                    <TextField onChange={(e) => setNicNO(e.target.value)} id="outlined-basic"  className='nic' label="Enter NIC No" variant="outlined" color="success"/>
                    <Button variant="contained" onClick={()=>submit()} color="success" className='submitbutton'>
                        Submit
                    </Button>
                    <Alert severity="error" sx={{
                        width:300,
                        display:error
                    }}>Invalied NIC number</Alert>
                    <DetailsPanel title={"NIC No"} value={nicNO}></DetailsPanel>
                    <DetailsPanel title={"Birthday"} value={birthDay}></DetailsPanel>
                    <DetailsPanel title={"Gender"} value={gender}></DetailsPanel>
                    <br />
                </div>
            </div>
        </>
    )
}