import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"

const pages = ["Products", "Pricing", "Blog"]
const settings = ["Profile", "Account", "Dashboard", "Logout"]

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters variant="dense">
          {/* Logo on large screens  */}
          <h2 className="hidden md:flex">DoctrEx</h2>

          {/* Hamburger Menu For Small Screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <Button variant="text" className="mx-2">
                Login
              </Button> <br />
              <Button variant="text" className="mx-2">
                Signup
              </Button>
            </Menu>
          </Box>

          {/* Logo on small screens  */}
          <h2 className="flex md:hidden flex-grow">DoctrEx</h2>

          {/* Buttons on large devices */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} className="mx-3" variant="text">
                {page}
              </Button>
            ))}
          </Box>

          <Box className="flex-grow-0 hidden md:flex">
            <Button variant="contained" className="mx-2">
              Login
            </Button>
            <Button variant="contained" className="mx-2">
              Signup
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
