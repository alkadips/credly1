import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import "react-datepicker/dist/react-datepicker.css";
export default function PreApproval() {
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [employmentType, setEmploymentType] = useState('');
    const [salaryRecivedType, setSalaryRecivedType] = useState('');
    const [errors, setErros] = useState({
        partnerNameError: "",
        panNumberError: "",
        mobileNumberError: "",
        nameError: "",
        addredd1Line1Error: "",
        genderError: "",
        localityError: "",
        pincodeError: "",
        salaryError: "",
        cityError: "",
        emailError: "",
        companyNameError: "",
        amountError: "",
        dateError: "",
    });
    const [submitClicked, setSubmitClicked] = useState(false);
    const [partnerName, setPartnerName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [panNumber, setPan] = useState("");
    const [name, setName] = useState("");
    const [addredd1, setAddressLine1] = useState("");
    const [locality, setLocality] = useState("");
    const [pincode, setPincode] = useState("");
    const [salary, setSalary] = useState("");
    const [city, setCity] = useState("");
    const [company, setCompany] = useState("");
    const [amount, setAmount] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [openPreaprove, setOpenPreapprove] = useState(false);
    const [openPrequolifiedLow, setopenPrequolifiedLow] = useState(false);
    const [openPrequolifiedHigh, setopenPrequolifiedHigh] = useState(false);
    const [openRijected, setopenRijected] = useState(false);
    const [openInvalidChecksome, setopenInvalidChecksome] = useState(false);
    const [openInvalidPartnerName, seopenInvalidPartnerName] = useState(false);
    const [openTechnicalError, setopenTechnicalError] = useState(false);
    const [openDuplicateError, setopenDuplicateError] = useState(false);
    const [openInvalidDateofBrithFormat, setopenInvalidDateofBrithFormat] = useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    const handleChangeState = (event) => {
        setState(event.target.value);
    };
    const handleChangeEmploymentType = (event) => {
        setEmploymentType(event.target.value);
    };

    const handleChangeSalaryRecievedType = (event) => {
        setSalaryRecivedType(event.target.value);
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
    const handleInputPan = (e) => {
        setPan(e.target.value);
    };
    const handleInputname = (e) => {
        setName(e.target.value);
    };
    const handleInputaddress1 = (e) => {
        setAddressLine1(e.target.value);
    };
    const handleInputLocality = (e) => {
        setLocality(e.target.value);
    };
    const handleInputPincode = (e) => {
        setPincode(e.target.value);
    };
    const handleInputSalary = (e) => {
        setSalary(e.target.value);
    };
    const handleInputCity = (e) => {
        setCity(e.target.value);
    };
    const handleInputCompany = (e) => {
        setCompany(e.target.value);
    };
    const handleInputAmount = (e) => {
        setAmount(e.target.value);
    };
   
    const handleClickPreApprove = () => {
        setOpenPreapprove(true);
    };
    const handleClickPrequolifiedLow = () => {
        setopenPrequolifiedLow(true);
    };
    const handleClickPrequolifiedHigh = () => {
        setopenPrequolifiedHigh(true);
    };
    const handleClickRijected = () => {
        setopenRijected(true);
    };
    const handleClickInvalidChecksum = () => {
        setopenInvalidChecksome(true);
    };
    const handleClickInvalidPartnerName = () => {
        seopenInvalidPartnerName(true);
    };
    const handleClickTechnicalError = () => {
        setopenTechnicalError(true);
    };
    const handleClickDuplicateEorror = () => {
        setopenDuplicateError(true);
    };
    const handleClickInvalidDateOfBrirhofformat = () => {
        setopenInvalidDateofBrithFormat(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenPreapprove(false);
        setopenPrequolifiedLow(false);
        setopenPrequolifiedHigh(false);
        setopenRijected(false);
        setopenInvalidChecksome(false);
        seopenInvalidPartnerName(false);
        setopenTechnicalError(false);
        setopenDuplicateError(false);
        setopenInvalidDateofBrithFormat(false);
    };
    const preAprovalApi = () => {
        axios
            .post("https://test-partners.cashe.co.in/report/getLoanApprovalDetails", {
                partner_name: "Cashe Partner",
                pan: "AHAPAP000X",
                mobileNo: "9876543210",
                name: "Yashoraj Tyagi",
                addressLine1: "AAA-1 Golf Road",
                locality: "Lower Parel",
                pinCode: "400110",
                gender: "M",
                salary: "250000",
                state: "MAHARASHTRA",
                city: "Mumbai",
                dob: "1974-04-29 00:00:00",
                employmentType: 1,
                salaryReceivedType: 3,
                emailId: "yashabc@gmail.com",
                companyName: "Bhanix",
                loanAmount: 110000,
            })
            .then(async (response) => {
                console.log("res", response);
                if (response) {
                    return handleClickPreApprove
                } else if (response) {
                    return handleClickPrequolifiedLow
                }
                else if (response) {
                    return handleClickPrequolifiedHigh
                }
                else if (response) {
                    return handleClickRijected
                }
                else if (response) {
                    return handleClickInvalidChecksum
                }
                else if (response) {
                    return handleClickInvalidPartnerName
                }
                else if (response) {
                    return handleClickTechnicalError
                }
                else if (response) {
                    return handleClickDuplicateEorror
                }
                else if (response) {
                    return handleClickInvalidDateOfBrirhofformat
                }
            })
            .catch((error) => {
                console.log("error while preaproval api", error);
            });
    };
    const onClickButton = () => {
        if (!partnerName) {
            setErros({ partnerNameError: "Name is either Null or cannot be empty" });
            return false;
        }
        else if (!panNumber) {
            setErros({ panNumberError: "Pan is either Null or cannot be empty" });
            return false;
        } else if (!mobileNumber) {
            setErros({ mobileNumberError: "Mobile Number field is Null or cannot be empty" });
            return false;
        } else if (!startDate) {
            setErros({ dateError: "Dob field is Null or cannot be empty" });
            return false;
        } else if (!name) {
            setErros({ nameError: "Name is either Null or cannot be empty" });
            return false;
        } else if (!addredd1) {
            setErros({ addredd1Line1Error: "Please Enter Address Line 1" });
            return false;
        } else if (!locality) {
            setErros({ localityError: "Please Enter Locality" });
            return false;
        }
        else if (!pincode) {
            setErros({ pincodeError: "Pin-code field is Null or cannot be empty" });
            return false;
        } else if (!salary) {
            setErros({ salaryError: "Please Enter Salary details" });
            return false;
        } else if (!gender) {
            setErros({ genderError: "Please check Gender Field" });
            return false;

        } else if (!city) {
            setErros({ cityError: "Please Enter City Name" });
            return false;

        } else if (!email) {
            setErros({ emailError: "Please Enter Valid Email Address" });
            return false;
        } else if (!company) {
            setErros({ companyNameError: "Please Enter Company Name" });
            return false;
        } else if (!amount) {
            setErros({ amountError: "Please check Loan Amount" });
            return false;
        }
        else if (partnerName && mobileNumber && email && addredd1 && panNumber && name && locality && pincode && salary && city && amount) {
            setSubmitClicked(true);
            return true;
        }
    };
    useEffect(() => {
        preAprovalApi();
    }, []);
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl">Pre Approval</div>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openPreaprove} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        pre_approved
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openPrequolifiedLow} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        pre_qualified_low
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openPrequolifiedHigh} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        pre_qualified_high
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openRijected} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        rejected
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openInvalidChecksome} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        Forbidden: Invalid Check-Sum
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openInvalidPartnerName} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        CashTestPartner is not registred
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openTechnicalError} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        Please try after some time.Cashe error : C04"
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openDuplicateError} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        Duplicate Lead
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openInvalidDateofBrithFormat} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        Dob format not according to yyyy-MM-dd HH:mm:ss. Please check.
                    </Alert>
                </Snackbar>
            </Stack>
            <div className="p-5 login-page">
                <div className='one-login'>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-24  clickfin-para-home" style={{ border: '1px solid' }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Partner Name<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputPartnerName} value={partnerName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='username' type="text" placeholder="Partner Name" />
                            <p className="text-red-600 text-left mt-2">
                                {!partnerName ? errors.partnerNameError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Pan Number<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputPan} value={panNumber} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Pan Number" />
                            <p className="text-red-600 text-left mt-2">
                                {!panNumber ? errors.panNumberError : ""}
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
                                Enter Name<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputname} value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=" Name" />
                            <p className="text-red-600 text-left mt-2">
                                {!name ? errors.nameError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Address Line 1<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputaddress1} value={addredd1} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Address Line 1" />
                            <p className="text-red-600 text-left mt-2">
                                {!addredd1 ? errors.addredd1Line1Error : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Locality<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputLocality} value={locality} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Locality" />
                            <p className="text-red-600 text-left mt-2">
                                {!locality ? errors.localityError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Pincode<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputPincode} value={pincode} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Pincode" />
                            <p className="text-red-600 text-left mt-2">
                                {!pincode ? errors.pincodeError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Select Gender<span className="text-red-600 ml-1">*</span>
                            </label>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Age"
                                onChange={handleChangeGender}
                                className='w-full'
                                style={{ height: '45px' }}
                            >
                                <MenuItem defaultValue='Male' value='M'>Male</MenuItem>
                                <MenuItem value='F'>Female</MenuItem>
                            </Select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Salary<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputSalary} value={salary} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Salary" />
                            <p className="text-red-600 text-left mt-2">
                                {!salary ? errors.salaryError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Select State<span className="text-red-600 ml-1">*</span>
                            </label>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state}
                                label="Age"
                                style={{ height: '45px' }}
                                onChange={handleChangeState}
                                className='w-full'>
                                <MenuItem defaultValue='ANDAMAN & NICOBAR' value='ANDAMAN & NICOBAR'>ANDAMAN & NICOBAR</MenuItem>
                                <MenuItem value='ISLANDS'>ISLANDS</MenuItem>
                                <MenuItem value='ANDHRA PRADESH'>ANDHRA PRADESH
                                </MenuItem>
                                <MenuItem value='ARUNACHAL PRADESH'>ARUNACHAL PRADESH
                                </MenuItem>
                                <MenuItem value='ASSAM'>ASSAM
                                </MenuItem>
                                <MenuItem value='BIHAR'>BIHAR
                                </MenuItem>
                                <MenuItem value='CHANDIGARH'>CHANDIGARH</MenuItem>
                                <MenuItem value='CHATTISGARH'>CHATTISGARH</MenuItem>
                                <MenuItem value='DADRA & NAGAR HAVELI'>DADRA & NAGAR HAVELI</MenuItem>
                                <MenuItem value='DAMAN & DIU'>DAMAN & DIU</MenuItem>
                                <MenuItem value='DELHI'>DELHI</MenuItem>
                                <MenuItem value='GOA'>GOA</MenuItem>
                                <MenuItem value='GUJARAT'>GUJARAT</MenuItem>
                                <MenuItem value='HARYANA'>HARYANA</MenuItem>
                                <MenuItem value='HIMACHAL PRADESH'>HIMACHAL PRADESH</MenuItem>
                                <MenuItem value='JAMMU AND KASHMIR'>JAMMU AND KASHMIR</MenuItem>
                                <MenuItem value='JHARKHAND'>JHARKHAND</MenuItem>
                                <MenuItem value='KARNATAKA'>KARNATAKA</MenuItem>
                                <MenuItem value='KERALA'>KERALA</MenuItem>
                                <MenuItem value='LAKSHADWEEP'>LAKSHADWEEP</MenuItem>
                                <MenuItem value='MADHYA PRADESH'>MADHYA PRADESH</MenuItem>
                                <MenuItem value='MAHARASHTRA'>MAHARASHTRA</MenuItem>
                                <MenuItem value='MANIPUR'>MANIPUR</MenuItem>
                                <MenuItem value='Megalaya'>Megalaya</MenuItem>
                                <MenuItem value='MEGHALAYA'>MEGHALAYA</MenuItem>
                                <MenuItem value='MIZORAM'>MIZORAM</MenuItem>
                                <MenuItem value='NAGALAND'>NAGALAND</MenuItem>
                                <MenuItem value='ODISHA'>ODISHA
                                </MenuItem>
                                <MenuItem value='PUNJAB'>PUNJAB
                                </MenuItem>
                                <MenuItem value='RAJASTHAN'>RAJASTHAN</MenuItem>
                                <MenuItem value='SIKKIM'>SIKKIM</MenuItem>
                                <MenuItem value='TAMIL NADU'>TAMIL NADU</MenuItem>
                                <MenuItem value='TELANGANA'>TELANGANA</MenuItem>
                                <MenuItem value='TRIPURA'>TRIPURA</MenuItem>
                                <MenuItem value='UTTAR PRADESH'>UTTAR PRADESH</MenuItem>
                                <MenuItem value='UTTARAKHAND'>UTTARAKHAND</MenuItem>
                                <MenuItem value='WEST BENGAL'>WEST BENGAL</MenuItem>
                            </Select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter City<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputCity} value={city} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="City" />
                            <p className="text-red-600 text-left mt-2">
                                {!city ? errors.cityError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Select Date Of Brith<span className="text-red-600 ml-1">*</span>
                            </label>
                            <div className='p-2' style={{ border: '1px solid', width: '100%' }}>
                                <DatePicker required selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Select Employment Type<span className="text-red-600 ml-1">*</span>
                            </label>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={employmentType}
                                label="Age"
                                onChange={handleChangeEmploymentType}
                                className='w-full'
                                style={{ height: '45px' }}
                            >
                                <MenuItem defaultValue='Salaried full-time' value='1'>Salaried full-time</MenuItem>
                                <MenuItem value='2'>Unemployed</MenuItem>
                                <MenuItem value='3'>Self-Employed</MenuItem>
                            </Select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Select Salary Recieved Type<span className="text-red-600 ml-1">*</span>
                            </label>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={salaryRecivedType}
                                label="Age"
                                onChange={handleChangeSalaryRecievedType}
                                className='w-full'
                                style={{ height: '45px' }}
                            >
                                <MenuItem defaultValue='Cash' value='1'>Cash</MenuItem>
                                <MenuItem value='2'>Cheque</MenuItem>
                                <MenuItem value='3'>Direct Account Transfer</MenuItem>
                            </Select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Email Id<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputEmail} value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Id" />
                            <p className="text-red-600 text-left mt-2">
                                {!email ? errors.emailError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Company Name<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputCompany} value={company} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Company Name" />
                            <p className="text-red-600 text-left mt-2">
                                {!company ? errors.companyNameError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Loan Amount<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputAmount} value={amount} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Loan Amount" />
                            <p className="text-red-600 text-left mt-2">
                                {!amount ? errors.amountError : ""}
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