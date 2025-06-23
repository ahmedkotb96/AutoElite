const Hero = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Luxury car"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Discover Your Dream Car
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Luxury and Performance await you
        </p>
        <a href="#inventory" className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
          View Inventory
        </a>
      </div>
    </div>
  )
}

export default Hero
