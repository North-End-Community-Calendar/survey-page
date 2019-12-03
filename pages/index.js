import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import TabNav from '../src/TabNav';
import ResidentSurvey from '../src/ResidentSurvey';
import PromoterSurvey from '../src/PromoterSurvey';
import OrganizerSurvey from '../src/OrganizerSurvey';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Index() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Thank you for taking our survey on organizing and attending events in Detroit! 
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5" component="h2" gutterBottom align="center">
            We are working to foster incredible neighborhoods by helping Detroit's residents connect with community events.
          </Typography>
          <br/>
          <br/>
          <Typography variant="subtitle1" component="h3" gutterBottom align="center">
            What best describes you?
          </Typography>
          <TabNav />
          <Switch>
            <Route path="/resident" component={ResidentSurvey} />
            <Route path="/promoter" component={PromoterSurvey} />
            <Route path="/organizer" component={OrganizerSurvey} />
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}
