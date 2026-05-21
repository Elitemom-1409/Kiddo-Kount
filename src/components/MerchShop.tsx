'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { products, categories, type Product } from '@/data/products';

function useCart() {
  const [cart, setCart] = useState<Map<string, number>>(new Map());
  const addToCart = (id: string) => setCart((prev) => { const next = new Map(prev); next.set(id, (next.get(id) || 0) + 1); return next; });
  const removeFromCart = (id: string) => setCart((prev) => { const next = new Map(prev); const qty = (next.get(id) || 1) - 1; if (qty <= 0) next.delete(id); else next.set(id, qty); return next; });
  const clearCart = () => setCart(new Map());
  const totalItems = Array.from(cart.values()).reduce((a, b) => a + b, 0);
  const totalPrice = Array.from(cart.entries()).reduce((sum, [id, qty]) => { const p = products.find((p) => p.id === id); return sum + (p ? p.price * qty : 0); }, 0);
  return { cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice };
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  return (
    <div className="glass-card overflow-hidden group">
      <div className="relative aspect-square bg-gradient-to-br from-nebula-violet/30 to-cosmic-indigo overflow-hidden flex items-center justify-center">
        <div className="text-6xl opacity-40">
          {product.category === 'plushie' ? '🧸' : product.category === 'toy' ? '🎲' : product.category === 'clothing' ? '👕' : product.category === 'books' ? '📚' : product.category === 'stickers' ? '⭐' : '🎒'}
        </div>
        {product.badge && (
          <span className="absolute top-3 right-3 bg-candy-cherry text-white text-xs px-3 py-1 rounded-full font-display font-semibold">{product.badge}</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-sm mb-1 group-hover:text-candy-cyan transition-colors">{product.name}</h3>
        <p className="font-body text-xs text-white/50 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-numerals font-bold text-xl text-candy-sunshine">${product.price.toFixed(2)}</span>
          <motion.button whileTap={{ scale: 0.9 }} onClick={onAdd}
            className="px-4 py-2 rounded-full bg-candy-cherry/80 hover:bg-candy-cherry text-white text-xs font-display font-semibold transition-colors">
            Add to Cart 🛒
          </motion.button>
        </div>
        <span className="inline-block mt-2 text-xs text-white/40 font-body">Ages {product.ageRange}</span>
      </div>
    </div>
  );
}

export default function MerchShop() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const { cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  const filtered = activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="relative py-24 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-candy-cherry/5 to-transparent" />
      <div className="section-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block text-candy-bubblegum font-display font-semibold text-sm tracking-widest uppercase mb-4">🛍️ Merch Shop 🛍️</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Ralph&apos;s <span className="text-candy-cherry">Shop</span></h2>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto">Educational toys, cute clothes, and cosmic accessories. Every purchase supports free content!</p>
        </motion.div>

        {/* Cart button */}
        <div className="flex justify-end mb-6">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setShowCart(!showCart)}
            className="glass-card-static px-5 py-2.5 flex items-center gap-2 hover:bg-white/10 transition-colors" id="cart-toggle">
            <span>🛒</span>
            <span className="font-display font-semibold text-sm">{totalItems} items</span>
            <span className="font-numerals font-bold text-candy-sunshine">${totalPrice.toFixed(2)}</span>
          </motion.button>
        </div>

        {/* Cart dropdown */}
        {showCart && totalItems > 0 && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 mb-6">
            <h3 className="font-display font-bold text-lg mb-4">🛒 Your Cart</h3>
            <div className="space-y-3 mb-4">
              {Array.from(cart.entries()).map(([id, qty]) => {
                const product = products.find((p) => p.id === id);
                if (!product) return null;
                return (
                  <div key={id} className="flex items-center justify-between py-2 border-b border-white/10">
                    <div>
                      <p className="font-display text-sm">{product.name}</p>
                      <p className="font-body text-xs text-white/50">Qty: {qty}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-numerals font-bold text-candy-sunshine">${(product.price * qty).toFixed(2)}</span>
                      <button onClick={() => removeFromCart(id)} className="text-xs text-candy-cherry hover:text-white transition-colors">Remove</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="font-display font-bold text-lg">Total: <span className="text-candy-sunshine font-numerals">${totalPrice.toFixed(2)}</span></span>
              <div className="flex gap-2">
                <button onClick={clearCart} className="px-4 py-2 rounded-full bg-white/10 text-xs font-display hover:bg-white/20 transition-colors">Clear</button>
                <button className="btn-primary !text-sm !py-2" id="checkout-btn">Checkout 🚀</button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-display text-xs font-medium transition-all ${activeCategory === cat.id ? 'bg-candy-cherry text-white shadow-glow-cherry' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.05 }}>
              <ProductCard product={product} onAdd={() => addToCart(product.id)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
