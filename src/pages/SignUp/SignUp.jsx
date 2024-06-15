import { useContext } from "react";
import { AuthContext } from "../Order/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../shared/SocialLogin";


const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .then(error => {
                console.log(error);
                updateUserProfile(name, photo)
                    .then(() => {
                        console.log('user created');
                        Swal.fire({
                            title: "Good job!",
                            text: "Registration Successful!",
                            icon: "success"
                          });

                        navigate('/')

                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name"

                                name="name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="photo URL"

                                name="photo" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password"
                                className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <h2>Already Have an account? please<Link to='/login'>Login</Link></h2>
                        
                       <div className="pl-5">
                       <SocialLogin ></SocialLogin>
                       </div>
                        
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;