import React from 'react'
import data from "./data.json"
import { ImArrowRight } from "react-icons/im";
import { ImArrowLeft } from "react-icons/im";
import { Link } from 'react-router-dom';
import './Home.css'


function SubCategory() {
  return (
    <div>

        <div className="row">
        <div className="col-12">
                <div className="row">
                <div className="col-6">
                <div className="cn">
                  <h5 className='head' style={{width:"200px"}}> <ImArrowLeft/>Sub Category</h5>
                 
                </div>
                </div>
                <div className="col-6">
                <input className='border rounded'  type="text" placeholder='⌕ Search Sub Categories'  />
                </div>
                </div>
               
                <table>
                  
  <tr className='border'>
    <th>Sl No</th>&nbsp;&nbsp;&nbsp;&nbsp;
    <th>Name</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    <th>Type</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    <th></th>
  </tr>
  {
                    data.map((data,i)=>(
                        <tr key={i} className='border'>
                        <td>{data.no}</td>&nbsp;&nbsp;&nbsp;
                        <td>{data.Name} </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                        <td>{data.type} </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    
                        <Link to=''><td style={{color:"blue", fontSize:"x-large"}}><ImArrowRight/></td></Link>
                      </tr>
                    ))
                }

 
</table>

                
              
            </div>
        </div>
    </div>
  )
}

export default SubCategory