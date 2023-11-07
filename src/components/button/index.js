import { Button } from "@mui/material";

const Default =(props)=>{
    const{...other} = props
    return <Button variant="contained" {...other}></Button>
}
export {Default as Button}
