import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useLocation } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: 'black',
    height: 2000,
  },
  animename: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 50,
  },
  review: {
    backgroundColor: 'white',
    height: 250,
    width: 250,
    padding: 40,
  },

  animename1: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 30,
  },
  descriptions: {
    color: 'white',
    alignText: 'left',
    width: 1000,
    marginLeft: 90,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  fix: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: 1000,
  },
  icon1: {
    fontSize: 70,
    color: '#3f51b5',
  },
  icon2: {
    fontSize: 70,
    color: '#d81b60',
  },
  button: {
    width: 300,
  },
  button5: {
    width: 800,
  },
  button4: {
    width: 90,
  },
  button1: {
    width: 300,
    marginLeft: 10,
  },
  
  button2: {
    marginLeft: 90,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    width: 200,
  },
  review1:{
    padding:20
  },
  link: {
    textDecoration: 'none',
  },
 
}));

export default function AnimeDetails() {
  const { state } = useLocation();
  const classes = useStyles();

  const [review, setReview] = useState([{ name: 'heeloo', rating: 5 }]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');

  const onsubmit = (e) => {
    e.preventDefault();
    setReview([
      ...review,

      {
        name: name,
        rating: rating,
      },
    ]);
    setName('');
    setRating('');
  };

  return (
    <div className={classes.root}>
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.fix}>
              <div className={classes.image}>
                <img
                  src={state.animes.cover_image}
                  className={classes.image}
                  alt={state.animes.titles.en}
                />
              </div>
              <div>
                <Typography className={classes.animename}>
                  {state.animes.titles.en}{' '}
                </Typography>
                <br />
                <Button variant="contained" className={classes.button}>
                  Season Year:{state.animes.season_year}
                </Button>{' '}
                <Button variant="contained" className={classes.button}>
                  Season Period :{state.animes.season_period}
                </Button>
                <br />
                <br />{' '}
                <Button variant="contained" className={classes.button}>
                  Episodes :{state.animes.episodes_count}
                </Button>{' '}
                <Button variant="contained" className={classes.button}>
                  Episodes Duration :{state.animes.episode_duration}
                </Button>
                <br />
                <br />
                <Button variant="contained" className={classes.button}>
                  Start Date :{state.animes.start_date}
                </Button>{' '}
                <Button variant="contained" className={classes.button}>
                  End Date :{state.animes.end_date}
                </Button>
                <br />
                <br />
                <Button variant="contained" className={classes.button}>
                  Version :{state.animes.version}
                </Button>{' '}
                <Button variant="contained" className={classes.button}>
                  Score :{state.animes.score}
                </Button>
                <br />
                <br />
              </div>
            </div>
            <a
              href={state.animes.trailer_url}
              target="_blank"
              className={classes.link}
            >
              <Button
                variant="contained"
                color="secondary"
                className={classes.button1}
              >
                Watch trailer
              </Button>
            </a>{' '}
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography className={classes.animename1}>Genres</Typography>
            <Typography>
              {state.animes.genres.map((genre) => (
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button2}
                >
                  {genre}
                </Button>
              ))}
            </Typography>{' '}
            <br />
            <br />
            <br />
            <Typography className={classes.animename1}>
              Descriptions
            </Typography>{' '}
            <br /> <br />
            <Typography className={classes.descriptions}>
              {state.animes.descriptions.en}{' '}
            </Typography>
            <Typography className={classes.animename1}>Add Review</Typography>
           
            <div className={classes.review}>
              <form
                onSubmit={(e) => {
                  onsubmit(e);
                }}
              >
                <br />
                <br />
                <Typography> Add review </Typography>

                <TextField
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
                <br />
                <br />
                <br />

                <Typography> Add rating </Typography>
                <TextField
                  type="text"
                  value={rating}
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                  required
                />
                <br />
                <br />
                <br />
                <Button variant="contained" color="primary" type="submit">
                  {' '}
                  Add Review{' '}
                </Button>
              </form>
            </div>
            <br/>
            {review.map((review) => (
              <>
              <div className={classes.review1}>
              <Button variant="contained" className={classes.button5}>
                 Review:{review.name}
                </Button>  <Button variant="contained" className={classes.button4}>
                Rating:{review.rating}
                </Button>
              </div>
             </>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
