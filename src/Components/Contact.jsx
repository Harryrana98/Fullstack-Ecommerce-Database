import { useEffect, useState } from "react";

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    Phonenumber: "",
    textarea: ""
  });

  const [save, setSavedData] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSavedData([...save, formdata]);
    setFormdata({
      name: "",
      email: "",
      Phonenumber: "",
      textarea: ""
    });
  }

  useEffect(() => {
    if (save.length > 0) {
      localStorage.setItem("save", JSON.stringify(save));
    }
  }, [save]);

  return (
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="flex flex-col lg:flex-row gap-10">
      
      {/* Left Side - Google Map */}
      <div className="w-full lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.241553841478!2d75.78974481125746!3d26.864065576578838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3f27d3dad07%3A0xb2641415d32e0c18!2sFull%20Stack%20Learning!5e0!3m2!1sen!2sin!4v1748846291965!5m2!1sen!2sin"
          className="w-full h-[450px] rounded-xl border-4 border-blue-600 shadow-md"
          loading="lazy"
        ></iframe>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">📬 Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formdata.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="Phonenumber"
              id="phonenumber"
              value={formdata.Phonenumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="textarea" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              name="textarea"
              id="textarea"
              value={formdata.textarea}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
            >
              🚀 Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

}

export default Contact;
