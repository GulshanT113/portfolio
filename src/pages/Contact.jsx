import React from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Download,
  Code,
  BookOpen,
  Briefcase,
} from "lucide-react";
import gulshan2611 from "../assets/Gulshan2611.pdf";

const contactData = [
  {
    name: "Phone",
    icon: <Phone className="w-10 h-10 text-orange-500" />,
    value: "+91 82184 09705",
    href: "tel:+918218409705",
  },
  {
    name: "Email",
    icon: <Mail className="w-10 h-10 text-orange-500" />,
    value: "gulshant113@gmail.com",
    href: "mailto:gulshant113@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-10 h-10 text-orange-500" />,
    value: "linkedin.com/in/gulshant113",
    href: "https://www.linkedin.com/in/gulshan-kumar-640506213/",
  },
  {
    name: "Naukri",
    icon: <Briefcase className="w-10 h-10 text-orange-500" />,
    value: "naukri.com/gulshant113",
    href: "https://www.naukri.com/mnjuser/profile?id=&altresid",
  },
  {
    name: "GitHub",
    icon: <Github className="w-10 h-10 text-orange-500" />,
    value: "github.com/gulshant113",
    href: "https://github.com/GulshanT113",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-10 h-10 text-orange-500" />,
    value: "instagram.com/gulshan3142",
    href: "https://www.instagram.com/gulshan3142/",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-10 h-10 text-orange-500" />,
    value: "facebook.com/gulshan3591",
    href: "https://www.facebook.com/gulshan.thakur.3591",
  },
  {
    name: "Leetcode",
    icon: <Code className="w-10 h-10 text-orange-500" />,
    value: "leetcode.com/gulshant113",
    href: "https://leetcode.com/u/gulshant113/",
  },
  {
    name: "GeeksForGeeks",
    icon: <BookOpen className="w-10 h-10 text-orange-500" />,
    value: "geeksforgeeks.com/gulshan",
    href: "https://www.geeksforgeeks.org/user/gulsha748t/",
  },
];

const Contact = () => {
  return (
    <div className="py-10 px-2">
      <div className="flex justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-10 border-4 border-gray-500 p-4 w-64 rounded-xl">
          Contact Me
        </h2>
        
      </div>
      <p className="pb-4 text-2xl text-center font-bold text-gray-500">Below are the details to reach out to me!</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
        {contactData.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg bg-[rgb(12,12,12)] shadow-md hover:bg-orange-100 transition"
          >
            <span>{item.icon}</span>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 font-bold hover:text-orange-600 underline text-lg sm:text-xl break-words"
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <a
          href={gulshan2611}
          download
          className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-bold text-xl px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          <Download className="w-10 h-10" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
