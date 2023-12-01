import {  HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Footer from "./Footer";
import EmiCalc from "./EmiCalc";
import Faqs from "./Faqs";
import About from "./About";
import TermsCon from "./TermsCon";
import Contact from "./Contact";
import Personel from "./Personel";
import Blog from "./Blog";
import Privacy2 from "./Privecy2";
import CheckDuplicateCustomer from "./Form/CheckDuplicateCustomer";
import PreApproval from "./Form/PreApproval";
import  Login  from "./Login";
import BasicDetails from "./BasicDetails";
import EmployeeDetails from "./EmployeeDetails";
import PlanBasedOnSalary from "./Form/PlanBasedOnSalary";
import CreateCustomer from "./Form/CreateCustomer";
import AddingDeactivateMurchant from "./Form/AddingDeactivateMurchant";
import CustomerStatus from "./Form/CustomerStatus";
import BulkCustomerStatus from "./Form/BulkCustomerStatus";
import DocumentUplaod from "./Form/DocumentUplaod";

function App() {
  return (
    <div className="main-wrapper">
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/personelloan" element={<Personel />} />
          <Route path="/emicalculator" element={<EmiCalc />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsCon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy2 />} />
          <Route path="/checkdupcusform" element={<CheckDuplicateCustomer />} />
          <Route path="/preapproval" element={<PreApproval />} />
          <Route path="/planbasedOnsalary" element={<PlanBasedOnSalary />} />
          <Route path="/createcustomer" element={<CreateCustomer />} />
          <Route path="/addingdeactivatemurchant" element={<AddingDeactivateMurchant />} />
          <Route path="/customerstatus" element={<CustomerStatus />} />
          <Route path="/bulkcustomerstatus" element={<BulkCustomerStatus />} />
          <Route path="/documentupload" element={<DocumentUplaod />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/basic" element={<BasicDetails />} />
          <Route path="/login/basic/employDetails" element={<EmployeeDetails />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}
export default App;
