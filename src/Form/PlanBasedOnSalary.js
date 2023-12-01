import axios from "axios";
import { useEffect, useState } from "react";

export default function PlanBasedOnSalary() {
    const [errors, setErros] = useState({
        partnerNameError: "",
        salaryError: "",
    });
    const [submitClicked, setSubmitClicked] = useState(false);
    const [partnerName, setPartnerName] = useState("");
    const [salary, setSalary] = useState("");
    const onClickButton = () => {

        if (!partnerName) {
            setErros({ partnerNameError: "Please Enter Partner name" });
            return false;
        } else if (!salary) {
            setErros({ salaryError: "Please Enter salary details" });
            return false;
        } else if (partnerName && salary) {
            setSubmitClicked(true);
            return true;
        }
    };


    const apiForPlanBasedSalary = async () => {
        axios
            .post(
                "https://test-partners.cashe.co.in/partner/fetchCashePlans/salary",
                {
                    partner_name: 'Bankbazaar',
                    salary: '20000',
                   

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
    const handleInputPartnerName = (e) => {
        setPartnerName(e.target.value);
    };
    const handleInputSalary = (e) => {
        setSalary(e.target.value);
    };
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        apiForPlanBasedSalary();
    }, []);
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl">Plan Based On Salary</div>
            <div className="p-5 login-page">
                <div className="one-login" >
                    <form className="bg-white shadow-md  rounded px-8  pb-8 mb-4 mt-16 clickfin-para-home p-5" style={{ border: '1px solid' }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter  Partner Name<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input onChange={handleInputPartnerName} value={partnerName} required style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                            <p className="text-red-600 text-left mt-2">
                                {!partnerName ? errors.partnerNameError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Salary<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={salary} onChange={handleInputSalary} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Salary" />
                            <p className="text-red-600 text-left mt-2">
                                {!salary ? errors.salaryError : ""}
                            </p>
                        </div>
                        <div>
                            <div onClick={onClickButton} className="mb-4 text-center bg-blue-600 p-2 text-white cursor-pointer">
                                Submit
                            </div>
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