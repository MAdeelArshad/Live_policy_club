import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CompactProfile() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>

      <CardContent>
       <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" width="10%" height="10%" />

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Name
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
          Role
        </Typography>

        <Typography variant="h5" component="h2">
          Votes
        </Typography>

      </CardContent>
      
    </Card>
  );
}
