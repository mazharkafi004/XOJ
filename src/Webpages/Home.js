import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Card className={classes.root} className="maal">
      <CardActionArea>
        <CardMedia
           component="img"
          image="https://img.freepik.com/free-vector/red-grunge-x-sign_1102-1385.jpg?size=626&ext=jpg"
          title="Contemplative Reptile"
          height="250"
          
          width="70"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <b>What is XOJ?</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         <b>XOJ is a unified Online Judge where you can find many online judges and submit in them from here</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Link to="/signup"> <Button size="small" color="primary">
          <b>Sign UP</b>
        </Button></Link>
        <Link to="/signin"> <Button size="small" color="primary">
          <b>Sign IN</b>
        </Button></Link>
      </CardActions>
    </Card>
  );
}
