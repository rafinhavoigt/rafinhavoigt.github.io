import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useTheme} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {tileData} from './tileData';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhotoViewer from '../PhotoViewer/';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  grid: {
    width: 100,
    height: 0,
    paddingBottom: 100
  }
}));

export default function ImagesFeed() {
  const theme = useTheme();
  const classes = useStyles();
  const [columns, setColumns] = React.useState(0);
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', '1200'));
  const [open, openViewer] = React.useState(false);
  const [picture, setPicture] = React.useState(null);
  const [title, setTitle] = React.useState(null);

  const closeViewer = () => {
    openViewer(false);
    setPicture(null);
  };

  const viewPicture = (picture, title) => {
    setPicture(picture);
    setTitle(title);
    openViewer(true);
  };

  React.useEffect(() => {
    if (isMobileDevice === true) {
      setColumns(2);
    } else if (isTablet === true) {
      setColumns(4);
    } else {
      setColumns(4);
    }
  }, [isMobileDevice, isTablet]);

  return (
    <div className={classes.root}>
      <GridList cols={columns}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.thumbnail}
            cols={tile.cols || 1}
            onClick={() => viewPicture(tile.image, tile.title)}
            className={classes.grid}
          >
            <img src={tile.thumbnail} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      <PhotoViewer
        currentState={open}
        picture={picture}
        callback={closeViewer}
        title={title}
      />
    </div>
  );
}
