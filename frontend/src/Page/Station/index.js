import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import withRouter from 'react-router-dom/withRouter';
import classNames from 'classnames';
import { StationSwitcher, NavBar, Footer } from 'Component';
import { joinStation } from 'Redux/api/currentStation/actions';
import AddLink from './AddLink';
import Playlist from './Playlist';
import NowPlaying from './NowPlaying';
import styles from './styles';

const STATION_NAME_DEFAULT = 'Station Name';
const JOIN_STATION_DELAY = 2000; // 2 seconds

class StationPage extends Component {
  static propTypes = {
    classes: PropTypes.any,
    joinStation: PropTypes.any,
    currentStation: PropTypes.object,
  };

  joinStationInterval = null;

  componentWillMount() {
    // Get station id from react-router
    const { match: { params: { stationId } }, history } = this.props;
    if (stationId) {
      this.props.joinStation(stationId);
      this.joinStationInterval = setInterval(() => {
        this.props.joinStation(stationId);
      }, JOIN_STATION_DELAY);
    } else {
      history.replace(`/`);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.currentStation.station &&
        nextProps.currentStation.station.id) !==
      (this.props.currentStation.station &&
        this.props.currentStation.station.id)
    ) {
      clearInterval(this.joinStationInterval);
    }
  }

  static isNotAnEmptyArray(data) {
    if (!data) {
      return false;
    } else if (data.length === 0) {
      return false;
    }
    return true;
  }

  render() {
    const { classes, currentStation: { station, playlist } } = this.props;
    return [
      <NavBar key={1} color="primary" />,
      <Grid
        key={2}
        direction="row"
        container
        className={classes.containerWrapper}
      >
        <Grid item xs={12} className={classes.switcherContainer}>
          <StationSwitcher />
        </Grid>
        <Grid item xs={12} className={classes.container}>
          <Grid container>
            {StationPage.isNotAnEmptyArray(playlist) && [
              <Grid key={1} item xs={12} md={7} xl={8}>
                <Grid container>
                  <Grid item xs={12}>
                    <h1>
                      {station ? station.station_name : STATION_NAME_DEFAULT}
                    </h1>
                  </Grid>
                  <NowPlaying
                    className={classNames(
                      [classes.content, classes.nowPlaying],
                      {
                        [classes.emptyNowPlaying]: !playlist,
                      },
                    )}
                    autoPlay={true}
                  />
                </Grid>
              </Grid>,
              <Grid key={2} item xs={12} md={5} xl={4}>
                <Grid container>
                  <Grid item xs={12}>
                    <h1>Now Playing</h1>
                  </Grid>
                  <Playlist
                    className={classNames(classes.content, {
                      [classes.emptyPlaylist]: !playlist,
                    })}
                  />
                </Grid>
              </Grid>,
            ]}
            <Grid item xs={12}>
              <AddLink />
            </Grid>
          </Grid>
        </Grid>
      </Grid>,
      <Footer key={3} />,
    ];
  }
}

StationPage.propTypes = {
  classes: PropTypes.any,
  joinStation: PropTypes.any,
  match: PropTypes.any,
  history: PropTypes.any,
  currentStation: PropTypes.any,
};

const mapStateToProps = state => ({
  currentStation: state.api.currentStation,
});

const mapDispatchToProps = dispatch => ({
  joinStation: stationId => dispatch(joinStation(stationId)),
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(StationPage);
