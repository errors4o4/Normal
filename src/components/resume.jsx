
import './resume.css'
import { FaPhone } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { useState } from 'react'
function Resume() {
    const [data, setData] = useState({
        name: '',
        qualification: '',
        hobbies: '',
        achievements: '',
        interest: '',
        disability: '',
        email: '',
        contact: ''
    })
    const getInputs = (e) => {
        if(e.target.name === 'qualification' || e.target.name === 'interest' || e.target.name === 'disability') {
            const dataCopy = {...data}
            if(e.target.name === 'qualification') dataCopy.qualification = e.target.value
            else if(e.target.name === 'interest') dataCopy.interest = e.target.value
            else dataCopy.disability = e.target.value
            setData(dataCopy)
        }
        else setData(() => ({
            ...data,
            [e.target.name] : e.target.value
        }))
    }
    return (
        <div className="card-group" style={
            {
                height: '100vh'
            }
        }
        >
            <div className="col-8 resume-form" style={{ backgroundColor: 'rgba(80, 80, 80, 0.1)' }}>
                <div className="resume-form-container">
                    <form className="row g-3 d-flex justify-content-center items-center">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your full name"
                                name='name' 
                                onChange={getInputs}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Qualification</label>
                            <select
                                id="inputState"
                                className="form-select"
                                name='qualification' 
                                onChange={getInputs}
                            >
                                <option value="Service">Service</option>
                                <option value="Student">Student</option>
                                <option value="Business">Business</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Hobbies</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCity"
                                name='hobbies' 
                                onChange={getInputs}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Achievements</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCity"
                                name='achievements' 
                                onChange={getInputs}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Interested in</label>
                            <select className="form-select" name='interest' onChange={getInputs}>
                                <option value="Technical">Technical</option>
                                <option value="Creativity">Creativity</option>
                                <option value="Language">Language</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Disability type</label>
                            <select className="form-select" name='disability' onChange={getInputs}>
                                <option value="Visula">Visual</option>
                                <option value="Auditory">Auditory</option>
                                <option value="Mobility">Mobility</option>
                                <option value="Cognitive">Cognitive</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCity"
                                name='email' onChange={getInputs}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Contact Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCity"
                                name='contact' 
                                onChange={getInputs}
                            />
                        </div>
                        <div className='col-md-12 d-flex aligns-items-center justify-content-center'>
                            <button className="btn btn-primary" type="submit">
                                <a className='nav-link'>Submit</a>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-4 resume-preview">
                <div className="resume-container col-md-12" style={{ height: '100vh' }}>
                    <header className='resume-header'>
                        <div className='text-center' style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '7px'
                        }}>
                            <h6 style={{
                                color:'white'
                            }}>
                                <FaPhone /> {data.contact} |
                            </h6>
                            <h6 style={{
                                color:'white'
                            }}>
                                <BiMailSend /> {data.email}
                            </h6>
                        </div>
                    </header>
                    <main>
                        <div style={{ width: 'fit-content', position: 'absolute', top: '55px' }}>
                            <h4 style={{ letterSpacing: '0.5rem', fontStyle: 'normal', fontFamily: 'system-ui', fontWeight: 300 }}>{data.name.toUpperCase()}</h4>
                            <div style={{ position: 'absolute', width: '100%', height: 2, backgroundColor: 'rgb(17, 0, 100)' }}>
                            </div>
                        </div>
                        <div style={{ width: '90%' }}>
                            <div style={{ width: '100%', height: 2, backgroundColor: 'rgb(17, 0, 100)' }}></div>
                            <h6 className='d-flex' style={{fontFamily:'sans-serif'}}>Occupation : <p> {data.qualification}</p></h6>
                            <h6 className='d-flex' style={{fontFamily:'sans-serif'}}>Achievements : <p> {data.achievements}</p></h6>
                            <h6 className='d-flex' style={{fontFamily:'sans-serif'}}>Hobbies : <p>{ data.hobbies}</p></h6>
                            <h6 className='d-flex' style={{fontFamily:'sans-serif'}}>Interested In : <p> {data.interest}</p></h6>
                            <div style={{ width: '100%', height: 2, backgroundColor: 'rgb(17, 0, 100)' }}></div>
                        </div>
                        <div className='text-center' style={{ position: 'absolute', bottom: '5%' }}>
                            <h5 style={{fontFamily:'sans-serif'}}>Disability Type: <span style={{ fontSize: '1.2rem' }}>{data.disability}</span></h5>
                        </div>
                    </main>
                    <footer className='resume-footer'>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Resume