import axios from "axios"
import { useEffect,useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from "react-router-dom"
export const Men = () =>{
    const [data,setdata]=useState([])
    const [price, setPrice] = useState('');
    const [brand, setbrand] = useState('');
    const [rate, setRate] = useState('');
   const handleChangeprice = (event) => {
    setPrice(event.target.value);
    if(event.target.value==10){
        let x=data.sort((a,b)=>{ 
            return b.price-a.price
        })
        setdata([...x])
    }
    if(event.target.value==20){
        let x=data.sort((a,b)=>{ 
            return a.price-b.price
        })
        setdata([...x])
    }
   
  };
  const handleChangebrand = (event) => {
    axios.get("https://parait.herokuapp.com").then(({ data }) => {
      setdata( data.filter((el)=>{return el.brand==event.target.value}))
    });
   
 
  }

  const handleChangerate = (event) => {

    axios.get("https://parait.herokuapp.com").then(({ data }) => {
      setdata( data.filter((el)=>{return el.category==event.target.value}))
    });
   
   
  };
  
   useEffect(()=>{
    axios.get("https://parait.herokuapp.com").then(({ data }) => {
      setdata(data);
    });
   },[]) 
   

   
 
    
return(
        <>
      
        <div className="sortdiv">
        <div>
        <div className="schild">
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={price}
          label="Age"
          onChange={handleChangeprice}
        >
          <MenuItem  value={10}>High to low</MenuItem>
          <MenuItem value={20}>Low to high</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>
        <div>
        <div className="schild">
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brand}
          label="Age"
          onChange={handleChangebrand}
        >
          <MenuItem value={"Nike"} >Nike</MenuItem>
          <MenuItem value={"Adidas"}>Adidas</MenuItem>
          <MenuItem value={"Puma"} >Puma</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>
        <div className="schild">
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rate}
          label="Age"
          onChange={handleChangerate}
        >
          <MenuItem value={"Hightop"}>Hightop</MenuItem>
          <MenuItem value={"Lowtop"}>Lowtop</MenuItem>
          <MenuItem value={"Midtop"}>Midtop</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>
       <div className="all_shoe">
       {data.map((e)=>
       <Link to={`/shoedetail/${e._id}`}><div className="childdiv" key={e.id}>
           <div className="imgdiv">
           <img src={e.image}></img>
           </div>
           <h3>{e.brand}</h3>
           <h2>{e.name}</h2>
           <p>₹{e.price}/-</p>
         </div></Link>
       )}
       </div>
        </>
    )
}