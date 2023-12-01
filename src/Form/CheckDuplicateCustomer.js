import axios from "axios";
import { useEffect, useState } from "react";
export default function CheckDuplicateCustomer() {
    const pattern = '/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/';
    const [errors, setErros] = useState({
        partnerNameError: "",
        mobileNumberError: "",
        emailError: "",
        matchEmailError: ""
    });
    const [submitClicked, setSubmitClicked] = useState(false);
    const [partnerName, setPartnerName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [matchEmail, setMatchEmail] = useState("");
    const onClickButton = () => {
        if (!partnerName) {
            setErros({ partnerNameError: "Please Enter Partner name" });
            return false;
        } else if (!mobileNumber) {
            setErros({ mobileNumberError: "Please Enter mobile Number" });
            return false;
        } else if (!email) {
            setErros({ emailError: "Please Enter  Email Address" });
            return false;

        } else if (!pattern && !matchEmail) {
            setErros({ matchEmailError: "Please Enter Valid Email Address" });
            return false;
        } else if (partnerName && mobileNumber && email && matchEmail) {
            setSubmitClicked(true);
            return true;
        }
    };
    const handleInputPartnerName = (e) => {
        setPartnerName(e.target.value);
    };
    const handleInputMobile = (e) => {
        setMobileNumber(e.target.value);
    };
    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleInputMatch = (e) => {
        setMatchEmail(e.target.value);
    };
    const checkDuplicatelead = async () => {
        axios
            .post(
                "https://test-partners.cashe.co.in/partner/checkDuplicateCustomerLead",
                {
                    partner_name: 'Bankbazaar',
                    mobile_no: '8767564543',
                    email_Id:'test@gmail.com'

                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Request-Headers': '*',
                        'Check-Sum': 'XefdH55XWaQ1dLsfXv5N/mJdFkk='
                    }
                }
            )
            .then(async (response) => {
                console.log('res', response)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        checkDuplicatelead();
    }, []);
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl">Check Duplicate Customer Lead</div>
            <div className="p-5 login-page">
                <div className="one-login">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-24 clickfin-para-home p-5" style={{ border: '1px solid' }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Partner Name<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputPartnerName} value={partnerName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Partner Name" />
                            <p className="text-red-600 text-left mt-2">
                                {!partnerName ? errors.partnerNameError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Mobile Number<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputMobile} value={mobileNumber} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Mobile Number" />
                            <p className="text-red-600 text-left mt-2">
                                {!mobileNumber ? errors.mobileNumberError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Email Id<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputEmail ? handleInputEmail : handleInputMatch} value={email ? email : matchEmail} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                            <p className="text-red-600 text-left mt-2">
                                {!email ? errors.emailError : ""}
                            </p>
                            <p className="text-red-600 text-left mt-2">
                                {!matchEmail ? errors.matchEmailError : ""}
                            </p>
                        </div>
                        <div onClick={onClickButton} className="mb-4 text-center bg-blue-600 p-2 text-white cursor-pointer">
                            Save
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