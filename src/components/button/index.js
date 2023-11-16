import { Button } from "@mui/material";
import {Box} from "../box"
import {Text} from "../text"


const Default = (props) => {
  const { name, caption, sxBox, sxText, propsBox, propsText, ...other } = props;

  const captionIsString = typeof caption === "string";

  return (
    <Button variant="contained" {...other}>
      <Box defFlex center row gap {...propsBox} sx={{ ...sxBox }}>
        {captionIsString ? (
          <Text
            caption={caption}
            {...propsText}
            sx={{ fontSize: 12, ...sxText }}
          />
        ) : (
          caption
        )}
        {other.children}
      </Box>
    </Button>
  );
};


const MenuBatton=(props)=> {
  return <Default variant="text" {...props}></Default>
}
export { Default as Button, MenuBatton  };
