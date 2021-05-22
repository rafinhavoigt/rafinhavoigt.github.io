import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Sansita Swashed, cursive'
  }
});

export default function Header() {
  const classes = useStyles();
  const twitterAccount = 'https://twitter.com/rafinhavoigt/';
  const instagramAccount = 'https://instagram.com/rafaferreirav';
  const whatsappAccount = 'https://wa.me/5547991461055';
  const emailAccount = 'mailto:rafinhavf@outlook.com';
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
      marginTop={5}
    >
      <Typography variant="h4" component="h1" className={classes.title}>
        Rafael Voigt Ferreira
      </Typography>
      <Typography variant="subtitle1" component="p" color="textSecondary">
        Comercial | Retratos | Paisagens
      </Typography>
      <Box
        flexDirection="row"
        display="flex"
        marginBottom={3}
        marginTop={3}
        color="text.secondary"
      >
        <Box mr={1} ml={1}>
          <Link
            href={instagramAccount}
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon />
          </Link>
        </Box>
        <Box mr={1} ml={1}>
          <Link
            href={twitterAccount}
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon />
          </Link>
        </Box>
        <Box mr={1} ml={1}>
          <Link
            href={emailAccount}
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <MailOutlineIcon />
          </Link>
        </Box>
        <Box mr={1} ml={1}>
          <Link
            href={whatsappAccount}
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
