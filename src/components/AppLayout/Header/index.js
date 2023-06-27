import { useState } from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'
import HeaderButtons from "./HeaderButtons"
import MobileMenu from "./MobileMenu"
import ProfileMenu from "./ProfileMenu"

const Header = ({ onSidebarButtonClick }) => {
    const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null)
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null)

    const handleProfileMenuOpen = (e) => {
        setProfileMenuAnchorEl(e.currentTarget)
    }
    const handleProfileMenuClose = () => {
        setProfileMenuAnchorEl(null)
        handleMobileMenuClose()
    }
    const handleMobileMenuOpen = (e) => {
        setMobileMenuAnchorEl(e.currentTarget)
    }
    const handleMobileMenuClose = () => {
        setMobileMenuAnchorEl(null)
    }

    const profileMenuId = 'primary-search-account-menu'

    const mobileMenuId = 'primary-search-account-menu-mobile'

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={onSidebarButtonClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Laboratory Dashboard
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <HeaderButtons
                        ariaControls={profileMenuId}
                        onProfileButtonClick={handleProfileMenuOpen}
                    />
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <MobileMenu
                id={mobileMenuId}
                anchorEl={mobileMenuAnchorEl}
                onClose={handleMobileMenuClose}
                onProfileButtonClick={handleProfileMenuOpen}
            />
            <ProfileMenu
                id={profileMenuId}
                anchorEl={profileMenuAnchorEl}
                onClose={handleProfileMenuClose}
            />
        </Box>
    )
}

export default Header
