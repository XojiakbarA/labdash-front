import {useState} from "react"
import {Outlet} from "react-router"
import {Box, Container} from "@mui/material"
import Header from "./Header"
import Sidebar from "./Sidebar"

const MainLayout = () => {
    const [open, setOpen] = useState(false);

    const toggleSidebar = (e) => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
        }
        setOpen(open => !open)
    }
    return (
        <Box>
            <Header onSidebarButtonClick={toggleSidebar}/>
            <Sidebar open={open} onClose={toggleSidebar}/>
            <Container maxWidth={"xl"}>
                <Outlet/>
            </Container>
        </Box>
    )
}

export default MainLayout