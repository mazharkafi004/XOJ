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
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="pos">
      <Card className={classes.root} className="dist">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="codeforces logo"
          height="40%"
          
          width="50%"
          image="data:image/png;base64,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"
          title="codeforces"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <b>Codeforces</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers from ITMO University led by Mikhail Mirzayanov. Since 2013, Codeforces claims to surpass Topcoder in terms of active contestants. As of 2018, it has over 600,000 registered users.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="https://codeforces.com/" target="_blank"><Button size="small" color="primary">
         <b> Visit Site</b>
        </Button>
        </a>
      <Link>  <Button size="small" color="primary">
      <b> View Problemlist</b>
        </Button>
      </Link>
      </CardActions>
    </Card>
    <Card className={classes.root} className="fist">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="uri logo"
          height="140"
          
          width="30"
          image="https://repository-images.githubusercontent.com/269522113/ea4c1580-bc03-11ea-9711-5b355fc67a34"
          title="uri"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           <b> URI Online Judge </b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The URI Online Judge is a project that has been developed by the Computer Science Departmente at URI - Universidade Regional Integrada.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="https://www.urionlinejudge.com.br/judge/en/" target="_blank"><Button size="small" color="primary">
         <b> Visit Site</b>
        </Button>
        </a>
      <Link to="/problemlisturi">  <Button size="small" color="primary">
      <b> View Problemlist</b>
        </Button>
      </Link>
      </CardActions>
    </Card>
    <Card className={classes.root} className="gist">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="40%"
          image="data:image/jpeg;base64,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Ud58ZAFvESkQ8GHYba2Vt/ktI0Rq3tNwf7Tx0ckjagO4qW3LaLlhHhI8STD1YlcqrxTE0a4brWNe0Zs/Z0MTqqruHNb8o2LL/iOB3XCRm8lhdb9Nn/hqn6aOGe5a2/2rpKukbFTve6QTMks6NzRYBwO89aRDLDbjb2FtNVcaMstbnqreiDTV/wC9f/T7IUlxuKdbtOHphYUeAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQbDZ6WNlZSvnDTC2eJ0geA5haHDK4POLIOs7XcHMdZUtqKOqpaWExMYI442hpILiX8mw3hw9CCmt6dHp2zk9FLVRyyOLsCw2zLpg+wHPuF0HF0BAQEBAQEBAQEBAQEBAQEBAQbPSu8d536BWHT4H0Nf5e0M1VuhAQEBAQEBAQEBAQaav/ev/p9kKS43FOt2nD0wsKPAICAgICAgICAgICAgICAgICAgICAgICDwYm9FvoCCrWAcwA6gAg9ICAgICAgICAgICAgICAgICAg2eld47zv0CsOnwPoa/wAvaGaq3QgICAgICAgICAgINNX/AL1/9PshSXG4p1u04emFhR4BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBs9K7x3nfoFYdPgfQ1/l7QzVW6EBAQEBAQEBAQEBBpq/96/+n2QpLjcU63acPTCwo8AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2eld47zv0CsOnwPoa/y9oZqrdCAgICAgICAgICAg01f+9f8A0+yFJcbinW7Th6YWFHgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEHtkrhua4jqKPtZ3i1s4yormI/iXrsl/Td6UfTlt572rxk7Jf03elDlt572rxk7Jf03elDlt572rxk7Jf03elDlt572rxk7Jf03elDlt572rxk7Jf03elDlt572rxk7Jf03elDlt572rxk7Jf03elDlt572rxk7Jf03elDlt572rxk7Jf03elDlt572rxk7Jf03elDlt572rxk7Jf03elDlt572rxlbc4k3JufGedHnrrqrqmqqc5lRGIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/2Q=="
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <b>UVa Online Judge</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          UVa Online Judge is an online automated judge for programming problems hosted by University of Valladolid. Its problem archive has over 4300 problems and user registration is open to everyone. 

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="https://onlinejudge.org/" target="_blank"><Button size="small" color="primary">
         <b> Visit Site</b>
        </Button>
        </a>
      <Link to="/uvalist">  <Button size="small" color="primary">
      <b> View Problemlist</b>
        </Button>
      </Link>
      </CardActions>
    </Card>
    </div>
  );
}
