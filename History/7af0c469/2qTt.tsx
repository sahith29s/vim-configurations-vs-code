import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
const Header = () => {
    const [highlight, setHighlight] = useState<number>()
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h3">Mern auth</Typography>
                    <Box sx={{ marginLeft: "auto" }}>
                        <Tabs onChange={(e, val) => setHighlight(val)} 
                        value={highlight}
                        textColor="inherit">

                            <Tab label="Login" />
                            <Tab label="Sign up" />
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header