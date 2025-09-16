import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Stack, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo3.png'

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    bgcolor: 'transparent',
                    px: { xs: 2, md: 8 },
                }}
            >
                <Toolbar disableGutters sx={{ justifyContent: 'space-between', width: '100%' }}>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/">
                            <Box
                                component="img"
                                src={logo}
                                alt="Live Logo"
                                sx={{
                                    height: 80,
                                    cursor: 'pointer',
                                }}
                            />
                        </Link>
                    </Box>

                    {/* Desktop Links */}
                    <Stack
                        direction="row"
                        spacing={4}
                        sx={{
                            mx: 'auto',
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <NavLink label="Home" to="/" />
                        <NavLink label="About Us" to="/about" />
                        <NavLink label="Team Members" to="/team" />
                        <NavLink label="Contact Us" to="/contact" />
                    </Stack>

                    {/* Mobile Menu */}
                    <IconButton
                        edge="end"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}
                    >
                        <MenuIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: { background: 'linear-gradient(to right, #0F0C29, #302B63, #24243e)' , width: 250 }
                }}
            >
                <List>
                    <DrawerLink label="Home" to="/" onClick={toggleDrawer(false)} />
                    <DrawerLink label="About Us" to="/about" onClick={toggleDrawer(false)} />
                    <DrawerLink label="Team Members" to="/team" onClick={toggleDrawer(false)} />
                    <DrawerLink label="Contact Us" to="/contact" onClick={toggleDrawer(false)} />
                </List>
            </Drawer>
        </>
    );
}

function NavLink({ label, to }) {
    return (
        <Button
            component={Link}
            to={to}
            sx={{
                color: 'white',
                fontWeight: 600,
                textTransform: 'none',
                fontFamily: 'SVN-Gilroy',
                fontSize: '1.2rem',
                textShadow: '-1px 1px 3px rgba(83, 45, 109, 0.9)',
                '&:hover': { color: 'white' },
            }}
        >
            {label}
        </Button>
    );
}

function DrawerLink({ label, to, onClick }) {
    return (
        <ListItem button component={Link} to={to} onClick={onClick}>
            <ListItemText 
                primary={label}
                primaryTypographyProps={{
                    fontFamily: 'SVN-Gilroy',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    color: 'white',
                    textShadow: '-1px 1px 3px  #1F1692'
                }} 
            />
        </ListItem>
    );
}
