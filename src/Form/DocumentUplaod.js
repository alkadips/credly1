import axios from "axios";
import { useEffect, useState } from "react";

export default function DocumentUplaod() {
    const [errors, setErros] = useState({
        partnerNameError: "",
        merchantIdError: "",
        passwordError: "",
        fileTypeError:"",
        fileNameError:"",
    });
    const [submitClicked, setSubmitClicked] = useState(false);
    const [partnerName, setPartnerName] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [password, setPassword] = useState("");
    const [fileName, setFileName] = useState("");
    const [fileTYpe, setFileType] = useState("");
    const documentUpload = () => {
        axios
          .post(
            "https://test-partners.cashe.co.in/partner/document/upload",
           
            {
              partner_name:'',
              partner_customer_id:'',
              file_type:'',
              file:'',
              pdfPassword:''
            }
          )
          .then(async (response) => {
            console.log("res document upload", response);
          })
          .catch((error) => {
            console.log("error document uplaod", error);
          });
      };
    const onClickButton = () => {
        if (!partnerName) {
            setErros({ partnerNameError: "Please Enter Partner name" });
            return false;
        } else if (!customerId) {
            setErros({ customerIdError: "Please enter customer Id" });
            return false;
        }else if (!fileTYpe) {
            setErros({ fileTypeError: "FileType should not be null"?"FileType should not be null":"fileType is not valid" });
            return false; 
        }else if (!fileName) {
            setErros({ fileNameError: "FileSize should not be more than 8MB" });
            return false; 
        }else if (!password) {
            setErros({ passwordError: "Please Enter Password" });
            return false; 
        }else if (partnerName && customerId && password) {
            setSubmitClicked(true);
            return true;
        }
    };
    const handleInputPartnerName = (e) => {
        setPartnerName(e.target.value);
    };

    const handlechangeCustomerId = (e) => {
        setCustomerId(e.target.value);
    };
    const handleFileName = (e) => {
        setFileName(e.target.value);
    };
    
    const handlFileType = (e) => {
        setFileType(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        documentUpload();
      }, []);
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl"> Document Upload</div>
            <div className="p-5 login-page">
                <div className="one-login" >
                    <form className="bg-white shadow-md  rounded px-8  pb-8 mb-4 mt-16 clickfin-para-home p-5" style={{ border: '1px solid' }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Partner Name<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={partnerName} onChange={handleInputPartnerName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                            <p className="text-red-600 text-left mt-2">
                                {!partnerName ? errors.partnerNameError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                           Enter Partner Customer Id <span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={customerId} onChange={handlechangeCustomerId} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Partner Customer Id" />
                            <p className="text-red-600 text-left mt-2">
                                {!customerId ? errors.customerIdError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                           File Type <span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={fileTYpe} onChange={handlFileType} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="file" placeholder="File Type" />
                            <p className="text-red-600 text-left mt-2">
                                {!fileTYpe ? errors.fileTypeError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                           File  <span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={fileName} onChange={handleFileName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="file" placeholder="File" />
                            <p className="text-red-600 text-left mt-2">
                                {!fileName ? errors.fileNameError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                           PDF Password  <span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={password} onChange={handlePassword} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="pdf password" />
                            <p className="text-red-600 text-left mt-2">
                                {!password ? errors.passwordError : ""}
                            </p>
                        </div>
                        <div>
                                <div onClick={onClickButton} className="mb-4 text-center bg-blue-600 p-2 text-white cursor-pointer">
                                    Save
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