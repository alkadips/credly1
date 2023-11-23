import React, { useEffect, useState } from "react";
import axios from "axios";
export default function DuplicateCusLead() {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  
  const checkDuplicatelead = async() => {

    axios.post(
        "https://test-partners.cashe.co.in/partner/checkDuplicateCustomerLead",
        {
          partner_name: "TestPartner",
          mobile_no: "9119225448",
        }
      )
      .then(async (response) => {
        console.log("res", response);
      })
      .catch((error) => {
        console.log("error while customer duplication lead", error);
      });

//    const data={
//        partner_name: "TestPartner",
//       mobile_no: "9119225448"       
//     }
//       await axios.post("https://test-partners.cashe.co.in/partner/checkDuplicateCustomerLead", {
//       headers: {
//           'Content-Type': 'application/json',
//           'Check-Sum':'rKVpRHVHgkMlayrNviKePu40OXI='
//       },
//       data
//   })      
//   .then((response) => {
//       // dispatch({type: FOUND_USER, data: response.data[0]})
// console.log(response)
//   })
//   .catch((error) => {
//       // dispatch({type: ERROR_FINDING_USER})
//       console.log(error)
//   })
}
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
      })
      .catch((error) => {
        console.log("error while preaproval api", error);
      });
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
      })
      .catch((error) => {
        console.log("error while create customer", error);
      });
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
        console.log("res murchant", response);
      })
      .catch((error) => {
        console.log("error while addingMurchant and deactivate Murchnat api", error);
      });
  };

  const customerStatus = () => {
    axios
      .post(
        "https://test-partners.cashe.co.in/partner/customer_status",
        {
          partner_name: "TestPartnerNew",
          "partner_customer _id": "1234"
        }
      )
      .then(async (response) => {
        console.log("res customer status", response);
      })
      .catch((error) => {
        console.log("error while check customer status", error);
      });
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
      })
      .catch((error) => {
        console.log("error while check bulk customer status", error);
      });
  };


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
  useEffect(() => {
    checkDuplicatelead();
    // preAprovalApi();
    // createCustomer();
    // addingMurchantIdDeactivate();
    // customerStatus();
    // customerBlukStatus();
    // documentUpload();
  }, []);
  return <div>DuplicateCusLead</div>;
}
