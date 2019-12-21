// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import "isomorphic-fetch";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
    borderRadius: "25px",
    boxShadow: "0px 0px 48px 16px rgba(0,0,0,0.35)"
  },
  st: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
    borderRadius: "25px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    marginRight: theme.spacing(2)
  }
}));

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export default function Buscar() {
    const [item, setItem] = useState('');
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = e => {
    e.preventDefault();
  };
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        `https://10.211.55.3:45455/api/Content/BuscarProducto/${item}`
      );
      await sleep(1e3); // For demo purposes.
      const countries = await response.json();
      console.log(countries);

      if (active) {
        setOptions(Object.keys(countries).map(keys => countries[keys]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={classes.st}>
        <CssBaseline />
        <form className="search-form" action="summit">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SearchIcon />}
          >
            Buscar
          </Button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}
