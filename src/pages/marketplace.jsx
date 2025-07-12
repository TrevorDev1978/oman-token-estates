import { useState } from 'react'

const properties = [
  {
    id: 1,
    title: 'Luxury Villa with Private Pool',
    location: 'Muscat, Oman',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    company: 'Blue Oasis Real Estate',
  },
  {
    id: 2,
    title: 'Seaside Apartment',
    location: 'Salalah, Oman',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    company: 'Sunrise Properties',
  },
  {
    id: 3,
    title: 'Modern Loft in Downtown',
    location: 'Muscat, Oman',
    price: 195000,
    image: 'https://images.unsplash.com/photos/modern-loft-bedroom-interior-3d-rendering-design-Vnu7hVd9SCQ?crop=entropy&auto=format&fit=crop&w=800&q=80',
    company: 'UrbanLiving',
  },
  {
    id: 4,
    title: 'Desert View Penthouse',
    location: 'Al Amerat, Oman',
    price: 275000,
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c',
    company: 'Nomad Estates',
  },
  {
    id: 5,
    title: 'Luxury Townhouse',
    location: 'Seeb, Oman',
    price: 210000,
    image: 'https://images.unsplash.com/photos/modern-loft-kitchen-interior-design-3d-rendering-concept-Mm6CxMm-MNQ?crop=entropy&auto=format&fit=crop&w=800&q=80',
    company: 'Prime Developments',
  },
  {
    id: 6,
    title: 'Furnished Studio Flat',
    location: 'Muscat, Oman',
    price: 89000,
    image: 'https://images.unsplash.com/photo-1605276374104-de9b6c1f8b45',
    company: 'Urban Nest',
  },
  {
    id: 7,
    title: 'Smart Eco-Villa',
    location: 'Barka, Oman',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    company: 'EcoLiving Developers',
  },
  {
    id: 8,
    title: 'Beachfront Bungalow',
    location: 'Qurayyat, Oman',
    price: 285000,
    image: 'https://images.unsplash.com/photo-1600607680929-98e8a1be3b72',
    company: 'Blue Bay Estates',
  },
  {
    id: 9,
    title: 'Minimalist Apartment',
    location: 'Mutrah, Oman',
    price: 142000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&auto=format&fit=crop&w=800&q=80',
    company: 'Modern Habitat',
  },
]

export default function Marketplace() {
  const [search, setSearch] = useState('')

  const filtered = properties.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase()) ||
    p.company.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">🏘️ Properties for Sale</h1>

      <input
        type="text"
        placeholder="Search by title, location, or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((prop) => (
          <div key={prop.id} className="bg-white shadow rounded overflow-hidden">
            <img src={prop.image} alt={prop.title} className="h-48 w-full object-cover" />
            <div className="p-4 space-y-1">
              <h2 className="text-lg font-bold">{prop.title}</h2>
              <p className="text-sm text-gray-600">{prop.location}</p>
              <p className="text-sm text-gray-500">🏢 {prop.company}</p>
              <p className="text-blue-600 font-semibold text-xl mt-2">
                ${prop.price.toLocaleString()}
              </p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Buy Token Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
