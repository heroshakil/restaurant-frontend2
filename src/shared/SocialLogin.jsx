
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../pages/Order/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        console.log('clicked');


        googleSignIn()
            .then((result) => {
                console.log(result.user);

            })
            .catch((error) => {
                console.log(error);
            })
            
    }
    navigate('/')

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-wide">
                <FaGoogle></FaGoogle>
                Google</button>
        </div>
    );
};

export default SocialLogin;