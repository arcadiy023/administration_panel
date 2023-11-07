import { Box } from "@mui/material";

const Default =(props)=>{
    const{defFlex, ai, jc, center,row, gap, grow, ...other} = props
    return <Box  {...other}></Box>
}
export {Default as Box}
