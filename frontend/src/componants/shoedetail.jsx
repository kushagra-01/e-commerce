import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
export const ShoeDetail = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({});
  const [size, setsize] = useState("");
  let { id } = useParams();

  const handlesize = (event) => {
    setsize(event.target.value);
  };
  useEffect(() => {
    axios.get(`https://parait.herokuapp.com/${id}`).then(({ data }) => {
      setdata(data);
      console.log(data);
    });
  }, []);

  const handlepost = () => {
    let payload = {
      name: data.name,
      price: data.price,
      image: data.image,
      size: size,
    };

    axios.post("https://parait.herokuapp.com/cart", payload).then((res) => {});
    navigate("/cart");
  };

  return (
    <>
      {data && (
        <div className="maindiv">
          <div>
            <img src={data.image} style={{ width: "100%" }}></img>
          </div>
          <div>
            <h3>{data.brand}</h3>
            <h1>{data.name}</h1>
            <h2>{data.category}</h2>
            <h2>₹{data.price}/-</h2>
            <p>{data.description}</p>
            <p>{data.type}</p>
            <div className="sizeselect">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Size
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Age"
                    onChange={handlesize}
                  >
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <button
              disabled={size == ""}
              onClick={() => handlepost()}
              className="addcart"
            >
              ADD CART
            </button>
          </div>
        </div>
      )}
    </>
  );
};
