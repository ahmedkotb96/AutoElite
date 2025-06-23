import audiCar from './audi_car.jpg';

const Inventory = () => {
  const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      year: 2023,
      mileage: '5,000 mi',
      price: '$95,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 2,
      name: 'BMW M4 Competition',
      year: 2023,
      mileage: '2,500 mi',
      price: '$89,000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 3,
      name: 'Audi R8 V10',
      year: 2022,
      mileage: '8,000 mi',
      price: '$155,000',
      image: audiCar,
    },
  ]

  return (
    <section id="inventory" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Inventory
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Browse our selection of premium vehicles
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div key={car.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
              <img
                className="w-full h-56 object-cover"
                src={car.image}
                alt={car.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{car.name}</h3>
                <div className="mt-2 flex justify-between items-center text-gray-400">
                  <span>{car.year}</span>
                  <span>{car.mileage}</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-indigo-400">{car.price}</p>
                <button className="mt-6 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Inventory
