import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"

const ProfileMenu = ({ id, anchorEl, onClose }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={id}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={onClose}
        >
            <MenuItem onClick={onClose}>Profile</MenuItem>
            <MenuItem onClick={onClose}>Log out</MenuItem>
        </Menu>
    )
}

export default ProfileMenu
