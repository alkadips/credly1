import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function EmployeeDetails() {
    const [employmentType, setEmploymentType] = useState('');
    const [state, setState] = useState('');
    const [organization, setOrganization] = useState('');
    const [modeodSalary, setModeOfSalary] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [designation, setDesignation] = useState('');
    const [currentWorkExperience, setcurrentWorkExperience] = useState('');
    const [totalWorkEx, settotalWorkEx] = useState('');
    const [officialEmail, setOfficialEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');
    const [city, setcity] = useState('');
    const [pincode, setPincode] = useState('');
    const [officialContact, setOfficialContact] = useState('');
    const [loanAmountMin, setLoanAmountMin] = useState('');
    const [previousLoanAmo, setPreviousLoanAmo] = useState('');
    const [monthalyEmi, setMonthlyEmi] = useState('');
    const [financierName, setFinancierName] = useState('');
    const [tenure, setTenure] = useState('');
    const [landmark, setLandMark] = useState('');
    const [adharNumber, setAadharNumber] = useState('');
    const [emailId, setEmailId] = useState('');
    const [lastName, setLastName] = useState('');
   




    const [submitClicked, setSubmitClicked] = useState(false);

    const handlechangeLandmark = (event) => {
        setLandMark(event.target.value);
    };
    const handlechangeloanAmount = (event) => {
        setLoanAmountMin(event.target.value);
    };
    const handlechangeContact = (event) => {
        setOfficialContact(event.target.value);
    };
    const handlechangePincode = (event) => {
        setPincode(event.target.value);
    };
    const handlechangecity = (event) => {
        setcity(event.target.value);
    };
    const handleChangeEmploymentType = (event) => {
        setEmploymentType(event.target.value);
    };
    const handleChangetenure = (event) => {
        setTenure(event.target.value);
    };
    const handleChangeOrganization = (event) => {
        setOrganization(event.target.value);
    };
    const handleChangeSalaryMode = (event) => {
        setModeOfSalary(event.target.value);
    };
    const handleChangeState = (event) => {
        setState(event.target.value);
    };
    
   
    const handlechangepreviousLoanAmount = (event) => {
        setPreviousLoanAmo(event.target.value);
    };
    const handlechangemonthlyEmi = (event) => {
        setMonthlyEmi(event.target.value);
    };
    const handlechangeFinancierName = (event) => {
        setFinancierName(event.target.value);
    };
    const handlechangeLine2 = (event) => {
        setLine2(event.target.value);
    };
    const handlechangeLine1 = (event) => {
        setLine1(event.target.value);
    };
    const handlechangesalary = (event) => {
        setSalary(event.target.value);
    };
    const handlechangeOfficialEmail = (event) => {
        setOfficialEmail(event.target.value);
    };
    const handlechangeWorkExperience = (event) => {
        setcurrentWorkExperience(event.target.value);
    };

    const handleChangeCompanyName = (event) => {
        setCompanyName(event.target.value);
    };
    const handlechangeDesignation = (event) => {
        setDesignation(event.target.value);
    };

    const [errors, setErros] = useState({
        partnerNameError: "",
        mobileNumberError: "",
        emailError: "",
    });
    const onClickButton = () => {
        if (!adharNumber) {
            setErros({ adharNumberErorr: "Please Enter Frist name" });
            return false;
        
        } else if (!adharNumber) {
            setErros({ aadharNumberErrror: "Please Enter Aadhar Number" });
            return false;
        
        
        } else if (!emailId) {
            setErros({ emailIdError: "Please Enter  Email Address" });
            return false;
        } 
        else if (!emailId) {
            setErros({ emailIdError: "Please Enter Valid Email Address" });
            return false;
        } 
        else if (  lastName && adharNumber  && emailId) {
            setSubmitClicked(true);
            return true;
        }
    };

    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl">Employee Details</div>
            <div className="flex gap-5 p-5 middle-basic " >
                <div  >
                    <form className="bg-white shadow-md rounded px-8 clickfin-para-home pb-8 mb-4 mt-24" style={{ border: '1px solid' }}>
                        <div className="flex-one  justify-between">
                            <div className="mb-4 margin-top-layout">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Employment Type
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={employmentType}
                                        label="EmploymentType"
                                        onChange={handleChangeEmploymentType}
                                        style={{height:'45px'}}

                                    >
                                        <MenuItem value='Salaried full-time'>Salaried full-time</MenuItem>
                                        <MenuItem value='Unemployed'>Unemployed</MenuItem>
                                        <MenuItem value='Self-Employed'>Self-Employed</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-4 margin-top-layout">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter  Company Name
                                </label>
                                <input value={companyName} onChange={handleChangeCompanyName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                            </div>
                        </div>

                        <div className="flex-one   justify-between">
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Select Organization Type
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={organization}
                                        label="Organization"
                                        onChange={handleChangeOrganization}
style={{height:'45px'}}


                                    >
                                        <MenuItem value='Private Limited'>Private Limited</MenuItem>
                                        <MenuItem value='Public Limited'>Public Limited</MenuItem>
                                        <MenuItem value='Proprietorship'>Proprietorship</MenuItem>
                                        <MenuItem value='Partnership'>Partnership</MenuItem>
                                        <MenuItem value='Other'>Other</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter Designation
                                </label>
                                <input value={designation} onChange={handlechangeDesignation} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Designation" />
                            </div>
                        </div>

                        <div className="flex-one margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter  Current Work Experience
                                </label>
                                <input value={currentWorkExperience} onChange={handlechangeWorkExperience} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter  Total Work Experience
                                </label>
                                <input value={totalWorkEx} onChange={handlechangeWorkExperience} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                            </div>
                        </div>

                        <div className="flex-one  justify-between">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Official Email Id
                                </label>
                                <input value={officialEmail} onChange={handlechangeOfficialEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                            </div>



                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Select Mode of Salary
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={modeodSalary}
                                        label="ModeOFSalary"
                                        onChange={handleChangeSalaryMode}
                                        style={{height:'45px'}}


                                    >
                                        <MenuItem value='Cash'>Cash</MenuItem>
                                        <MenuItem value='Cheque'>Cheque</MenuItem>
                                        <MenuItem value='Bank'>Bank</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="flex-one margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Salary min amount 20000
                                </label>
                                <input value={salary} onChange={handlechangesalary} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="20000" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Line 1
                                </label>
                                <input value={line1} onChange={handlechangeLine1} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Line 1" />
                            </div>
                        </div>


                        <div className="flex-one margin-top-layout">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Line 2
                                </label>
                                <input value={line2} onChange={handlechangeLine2} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Line 2" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Land mark
                                </label>
                                <input value={landmark} onChange={handlechangeLandmark} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="LandMark" />
                            </div>
                        </div>
                        <div className="flex-one  justify-between">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    City
                                </label>
                                <input value={city} onChange={handlechangecity} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="City" />
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
style={{height:'45px'}}

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



                        <div className="flex-one  justify-between">

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Pincode
                                </label>
                                <input value={pincode} onChange={handlechangePincode} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Pincode" />
                            </div>
                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Select Loan purpose
                                </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={state}
                                        label="State"
                                        onChange={handleChangeState}
style={{height:'45px'}}


                                    >
                                        <MenuItem value='Family function ,Marriage etc.'>Family function ,Marriage etc.</MenuItem>
                                        <MenuItem value='Paying other loans,Credit card bills etc.'>Paying other loans,Credit card bills etc.</MenuItem>
                                        <MenuItem value='Home construction,Renovation etc.'>Home construction,Renovation etc.
                                        </MenuItem>
                                        <MenuItem value='Medical Treatmet,Hospital bill etc.'>Medical treatmet,Hospital bill etc.
                                        </MenuItem>
                                        <MenuItem value='Two-wheeler Purchase'>Two-wheeler Purchase
                                        </MenuItem>
                                        <MenuItem value='Laptop,Computer,Mobile Purchase'>Laptop,Computer,Mobile Purchase
                                        </MenuItem>
                                        <MenuItem value='Travel Expenses'>Travel Expenses</MenuItem>
                                        <MenuItem value='Job Related Needs,Purchases etc'>Job Related Needs,Purchases etc</MenuItem>
                                        <MenuItem value='Education,Skill Training Course Fee etc'>Education,Skill Training Course Fee etc</MenuItem>
                                        <MenuItem value='Other'>Other</MenuItem>



                                    </Select>
                                </FormControl>
                            </div>
                        </div>




                        <div className="flex-one mt-5 margin-top-layout">

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Official contact number
                                </label>
                                <input value={officialContact} onChange={handlechangeContact} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Contact Number" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Loan amount min 20000
                                </label>
                                <input value={loanAmountMin} onChange={handlechangeloanAmount} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="20000" />
                            </div>

                        </div>

                        <div className="flex-one mt-5 justify-between">

                            <div className="mb-4">
                                <FormControl sx={{ width: 230 }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Select tenure period
                                    </label>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={tenure}
                                        label="tenure"
                                        onChange={handleChangetenure}
style={{height:'45px'}}


                                    >
                                        <MenuItem value='6 Months'>6 Months</MenuItem>
                                        <MenuItem value='12 Months'>12 Months</MenuItem>
                                        <MenuItem value='18 Months'>18 Months</MenuItem>
                                        <MenuItem value='24 Months'>24 Months</MenuItem>
                                        <MenuItem value='36 Months'>36 Months</MenuItem>
                                        <MenuItem value='48 Months'>48 Months</MenuItem>
                                        <MenuItem value='60 Months'>60 Months</MenuItem>


                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Previous loan amount
                                </label>
                                <input value={previousLoanAmo} onChange={handlechangepreviousLoanAmount} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Previous Loan Amount " />
                            </div>

                        </div>
                        <div className="flex-one margin-top-layout">

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Monthly Emi
                                </label>
                                <input value={monthalyEmi} onChange={handlechangemonthlyEmi} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Monthly Emi" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Financier Name
                                </label>
                                <input value={financierName} onChange={handlechangeFinancierName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Financier Name" />
                            </div>


                        </div>

                        <div onClick={onClickButton} className="mb-4 mt-5 text-center bg-blue-600 p-2 text-white cursor-pointer">
                            Save
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}