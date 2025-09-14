export default function Contact() {
  return (
    <section className="bg-gray-50 flex py-16 px-6 md:px-12 lg:px-24">
      <div className="bg-blue-300 h-full">
        <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?semt=ais_incoming&w=740&q=80" alt="" />
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 text-base md:text-lg mb-12">
          Feel free to reach out for collaborations, project discussions, or just a friendly hello! 🚀
        </p>

        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Or connect with me on:</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-700 hover:text-orange-500 transition">LinkedIn</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition">GitHub</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
