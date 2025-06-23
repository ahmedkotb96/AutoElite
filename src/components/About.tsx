const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About AutoElite
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Your premier destination for luxury and performance vehicles
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-600">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Premium Selection</h3>
            <p className="mt-2 text-base text-gray-400 text-center">
              Curated collection of luxury vehicles from top manufacturers worldwide.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-600">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.977"></path></svg>
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Expert Team</h3>
            <p className="mt-2 text-base text-gray-400 text-center">
              Our team consists of passionate car enthusiasts and experts to guide you.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-600">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Customer First</h3>
            <p className="mt-2 text-base text-gray-400 text-center">
              We prioritize your satisfaction and offer dedicated support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
