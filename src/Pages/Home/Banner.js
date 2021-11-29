import React from 'react'
import '../../Styles/Banner.css';
import Programmer from '../../images/undraw_firmware_re_fgdy.svg';
import resume from '../../images/resume.pdf'
const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <h5 className = 'text-uppercase text-white'><span className='mern'>MERN</span> stack developer</h5>
                        <h2 className = 'mt-4 text-capitalize fw-bold text-white'>talk is cheap.<br />Show me the code</h2>
                        <p className = 'text-capitalize text-muted'>i design and develop website and i love what i do</p>
                        <a href='https://docs.google.com/document/d/14nFZOAt1p9b0vrvbK9T5rq391tUk8RIIML0aLC1hJIc/edit?usp=sharing' className='resume-btn btn text-white text-uppercase'>resume</a>
                        <a href="" className='resume-btn ms-3 btn text-white text-uppercase'>hire me</a>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12">
                    <img src={Programmer} alt="" />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
