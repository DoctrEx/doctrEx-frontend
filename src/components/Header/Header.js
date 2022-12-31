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
import { Link } from "react-router-dom"
import { URL_LOGIN, URL_HOME, URL_SIGNUP } from "../../router/routes"

const pages = ["home", "services", "about"]
// const pages = [
//   { title: "home", link: URL_HOME },
//   { title: "services", link: `${URL_HOME}#services` },
//   { title: "about", link: `${URL_HOME}#about` },
// ]
const settings = ["Profile", "Account", "Dashboard", "Logout"]

export function Header() {
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
          <Link className="link" to={`${URL_HOME}`}>
            <h2 className="hidden md:flex">DoctrEx</h2>
          </Link>

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
              {pages.map((page, index) => (
                <MenuItem key={`${page}-${index}`} onClick={handleCloseNavMenu}>
                  <Link className="link" to={`${URL_HOME}#${page}`}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <Link to={`${URL_LOGIN}`} className="link w-full">
                <Button size="small" className="ml-3 text-[1rem] pr-[100%] py-3">
                  login
                </Button>{" "}
              </Link>
              <br />
              <Link to={`${URL_SIGNUP}`} className="link w-full">
                <Button size="small" className="ml-3 text-[1rem] pr-[100%] py-3">
                  signup
                </Button>
              </Link>
            </Menu>
          </Box>

          {/* Logo on small screens  */}
          <Link className="link flex md:hidden flex-grow" to={`${URL_HOME}`}>
            <h2>DoctrEx</h2>
          </Link>

          {/* Buttons on large devices */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page) => (
              <Link className="link" to={`#${page}`}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="mx-3 text-[1.01rem]"
                  variant="text"
                  color="secondary"
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box className="flex-grow-0 hidden md:flex">
            <Link to={`${URL_LOGIN}`} className="link">
              <Button variant="contained" className="mx-2 rounded-lg">
                login
              </Button>
            </Link>
            <Link to={`${URL_SIGNUP}`} className="link">
              <Button variant="contained" className="mx-2 rounded-lg">
                signup
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
