import Login from './login'
import {FaHeart} from 'react-icons/fa'
import './Start.css'
function start() {
    return (
        <main>
            <div className=" text-center text-lg-start main-container" style={{borderRadius:10}}>
                <div className="card">
                    <div className="row g-0 d-flex align-items-center">
                        <div className="col-lg-4 d-none d-lg-flex" style={{border:'none'}}>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                class="img-fluid" alt="Phone image"/>
                        </div>
                        <div className="col-lg-8" style={{border:'none !important'}}>
                        {/* <h3 className='text-center'>Om <span style={{color:'red'}}><h1>Handsome</h1></span> Boy <FaHeart style={{color:'red'}}/> </h3> */}
                        <h3 className='text-center'>Login Here</h3>
                            <div className="card-bodyy py-5 px-md-5">
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </main>
    )
}

export default start;