import { Box } from "@mui/material";

const Default =(props)=>{
    const{defFlex, ai, jc, center,row, gap, grow,sx, ...other} = props

    const newSx={};
    if(defFlex) {
        newSx.display = "flex";
        newSx.flexDirection = "column"
    }

    if (ai) {
        newSx.alignItems= ai ===true ? "center":ai
    }



    return <Box sx={{...newSx,...sx}} {...other}></Box>
}
export {Default as Box}
