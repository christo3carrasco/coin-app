/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const CoinItem = ({ coin }) => {
  return (
    <Card sx={{ margin: 1 }}>
      <CardActionArea>
        <Box sx={{ position: "relative", width: "100%", paddingTop: "100%" }}>
          <CardMedia
            component="img"
            image={coin.image}
            alt={coin.name}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <CardContent>
          <Typography variant="h5" component="div">
            {coin.name} ({coin.symbol.toUpperCase()})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${coin.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
