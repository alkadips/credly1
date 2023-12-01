import axios from "axios";
import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
export default function BulkCustomerStatus() {
    const [errors, setErros] = useState({
        partnerNameError: "",
        merchantIdError: "",
        merchantNameError: "",
    });
    const [submitClicked, setSubmitClicked] = useState(false);
    const [partnerName, setPartnerName] = useState("");
    const [customerId, setCustomerId] = useState("");
    const onClickButton = () => {
        if (!partnerName) {
            setErros({ partnerNameError: "Please Enter Partner name" });
            return false;
        } else if (!customerId) {
            setErros({ customerIdError: "Please enter customer Id" });
            return false;
        } else if (partnerName && customerId) {
            setSubmitClicked(true);
            return true;
        }
    };
    const [opennotFound, setOpenNotFound] = useState(false);
    const [opennotYetRegistered, setOpenNotYetRegistered] = useState(false);
    const [openRegisterInProgress, setOpenRegisterInProgress] = useState(false);
    const [openregistrationCompleate, setOpenRegistrationInComPleate] = useState(false);
    const [openLoanRequestRecived, setOpenLoanRequestRecieved] = useState(false);
    const [openVerificationInProgress, setOpenVerificationInProgress] = useState(false);
    const [openVerificationFaield, setOpenVerificationFaield] = useState(false);
    const [openCreditClined, setopenCreditClined] = useState(false);
    const [openTemporaryBlock, setopenTemporaryBlock] = useState(false);
    const [openLoanRequestProceed, setopenLoanRequestProceed] = useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleClickNOtFound = () => {
        setOpenNotFound(true);
    };

    const handleClickNotYetRegistered = () => {
        setOpenNotYetRegistered(true);
    };
    const handleClickverificationFaield = () => {
        setOpenVerificationFaield(true);
    };
    const handleClickRegistrationInProgress = () => {
        setOpenRegisterInProgress(true);
    };
    const handleClickRegistrationComplete = () => {
        setOpenRegistrationInComPleate(true);
    };
    const handleClickLoanRequestRecieved = () => {
        setOpenLoanRequestRecieved(true);
    };
    const handleClickVerificationInProgress = () => {
        setOpenVerificationInProgress(true);
    };
    const handleClickCreditDecline = () => {
        setopenCreditClined(true);
    };
    const handleClickTemporaryBlock = () => {
        setopenTemporaryBlock(true);
    };
    const handleClickLoanRequestProceed = () => {
        setopenLoanRequestProceed(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenNotFound(false);
        setOpenNotYetRegistered(false);
        setOpenVerificationFaield(false);
        setOpenRegisterInProgress(false);
        setOpenRegistrationInComPleate(false);
        setOpenLoanRequestRecieved(false);
        setOpenVerificationInProgress(false);
        setopenCreditClined(false);
        setopenTemporaryBlock(false);
        setopenLoanRequestProceed(false);
    };
    const customerBlukStatus = () => {
        axios
            .post(
                "https://test-partners.cashe.co.in/partner/customer_status",
                {
                    "partner_name": "TestPartner",
                    "partner_customer_id": [
                        "2",
                        "3",
                        "4",
                        "5"
                    ]
                }
            )
            .then(async (response) => {
                console.log("res for bulk customer status", response);
                if (response) {
                    return handleClickNOtFound
                } else if (response) {
                    return handleClickNotYetRegistered
                }
                else if (response) {
                    return handleClickRegistrationInProgress
                }
                else if (response) {
                    return handleClickRegistrationComplete
                }
                else if (response) {
                    return handleClickLoanRequestRecieved
                }
                else if (response) {
                    return handleClickVerificationInProgress
                }
                else if (response) {
                    return handleClickverificationFaield
                }
                else if (response) {
                    return handleClickCreditDecline
                }
                else if (response) {
                    return handleClickTemporaryBlock
                }
                else if (response) {
                    return handleClickLoanRequestProceed
                }
            })
            .catch((error) => {
                console.log("error while check bulk customer status", error);
            });
    };

    const handleInputPartnerName = (e) => {
        setPartnerName(e.target.value);
    };

    const handlechangeCustomerId = (e) => {
        setCustomerId(e.target.value);
    };
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        customerBlukStatus();
    }, []);
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl"> Check Bulk Customer Status</div>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={opennotFound} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        If the customer doesn't exist in the Systemand still
                        querying the status
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={opennotYetRegistered} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        Before doing the mobile OTP verification, customer
                        status would be NOT YET REGISTERED. It means
                        customer is not yet registered in CASHe.
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openRegisterInProgress} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        After mobile OTP verification, customer has to fill all
                        the mandatory details in CASHe before taking the loan. Customer profile is yet to be complete.
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openregistrationCompleate} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Customer profile is complete, and he iseligible to
                        apply a loan.
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openLoanRequestRecived} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        When customers apply the loan.
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openVerificationInProgress} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        When OPS team verifying all the customerdata after
                        applying loan.
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openVerificationFaield} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        When data verification gets failed.
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openCreditClined} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Based on credit score, customer can be declined
                        to take loan.

                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openTemporaryBlock} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        Rejected cases can come under
                        temporary/permanent block.
                    </Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openLoanRequestProceed} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        When amount is disbursed.
                    </Alert>
                </Snackbar>
            </Stack>
            <div className="p-5 login-page">
                <div className="one-login" >
                    <form className="bg-white shadow-md  rounded px-8  pb-8 mb-4  mt-16 clickfin-para-home" style={{ border: '1px solid' }}>
                        <div className="mb-4 mt-3">
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