"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const fa_1 = require("react-icons/fa");
const ri_1 = require("react-icons/ri");
const md_1 = require("react-icons/md");
const pi_1 = require("react-icons/pi");
const react_router_dom_1 = require("react-router-dom");
const about_section_svg_1 = __importDefault(require("../../assets/images/about-section.svg"));
const map_png_1 = __importDefault(require("../../assets/images/map.png"));
const bins_png_1 = __importDefault(require("../../assets/images/bins.png"));
const dashboard_png_1 = __importDefault(require("../../assets/images/dashboard.png"));
const index_1 = __importDefault(require("../../components/base/Input/index"));
const logo_landing_png_1 = __importDefault(require("../../assets/logo/logo-landing.png"));
const react_1 = __importStar(require("react"));
function LandingPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [mobileNavbar, setMobileNavbar] = (0, react_1.useState)(true);
    const [contactForm, setContactForm] = (0, react_1.useState)({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        company: "",
        location: "",
        inquiry: "",
    });
    const [emailSubscribe, setEmailSubscribe] = (0, react_1.useState)("");
    return (react_1.default.createElement("div", { className: "w-full overflow-x-auto" },
        react_1.default.createElement("div", { className: "text-gunmetal w-full" },
            react_1.default.createElement("div", { className: `flex justify-between sm:hidden fixed top-0 left-0 w-screen shadow-md px-8 py-4 bg-neutral-0 bg-opacity-90 z-20 ${mobileNavbar ? "hidden" : ""}` },
                react_1.default.createElement("div", { className: "flex flex-wrap justify-center content-center w-24" },
                    react_1.default.createElement("img", { src: logo_landing_png_1.default, alt: "logo" })),
                react_1.default.createElement("div", { className: "flex flex-wrap justify-center content-center text-2xl\n                          \t\t\thover:cursor-pointer hover:text-primary-500", onClick: () => setMobileNavbar(true) },
                    react_1.default.createElement(pi_1.PiListBold, null))),
            react_1.default.createElement("div", { className: `flex flex-col fixed top-0 left-0 sm:hidden w-screen h-screen gap-10
                        px-16 py-4 bg-neutral-0 bg-opacity-90 justify-center content-center z-20 ${!mobileNavbar ? "hidden" : ""}` },
                react_1.default.createElement("div", { className: "flex justify-end text-xl " },
                    react_1.default.createElement("div", { className: "hover:cursor-pointer hover:text-primary-500", onClick: () => setMobileNavbar(false) },
                        react_1.default.createElement(md_1.MdClose, null))),
                react_1.default.createElement("div", { className: "flex flex-wrap justify-center content-center" },
                    react_1.default.createElement("img", { src: logo_landing_png_1.default, alt: "logo" })),
                react_1.default.createElement("div", { className: "flex flex-col flex-wrap justify-center content-center gap-5 w-full \n                      text-lg text-center" },
                    react_1.default.createElement("div", { className: "flex justify-center content-center flex-wrap font-medium\n                                hover:text-primary-500 hover:cursor-pointer" },
                        react_1.default.createElement("a", { href: "#home" }, "Home")),
                    react_1.default.createElement("div", { className: "flex justify-center content-center flex-wrap font-medium\n                                hover:text-primary-500 hover:cursor-pointer" },
                        react_1.default.createElement("a", { href: "#services" }, "Services")),
                    react_1.default.createElement("div", { className: "flex justify-center content-center flex-wrap font-medium\n                                hover:text-primary-500 hover:cursor-pointer" },
                        react_1.default.createElement("a", { href: "#about" }, "About")),
                    react_1.default.createElement("div", { className: "flex justify-center content-center flex-wrap font-medium\n                                hover:text-primary-500 hover:cursor-pointer" }, "Contact Us")),
                react_1.default.createElement("div", { className: "flex justify-center content-center" },
                    react_1.default.createElement("div", { className: "flex content-center flex-wrap py-3 px-5 rounded-md font-semibold\n                                text-neutral-0 bg-primary-500 hover:bg-primary-700\n                                  hover:cursor-pointer", onClick: () => navigate("login") }, "Login"))),
            react_1.default.createElement("div", { className: "hidden sm:flex fixed top-0 left-0 w-full px-16 py-4 shadow-md bg-neutral-0 bg-opacity-90 z-20" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("img", { src: logo_landing_png_1.default, alt: "logo" })),
                react_1.default.createElement("div", { className: "flex w-full justify-center content-center gap-5\n                                text-lg" },
                    react_1.default.createElement("div", { className: "flex content-center flex-wrap font-medium\n                                hover:text-primary-500 hover:cursor-pointer" },
                        react_1.default.createElement("a", { href: "#home" }, "Home")),
                    react_1.default.createElement("div", { className: "flex content-center flex-wrap font-medium\n                                hover:text-primary-500 hover:cursor-pointer" },
                        react_1.default.createElement("a", { href: "#services" }, "Services")),
                    react_1.default.createElement("div", { className: "flex content-center flex-wrap font-medium\n                                hover:text-primary-500 hover:cursor-pointer" },
                        react_1.default.createElement("a", { href: "#about" }, "About")),
                    react_1.default.createElement("div", { className: "flex content-center flex-wrap font-medium\n                                hover:text-primary-500 hover:cursor-pointer" },
                        react_1.default.createElement("a", { href: "#contact" }, "Contact us"))),
                react_1.default.createElement("div", { className: "flex justify-center content-center" },
                    react_1.default.createElement("div", { className: "flex content-center flex-wrap py-3 px-5 rounded-md font-semibold\n                                text-neutral-0 bg-primary-500 hover:bg-primary-700\n                                  hover:cursor-pointer", onClick: () => navigate("login") }, "Login"))),
            react_1.default.createElement("div", { className: "flex flex-wrap justify-center content-center hero-background h-screen w-full text-center", id: "home" },
                react_1.default.createElement("div", { className: "black-overlay absolute opacity-60 bg-neutral-900 w-full h-screen" }),
                react_1.default.createElement("div", { className: "flex flex-col gap-6 z-10" },
                    react_1.default.createElement("div", { className: "text-primary-500 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold" }, "Bin Tracker"),
                    react_1.default.createElement("div", { className: "text-neutral-0 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold" },
                        "The Optimal Solution for ",
                        react_1.default.createElement("br", null),
                        "Smart Waste Management"),
                    react_1.default.createElement("div", { className: "flex justify-center content-center" },
                        react_1.default.createElement("div", { className: "flex content-center flex-wrap px-5 md:px-7 py-2 lg:py-3 lg:px-10 rounded-md font-semibold\n                                text-neutral-0 bg-primary-500 hover:bg-primary-700\n                                  hover:cursor-pointer" },
                            react_1.default.createElement("a", { href: "#contact" }, "Get Started"))))),
            react_1.default.createElement("div", { className: "flex flex-wrap justify-center content-center w-full bg-neutral-100", id: "services" },
                react_1.default.createElement("div", { className: "flex flex-col w-4/5 my-28 gap-6" },
                    react_1.default.createElement("div", { className: " text-4xl font-bold text-primary-500" }, "Services"),
                    react_1.default.createElement("div", { className: "text-2xl font-medium" }, "A leading smart waste management system"),
                    react_1.default.createElement("div", { className: " text-xl text-[#555555]" }, "Our Bin Tracker services revolutionize waste management through cutting-edge IoT technology and AI analysis. Say goodbye to overflowing bins and inefficient collection routes."),
                    react_1.default.createElement("div", { className: "flex flex-wrap lg:flex-nowrap justify-center md:justify-center lg:justify-between gap-10" },
                        react_1.default.createElement("div", { className: "flex flex-col gap-2 bg-neutral-0 shadow-lg rounded-xl w-full lg:w-1/3" },
                            react_1.default.createElement("img", { src: bins_png_1.default, alt: "smart bins" }),
                            react_1.default.createElement("div", { className: "flex flex-col w-full gap-1 px-5 py-3 pb-7 rounded-xl" },
                                react_1.default.createElement("div", { className: "font-semibold text-xl" }, "Smart Bins"),
                                react_1.default.createElement("div", { className: "font-medium" }, "Our smart bins are equipped with advanced sensors that monitor fill levels in real-time. They reduce waste overflow, and save costs."))),
                        react_1.default.createElement("div", { className: "flex flex-col gap-2 bg-neutral-0 shadow-lg rounded-xl w-full lg:w-1/3" },
                            react_1.default.createElement("img", { src: dashboard_png_1.default, alt: "dashboard" }),
                            react_1.default.createElement("div", { className: "flex flex-col w-full gap-1 px-5 py-3 pb-7 rounded-xl" },
                                react_1.default.createElement("div", { className: "font-semibold text-xl" }, "Customized Dashboard"),
                                react_1.default.createElement("div", { className: "font-medium" }, "Access a user-friendly dashboard to visualize bin data. Monitor collection status, historical trends, and receive suggestions."))),
                        react_1.default.createElement("div", { className: "flex flex-col gap-2 bg-neutral-0 shadow-lg rounded-xl w-full lg:w-1/3" },
                            react_1.default.createElement("img", { src: map_png_1.default, alt: "map" }),
                            react_1.default.createElement("div", { className: "flex flex-col w-full gap-1 px-5 py-3 pb-7 rounded-xl" },
                                react_1.default.createElement("div", { className: "font-semibold text-xl" }, "Interactive Map"),
                                react_1.default.createElement("div", { className: "font-medium" }, "Track your bins on a real-time interactive map. Know exactly where your bins are located, their fill levels, and optimize collection routes effortlessly.")))))),
            react_1.default.createElement("div", { className: "about-section relative flex flex-wrap justify-center w-full bg-neutral-0", id: "about" },
                react_1.default.createElement("div", { className: "flex flex-col w-4/5 my-28 gap-10" },
                    react_1.default.createElement("div", { className: " text-4xl font-bold text-primary-500" }, "About"),
                    react_1.default.createElement("div", { className: "text-2xl font-medium" }, "A leading smart waste management system"),
                    react_1.default.createElement("div", { className: " text-xl" }, "At Bin Tracker, we're on a mission to transform traditional waste management into a smart, data-driven solution. Our commitment to innovation and sustainability drives us forward."),
                    react_1.default.createElement("div", { className: "flex gap-10" },
                        react_1.default.createElement("div", { className: "flex flex-wrap content-center text-9xl w-44 font-bold text-primary-500" }, "01"),
                        react_1.default.createElement("div", { className: " w-2/5 text-xl text-justify" }, "Bin Tracker was born out of a desire to address the challenges of modern waste management. Traditional methods often lead to inefficient collection, increased operational costs, and environmental impact. With our IoT-based system, we've harnessed the power of technology to create a smarter, more sustainable way to manage waste.")),
                    react_1.default.createElement("div", { className: "flex gap-10" },
                        react_1.default.createElement("div", { className: "flex flex-wrap content-center text-9xl w-44 font-bold text-primary-500" }, "02"),
                        react_1.default.createElement("div", { className: " w-2/5 text-xl text-justify" }, "Our team is passionate about sustainability and innovation. We're dedicated to pushing the boundaries of what's possible in waste management. Whether you're a municipality looking to optimize your collection routes or a business aiming to reduce its ecological footprint, Bin Tracker is your partner in achieving these goals."))),
                react_1.default.createElement("div", { className: "w-full" },
                    react_1.default.createElement("div", { className: "about-section-image-mobile flex justify-end md:hidden h-fit w-full" },
                        react_1.default.createElement("img", { src: about_section_svg_1.default, alt: "garbage truck track" })),
                    react_1.default.createElement("div", { className: "about-section-image hidden md:block absolute bottom-0 right-0 h-fit w-full" },
                        react_1.default.createElement("img", { src: about_section_svg_1.default, alt: "garbage truck track" })))),
            react_1.default.createElement("div", { className: "z-10 relative flex flex-wrap justify-center content-center w-full bg-neutral-100", id: "contact" },
                react_1.default.createElement("div", { className: "flex flex-col w-4/5 my-28 gap-6" },
                    react_1.default.createElement("div", { className: " text-4xl font-bold text-primary-500" }, "Contact us"),
                    react_1.default.createElement("div", { className: "flex flex-wrap md:flex-nowrap gap-5 w-full" },
                        react_1.default.createElement("div", { className: " w-full md:w-1/3" },
                            react_1.default.createElement(index_1.default, { label: "First Name", placeholder: "first name", required: true, onChange: (e) => {
                                    setContactForm(Object.assign(Object.assign({}, contactForm), { first_name: e.target.value }));
                                } })),
                        react_1.default.createElement("div", { className: " w-full md:w-1/3" },
                            react_1.default.createElement(index_1.default, { label: "Last Name", placeholder: "surname", required: true, onChange: (e) => {
                                    setContactForm(Object.assign(Object.assign({}, contactForm), { last_name: e.target.value }));
                                } })),
                        react_1.default.createElement("div", { className: " w-full md:w-1/3" },
                            react_1.default.createElement(index_1.default, { label: "Phone Number", type: "tel", placeholder: "number", required: true, onChange: (e) => {
                                    setContactForm(Object.assign(Object.assign({}, contactForm), { phone_number: e.target.value }));
                                } }))),
                    react_1.default.createElement("div", { className: "flex flex-wrap md:flex-nowrap gap-5 w-full" },
                        react_1.default.createElement("div", { className: " w-full md:w-1/3" },
                            react_1.default.createElement(index_1.default, { label: "Email", placeholder: "example@email.com", required: true, onChange: (e) => {
                                    setContactForm(Object.assign(Object.assign({}, contactForm), { email: e.target.value }));
                                } })),
                        react_1.default.createElement("div", { className: " w-full md:w-1/3" },
                            react_1.default.createElement(index_1.default, { label: "Company", placeholder: "company name", required: true, onChange: (e) => {
                                    setContactForm(Object.assign(Object.assign({}, contactForm), { company: e.target.value }));
                                } })),
                        react_1.default.createElement("div", { className: " w-full md:w-1/3" },
                            react_1.default.createElement(index_1.default, { label: "Location", placeholder: "City, Country", required: true, onChange: (e) => {
                                    setContactForm(Object.assign(Object.assign({}, contactForm), { location: e.target.value }));
                                } }))),
                    react_1.default.createElement("div", { className: "flex flex-wrap flex-col justify-center content-center font-poppins h-fit my-1 text-gunmetal" },
                        react_1.default.createElement("div", { className: " text-sm flex content-center gap-1" },
                            react_1.default.createElement("div", { className: " flex content-center flex-wrap" },
                                "Inquiry",
                                react_1.default.createElement("span", { className: " text-red-500" }, "*"))),
                        react_1.default.createElement("textarea", { className: `rounded w-full text-base
									bg-neutral-50 border-neutral-700
									focus:ring-primary-500 focus:border-primary-500`, cols: 30, rows: 10, placeholder: "How can we help you?", onChange: (e) => {
                                setContactForm(Object.assign(Object.assign({}, contactForm), { inquiry: e.target.value }));
                            } })),
                    react_1.default.createElement("div", { className: "flex justify-end content-center mt-8" },
                        react_1.default.createElement("div", { className: "flex content-center flex-wrap px-5 md:px-7 py-2 lg:py-3 lg:px-10 rounded-md font-semibold\n                                text-neutral-0 bg-primary-500 hover:bg-primary-700\n                                  hover:cursor-pointer" }, "Submit")))),
            react_1.default.createElement("div", { className: "z-10 flex flex-wrap justify-center content-center w-full bg-gunmetal text-neutral-0" },
                react_1.default.createElement("div", { className: "flex flex-wrap md:flex-nowrap w-4/5 my-28 gap-6" },
                    react_1.default.createElement("div", { className: "flex flex-col gap-3 w-full md:w-1/3" },
                        react_1.default.createElement("div", null, "At Bin Tracker, our mission is to make waste management smarter and more efficient. Through the integration of IoT technology and AI analysis, we're committed to helping communities and businesses reduce waste, cut costs, and build a cleaner, sustainable future."),
                        react_1.default.createElement("a", { href: "mailto:info@bintracker.com", className: "flex gap-3 flex-wrap content-center text-md hover:text-primary-500" },
                            react_1.default.createElement("div", { className: "flex gap-3 flex-wrap content-center" },
                                react_1.default.createElement(md_1.MdMail, null)),
                            react_1.default.createElement("div", { className: "" }, "info@bintracker.com")),
                        react_1.default.createElement("a", { href: "tel:+96176123123", className: "flex gap-3 flex-wrap content-center text-md hover:text-primary-500" },
                            react_1.default.createElement("div", { className: "flex gap-3 flex-wrap content-center" },
                                react_1.default.createElement(md_1.MdCall, null)),
                            react_1.default.createElement("div", null, "+961 76 123 123"))),
                    react_1.default.createElement("div", { className: "flex flex-col gap-2 w-full md:w-1/3" },
                        react_1.default.createElement("div", { className: "text-lg font-bold" }, "Pages"),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("a", { className: "hover:cursor-pointer hover:text-primary-500", href: "#home" }, "Home")),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("a", { className: "hover:cursor-pointer hover:text-primary-500", href: "#services" }, "Services")),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("a", { className: "hover:cursor-pointer hover:text-primary-500", href: "#about" }, "About")),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("a", { className: "hover:cursor-pointer hover:text-primary-500", href: "#contact" }, "Contact us")),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "w-fit hover:cursor-pointer hover:text-primary-500", onClick: () => navigate("/privacy-policy") }, "Privacy Policy")),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "w-fit hover:cursor-pointer hover:text-primary-500", onClick: () => navigate("/terms") }, "Terms & Conditions"))),
                    react_1.default.createElement("div", { className: "flex flex-col gap-8 w-full md:w-1/3" },
                        react_1.default.createElement("div", { className: "flex flex-col gap-2" },
                            react_1.default.createElement("div", { className: "text-lg font-bold" }, "Follow us"),
                            react_1.default.createElement("div", { className: "flex gap-3 text-lg" },
                                react_1.default.createElement("div", { className: "hover:cursor-pointer hover:text-primary-500" },
                                    react_1.default.createElement("a", { target: "_blank", rel: "noreferrer", href: "https://facebook.com/bintracker" },
                                        react_1.default.createElement(fa_1.FaFacebook, null))),
                                react_1.default.createElement("div", { className: "hover:cursor-pointer hover:text-primary-500" },
                                    react_1.default.createElement("a", { target: "_blank", rel: "noreferrer", href: "https://instagram.com/bintracker" },
                                        react_1.default.createElement(fa_1.FaInstagram, null))),
                                react_1.default.createElement("div", { className: "hover:cursor-pointer hover:text-primary-500" },
                                    react_1.default.createElement("a", { target: "_blank", rel: "noreferrer", href: "https://x.com/bintracker" },
                                        react_1.default.createElement(ri_1.RiTwitterXFill, null))),
                                react_1.default.createElement("div", { className: "hover:cursor-pointer hover:text-primary-500" },
                                    react_1.default.createElement("a", { target: "_blank", rel: "noreferrer", href: "https://linkedin.com/in/bintracker" },
                                        react_1.default.createElement(fa_1.FaLinkedinIn, null))),
                                react_1.default.createElement("div", { className: "hover:cursor-pointer hover:text-primary-500" },
                                    react_1.default.createElement("a", { target: "_blank", rel: "noreferrer", href: "https://youtube.com/bintracker" },
                                        react_1.default.createElement(fa_1.FaYoutube, null))))),
                        react_1.default.createElement("div", { className: "flex flex-col gap-1" },
                            react_1.default.createElement("div", { className: "text-lg font-bold" }, "Subscribe"),
                            react_1.default.createElement("div", null, "Stay updated with the latest news"),
                            react_1.default.createElement("div", { className: "flex gap-5" },
                                react_1.default.createElement(index_1.default, { placeholder: "Email", onChange: (e) => {
                                        setEmailSubscribe(e.target.value);
                                    } }),
                                react_1.default.createElement("div", { className: "flex flex-wrap justify-center content-center" },
                                    react_1.default.createElement("div", { className: "bg-primary-500 w-fit p-3 rounded-full hover:cursor-pointer hover:bg-primary-700" },
                                        react_1.default.createElement(md_1.MdSend, null)))))))),
            react_1.default.createElement("div", { className: "text-center py-3 w-full bg-primary-500 text-neutral-0" }, "Bin Tracker - Revolutionizing Waste Management - SE-S1-WE-45 \u00A9 2024. All rights reserved"))));
}
exports.default = LandingPage;
