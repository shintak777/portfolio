import React from 'react';
import { Link, Route } from 'react-router';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import SchoolIcon from '@material-ui/icons/School';
import ComputerIcon from '@material-ui/icons/Computer';
import CasinoIcon from '@material-ui/icons/Casino';
import GitHubIcon from '@material-ui/icons/GitHub';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            SUPER DOME千本中立売　屋外喫煙所のような書き溜め
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
        <Link to="/About" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamily:'Montserrat, sans-self'}}>
            <ListItem button>
                <ListItemIcon><FaceIcon /></ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
        </Link>
        <Link to="/Career" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamily:'Montserrat, sans-self'}}>
            <ListItem button>
                <ListItemIcon><createIcon /><SchoolIcon /></ListItemIcon>
                <ListItemText primary="Career" />
            </ListItem>
        </Link>
        <Link to="/Portfolio" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamily:'Montserrat, sans-self'}}>
            <ListItem button>
                <ListItemIcon><ComputerIcon /></ListItemIcon>
                <ListItemText primary="Portfolio" />
            </ListItem>
        </Link>
        <Link to="/MiniGame" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamily:'Montserrat, sans-self'}}>
            <ListItem button>
                <ListItemIcon><CasinoIcon /></ListItemIcon>
                <ListItemText primary="MiniGame" />
            </ListItem>
        </Link>
        <Link to="/Github" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamily:'Montserrat, sans-self'}}>
            <ListItem button>
                <ListItemIcon><GitHubIcon /></ListItemIcon>
                <ListItemText primary="Github" />
            </ListItem>
        </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
        信じていた信じられたその全てを今始めよう
        不器用なこの勇気はコンプレックス・イマージュ
        乾いた風が追いかける風のように
        そっと背中を押す気がした
        耳をすませばざわめくロンフリーケンシー
        新しいその場所への扉を開け放て
        切なくて愛おしいほど想いは時空を超えて
        together
        ずっと心はそばにある
        大切なあの日溜まりが
        刹那に散りゆく景色
        今全ての力を与え賜え
        僕は瞳をそらさずに
        傷も涙も真実も
        </Typography>
      </main>
    </div>
  );
}
