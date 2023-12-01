import axios from "axios";
import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CryptoJs from 'crypto-js'
export default function AddingDeactivateMurchant() {
    const [errors, setErros] = useState({
        partnerNameError: "",
        merchantIdError: "",
        merchantNameError: "",
    });
    const [submitClicked, setSubmitClicked] = useState(false);
    const [partnerName, setPartnerName] = useState("");
    const [merchantId, setMerchantId] = useState("");
    const [merchantName, setMerchanatName] = useState("");
    const [opensuccess, setOpenSuccess] = useState(false);
    const [openFaield, setOpenFaield] = useState(false);
    const [openExist, setOpenExist] = useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const generateCheckSum = () => {
        const hmac = CryptoJs.HmacSHA1('29', 'ym6BtHlSkR2KxA18BY6uswzaMnVVKM3Q');
        console.log('Request payload:', JSON.stringify(hmac));
        return hmac
    }

    const handleClickSucess = () => {
        setOpenSuccess(true);
    };

    const handleClickFaield = () => {
        setOpenFaield(true);
    };
    const handleClickExist = () => {
        setOpenExist(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
        setOpenFaield(false);
        setOpenExist(false)
    };
    const addingMurchantIdDeactivate = () => {

        axios
            .post(
                "https://test-partners.cashe.co.in/partner/update_partner_merchant",
                {
                    partner_name: "TestPartnerNew",
                    "Merchant Detail": [
                        {
                            merchant_id: "TestPartnerNew_55",
                            merchant_name: "TestPartnerNew",
                            is_active: true,
                        },
                        {
                            merchant_id: "TestPartnerNew_8",
                            merchant_name: "TestPartnerNew",
                            is_active: true,
                        },
                    ],
                }
            )
            .then(async (response) => {
                if (response.SUCCESS) {
                    console.log("res murchant", response);
                    return handleClickSucess
                } else if (response.FAILED) {
                    return handleClickFaield
                }
                else if (response.EXISTING) {
                    return handleClickExist
                }
            })
            .catch((error) => {
                console.log("error while addingMurchant and deactivate Murchnat api", error);
            });
    };


    const onClickButton = () => {
        if (!partnerName) {
            setErros({ partnerNameError: "Please Enter Partner name" });
            return false;
        } else if (!merchantId) {
            setErros({ merchantIdError: "Please Enter Merchant Id" });
            return false;
        } else if (!merchantName) {
            setErros({ merchantNameError: "Please Enter merchant name" });
            return false;
        } else if (partnerName && merchantId && merchantName) {
            setSubmitClicked(true);
            return true;
        }
    };
    const handleInputPartnerName = (e) => {
        setPartnerName(e.target.value);
    };
    const handleChangeMerchantId = (e) => {
        setMerchantId(e.target.value);
    };
    const handlechangemerchantName = (e) => {
        setMerchanatName(e.target.value);
    };
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        addingMurchantIdDeactivate();
        generateCheckSum();
    }, []);
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl">Adding Deactivate Murchant</div>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={opensuccess} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        For successfully updating the entry in our database
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openFaield} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        For failure in updating the entry in our database in case of invalid values passed
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openExist} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        For same data already existing in out database so unable update the record

                    </Alert>
                </Snackbar>
            </Stack>
            <div className="p-5 login-page">
                {/* <button onClick={handleClickSucess}>success</button>
                <button onClick={handleClickFaield} className="ml-2">FAILED</button>
                <button onClick={handleClickExist} className="ml-2">Exist</button> */}
                <div className="one-login" >
                    <form className="bg-white shadow-md  rounded px-8  pb-8 mb-4 mt-16 clickfin-para-home p-5" style={{ border: '1px solid' }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Partner Name<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={partnerName} onChange={handleInputPartnerName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />

                            <p className="text-red-600 text-left mt-2">
                                {!partnerName ? errors.partnerNameError : ""}
                            </p></div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Merchant_id <span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={merchantId} onChange={handleChangeMerchantId} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Merchant Id" />
                            <p className="text-red-600 text-left mt-2">
                                {!merchantId ? errors.merchantIdError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Merchant_name<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={merchantName} onChange={handlechangemerchantName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Merchant Name" />
                            <p className="text-red-600 text-left mt-2">
                                {!merchantName ? errors.merchantNameError : ""}
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Is Active<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <div className="flex gap-2">
                                <div className="flex gap-2">
                                    <div>True</div>
                                    <div>
                                        <input id="username" type="radio" />

                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div>False</div>
                                    <div>
                                        <input id="username" type="radio" />

                                    </div>
                                </div>


                            </div>
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