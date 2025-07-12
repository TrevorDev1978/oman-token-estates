import { useState } from 'react'

export default function Sell() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    price: '',
    image: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('PROPERTY SUBMITTED:', form)
    alert('Dati immobile salvati! 🚀 (prossimamente: upload su blockchain)')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">📤 Inserisci una Proprietà</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium">Titolo</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
            placeholder="Es. Villa con giardino a Muscat"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Descrizione</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Descrivi brevemente la proprietà..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Località</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
            placeholder="Es. Muscat, Oman"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Prezzo (in USD o stable)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Immagine (URL)</label>
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
            placeholder="https://esempio.com/villa.jpg"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Pubblica Annuncio
        </button>
      </form>
    </div>
  )
}
