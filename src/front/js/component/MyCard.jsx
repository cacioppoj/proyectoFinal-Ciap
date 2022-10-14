import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

export default function MyCard({hotel}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://picsum.photos/200/300?grayscale"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {hotel.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button color="inherit" sx={{background: "rgba(25,118,210)", color: "white", float: "right"}}>Ver Mas</Button>
      </CardActions>
    </Card>
    
  );
}