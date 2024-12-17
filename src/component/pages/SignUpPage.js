import React, { useState } from 'react';
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUpPage() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    });

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://159.65.21.42:9000/register", user);
    
            if (!response) {
                throw new Error("Empty response received");
            }
    
            if (!response.data) {
                throw new Error("Response data is empty");
            }
    
            console.log(response.data);
            
            // Check if the response contains an error indicating user already exists
            if (response.data.error === "User exists") {
                // alert("User already exists. Please log in.");
                toast.error("User already exists. Please log in.");
            } else {
                // alert("Sign up successful.");
                toast.success("Sign up successful.");
                setTimeout(() => {
                    navigate("/SignInPage");
                }, 1000); 
            }
        } catch (error) {
            console.error(error);
            // alert("Sign up unsuccessful. Please try again.");
            toast.error("Sign up unsuccessful. Please try again.");
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };
    
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    

    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6 border rounded p-4 mt-5">
                        <div className="pt-5 signUp">
                            <div className="signup-1">
                                <div className="signin-1 pb-3">COMPLETE YOUR ACCOUNT CREATION</div>
                                <div className="signin-2 pb-3">If you already have a NEOPHYTE account, please sign in. We'll use your existing details for a speedier checkout.</div>
                            </div>
                            <form className="signUp" onSubmit={submitForm}>
                                <div className="form-group">
                                    <input type="text" name="name" value={user.name} onChange={handleInputChange} className="form-control" placeholder="Your Name*" required />
                                    {errors.name && <span className='span'>{errors.name}</span>}
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" value={user.email} onChange={handleInputChange} className="form-control" placeholder="Email Address*" required />
                                    {errors.email && <span className='span'>{errors.email}</span>}
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" value={user.phone} onChange={handleInputChange} className="form-control" placeholder="Phone Number*" required />
                                    {errors.phone && <span className='span'>{errors.phone}</span>}
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" value={user.password} onChange={handleInputChange} className="form-control" placeholder="Password*" required />
                                    {errors.password && <span className='span'>{errors.password}</span>}
                                </div>
                                <div className="text-center signup-1 d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary signin-btn">SIGN UP</button>
                                    <a href="/SignInPage">ALREADY HAVE AN ACCOUNT?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default SignUpPage;