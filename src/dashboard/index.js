import { Box, Divider, MenuBatton, Text } from "@components";

const MyButton = (props) => {
  const { name } = props;
  return (
    <MenuBatton
      caption={
        <>
          {/* <Icon name="home"></Icon> */}
          <Text caption={name}></Text>
        </>
      }
      sx={{ justifyContent: "flex-start", borderRadius:2 }}
      
    />
  );
};
const Default = () => {
  return (
    <Box  defFlex grow row>
      <Box
        
        defFlex
        sx={{  width: 240, p:2 }}
        gap
      >
        <Box defFlex sx={{borderRadius: 4, boxShadow: "8px 8px 15px -1px rgba(66, 68, 90, 0.57)",}} gap grow>
          <Box sx={{ height: 60 }}></Box>
          <Divider />
          <Box defFlex sx={{ p: 1 }} gap={1.5} grow>
            <MyButton name="home" />
            <MyButton name="port" />
          </Box>
          <Box defFlex sx={{ p: 1 }}>
            <MyButton name="close" />
          </Box>
        </Box>
      </Box>
      <Box  grow />
    </Box>
  );
};

export { Default as Dashboard };
