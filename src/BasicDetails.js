import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function BasicDetails() {
    const [startDate, setStartDate] = useState(new Date());
    const [education, setEducation] = useState('');
    const [state, setState] = useState('');
    const [addressProof, setAddressPoof] = useState('');
    const [submitClicked, setSubmitClicked] = useState(false);
    const [emailId, setEmail] = useState("");
    const [panNumber, setPan] = useState("");
    const [name, setName] = useState("");
    const [addredd1, setAddressLine1] = useState("");
    const [line1, setLine1] = useState("");
    const [line2, setLine2] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [landmark, setlandmark] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [numberOfYearsStaying, setnumberOfYearsStaying] = useState("");
    const [lastName, setLastName] = useState("");
    const [fristname, setfristname] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [adharNumber, setAadharNumber] = useState("");
    const handleChangeEducation = (event) => {
        setEducation(event.target.value);
    };
    const handleChangeState = (event) => {
        setState(event.target.value);
    };
    const handleChangeAddressProof = (event) => {
        setAddressPoof(event.target.value);
    };
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
      const PHONE_REGEX =/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/gm

      const [errors, setErros] = useState({
        fristNameError:"",
        middleNameError:"",
        lastNameError:"",
        fatherNameError:"",
        contactNumberError:"",
        emailIdError:"",
        aadharNumberErrror:"",
        pannumberError:"",
    });
   
    const handlechangePanNumber = (event) => {
        setPan(event.target.value);
    };
    
    const handlechangeAdhar = (event) => {
        setAadharNumber(event.target.value);
    };
    const handleMiddleName = (event) => {
        setMiddleName(event.target.value);
    };
    const handleChangeLastNmae = (event) => {
        setLastName(event.target.value);
    };
    const handlechangeNumberOfyears = (e) => {
        setnumberOfYearsStaying(e.target.value);
    };
    const handleChangeContact = (e) => {
        setContactNumber(e.target.value);
    };
    const handleFatherName = (e) => {
        setFatherName(e.target.value);
    };
    const handlechangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlechangeLandmark=(e)=>{
        setlandmark(e.target.value)
    }
    const handlchangeFristName = (e) => {
        setfristname(e.target.value);
    };
    const handelchangeLine1 = (e) => {
        setAddressLine1(e.target.value);
    };
    const handlechangelIne2 = (e) => {
        setLine2(e.target.value);
    };
    const handlechangepuncode = (e) => {
        setPincode(e.target.value);
    };
    const handlechangeCity = (e) => {
        setCity(e.target.value);
    };
    const onClickButton = () => {
        if (!fristname) {
            setErros({ fristNameError: "Please Enter Frist name" });
            return false;
        }
        else if (!lastName) {
            setErros({ lastNameError: "Please Enter last Name" });
            return false;
        } else if (!adharNumber) {
            setErros({ aadharNumberErrror: "Please Enter Aadhar Number" });
            return false;
        } else if (!panNumber) {
            setErros({ pannumberError: "Please Enter pan number" });
            return false;
        
        
        } else if (!emailId) {
            setErros({ emailIdError: "Please Enter  Email Address" });
            return false;
        } 
        else if (!emailId && PHONE_REGEX) {
            setErros({ emailIdError: "Please Enter Valid Email Address" });
            return false;
        } 
        else if (  fristname && lastName && adharNumber && panNumber  && emailId) {
            setSubmitClicked(true);
            return true;
        }
    };
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl mt-24">Basic Details</div>
            <div className="flex gap-5 p-3 middle-basic ">
                <div>
                    <form className="bg-white shadow-md rounded px-8  pb-8 mb-4 mt-24 clickfin-para-home" style={{border:'1px solid'}}>
                        <div className="flex-one  margin-top-layout justify-between">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter  First Name as per Pan
                                </label>
                                <input value={fristname} onChange={handlchangeFristName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                                <p className="text-red-600 text-left mt-2">
                                {!fristname ? errors.fristNameError : ""}
                            </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter  Middle Name as per Pan
                                </label>
                                <input value={middleName} onChange={handleMiddleName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Middle Name" />
                            </div>
                        </div>
                        <div className="flex-one gap-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter  Last Name as per Pan
                                </label>
                                <input value={lastName} onChange={handleChangeLastNmae} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name" />
                                <p className="text-red-600 text-left mt-2">
                                {!lastName ? errors.lastNameError : ""}
                            </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter  Father Name as per Pan
                                </label>
                                <input value={fatherName} onChange={handleFatherName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Father Name" />
                            </div>
                        </div>
                        <div className="flex-one gap-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter Contact Number
                                </label>
                                <input value={contactNumber} onChange={handleChangeContact} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Contact Number" />
                            </div>
                        </div>
                        <div className="flex-one gap-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter Adhar Card Number
                                </label>
                                <input value={adharNumber} onChange={handlechangeAdhar} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Aadhar Card Number" />
                                <p className="text-red-600 text-left mt-2">
                                {!adharNumber ? errors.aadharNumberErrror : ""}
                            </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter Pan Card Number
                                </label>
                                <input value={panNumber} onChange={handlechangePanNumber} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Pan Card Number" />
                                <p className="text-red-600 text-left mt-2">
                                {!panNumber ? errors.pannumberError : ""}
                            </p>
                            </div>
                        </div>
                        <div className="flex-one gap-5 justify-between">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Choose Gender
                                </label>
                                <div className="flex gap-2">
                                    <div className="flex gap-2">
                                        <div>Male</div>
                                        <div>
                                            <input id="username" type="radio" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div>Female</div>
                                        <div>
                                            <input id="username" type="radio" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Select Date Of Brith
                                </label>
                                <div className='p-2' style={{ border: '1px solid', width: '100%' }}>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-one gap-5  justify-between">
                            <div className="mb-4" >
                            <FormControl sx={{ width: 230 }}>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Select Education Qualification
                                </label>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={education}
                                    label="Education"
                                    onChange={handleChangeEducation}
                                    style={{height:'45px'}}
                                >
                                    <MenuItem value='Under Graduate'>Under Graduate</MenuItem>
                                    <MenuItem value='Graduate'>Graduate</MenuItem>
                                    <MenuItem value='Post Graduate'>Post Graduate</MenuItem>
                                    <MenuItem value='Other'>Other</MenuItem>
                                </Select>
                                </FormControl>
                            </div>
                            <div>
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
                                        <div className="flex gap-2">
                                            <div>Other</div>
                                            <div>
                                                <input id="username" type="radio" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-one gap-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter Email Id
                                </label>
                                <input value={emailId} onChange={handlechangeEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Id" />
                                <p className="text-red-600 text-left mt-2">
                                {!emailId ? errors.emailIdError : ""}
                            </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Current Residency
                                </label>
                                <div className="flex gap-2">
                                    <div className="flex gap-2">
                                        <div>RENTED</div>
                                        <div>
                                            <input id="username" type="radio" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div>OWNED</div>
                                        <div>
                                            <input id="username" type="radio" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="flex-one gap-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Number of Years Staying
                                </label>
                                <input value={numberOfYearsStaying} onChange={handlechangeNumberOfyears} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Number of years" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Enter City
                                </label>
                                <input value={city} onChange={handlechangeCity} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="City" />
                            </div>
                        </div>
                        <label className="block text-center text-blue-600    mb-2 mt-5" for="username">
                            Current Address
                        </label>
                        <div className="flex-one  margin-top-layout">

                            <div className="mb-4 ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Line 1
                                </label>
                                <input value={line1} onChange={handelchangeLine1} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Line 1" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Line 2
                                </label>
                                <input value={line2} onChange={handlechangelIne2} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Line 2" />
                            </div>
                        </div>
                        <div className="flex-one margin-top-layout">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Land Mark
                                </label>
                                <input value={landmark} onChange={handlechangeLandmark} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Landmark" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Pincode
                                </label>
                                <input value={pincode} onChange={handlechangepuncode} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Pincode" />
                            </div>
                        </div>
                        <div className="flex-one gap-5 justify-between mt-5">
                            <div className="mb-4">
                            <FormControl sx={{  width: 230 }}>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Select State
                                </label>
                                <Select
                                    className="w-full"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={state}
                                    label="State"
                                    onChange={handleChangeState}
                                    style={{height:'45px'}}
                                >
                                    <MenuItem   value='ANDAMAN & NICOBAR'>ANDAMAN & NICOBAR</MenuItem>
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
                            <div className="mb-4" >
                            <FormControl sx={{ width: 230 }}>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Select Address Proof
                                </label>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={addressProof}
                                    label="Age"
                                    onChange={handleChangeAddressProof}
                                    style={{height:'45px'}}
                                    >
                                    <MenuItem defaultValue='Utility Bill' value='Utility Bill'>Utility Bill</MenuItem>
                                    <MenuItem value='Rental Agreement'>Rental Agreement</MenuItem>
                                    <MenuItem value='Passport'>Passport
                                    </MenuItem>
                                    <MenuItem value='Aadhar Card'>Aadhar Card
                                    </MenuItem>
                                    <MenuItem value='Driving License'>Driving License
                                    </MenuItem>

                                    <MenuItem value='Voter Id'>Voter Id
                                    </MenuItem>
                                    <MenuItem value='Other'>Other
                                    </MenuItem>
                                </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="flex-one gap-3 justify-evenly">
                            <div className="font-bold">Permanent Address</div>
                            <div>
                                <input type='checkbox'></input>
                            </div>
                            <div>Same as per Present Address</div>
                        </div>
                        <div className="flex-one gap-5 mt-5">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Line 1
                                </label>
                                <input value={line1} onChange={handelchangeLine1} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Line 1" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Line 2
                                </label>
                                <input value={line2} onChange={handlechangelIne2} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Line 2" />
                            </div>
                        </div>
                        <div className="flex-one gap-5 mt-5">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Landmark
                                </label>
                                <input value={landmark} onChange={handlechangeLandmark} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="LandMark" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    City
                                </label>
                                <input value={city} onChange={handlechangeCity} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="City" />
                            </div>
                        </div>
                        <div className="flex-one gap-5 justify-between mt-5">
                            <div className="mb-4"  >
                            <FormControl sx={{  width: 230 }}>
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
                                   >
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
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Pincode
                                </label>
                                <input value={pincode} onChange={handlechangepuncode} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Pincode" />
                            </div>
                        </div>
            <div onClick={onClickButton} className="mb-4 text-center bg-blue-600 p-2 text-white cursor-pointer">
              Next
            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}