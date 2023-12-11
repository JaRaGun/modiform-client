import { useState } from "react";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import images from "../../themes/images";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // FOR PROFILE
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // HANDLE NAVIGATE (LOGOUT)
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 ">
      <div className="bg-[#102A3F] px-4 py-5 mx-auto max-w-full md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={images.WHITEMODIFORM} width={50} alt="MODIFORM LOGO" />
          </div>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Home"
                title="Home"
                className="tracking-wide text-white hover:text-yellow-400 font-bold"
              >
                HOME
              </a>
            </li>

            <li>
              <a
                href="/"
                aria-label="Home"
                title="Home"
                className="tracking-wide text-white hover:text-yellow-400 font-bold"
              >
                PROWARE
              </a>
            </li>

            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="tracking-wide text-white hover:text-yellow-400 font-bold"
              >
                CONTACT US
              </a>
            </li>
          </ul>

          <ul className="items-center hidden lg:flex">
            <React.Fragment>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                className="w-86"
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </React.Fragment>
          </ul>

          <div className="lg:hidden flex items-center justify-between">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-1 -mr-1 transition duration-200 rounded hover:bg-gray-600 focus:bg-gray-900"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-7 text-white " viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>

            <ul className="items-center lg:flex">
              <React.Fragment>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                  </IconButton>
                </Tooltip>

                <Menu
                  className="w-86"
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            </ul>

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-[#102A3F] border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img
                          src={images.WHITEMODIFORM}
                          width={50}
                          alt="MODIFORM LOGO"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-600 focus:bg-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-white" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Home"
                          title="Home"
                          className="tracking-wide text-white hover:text-yellow-400 font-bold"
                        >
                          HOME
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          aria-label="Home"
                          title="Home"
                          className="tracking-wide text-white hover:text-yellow-400 font-bold"
                        >
                          PROWARE
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="tracking-wide text-white hover:text-yellow-400 font-bold"
                        >
                          CONTACT US
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="tracking-wide text-white hover:text-yellow-400 font-bold"
                        >
                          PROFILE
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white rounded shadow-md bg-gray-500 hover:bg-yellow-700"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          LOGOUT
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
