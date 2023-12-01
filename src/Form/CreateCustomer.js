import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormControl, MenuItem, Select } from "@mui/material";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from "axios";
export default function CreateCustomer() {
    const [startDate, setStartDate] = useState(new Date());
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [statecity, setStatecity] = useState('');
    const [accomodation, setAccomodation] = useState('');
    const [qualification, setQualification] = useState('');
    const [residing, setResiding] = useState('');
    const [numberOfYearsAtCurrentAddress, setNumberOfYearsAtCurrentAddress] = useState('');
    const [numberOfKids, setNumberOfKids] = useState('');
    const [designation, setDesignation] = useState('');
    const [employmentType, setEmploymentType] = useState('');
    const [salaryRecivedType, setSalaryRecivedType] = useState('');
    const [jobFunction, setJobFunction] = useState('');
    const [organization, setOrganization] = useState('');
    const [opensuccess, setOpenSucess] = useState(false);
    const [openInvalidCheckSum, setOpenInvalidCheckSum] = useState(false);
    const [openInvalidDescriptionKey, setOpenInvalidDescriptionKey] = useState(false);
    const [openregisteredFromSamePartner, setOpenregisteredFromSamePartner] = useState(false);
    const [openregisteredFromDifrentPartner, setopenregisteredFromDifrentPartner] = useState(false);
    const [openRegisteredWithCasche, setOpenRegisteredWithCasche] = useState(false);
    const [openInValidPartnerName, setOpenInValidPartnerName] = useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleClickSuccess = () => {
        setOpenSucess(true);
    };
    const handleClickInvalidChecksum = () => {
        setOpenInvalidCheckSum(true);
    };
    const handleClickInvalidDecriptionKey = () => {
        setOpenInvalidDescriptionKey(true);
    };
    const handleClickRegisteredFromSamePartner = () => {
        setOpenregisteredFromSamePartner(true);
    };
    const handleClickRegisteredFromDiferentPartner = () => {
        setopenregisteredFromDifrentPartner(true);
    };
    const handleClickRegisteredWithCasche = () => {
        setOpenRegisteredWithCasche(true);
    };
    const handleClickInvalidPartnerName = () => {
        setOpenInValidPartnerName(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSucess(false);
    };
    const handleChangeEmploymentType = (event) => {
        setEmploymentType(event.target.value);
    };
    const handleChangeOrganization = (event) => {
        setOrganization(event.target.value);
    };
    const handleChangJobFunction = (event) => {
        setJobFunction(event.target.value);
    };
    const handleChangeState = (event) => {
        setState(event.target.value);
    };
    const handleState = (event) => {
        setStatecity(event.target.value);
    };
    const handleChangeAccomodation = (event) => {
        setAccomodation(event.target.value);
    };
    const handleChangeQualification = (event) => {
        setQualification(event.target.value);
    };
    const handlestreet = (event) => {
        setstreet(event.target.value);
    };
    const handlePo = (event) => {
        setpo(event.target.value);
    };

    const handleCo = (event) => {
        setco(event.target.value);
    };
    const handleekycName = (event) => {
        setekycName(event.target.value);
    };
    const handlePC = (event) => {
        setpc(event.target.value);
    };
    const handleSubDist = (event) => {
        setsubdist(event.target.value);
    };
    const handleChangeResiding = (event) => {
        setResiding(event.target.value);
    };
    const handleChangeNumberOfYearCurrentAddress = (event) => {
        setNumberOfYearsAtCurrentAddress(event.target.value);
    };
    const handleChangeNumberOfKIds = (event) => {
        setNumberOfKids(event.target.value);
    };
    const handleChangePanNumber = (event) => {
        setPan(event.target.value);
    };
    const handleChangeDesignation = (event) => {
        setDesignation(event.target.value);
    };
    const handleChangeSalaryRecievedType = (event) => {
        setSalaryRecivedType(event.target.value);
    };
    const handleDist = (event) => {
        setdist(event.target.value);
    };
    const [partnerName, setPartnerName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [panNumber, setPan] = useState("");
    const [name, setName] = useState("");
    const [addredd1, setAddressLine1] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [submitClicked, setSubmitClicked] = useState(false);
    const [referenceId, setReferenceId] = useState("");
    const [applicantId, setApplicaniID] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [producttype, setProductType] = useState("");
    const [fristName, setFristName] = useState("");
    const [lastName, setLastName] = useState("");
    const [addredd2, setAddress2] = useState("");
    const [landmark, setLandMark] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [officePhoneNumber, setOffiecPhoneNumber] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [numberofYearinCurrentWork, setNumberOfYearInCurrentWork] = useState("");
    const [officialEmail, setOfficialEmail] = useState("");
    const [officeAddress1, setOfficeAddress1] = useState("");
    const [officeAddress2, setofficeAddress2] = useState("");
    const [officeLandmark, setofficeLandMark] = useState("");
    const [officePincode, setOfficePincode] = useState("");
    const [officeCity, setOfficeCity] = useState("");
    const [workingSince, setWorkingSince] = useState("");
    const [primaryExistingBankName, setPrimaryExistingBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [partbankName, setpartbankName] = useState("");
    const [partaccountNumber, setpartaccountNumber] = useState("");
    const [partifsccode, setpartifsccode] = useState("");
    const [remark, setremark] = useState("");
    const [contactmobileNumber, setcontactmobileNumber] = useState("");
    const [contactEmail, setcontactEmail] = useState("");
    const [poa, setpoa] = useState("");
    const [ekycaadhar, setekycaadhar] = useState("");
    const [ekycName, setekycName] = useState("");
    const [compreesedAddress, setcompreesedAddress] = useState("");
    const [co, setco] = useState("");
    const [street, setstreet] = useState("");
    const [house, sethouse] = useState("");
    const [lm, setlm] = useState("");
    const [vtc, setvtc] = useState("");
    const [subdist, setsubdist] = useState("");
    const [dist, setdist] = useState("");
    const [pc, setpc] = useState("");
    const [po, setpo] = useState("");
    const [errors, setErros] = useState({
        partnerNameError: "",
        fristNameError: "",
        mobileNumberError: "",
        emailError: "",
    });
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        createCustomer();
    }, []);
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    const handleInputPartnerName = (e) => {
        setPartnerName(e.target.value);
    };
    const handlechangepartremark = (e) => {
        setremark(e.target.value);
    };
    const handlechanegHouse = (e) => {
        sethouse(e.target.value);
    };
    const handleLM = (e) => {
        setlm(e.target.value);
    };
    const handlevtc = (e) => {
        setvtc(e.target.value);
    };
    const handlechangeIfscCode = (e) => {
        setIfscCode(e.target.value);
    };
    const hadlecompressesAddress = (e) => {
        setcompreesedAddress(e.target.value);
    };
    const handleInputCompany = (e) => {
        setCompanyName(e.target.value);
    };
    const handlechangeInputReference = (e) => {
        setReferenceId(e.target.value);
    };
    const handlechangeApplicantId = (e) => {
        setApplicaniID(e.target.value);
    };
    const handleChangeLoanAmount = (e) => {
        setLoanAmount(e.target.value);
    };
    const handlechangeProductType = (e) => {
        setProductType(e.target.value);
    };
    const handleChangeFristName = (e) => {
        setFristName(e.target.value);
    };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };
    const handlechangeAddress1 = (e) => {
        setAddressLine1(e.target.value);
    };
    const handlechangeLine2 = (e) => {
        setAddress2(e.target.value);
    };
    const handlechangeLandMark = (e) => {
        setLandMark(e.target.value);
    };
    const handlechangePincode = (e) => {
        setPincode(e.target.value);
    };
    const handlechangeCity = (e) => {
        setCity(e.target.value);
    };
    const handleChangePhone = (e) => {
        setMobileNumber(e.target.value);
    };
    const handleChangeMonthlyIncome = (e) => {
        setMonthlyIncome(e.target.value);
    };
    const handlechangeNumberofYearInCurrentWork = (e) => {
        setNumberOfYearInCurrentWork(e.target.value);
    };
    const handlechangeOffiEmail = (e) => {
        setOfficialEmail(e.target.value);
    };
    const handlechangeOfficeAddress1 = (e) => {
        setOfficeAddress1(e.target.value);
    };
    const handlechangeOfficeAddress2 = (e) => {
        setAddress2(e.target.value);
    };
    const handlechangeOfficeLandmark = (e) => {
        setLandMark(e.target.value);
    };
    const handlechangeOfficePincode = (e) => {
        setOfficePincode(e.target.value);
    };
    const handlechangeOfficeCity = (e) => {
        setOfficeCity(e.target.value);
    };
    const handlechangeWorkingSince = (e) => {
        setWorkingSince(e.target.value);
    };
    const handlecangeBankName = (e) => {
        setpartbankName(e.target.value);
    };
    const handlechangeAccountNumber = (e) => {
        setAccountNumber(e.target.value);
    };
    const handlepartnerBankName = (e) => {
        setpartbankName(e.target.value);
    };
    const handlechangepartifsccode = (e) => {
        setpartifsccode(e.target.value);
    };
    const handlechangeContactMobileNumber = (e) => {
        setcontactmobileNumber(e.target.value);
    };
    const handlechangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlechangepoa = (e) => {
        setpoa(e.target.value);
    };
    const handlechangeAadhar = (e) => {
        setAadharNumber(e.target.value);
    };
    const handlechnagepartaccountNumber = (e) => {
        setpartaccountNumber(e.target.value);
    };
    const onClickButton = () => {
        if (!partnerName) {
            setErros({ partnerNameError: "Please Enter Partner name" });
            return false;
        } else if (!fristName) {
            setErros({ fristNameError: "Please Enter frist Name" });
            return false;
        } else if (!mobileNumber) {
            setErros({ mobileNumberError: "Please Enter Valid Mobile Number" });
            return false;
        }
        else if (!email) {
            setErros({ emailError: "Please Enter Valid Email Address" });
            return false;
        }
        else if (partnerName && fristName && mobileNumber && email) {
            setSubmitClicked(true);
            return true;
        }
    };
    const createCustomer = () => {
        axios
            .post("https://test-partners.cashe.co.in/partner/create_customer", {
                partner_name: "TestPartner",
                reference_Id: "123",
                applicant_id: "234",
                loan_amount: "5000",
                product_type_name: "CASHe_90",
                "Personal Information": {
                    "First Name": "Khushi",
                    "Last Name": "Shamim",
                    DOB: "14-02-1989",
                    Gender: "Female",
                    "Address Line 1": "vasai",
                    "Address Line 2": "ambadi",
                    "Landmark (Address Line 3)": "near hdfc",
                    Pincode: "401202",
                    City: "Mumbai",
                    State: "Maharashtra",
                    "Type of Accommodation": "Own",
                    PAN: "CBEPM2486L",
                    Aadhaar: "192839138392",
                    "Highest Qualification": "Postgraduate",
                    residing_with: "Family",
                    number_of_years_at_current_address: "More than five years",
                    marital_status: "Married",
                    spouse_employment_status: "Employed",
                    number_of_kids: "One",
                },
                "Applicant Information": {
                    "Company Name": "3M ELECTRO & COMMUNICATION PRIVATE LIMITED",
                    "Office Phone no": "04023456789",
                    Designation: "Supervisor",
                    "Monthly Income": "80000",
                    "Number of Years in Current Work": "10",
                    "Official Email": "user@company.com",
                    "Office Address 1": "sakinaka",
                    "Office Address 2": "andheri",
                    "Landmark (Office)": "near sbi",
                    "Office Pincode": "410256",
                    "Office City": " Adilabad ",
                    "Office State": " TELANGANA",
                    "Working Since": "29-07-2019",
                    "Employment Type": "Salaried",
                    "Salary ReceivedTypeId": "1",
                    work_sector: "Information Technology",
                    job_function: "IT and Engineering",
                    organization: "Private Company",
                },
                "Financial Information": {
                    "Primary Existing Bank Name": "HDFC Bank",
                    "Account number": "23982983239832",
                    "IFSC Code": "KKBK0000963",
                },
                "Partner Bank Details": {
                    "Primary Existing Bank Name": "Axis Bank",
                    "Account number": "12324234234",
                    "IFSC Code": "UTIB0000008",
                    Remarks: "Anything about bank details",
                },
                "Contact Information": {
                    Mobile: "8456120125",
                    "Email Id": "a.mahajna1994@yahoo.com",
                },
                "e-KYC Customer": {
                    poa: {
                        co: "S/O: Subir Samanta",
                        street: "Middle Campus",
                        house: "C-2/22",
                        lm: "BIT",
                        vtc: "Mesra",
                        subdist: "Kanke",
                        dist: "Ranchi",
                        state: "Jharkhand",
                        pc: "835215",
                        po: "Mesra",
                    },
                    aadhar_no: "589023993834",
                    name: "Anupam Samanta",
                    dob: "19-12-1991",
                    gender: "M",
                    "compressed-address":
                        "S/O: Subir Samanta, C-2/22, Middle Campus, BIT, Mesra, Kanke, Ranchi, Jharkhand - 835215, post-office: Mesra",
                },
            })
            .then(async (response) => {
                console.log("res create customer", response);
                if (response) {
                    return handleClickSuccess
                } else if (response) {
                    return handleClickInvalidChecksum
                }
                else if (response) {
                    return handleClickInvalidDecriptionKey
                }
                else if (response) {
                    return handleClickRegisteredFromSamePartner
                }
                else if (response) {
                    return handleClickRegisteredFromDiferentPartner
                }
                else if (response) {
                    return handleClickRegisteredWithCasche
                }
                else if (response) {
                    return handleClickInvalidPartnerName
                }
            })
            .catch((error) => {
                console.log("error while create customer", error);
            });
    };
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl">Create Customer</div>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={opensuccess} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="sucess" sx={{ width: '100%' }}>
                        Successfully Created
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openInvalidCheckSum} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        Forbidden: Invalid Check-Sum value
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openInvalidDescriptionKey} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        Bad Encryption request
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openregisteredFromSamePartner} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        A customer with this mobile number has already been received from your domain
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openregisteredFromDifrentPartner} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="sucess" sx={{ width: '100%' }}>
                        A customer with this mobile number has already been received
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openInValidPartnerName} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="sucess" sx={{ width: '100%' }}>
                        'name' is not registered with CASHe
                    </Alert>
                </Snackbar>
            </Stack>
            <div className=" login-page">
                <div  >
                    <form className="bg-white shadow-md  rounded px-8  pb-8 mb-4 mt-16 clickfin-para-home p-5" style={{ border: '1px solid' }}>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter Partner Name<span className="text-red-600 ml-2">*</span>
                                </label>
                                <input value={partnerName} onChange={handleInputPartnerName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                                <p className="text-red-600 text-left mt-2">
                                    {!partnerName ? errors.partnerNameError : ""}
                                </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Reference Id
                                </label>
                                <input value={referenceId} onChange={handlechangeInputReference} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Reference Id" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Applicant id
                                </label>
                                <input value={applicantId} onChange={handlechangeApplicantId} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Applicant Id" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Loan Amount
                                </label>
                                <input value={loanAmount} onChange={handleChangeLoanAmount} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Loan Amount" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Product Type Name
                            </label>
                            <input value={producttype} onChange={handlechangeProductType} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Product Type Name" />
                        </div>
                        <div className="mt-3 text-center text-blue-600 mb-3">Personal Information</div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    First Name<span className="text-red-600 ml-2">*</span>
                                </label>
                                <input value={fristName} onChange={handleChangeFristName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name" />
                                <p className="text-red-600 text-left mt-2">
                                    {!fristName ? errors.fristNameError : ""}
                                </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Last Name
                                </label>
                                <input value={lastName} onChange={handleChangeLastName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="margin-top-layout select-drop-wrapper">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    DOB
                                </label>
                                <div className='p-2' style={{ border: '1px solid', width: '100%' }}>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Select Gender
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
                                </FormControl>
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Address Line 1
                                </label>
                                <input value={addredd1} onChange={handlechangeAddress1} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Address Line 1" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Address Line 2
                                </label>
                                <input value={addredd2} onChange={handlechangeLine2} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Address Line 2" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    LandMark
                                </label>
                                <input value={landmark} onChange={handlechangeLandMark} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="LandMark" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Pincode
                                </label>
                                <input value={pincode} onChange={handlechangePincode} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Pincode" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    City
                                </label>
                                <input value={city} onChange={handlechangeCity} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="City" />
                            </div>
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Select State
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={state}
                                        label="Age"
                                        onChange={handleChangeState}
                                        style={{ height: '45px' }}
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
                                </FormControl>
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Pan
                                </label>
                                <input value={panNumber} onChange={handleChangePanNumber} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Pan" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Aadhar
                                </label>
                                <input value={aadharNumber} onChange={handlechangeAadhar} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Aadhar" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Marital Status:
                                </label>
                                <div className="flex gap-2">
                                    <div className="flex gap-2">
                                        <div>Single</div>
                                        <div>
                                            <input id="username" type="radio" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div>married</div>
                                        <div>
                                            <input id="username" type="radio" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Spouse Employment Status
                                </label>
                                <div className="flex gap-2">
                                    <div className="flex gap-2">
                                        <div>Employed</div>
                                        <div>
                                            <input id="username" type="radio" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div>UnEmployed</div>
                                        <div>
                                            <input id="username" type="radio" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Num Of Years At Current Address
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={numberOfYearsAtCurrentAddress}
                                        label="Age"
                                        onChange={handleChangeNumberOfYearCurrentAddress}
                                        className='w-full'
                                        style={{ height: '45px' }}
                                    >
                                        <MenuItem value='Less than Six Months'>Less than Six Months</MenuItem>
                                        <MenuItem value='Six Months to Two Years'>Six Months to Two Years</MenuItem>
                                        <MenuItem value='Two Years to Five Years'>Two Years to Five Years</MenuItem>
                                        <MenuItem value='Two Years to Five Years'>More than Five Years </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Highest Qualification
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={qualification}
                                        label="Age"
                                        style={{ height: '45px' }}
                                        onChange={handleChangeQualification}
                                        className='w-full'
                                    >
                                        <MenuItem value='Undergraduate'>Undergraduate</MenuItem>
                                        <MenuItem value='Graduate'>Graduate</MenuItem>
                                        <MenuItem value='Postgraduate'>Postgraduate</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Residing With
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={residing}
                                        label="Age"
                                        onChange={handleChangeResiding}
                                        className='w-full'
                                        style={{ height: '45px' }}
                                    >
                                        <MenuItem value='Family'>Family</MenuItem>
                                        <MenuItem value='Friends'>Friends</MenuItem>
                                        <MenuItem value='None'>None</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Number Of Kids
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={numberOfKids}
                                        label="Age"
                                        onChange={handleChangeNumberOfKIds}
                                        className='w-full'
                                        style={{ height: '45px' }}
                                    >
                                        <MenuItem value='One'>One</MenuItem>
                                        <MenuItem value='More Than One'>More Than One</MenuItem>
                                        <MenuItem value='None'>None</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Type of Accommodation
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={accomodation}
                                        label="Age"
                                        onChange={handleChangeAccomodation}
                                        className='w-full'
                                        style={{ height: '45px' }}
                                    >
                                        <MenuItem value='Owned'>Owned</MenuItem>
                                        <MenuItem value='Rented,'>Rented</MenuItem>
                                        <MenuItem value='Rented,'>Company Provided</MenuItem>
                                        <MenuItem value='Rented,'>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="text-blue-600 text-center mb-3">Applicant Information</div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Company Name
                                </label>
                                <input value={companyName} onChange={handleInputCompany} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Company Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Office Phone No
                                </label>
                                <input value={officePhoneNumber} onChange={handleChangePhone} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Designation
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={designation}
                                        label="Age"
                                        style={{ height: '45px' }}
                                        onChange={handleChangeDesignation}
                                        className='w-full'
                                    >
                                        <MenuItem value='Executive'>Executive</MenuItem>
                                        <MenuItem value='Middle Management'>Middle Management</MenuItem>
                                        <MenuItem value='Sr.Management'>Sr.Management</MenuItem>
                                        <MenuItem value='Leadership role'>Leadership role</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Monthly Income
                                </label>
                                <input value={monthlyIncome} onChange={handleChangeMonthlyIncome} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Monthly Income" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Number Of Years In Current Work
                                </label>
                                <input value={numberofYearinCurrentWork} onChange={handlechangeNumberofYearInCurrentWork} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Number Of Years In Current Work" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Official Email
                                </label>
                                <input value={officialEmail} onChange={handlechangeOffiEmail} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Official Email" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Office Address 1
                                </label>
                                <input value={officeAddress1} onChange={handlechangeOfficeAddress1} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Office Address 1" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Office Address 2
                                </label>
                                <input value={officeAddress2} onChange={handlechangeOfficeAddress2} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Office Address 2" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    LandMark Office
                                </label>
                                <input value={officeLandmark} onChange={handlechangeOfficeLandmark} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="LandMark Office" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Office Pincode
                                </label>
                                <input value={officePincode} onChange={handlechangeOfficePincode} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Pincode" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Office City
                                </label>
                                <input value={officeCity} onChange={handlechangeOfficeCity} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Office City" />
                            </div>
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Select State
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
                                </FormControl>
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Working Since
                                </label>
                                <input value={workingSince} onChange={handlechangeWorkingSince} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Working Since" />
                            </div>
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Employment Type
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={employmentType}
                                        label="EmploymentType"
                                        style={{ height: '45px' }}
                                        onChange={handleChangeEmploymentType}
                                    >
                                        <MenuItem value='Salaried full-time'>Salaried full-time</MenuItem>
                                        <MenuItem value='Unemployed'>Unemployed</MenuItem>
                                        <MenuItem value='Self-Employed'>Self-Employed</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Select Salary Recieved Type
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
                                </FormControl>
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Work Sector
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={jobFunction}
                                        label="Age"
                                        onChange={handleChangJobFunction}
                                        className='w-full'
                                        style={{ height: '45px' }}
                                    >
                                        <MenuItem value='Research and development'>Research and development</MenuItem>
                                        <MenuItem value='Administration'>Administration</MenuItem>
                                        <MenuItem value='Customerservice'>Customerservice</MenuItem>
                                        <MenuItem value='Sales'>Sales</MenuItem>
                                        <MenuItem value='Marketing'>Marketing</MenuItem>
                                        <MenuItem value='IT and Engineering'>IT and Engineering</MenuItem>
                                        <MenuItem value='Human resources'>Human resources</MenuItem>
                                        <MenuItem value='Finance'>Finance</MenuItem>
                                        <MenuItem value='Operations'>Operations</MenuItem>
                                        <MenuItem value='Legal and Audit'>Legal and Audit</MenuItem>
                                        <MenuItem value='Others'>Others</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Organization
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={organization}
                                        label="Age"
                                        onChange={handleChangeOrganization}
                                        className='w-full'
                                        style={{ height: '45px' }}
                                    >
                                        <MenuItem value='Private Company'>Private Company</MenuItem>
                                        <MenuItem value='Public Company'>Public Company</MenuItem>
                                        <MenuItem value='State Government'>State Government</MenuItem>
                                        <MenuItem value='Central Government'>Central Government</MenuItem>
                                        <MenuItem value='Partnership Firm'>Partnership Firm</MenuItem>
                                        <MenuItem value='Proprietorship Firm'>Proprietorship Firm</MenuItem>
                                        <MenuItem value='Limited Liability Partnership (LLP)'>Limited Liability Partnership (LLP)</MenuItem>
                                        <MenuItem value='Trust'>Trust</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="text-blue-600 mb-3 text-center">
                            Financial Information
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Primary Exsisting Bank Name
                                </label>
                                <input value={primaryExistingBankName} onChange={handlecangeBankName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Primary Existing Bank Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Account Number
                                </label>
                                <input value={accountNumber} onChange={handlechangeAccountNumber} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Account Number" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                IFSC Code
                            </label>
                            <input value={ifscCode} onChange={handlechangeIfscCode} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="IFSC CODE" />
                        </div>
                        <div className="mb-3 text-blue-600 text-center">
                            Partner Bank Details
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Primary Existing Bank Name
                                </label>
                                <input value={partbankName} onChange={handlepartnerBankName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Primary Existing Bank Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Account Number
                                </label>
                                <input value={partaccountNumber} onChange={handlechnagepartaccountNumber} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Account Number" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    IFSC CODE
                                </label>
                                <input value={partifsccode} onChange={handlechangepartifsccode} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="IFSC Code" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Remarks
                                </label>
                                <input value={remark} onChange={handlechangepartremark} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Remarks" />
                            </div>
                        </div>
                        <div className="mb-3 text-center text-blue-600">
                            Contact Information
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    MObile Number<span className="text-red-600 ml-2"> *</span>
                                </label>
                                <input value={contactmobileNumber} onChange={handlechangeContactMobileNumber} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Mobile Number" />
                                <p className="text-red-600 text-left mt-2">
                                    {!contactmobileNumber ? errors.mobileNumberError : ""}
                                </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Email Id<span className="text-red-600 ml-2"> *</span>
                                </label>
                                <input value={contactEmail} onChange={handlechangeEmail} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Id" />
                                <p className="text-red-600 text-left mt-2">
                                    {!contactEmail ? errors.emailError : ""}
                                </p>
                            </div>
                        </div>
                        <div className="mb-3 text-blue-600 text-center">
                            E-KYC Customer
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Power Of Address
                                </label>
                                <input value={poa} onChange={handlechangepoa} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Power Of Address" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Aadhar Number
                                </label>
                                <input value={ekycaadhar} onChange={handlechangeAadhar} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Aadhar NUmber" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Name
                                </label>
                                <input value={ekycName} onChange={handleekycName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    DOB
                                </label>
                                <div className='p-2' style={{ border: '1px solid', width: '100%' }}>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Select Gender
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={gender}
                                        label="Age"
                                        style={{ height: '45px' }}

                                        onChange={handleChangeGender}
                                        className='w-full'
                                    >
                                        <MenuItem defaultValue='Male' value='M'>Male</MenuItem>
                                        <MenuItem value='F'>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Compressesd-Address
                                </label>
                                <input value={compreesedAddress} onChange={hadlecompressesAddress} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Compressed Address" />
                            </div>
                        </div>
                        <div className="mb-3 text-center text-blue-600">
                            Proof Of Address
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Co
                                </label>
                                <input value={co} onChange={handleCo} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Co" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Street
                                </label>
                                <input value={street} onChange={handlestreet} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="street" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    House
                                </label>
                                <input value={house} onChange={handlechanegHouse} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="House" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    LM
                                </label>
                                <input value={lm} onChange={handleLM} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="LM" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    VTC
                                </label>
                                <input value={vtc} onChange={handlevtc} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="VTC" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    SubDist
                                </label>
                                <input value={subdist} onChange={handleSubDist} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="SubDist" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Dist
                                </label>
                                <input value={dist} onChange={handleDist} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Dist" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    State
                                </label>
                                <input value={statecity} onChange={handleState} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="State" />
                            </div>
                        </div>
                        <div className="select-drop-wrapper margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    PC
                                </label>
                                <input value={pc} onChange={handlePC} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Pc" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    PO
                                </label>
                                <input value={po} onChange={handlePo} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="PO" />
                            </div>
                        </div>
                        <div>
                            <div onClick={onClickButton} className="mb-4 text-center bg-blue-600 p-2 text-white cursor-pointer">
                                Save
                            </div>
                        </div>
                    </form>
                </div>
                <div >
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