import './Register.css'
import { HiOutlineCode } from 'react-icons/hi'
import { IoIosBrush } from 'react-icons/io'
import { IoRestaurant, IoSchool } from 'react-icons/io5'
import { useState } from 'react'
function Register() {
    const [getRegistartionFormInputs, setRegistrationFormInputs] = useState({
        name: '',
        contact: '',
        username: '',
        password: '',
        disability: 'Visual',
        disabilityPercentage: 50,
        skills: []
    })
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    //new user
    const registerUser = () => {
        if(localStorage.getItem(getRegistartionFormInputs.username)) {
            if(getRegistartionFormInputs.disability === 'Visual') console.log('Visual')
            else alert('Username already exists')
        }
        else localStorage.setItem(getRegistartionFormInputs.username, JSON.stringify(getRegistartionFormInputs))
    }
    const [getSliderVal, setSliderval] = useState(50)
    const onSilderChange = (event) => {
        setSliderval(event.target.value)
    }
    const getInputs = (event) => {
        if(event.target.name === 'disability' || event.target.name === 'disabilityPercentage' || event.target.name === 'skill') {
            const getRegistartionFormInputsCopy = { ...getRegistartionFormInputs}
            if(event.target.name === 'disability') getRegistartionFormInputsCopy.disability = event.target.value
            else if(event.target.name === 'disabilityPercentage') getRegistartionFormInputsCopy.disabilityPercentage = getSliderVal
            else {
                event.target.checked ? getRegistartionFormInputsCopy.skills.push(event.target.value) : getRegistartionFormInputsCopy.skills = getRegistartionFormInputsCopy.skills.filter((skill) => skill !== event.target.value)
            }
            setRegistrationFormInputs(getRegistartionFormInputsCopy)
        }
        else setRegistrationFormInputs(() => ({
            ...getRegistartionFormInputs,
            [event.target.name] : event.target.value
        }))
    }
    return (
        <div className='d-flex aligns-items-center justify-content-center register-form'>
            <form className="row g-3 register-form" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder='Enter your full name'
                        name='name'
                        onChange={getInputs}
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Contact Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder='Enter your full name'
                        name='contact'
                        onChange={getInputs}
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder='Enter your full name'
                        name='username'
                        onChange={getInputs}
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        name='password'
                        onChange={getInputs}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">Select your disability type</label>
                    <select 
                    id="inputState" 
                    className="form-select" 
                    name='disability'
                    onChange={getInputs}
                    >
                        <option value="Visula">Visual</option>
                        <option value="Auditory">Auditory</option>
                        <option value="Mobility">Mobility</option>
                        <option value="Cognitive">Cognitive</option>
                    </select>
                </div>
                <div className='col-md-3'>
                    <label htmlFor="customRange1" className="form-label">Disability Percentage {`${getSliderVal}%`}</label>
                    <input
                        type="range"
                        className="form-range"
                        id="customRange1"
                        value={getSliderVal}
                        min={0}
                        max={100}
                        onChange={onSilderChange}
                    />
                    <label htmlFor="inputState" className="form-label"></label>
                </div>
                <div className='col-md-3'>
                    <label htmlFor="inputState" className="form-label">Select skills</label>
                    <div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="Technical"
                                id="flexCheckDefault"
                                name='skill'
                                onChange={getInputs}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <HiOutlineCode /> Technical
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="Illustrator"
                                id="flexCheckChecked"
                                name='skill'
                                onChange={getInputs}
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <IoIosBrush /> Illustrator
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="Cooking"
                                id="flexCheckChecked"
                                name='skill'
                                onChange={getInputs}
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <IoRestaurant /> Cooking
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="Cooking"
                                id="flexCheckChecked"
                                name='skill'
                                onChange={getInputs}
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <IoSchool /> Teaching
                            </label>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 d-flex aligns-items-center justify-content-center'>
                    <button class="btn btn-primary" type="submit" onClick={registerUser}>
                        <a href='/start' className='nav-link'>Register</a>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register