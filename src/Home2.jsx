import React from 'react'
import "./Home.css";
import { NavDropdown } from 'react-bootstrap';
import { IoArrowDownOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import datas from "./datas.json"
import SubCategory from './SubCategorie';


function Home2() {
  return (
    <div>
        <div className="row">
          <div className="col-4">
            <SubCategory/>
           
            
          </div>
            
            <div className="col-8 " >
                <div className="row">
                    <div className="col-6">
                    <h3>Job</h3>
                    </div>
                    <div className="col-6">
                        <h6>Quote Status
                        <NavDropdown className='butt'   title="accepted"  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> </h6>
                    </div>
                </div>
                <div className="row col">
                    <div className="col-4">
<div>
    <ol>Job Name</ol>
    <ol>Job Number</ol>
    <ol>Unit</ol>
    <ol>Difficulty Level</ol>
</div>

</div>
                  
                    <div className="col-4">
                        <ol>Project1</ol>
                        <ol> A2785936ht</ol>
                        <ol>

  <label class="toggle">
    <input type="checkbox"/>
    <span class="labels" data-on="Metric" data-off="US"></span>
  </label>
                        </ol>
                        <ol>
                        <NavDropdown className='butt1'   title="Difficulty Level"  id="basic-nav-dropdown">
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
                        </ol>
                    </div>
                    <div className="col-4">
                        <ol className='btn text-light bg-primary '>Job Details</ol><br />
                        <ol className='btn text-light bg-primary'> Button 2</ol><br />
                        <ol className='btn text-primary border-primary'>Button 3</ol>
                        
                    </div>
                </div><br />

                <div className="middle">
                    <input className='search' type="text" placeholder='⌕ Search your projects'  />
                      <p className='para' >Sort by   <NavDropdown className='butt3'   title="Name"  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> </p>

            <button>Import <IoArrowDownOutline/></button>
                </div><br />

                <table>
  <tr>
   <th></th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <th>Sl No</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <th>Assembly Name</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
    <th>Length</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    <th>Quantity</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    <th></th>
  </tr>
  {
    datas.map((data,i)=>(
<tr key={i} className='border'>
  <td><RiArrowRightSFill/></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <td>{data.sl} <br /> </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <td>{data.name} <br /></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <td  style={{color:"blue", fontSize:"large"}}>{data.len} <br /></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <td  style={{color:"blue", fontSize:"large"}}>{data.qty} <br /></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <td style={{color:"blue", fontSize:"x-large"}}><MdDelete/></td>
  </tr>
    ))
  }
  
 
</table>
             
                </div>
            </div>
        </div>
  )
}

export default Home2