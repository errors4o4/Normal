import React from "react";
import "./footer.css";

const Footer = () => (
//   <footer className="page-footer font-small blue pt-4">
//     <div className="container-fluid text-center text-md-left">
//       <div className="row">
//         <div style={{
//             display:'grid',
//             gridTemplateRows:'auto auto auto',
//             rowGap:'1rem'
//         }}>
//           <hr />
//           <div>TSEC HACKS 2k23</div>
//           <h6>Team Members:</h6>
//           <h6>Om, Dharmesh, Kshitij & Amrut</h6>
//         </div>
//       </div>
//     </div>

//     <div className="footer-copyright text-center py-3">
//       ©️ 2023 Copyright: Made By Team IQ
//     </div>
//   </footer>
<footer style={{
    display:'flex',
    justifyContent:'space-between'
}}>
    <h4 className="text-center">TSEC HACKS 2K23</h4>
    <div className="text-center">
    </div>
    <div className="text-center">
        <p>©️ 2023 Copyright: Made By Team IQ</p>
    </div>
</footer>
);

export default Footer;
