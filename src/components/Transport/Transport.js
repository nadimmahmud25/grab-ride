import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box,CardActionArea } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));
  

const Transport = (props) => {
    const history = useHistory();
    const { transport, picture } = props.transport;
    const classes = useStyles();
    const handleRide = () => {
      history.push('/ride/{Transport}');
  }

  
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card   onClick={handleRide} className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={picture} title='transport' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
              {transport}
           
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  
        <Box m={6} />
      </Grid>           
            

    );
};

export default Transport;