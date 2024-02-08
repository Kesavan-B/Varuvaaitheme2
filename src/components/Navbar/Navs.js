import React from "react";
import "./Navs.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ImCross } from "react-icons/im";
import { Button, Grid } from "@mui/material";
import { FaPhone } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { FaCaretDown } from "react-icons/fa";
import { DIA1, DIA2, DIA3 } from "../../assests/ImgData";
import { RxCross2 } from "react-icons/rx";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function Navs() {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpened = () => {
    setOpened(true);
  };
  const handleClosed = () => {
    setOpened(false);
  };

  const opens = Boolean(anchorEl);
  const handleClicks = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" style={{position:'sticky',top:'0',width:'100%'}}>
        <Container
          fluid
          className="nav-container"
       
        >
          <div className="helps">
            <p>Need Help</p>
            <p>
              <FaPhone style={{ color: "#ff4e00", fontSize: "14px" }} /> Call
              12345678099
            </p>
          </div>
          <Navbar.Brand href="#" className="nav-name">
            GOGGLES
          </Navbar.Brand>
          <div className="fl-right">
            <FaUser style={{ fontSize: "16px" }} />
            <div className="left-btn">
              <Button
                variant="outlined"
                id="basic-button"
                aria-controls={opens ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={opens ? "true" : undefined}
                onClick={handleClicks}
                sx={{
                  textTransform: "none",
                  color: "#000",
                  borderColor: "#454645",
                  fontSize: "16px",
                  marginLeft: "15px",
                  borderRadius: "none",
                  '&:hover':{
                    color:'#000',
                    borderColor: "#454645",
                  }
                }}
              >
                My Cart{" "}
                <FaCartPlus
                  style={{
                    color: "#000",
                    fontSize: "16px",
                    marginLeft: "15px",
                  }}
                />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={opens}
                onClose={handleCloses}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleCloses} style={{color:'orangered'}}>Your Shopping Cart is Empty  <RxCross2/> </MenuItem>
               
              </Menu>
            </div>
          </div>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                alignItems: "center",
                fontSize: "15px",
              }}
              navbarScroll
            >
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/abt">ABOUT</Nav.Link>
              <Button
                onMouseOver={handleClickOpen}
                sx={{ fontSize: "15px", color: "#828264", marginLeft: "35px" }}
              >
                Features{" "}
                <FaCaretDown
                  sx={{
                    fontSize: "15px",
                    color: "#828264",
                    marginLeft: "35px",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </Button>
              <BootstrapDialog
                onMouseOut={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
              >
                <DialogContent dividers >
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                  
                  >
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <ul style={{fontSize:'16px',color:'#454645'}}>
                        <li> Designer Glasses</li>
                        <li>Ray-Ban</li>
                        <li>Prescription Glasses</li>
                      </ul>
                      <h3>View More Pages</h3>
                      <ul style={{fontSize:'16px',color:'#454645'}}>
                        <li>About</li>
                        <li>Customer</li>
                      </ul>
                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <img src={DIA2} alt="d1" style={{width:'100%',maxWidth:'300px'}}/>
                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <img src={DIA3} alt="d1" style={{width:'100%',maxWidth:'300px'}}/>

                    </Grid>
                  </Grid>
                </DialogContent>
              </BootstrapDialog>
              <Button
                onMouseOver={handleClickOpened}
                sx={{
                  fontSize: "15px",
                  color: "#828264",
                  marginLeft: "35px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Shop <FaCaretDown sx={{ color: "#828264" }} />
              </Button>
              <BootstrapDialog
                onMouseDown={handleClosed}
                aria-labelledby="customized-dialog-title"
                open={opened}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
              >
                <DialogContent dividers sx={{ width: "100%" }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                   <Nav.Link href="/shop">
                   <ul style={{fontSize:'16px',color:'#454645'}}>
                        <li> Designer Glasses</li>
                        <li>Ray-Ban</li>
                        <li>Prescription Glasses</li>
                        <li> Rx Sunglasses</li>
                        <li>Contact Lenses</li>
                        <li>Multifocal Glasses</li>
                        <li>Kids Glasses</li>
                        <li>Lightweight Glasses</li>
                        <li>Sports Glasses</li>
                      </ul>
                   </Nav.Link>
                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <Nav.Link href="/shop">
                      <ul style={{fontSize:'16px',color:'#454645'}}>
                        <li>Brooks Brothers</li>
                        <li>Persol</li>
                        <li>Polo Ralph Lauren</li>
                        <li>Prada</li>
                        <li>Ray-Ban Jr</li>
                        <li>Sferoflex</li>
                        <li>Polo Ralph Lauren</li>
                        <li>Prada</li>
                        <li>Ray-Ban Jr</li>
                      </ul>
                      </Nav.Link>
                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                      <h3>Title goes here</h3>
                      <img src={DIA1} alt="d2" style={{width:'100%',maxWidth:'300px'}}/>
                    </Grid>
                  </Grid>
                </DialogContent>
              </BootstrapDialog>
              <Nav.Link href="/cont">CONTACT</Nav.Link>
              <div style={{ paddingLeft: "20px" }}>
                <FaSearch />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navs;
