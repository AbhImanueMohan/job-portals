import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdOutlineNotifications } from "react-icons/md";
import "./Nav.css";
import nav from "./nav.jpeg"
import { RiArrowGoBackFill } from "react-icons/ri";
import { ImFileText } from "react-icons/im";
import Home from './Home';
import {  Route, Routes } from 'react-router-dom';
import SubCategorie from './SubCategorie';

function Navbars() {
  return (
    <div>
    <Navbar className='body' expand="lg">
      <Container >
        <Navbar.Brand href="#home">
        <img className='img' height={65}
src={nav}
alt=""
/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" gap">
            <Nav.Link className='nav' href=''>Dashboard</Nav.Link>
            <Nav.Link className='nav' href="">Jobs</Nav.Link>
            <Nav.Link className='nav' href="">Calender</Nav.Link>
            <Nav.Link className='nav' href=''>Cost-Catalog</Nav.Link>
            <Nav.Link className='nav' href="">Database</Nav.Link>
            <Nav.Link className='nav' href="">Tutorials</Nav.Link>
            <p  className='btn border'> <p className='text-light  '> Jane Cooper
            <img className='images' width={20} height={20}  src="https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain" alt="" /></p>
            <NavDropdown   title="janecooper@gmail.com"  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </p>
            <Nav.Link className='na' href=""><MdOutlineNotifications/></Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


   
  <div>
        <div className="products">
        <div className="container">
          <div className="filter">
            <div className="categories">
             
              <ul>
              <Navbar className=" gaps"> 
         
         <ol className='text-center text-light bg-primary'> <RiArrowGoBackFill/> <br />Back to jobs</ol>
         <ol className='text-center'><ImFileText/><br />Notes</ol>
         <ol className='text-center'><ImFileText/><br />Take Off</ol>
         <ol className='text-center'><ImFileText/><br />Extension</ol>
         <ol className='text-center'><ImFileText/><br />DiLb</ol>
         <ol className='text-center'><ImFileText/><br />IncLb</ol>
         <ol className='text-center'><ImFileText/><br />LbFac</ol>
         <ol className='text-center'><ImFileText/><br />LdEsc</ol>
         <ol className='text-center'><ImFileText/><br />IndLb</ol>
         <ol className='text-center'><ImFileText/><br />Sbcon</ol>
         <ol className='text-center'><ImFileText/><br />Gen Exp</ol>
         <ol className='text-center'><ImFileText/><br />Qt Mat</ol>
         <ol className='text-center'><ImFileText/><br />Brk Dwn</ol>
         
        
  </Navbar>
               
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
           
              <Home/>
              <Routes>
                <Route path='/SubCategorie' element={<SubCategorie/>}/>

              </Routes>
          
               
                  <div className="box" >
                  
                    <div className="img_box">
                       
                     
                    </div>
                    <div className="detail">
                     
                    </div>
                  </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    
   
    </div>
    
  );
}

export default Navbars;