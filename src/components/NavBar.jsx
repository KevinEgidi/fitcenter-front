import * as React from 'react';
import {  Box, AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemButton, ListItemText, CssBaseline, useScrollTrigger, Fab, Fade, Badge, Divider } from '@mui/material';
import {KeyboardArrowUp, FitnessCenter, Menu, Mail, Notifications, AccountCircle,  } from '@mui/icons-material';
import SearchBar from '../components/Landing/SearchBar';
import { useTheme } from '@mui/material/styles';


const navItems = ['Home', 'Turnos', 'Contacto', 'Productos', 'Planes de Membresía'];

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

 const handleClick = () => {
  document.querySelector('#back-to-top-anchor')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
   const [auth] = React.useState(true);


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box flexDirection={'row'} display="flex" alignItems="center" justifyContent="center">
        <FitnessCenter sx={{ fontSize: 30, color: theme.palette.primary.main }} />
      <Typography variant="h6" sx={{ my: 2 }}>
        FitCenter
      </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{minHeight: 64}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            onClick={() => window.location.href = '/'}
            hover={{ cursor: 'pointer' }}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            FitCenter
          </Typography>
          <SearchBar/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {auth && (
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              {/* <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1rZW7V5iIEsH7bcxoS4wBXS13C5RTmivYA&s" /> */}
              <AccountCircle />
            </IconButton>
          </Box>
          )}
        </Toolbar >
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
      <Toolbar id="back-to-top-anchor" />
    </Box>
  );
}