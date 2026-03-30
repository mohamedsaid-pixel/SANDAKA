import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Globe, ShieldCheck, Truck, Cpu, Star, ChevronRight } from 'lucide-react';

// --- Components ---

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Menu className="h-6 w-6 lg:hidden text-slate-700" />
        <span className="text-2xl font-black tracking-tighter text-slate-900">
          SANDAKA<span className="text-blue-600">.</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-600">
        <a href="#" className="hover:text-blue-600 transition-colors">PC Gamer</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Composants</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Périphériques</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Laptops</a>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer">
          <Globe className="h-4 w-4" />
          <span>FR / MAD</span>
        </div>
        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <Search className="h-5 w-5 text-slate-700" />
        </button>
        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
          <ShoppingCart className="h-5 w-5 text-slate-700" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-blue-600 rounded-full"></span>
        </button>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative bg-slate-900 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
    
    <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Livraison express à Taza & Fez-Meknès
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
          Montez la machine <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            de vos rêves.
          </span>
        </h1>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
          Composants PC haut de gamme, laptops gaming et setups sur mesure. 
          Garantie locale et support technique dédié au Maroc.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Configurer mon PC
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold text-lg transition-all border border-slate-700">
            Voir les promos
          </button>
        </div>
        
        {/* Trust Signals */}
        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span>Garantie 1 An</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-blue-400" />
            <span>Paiement à la livraison</span>
          </div>
        </div>
      </div>
      
      {/* Hero Image / Graphic */}
      <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
        <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-3xl absolute inset-0"></div>
        <img 
          src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=1000&auto=format&fit=crop" 
          alt="High-end Gaming PC" 
          className="relative z-10 rounded-2xl shadow-2xl border border-slate-700/50 object-cover aspect-[4/3] w-full"
        />
        {/* Floating Badge */}
        <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="bg-orange-100 p-3 rounded-lg">
            <Cpu className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase">Nouveau</p>
            <p className="text-sm font-black text-slate-900">RTX 4090 Dispo</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductCard = ({ 
  title = "ASUS ROG Strix G16", 
  specs = "i7-13650HX • RTX 4060 • 16GB RAM", 
  price = "16,490", 
  oldPrice = "18,000",
  rating = 4.8,
  reviews = 24,
  image = "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop",
  isNew = true,
  inStock = true
}) => (
  <div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-200">
    {/* Image Container */}
    <div className="relative aspect-square bg-slate-50 p-6 flex items-center justify-center overflow-hidden">
      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
        {isNew && (
          <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded-md uppercase tracking-wide">
            Nouveau
          </span>
        )}
        {oldPrice && (
          <span className="px-2.5 py-1 bg-red-500 text-white text-xs font-bold rounded-md uppercase tracking-wide">
            Promo
          </span>
        )}
      </div>
      
      <img 
        src={image} 
        alt={title} 
        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-1">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
        <span className="text-sm font-bold text-slate-700">{rating}</span>
        <span className="text-xs text-slate-400">({reviews})</span>
      </div>

      {/* Title & Specs */}
      <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-500 mb-4 line-clamp-1">{specs}</p>

      {/* Price & Action */}
      <div className="mt-auto flex items-end justify-between">
        <div>
          {oldPrice && (
            <p className="text-sm text-slate-400 line-through font-medium">{oldPrice} MAD</p>
          )}
          <p className="text-xl font-black text-slate-900">
            {price} <span className="text-sm font-bold text-slate-500">MAD</span>
          </p>
        </div>
        
        <button 
          className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${
            inStock 
              ? 'bg-slate-900 hover:bg-blue-600 text-white' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
          disabled={!inStock}
          aria-label="Ajouter au panier"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
      
      {/* Stock Indicator */}
      <div className="mt-4 flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full ${inStock ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
        <span className="text-xs font-medium text-slate-600">
          {inStock ? 'En stock à Fez' : 'Rupture de stock'}
        </span>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main>
        <HeroSection />
        
        {/* Featured Products Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">Top Ventes</h2>
              <p className="text-slate-500">Les configurations les plus demandées du moment.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-1 text-blue-600 font-bold hover:text-blue-700 transition-colors">
              Voir tout <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              title="ASUS ROG Strix G16 (2024)"
              specs="i7-13650HX • RTX 4060 • 16GB DDR5"
              price="16,490"
              oldPrice="18,000"
              image="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop"
            />
            <ProductCard 
              title="SANDAKA Custom Build 'Atlas'"
              specs="Ryzen 5 7600 • RX 7800 XT • 32GB RAM"
              price="14,200"
              oldPrice={null}
              isNew={false}
              image="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=500&auto=format&fit=crop"
            />
            <ProductCard 
              title="MSI Katana 15"
              specs="i7-12650H • RTX 4070 • 16GB RAM"
              price="15,900"
              oldPrice="17,500"
              rating={4.6}
              reviews={12}
              image="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=500&auto=format&fit=crop"
            />
            <ProductCard 
              title="Ecran Zowie XL2546K 240Hz"
              specs="24.5'' TN • 1ms • DyAc+"
              price="5,490"
              oldPrice={null}
              isNew={false}
              rating={4.9}
              reviews={89}
              image="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
