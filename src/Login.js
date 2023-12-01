import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [errors, setErros] = useState({
        partnerNameError: "",
        emailError: "",
        passwordError: "",
    });
    const [submitClicked, setSubmitClicked] = useState(false);
    const [partnerName, setPartnerName] = useState("");
    const [email, setEmail] = useState("");
    const [passowrd, setPassword] = useState("");
    const onClickButton = () => {
        if (!partnerName) {
            setErros({ partnerNameError: "Please Enter name" });
            return false;
        } else if (!email) {
            setErros({ emailError: "Please enter Email" });
            return false;

        } else if (!passowrd) {
            setErros({ passwordError: "Please enter Password" });
            return false;
        } else if (partnerName && email && passowrd) {
            setSubmitClicked(true);
            return true;
        }
    };
    const handleInputPartnerName = (e) => {
        setPartnerName(e.target.value);
    };

    const onchangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlechangePassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl">Login</div>
            <div className="p-5 login-page">
                <div className="one-login" >
                    <form className="bg-white shadow-md  rounded px-8  pb-8 mb-4 mt-16 clickfin-para-home p-5" style={{ border: '1px solid' }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter  Name<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={partnerName} onChange={handleInputPartnerName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                            <p className="text-red-600 text-left mt-2">
                                {!partnerName ? errors.partnerNameError : ""}
                            </p>
                        </div>



                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Email Id<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={email} onChange={onchangeEmail} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                            <p className="text-red-600 text-left mt-2">
                                {!email ? errors.emailError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter password<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={passowrd} onChange={handlechangePassword} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="Password" />
                            <p className="text-red-600 text-left mt-2">
                                {!passowrd ? errors.passwordError : ""}
                            </p>
                        </div>


                        <div>
                            <Link
                              onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                              }}
                                className="no-underline"

                                to="basic"
                            >
                            <div onClick={onClickButton} className="mb-4 text-center bg-blue-600 p-2 text-white cursor-pointer">
                                Next
                            </div>
                            </Link>

                        </div>

                    </form>

                </div>
                <div className="one-login">
                    <img
                        className="mobile-i3mage"
                        alt="google"
                        src={process.env.PUBLIC_URL + '/assets/images/slider1.jpg'}

                    ></img>
                </div>
            </div>

        </div>
    )

}