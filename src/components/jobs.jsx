import './jobs.css'
import React, { useState } from 'react';
import b_d from '../assets/4a94a2c0-66ec-4208-85fa-3909f7696e2e.JPG';
import d_d from '../assets/f4555cfe-d00a-4aaa-9145-10e10a2c4f1f.JPG';
import b_i from '../assets/7e52b4bb-7b78-49f9-8df6-25ad6b6597ef.JPG';
import m_c from '../assets/eac14ccb-eb6e-4151-a570-e059f75b4cd3.JPG';
import p_m from '../assets/be9d1e26-8bd8-449b-a31b-907aa3b246c0.JPG';
import c_s from '../assets/5c0f2714-474a-4c52-bc69-dba92ac43a60.JPG';
import home4 from '../assets/PHOTO-2023-02-03-11-03-39.jpg'
// import home1 from './images/home1.jpg';
// import home3 from './images/home3.jpg';
// import home4 from './images/home4.jpg';


function Jobs() {
  const title = "Normal.";
  const [offers, setOffers] = useState(5);
  

  return (
    <div>
      {/* <div className='navbar'>
        <h2 className='title'>{title}</h2>
        <div id='navbar_links_div'>  
          <a href="https://google.com" style={{textDecoration: 'none', color: 'black'}} id="home_link" className='navbar_links'>Jobs</a>
          <a href="https://google.com" style={{textDecoration: 'none', color: 'black'}} className='navbar_links'>Companies</a>
          <a href="https://google.com" style={{textDecoration: 'none', color: 'black'}} className='navbar_links'>About Us</a>
          <a href="https://google.com" style={{textDecoration: 'none', color: 'black'}} className='navbar_links'>Contact</a>
          <a href="https://google.com" style={{textDecoration: 'none', color: 'black'}} id="signin_link" className='navbar_links'>Sign In</a>
          <button href="https://google.com" style={{textDecoration: 'none', color: 'white'}} id='create_acc_btn' className='navbar_links'>Create Account</button>
        </div>
      </div> */}
      
      <img src={home4} style={{height: '70%', width:'30%', position:'absolute', right: '10%', top: '20%'}} />
      <div id='home_text_div'>
        <h1 id='home_text' style={{fontSize: 60, color: 'rgb(17, 0, 100)'}}>New offers are waiting for you</h1>
        <h3 style={{fontSize: 30, fontWeight: 'normal', color: 'rgb(17, 0, 100)'}}>Find a new job</h3>
      </div>
      <input id='job_title' placeholder='Job title or description'></input>
      <button id='search_btn'>Search</button>
      <div id='home_text_div' style={{height: 200}}>
        <h1 id='home_text' style={{fontSize: 60, color: 'rgb(17, 0, 100)'}}>Search by category</h1>
      </div>
      <div id='all_categories_div'>
        <div style={{marginLeft: 0,}} id="b_d" className='categories' onClick={() => {select_category("b_d"); setOffers(3)}}>
          <div className='category_image'>
            <img src={b_d} style={{width: '100%', height: '100%'}}/>
          </div>
          <p>Business Development</p>
        </div>
        <div className='categories' id='d_d' onClick={() => {select_category("d_d"); setOffers(2)}}>
          <div className='category_image'>
            <img src={d_d} style={{width: '100%', height: '100%'}}/>
          </div>
          <p>Design & Development</p>
        </div>
        <div className='categories' id='b_i' onClick={() => {select_category("b_i"); setOffers(3)}}>
          <div className='category_image'>
            <img src={b_i} style={{width: '100%', height: '100%'}}/>
          </div>
          <p>Business Intelligence</p>
        </div>
        <div className='categories' id='m_c' onClick={() => {select_category("m_c"); setOffers(2)}}>  
          <div className='category_image'>
            <img src={m_c} style={{width: '100%', height: '100%'}}/>
          </div>
          <p>Marketing & Communication</p>
        </div>
        <div className='categories' id='p_m' onClick={() => {select_category("p_m"); setOffers(3)}}>
          <div className='category_image'>
            <img src={p_m} style={{width: '100%', height: '100%'}}/>
            </div>
          <p>Project Management</p>
        </div>
        <div className='categories' id='c_s' onClick={() => {select_category("c_s"); setOffers(2)}}>
          <div className='category_image'>
            <img src={c_s} style={{width: '100%', height: '100%'}}/>
          </div>
          <p>Customer</p>
          <p style={{marginTop: 0}}>Service</p>
        </div>
      </div>
      <div id='home_text_div' style={{height: 200}}>
        <h1 id='home_text' style={{fontSize: 60, color: 'rgb(17, 0, 100)'}}>Job</h1>
        <h1 id='home_text' style={{fontSize: 60, color: 'rgb(17, 0, 100)'}}>offers</h1>
        <h3 style={{fontSize: 30, fontWeight: 'normal', color: 'rgb(17, 0, 100)'}}>{offers} offers</h3>
      </div>

      <div id="offer_tiles_div">
        <div className='offer_tiles'>
          <p className='offer_category' style={{fontSize: 15}}>Design & Development</p>
          <h2 style={{color: 'rgb(17, 0, 100)'}}>Web Developer</h2>
          <p style={{display: 'inline-block', fontSize: 13, color: 'rgb(17, 0, 100)'}}>Mumbai</p>
          <p style={{display: 'inline-block', marginLeft: '30%', fontSize: 13, marginTop: '5%', color: 'rgb(17, 0, 100)'}}>Part Time</p>
          <p style={{marginTop: '0%', fontSize: 10, color: 'gray'}}>Posted 1 days ago</p>
          <p style={{fontSize: 12, color: 'rgb(17, 0, 100)', display: 'inline-block'}}>Logitech Audio Group</p>
          <button className="apply_btn">Apply</button>
        </div>
        <div className='offer_tiles'>
          <p className='offer_category' style={{fontSize: 15}}>Design & Development</p>
          <h2 style={{color: 'rgb(17, 0, 100)'}}>App Developer</h2>
          <p style={{display: 'inline-block', fontSize: 13, color: 'rgb(17, 0, 100)'}}>Bangalore</p>
          <p style={{display: 'inline-block', marginLeft: '30%', fontSize: 13, marginTop: '5%', color: 'rgb(17, 0, 100)'}}>Full Time</p>
          <p style={{marginTop: '0%', fontSize: 10, color: 'gray'}}>Posted 3 days ago</p>
          <p style={{fontSize: 12, color: 'rgb(17, 0, 100)', display: 'inline-block'}}>Logitech Audio Group</p>
          <button className="apply_btn">Apply</button>
        </div>
        <div className='offer_tiles'>
          <p className='offer_category' style={{fontSize: 15}}>Design & Development</p>
          <h2 style={{color: 'rgb(17, 0, 100)'}}>Database Engineer</h2>
          <p style={{display: 'inline-block', fontSize: 13, color: 'rgb(17, 0, 100)'}}>Chennai</p>
          <p style={{display: 'inline-block', marginLeft: '30%', fontSize: 13, marginTop: '5%', color: 'rgb(17, 0, 100)'}}>Full Time</p>
          <p style={{marginTop: '0%', fontSize: 10, color: 'gray'}}>Posted 3 days ago</p>
          <p style={{fontSize: 12, color: 'rgb(17, 0, 100)', display: 'inline-block'}}>Logitech Audio Group</p>
          <button className="apply_btn">Apply</button>
        </div>
        <div className='offer_tiles'>
          <p className='offer_category' style={{fontSize: 15}}>Business Development</p>
          <h2 style={{color: 'rgb(17, 0, 100)'}}>Data Analyst</h2>
          <p style={{display: 'inline-block', fontSize: 13, color: 'rgb(17, 0, 100)'}}>Kolkata</p>
          <p style={{display: 'inline-block', marginLeft: '30%', fontSize: 13, marginTop: '5%', color: 'rgb(17, 0, 100)'}}>Full Time</p>
          <p style={{marginTop: '30%', fontSize: 10, color: 'gray'}}>Posted 3 days ago</p>
          <p style={{fontSize: 12, color: 'rgb(17, 0, 100)', display: 'inline-block'}}>Logitech Audio Group</p>
          <button className="apply_btn">Apply</button>
        </div>
        <div className='offer_tiles'>
          <p className='offer_category' style={{fontSize: 15}}>Design & Development</p>
          <h2 style={{color: 'rgb(17, 0, 100)'}}>ML Engineer</h2>
          <p style={{display: 'inline-block', fontSize: 13, color: 'rgb(17, 0, 100)'}}>Delhi</p>
          <p style={{display: 'inline-block', marginLeft: '30%', fontSize: 13, marginTop: '5%', color: 'rgb(17, 0, 100)'}}>Full Time</p>
          <p style={{marginTop: '30%', fontSize: 10, color: 'gray'}}>Posted 3 days ago</p>
          <p style={{fontSize: 12, color: 'rgb(17, 0, 100)', display: 'inline-block'}}>Logitech Audio Group</p>
          <button className="apply_btn">Apply</button>
        </div>
      </div>

    </div>
    
  );

}

function select_category(id){
  var categories = document.getElementsByClassName("categories");
  for (var i = 0; i < categories.length; i++) {
    categories[i].style.backgroundColor = "white";
    categories[i].style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
    categories[i].style.color = "rgb(17, 0, 100)";
  }

  document.getElementById(id).style.backgroundColor = "rgb(17, 0, 100)";
  document.getElementById(id).style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
  document.getElementById(id).style.color = "white";

  if(id === "b_d"){
  }
}
export default Jobs;