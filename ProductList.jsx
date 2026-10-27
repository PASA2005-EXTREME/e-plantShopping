import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectAddedIds } from './store/CartSlice';
import { Navbar } from './App';

// ── Plant catalogue ──────────────────────────────────────────────────────────
const categories = [
  {
    name: '🌵 Succulents & Cacti',
    plants: [
      {
        id: 's1', name: 'Echeveria', price: 8.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=70',
        description: 'Rosette-forming succulent. Loves full sun and minimal water.',
      },
      {
        id: 's2', name: 'Aloe Vera', price: 12.99,
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=70',
        description: 'Medicinal gel inside thick leaves. Near-zero maintenance.',
      },
      {
        id: 's3', name: 'Jade Plant', price: 14.99,
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=70',
        description: 'Tree-like succulent symbolising good luck and prosperity.',
      },
      {
        id: 's4', name: 'Barrel Cactus', price: 10.99,
        image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&q=70',
        description: 'Classic globe cactus. Drought-tolerant and low-fuss.',
      },
      {
        id: 's5', name: 'Haworthia', price: 9.99,
        image: 'https://images.unsplash.com/photo-1602595405011-e4e37a0b7a97?w=400&q=70',
        description: 'Compact, patterned leaves. Perfect for shady windowsills.',
      },
      {
        id: 's6', name: 'Zebra Plant', price: 11.49,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=70',
        description: 'Bold white-striped foliage. A statement on any desk.',
      },
    ],
  },
  {
    name: '🌿 Tropical Foliage',
    plants: [
      {
        id: 't1', name: 'Monstera Deliciosa', price: 24.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=70',
        description: 'Iconic split leaves. Fast grower in bright indirect light.',
      },
      {
        id: 't2', name: 'Pothos', price: 7.99,
        image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&q=70',
        description: 'Hardy trailing vine. Tolerates low light and neglect.',
      },
      {
        id: 't3', name: 'Bird of Paradise', price: 34.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70',
        description: 'Large paddle leaves. A dramatic focal point for any room.',
      },
      {
        id: 't4', name: 'Philodendron', price: 15.99,
        image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400&q=70',
        description: 'Lush heart-shaped leaves. Easy-care and fast-growing.',
      },
      {
        id: 't5', name: 'Peace Lily', price: 13.99,
        image: 'https://images.unsplash.com/photo-1616259550-4246a5b5db49?w=400&q=70',
        description: 'White spathes and glossy leaves. Thrives in low light.',
      },
      {
        id: 't6', name: 'Rubber Plant', price: 19.99,
        image: 'https://images.unsplash.com/photo-1599598425947-5202edd56fda?w=400&q=70',
        description: 'Burgundy waxy leaves. A sculptural modern-home favourite.',
      },
    ],
  },
  {
    name: '🌸 Flowering Plants',
    plants: [
      {
        id: 'f1', name: 'African Violet', price: 9.49,
        image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc5e?w=400&q=70',
        description: 'Compact bloomer with velvety leaves. Flowers year-round.',
      },
      {
        id: 'f2', name: 'Orchid', price: 22.99,
        image: 'https://images.unsplash.com/photo-1566907225472-514215c9e2b5?w=400&q=70',
        description: 'Elegant arching sprays of blooms. Water sparingly.',
      },
      {
        id: 'f3', name: 'Anthurium', price: 18.99,
        image: 'https://images.unsplash.com/photo-1598881034666-6cd27a88dcc2?w=400&q=70',
        description: 'Waxy heart-shaped blooms in red and pink. Long-lasting.',
      },
      {
        id: 'f4', name: 'Bromeliad', price: 16.49,
        image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&q=70',
        description: 'Bold tropical colours. Thrives in humid bright rooms.',
      },
      {
        id: 'f5', name: 'Kalanchoe', price: 8.49,
        image: 'https://images.unsplash.com/photo-1455793200415-20da6ff80b40?w=400&q=70',
        description: 'Clusters of cheerful flowers above thick succulent leaves.',
      },
      {
        id: 'f6', name: 'Begonia', price: 10.99,
        image: 'https://images.unsplash.com/photo-1563241527-3004b7be0abe?w=400&q=70',
        description: 'Vibrant blooms and patterned foliage. Perfect for shade.',
      },
    ],
  },
];

// ── Component ────────────────────────────────────────────────────────────────
function ProductList({ setPage }) {
  const dispatch = useDispatch();
  const addedIds = useSelector(selectAddedIds);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <Navbar setPage={setPage} />

      <main className="product-list-page">
        <h2>Our Plants</h2>
        <p className="subtitle">
          Browse our hand-picked collection — all sustainably grown and ready to ship.
        </p>

        {categories.map((cat) => (
          <section key={cat.name} className="category-section">
            <h3 className="category-title">{cat.name}</h3>
            <div className="plants-grid">
              {cat.plants.map((plant) => {
                const isAdded = addedIds.includes(plant.id);
                return (
                  <div key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} loading="lazy" />
                    <div className="plant-card-body">
                      <p className="plant-name">{plant.name}</p>
                      <p className="plant-description">{plant.description}</p>
                      <p className="plant-price">${plant.price.toFixed(2)}</p>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAdd(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? '✓ Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;
