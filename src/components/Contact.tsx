const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              Fill up the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-indigo-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+201001924076</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-indigo-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>ahmedabdelhakiem96@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-indigo-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Sadat City, Menoufia, Egypt</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="sr-only">First Name</label>
                  <input type="text" id="first-name" placeholder="First Name" className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">Last Name</label>
                  <input type="text" id="last-name" placeholder="Last Name" className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" />
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" placeholder="Your Message" rows={5} className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
