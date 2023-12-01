import { Box, Modal } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const hideNav = () => {
    document.getElementById("drawer-toggle-label").click();
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <div className="sticky-header">
      <div className="flex justify-between shadow-2xl ... header-wrapper ">
        <div>
          <Link className="no-underline text-white" to="/">
            <img
              className="w-40 ml-5"
              alt="logo"
              src={process.env.PUBLIC_URL + "/assets/images/logob.png"}
            ></img>
          </Link>{" "}
        </div>
        <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
        {/* <img style={{width:'15px',height:'15px'}}
              className="w-40 drawer-toggle"
              alt="logo"
              src={process.env.PUBLIC_URL + '/assets/images/cross.png'}
            ></img> */}
        <label for="drawer-toggle" id="drawer-toggle-label"></label>
        <nav id="drawer">
          <ul className="sidemenu">
            <li>
              <Link
                onClick={() => hideNav()}
                style={{ textDecoration: "none" }}
                to="/"
              >
                <div>Home</div>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => hideNav()}
                style={{ textDecoration: "none" }}
                to="/about"
              >
                <div>About</div>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => hideNav()}
                style={{ textDecoration: "none" }}
                to="/personelloan"
              >
                <div>Personal Loan</div>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => hideNav()}
                style={{ textDecoration: "none" }}
                to="/emicalculator"
              >
                <div>EMI Calculator</div>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => hideNav()}
                style={{ textDecoration: "none" }}
                to="/blog"
              >
                <div>Blog</div>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => hideNav()}
                style={{ textDecoration: "none" }}
                to="/terms"
              >
                <div>Terms & condition</div>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => hideNav()}
                style={{ textDecoration: "none" }}
                to="/privacy"
              >
                <div>Privacy Policy</div>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => hideNav()}
                style={{ textDecoration: "none" }}
                to="/faqs"
              >
                <div>FAQS</div>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => hideNav()}
                style={{ textDecoration: "none" }}
                to="/contact"
              >
                <div>Contact</div>
              </Link>
            </li>
            <li>
              <Link target="_blank"
                onClick={() => hideNav()}
                style={{ textDecoration: "none" }}
                to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication"
              >
                <div className="get-cash-now rounded-full ... p-2">
                  GET CASH NOW
                </div>
              </Link>
            </li>

            {/* <li>
      <Link style={{ cursor: "pointer",textDecoration:'none' }}>
        <div
          onClick={handleOpen}
          className="get-cash-now rounded-full ... p-2"
        >
          Log In
        </div>
      </Link>
    </li> */}
          </ul>
        </nav>
        <div className="flex p-5  wrapper-gap  " style={{ gap: "20px", fontSize: '13px' }}>
          <Link className="no-underline text-black" to="/">
            <div className="home">Home</div>
          </Link>
          <Link
            className="no-underline text-black"
            to="/about"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">About</div>
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="no-underline text-black"
            to="/personelloan"
          >
            <div className="home">Personal Loan</div>
          </Link>

          <Link
            className="no-underline text-black"
            to="/emicalculator"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">EMI Calculator</div>
          </Link>
          {/* <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="/faqs"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">FAQs</div>
          </Link> */}
          {/* <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="/blog"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">Blog</div>
          </Link> */}


           <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Options
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      to="/checkdupcusform"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        checkdupcusform
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                       <Link
                       to="/preapproval"
                         className={classNames(
                           active
                             ? "bg-gray-100 text-gray-900"
                             : "text-gray-700",
                           "block px-4 py-2 text-sm"
                         )}
                       >
                         PreApproval
                       </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                       <Link
                       to="/planbasedOnsalary"
                         className={classNames(
                           active
                             ? "bg-gray-100 text-gray-900"
                             : "text-gray-700",
                           "block px-4 py-2 text-sm"
                         )}
                       >
                         PlanBasedOnSalry
                       </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                       <Link
                       to="/createcustomer"
                         className={classNames(
                           active
                             ? "bg-gray-100 text-gray-900"
                             : "text-gray-700",
                           "block px-4 py-2 text-sm"
                         )}
                       >
                         Create Customer
                       </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                       <Link
                       to="/addingdeactivatemurchant"
                         className={classNames(
                           active
                             ? "bg-gray-100 text-gray-900"
                             : "text-gray-700",
                           "block px-4 py-2 text-sm"
                         )}
                       >
                         Adding Deactivate Murchant
                       </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                       <Link
                       to="/customerstatus"
                         className={classNames(
                           active
                             ? "bg-gray-100 text-gray-900"
                             : "text-gray-700",
                           "block px-4 py-2 text-sm"
                         )}
                       >
                         Check Customer Status
                       </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                       <Link
                       to="/bulkcustomerstatus"
                         className={classNames(
                           active
                             ? "bg-gray-100 text-gray-900"
                             : "text-gray-700",
                           "block px-4 py-2 text-sm"
                         )}
                       >
                         Check Bulk Customer Status
                       </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                       <Link
                       to="/documentupload"
                         className={classNames(
                           active
                             ? "bg-gray-100 text-gray-900"
                             : "text-gray-700",
                           "block px-4 py-2 text-sm"
                         )}
                       >
                        Document Upload
                       </Link>
                    )}
                  </Menu.Item>
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>  

          <Link
            className="no-underline text-black"

            to="/contact"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">Contact</div>
          </Link>




          <Link to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
            <img
              style={{ width: '50px' }}
              className="mobile-image"
              alt="google"
              src={process.env.PUBLIC_URL + "/assets/images/androied.svg"}
            ></img>
          </Link>

          <Link to="https://apps.apple.com/in/app/clikfin-one-click-away/id1658734808">
            <img
              style={{ width: '50px' }}
              className="mobile-image"
              alt="apple"
              src={process.env.PUBLIC_URL + "/assets/images/ios.svg"}
            ></img>
          </Link>
          <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication"
          >
            <div className="get-cash-now rounded-full ... p-2">
              Get Instant Cash
            </div>
          </Link>
          <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="login"
          >
            <div className="get-cash-now rounded-full ... p-2">
              Login
            </div>
          </Link>

        

          {/* <Link
            className="cursor-pointer no-underline"
            style={{ color: "#2B4A84" }}
          >
            <div
              onClick={handleOpen}
              className="get-cash-now rounded-full ... p-2"
            >
              Log In
            </div>
          </Link>
         */}
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <div>
                <div className="font-bold"> Almost There</div>
                <div className="mt-3">
                  Please enter your phone number to proceed
                </div>
                <div className="mt-5">
                  {/* <PhoneInput
                    specialLabel={""}
                    country={"in"}
                    placeholder="Phone Number"
                    className="phone-input"
                  /> */}
                  <input
                    type="number"
                    className="phone-input"
                    placeholder="Phone Number"
                    max="10"
                    min="2"
                    maxLength={10}
                  ></input>
                </div>
                <div className="mt-3 proceed">Proceed</div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
