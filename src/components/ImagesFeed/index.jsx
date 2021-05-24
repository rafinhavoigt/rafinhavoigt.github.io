import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {tileData} from './tileData';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhotoViewer from '../PhotoViewer/';

export default function ImagesFeed() {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.only('xs', 'sm'));
  const isSmallTablet = useMediaQuery(theme.breakpoints.only('sm', 'md'));
  const isBigTablet = useMediaQuery(theme.breakpoints.only('md', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.only('lg', 'xl'));
  const isWideScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const [open, openViewer] = React.useState(false);
  const [picture, setPicture] = React.useState(null);
  const [title, setTitle] = React.useState(null);

  const findOutTheHeight = () => {
    if (isWideScreen) {
      return 400;
    } else if (isDesktop) {
      return 350;
    } else if (isBigTablet) {
      return 200;
    } else if (isSmallTablet) {
      return 180;
    } else if (isMobileDevice) {
      return 160;
    }
  };
  const height = findOutTheHeight();
  const findOutTheNumberOfColumns = () => {
    if (isMobileDevice) {
      return 2;
    } else {
      return 4;
    }
  };
  const columns = findOutTheNumberOfColumns();

  const closeViewer = () => {
    openViewer(false);
    setPicture(null);
  };

  const viewPicture = (picture, title) => {
    setPicture(picture);
    setTitle(title);
    openViewer(true);
  };

  return (
    <div>
      <GridList cols={columns} cellHeight={height}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.thumbnail}
            cols={tile.cols || 1}
            onClick={() => viewPicture(tile.image, tile.title)}
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
