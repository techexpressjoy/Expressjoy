import React, { useState } from 'react';
import {
  Gift,
  Search,
  Heart,
  User,
  Phone,
  ChevronLeft,
  ChevronRight,
  Clock,
  CalendarCheck,
  Zap,
  BookOpen,
  ChevronDown,
  Sparkles,
  Cake,
  Flower2,
  Gift as GiftIcon,
  Coffee,
  HeartHandshake
} from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80",
    title: "Valentine's Special"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80",
    title: "Birthday Gifts"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?auto=format&fit=crop&q=80",
    title: "Anniversary Collection"
  }
];

const categories = [
  { name: "Birthdays", icon: "🎂" },
  { name: "Anniversary", icon: "💑" },
  { name: "Valentine Week", icon: "❤️" },
  { name: "Cakes", icon: "🍰" },
  { name: "Flowers", icon: "💐" },
  { name: "Plants", icon: "🌿" },
  { name: "Chocolates", icon: "🍫" },
  { name: "Combos", icon: "🎁" }
];

const deliveryOptions = [
  {
    icon: <Clock className="h-12 w-12 text-pink-600" />,
    title: "Same Day Delivery",
    description: "Order by 4 PM for delivery today"
  },
  {
    icon: <CalendarCheck className="h-12 w-12 text-pink-600" />,
    title: "Scheduled Delivery",
    description: "Plan your special moments ahead"
  },
  {
    icon: <Zap className="h-12 w-12 text-pink-600" />,
    title: "Express Delivery",
    description: "Delivery within 2-4 hours"
  }
];

const valentineDays = [
  {
    day: "Rose Day",
    date: "Feb 7",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
    description: "Express your love with roses"
  },
  {
    day: "Propose Day",
    date: "Feb 8",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80",
    description: "Make your move"
  },
  {
    day: "Chocolate Day",
    date: "Feb 9",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80",
    description: "Sweeten their day"
  },
  {
    day: "Teddy Day",
    date: "Feb 10",
    image: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?auto=format&fit=crop&q=80",
    description: "Cuddles and love"
  },
  {
    day: "Promise Day",
    date: "Feb 11",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80",
    description: "Make it forever"
  },
  {
    day: "Hug Day",
    date: "Feb 12",
    image: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&q=80",
    description: "Wrap them in love"
  },
  {
    day: "Kiss Day",
    date: "Feb 13",
    image: "https://images.unsplash.com/photo-1518895312237-a9e23508077d?auto=format&fit=crop&q=80",
    description: "Seal it with a kiss"
  },
  {
    day: "Valentine's Day",
    date: "Feb 14",
    image: "https://images.unsplash.com/photo-1454678904372-2ca94103eca4?auto=format&fit=crop&q=80",
    description: "Celebrate your love"
  }
];

const birthdayProducts = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    price: 599,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80",
    quantity: ["500g", "1kg", "2kg"],
    category: "Cakes"
  },
  {
    id: 2,
    name: "Red Roses Bouquet",
    price: 799,
    image: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d43?auto=format&fit=crop&q=80",
    quantity: ["12 Stems", "24 Stems"],
    category: "Flowers"
  },
  {
    id: 3,
    name: "Premium Gift Hamper",
    price: 1499,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80",
    quantity: ["Standard", "Deluxe"],
    category: "Combos"
  }
];

const anniversaryProducts = [
  {
    id: 1,
    name: "Personalized Photo Frame",
    price: 1299,
    image: "https://images.unsplash.com/photo-1596468138838-6e8ffd09e0f0?auto=format&fit=crop&q=80",
    quantity: ["Standard", "Deluxe"],
    category: "Frames"
  },
  {
    id: 2,
    name: "Couple Watch Set",
    price: 2499,
    image: "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?auto=format&fit=crop&q=80",
    quantity: ["Silver", "Gold"],
    category: "Watches"
  },
  {
    id: 3,
    name: "Anniversary Cake",
    price: 899,
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80",
    quantity: ["1kg", "2kg"],
    category: "Cakes"
  }
];

const cakeProducts = [
  {
    id: 1,
    name: "Black Forest Cake",
    price: 699,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80",
    quantity: ["500g", "1kg", "2kg"],
    category: "Regular"
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    price: 899,
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80",
    quantity: ["500g", "1kg", "2kg"],
    category: "Premium"
  },
  {
    id: 3,
    name: "Fruit Cake",
    price: 799,
    image: "https://images.unsplash.com/photo-1542124948-dc391252a940?auto=format&fit=crop&q=80",
    quantity: ["500g", "1kg", "2kg"],
    category: "Special"
  }
];

const roseDayProducts = [
  {
    id: 1,
    name: "Red Rose Bouquet",
    price: 999,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
    quantity: ["12 Stems", "24 Stems"],
    tagline: "Express your love with the timeless beauty of roses"
  },
  {
    id: 2,
    name: "Mixed Rose Basket",
    price: 1499,
    image: "https://images.unsplash.com/photo-1589244159943-460088ed5c92?auto=format&fit=crop&q=80",
    quantity: ["20 Roses", "30 Roses"],
    tagline: "A rainbow of emotions in every petal"
  }
];

const proposeDayProducts = [
  {
    id: 1,
    name: "Diamond Ring",
    price: 9999,
    image: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80",
    quantity: ["14K", "18K"],
    tagline: "Make the moment unforgettable"
  },
  {
    id: 2,
    name: "Proposal Gift Box",
    price: 2499,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80",
    quantity: ["Basic", "Premium"],
    tagline: "The perfect way to pop the question"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [sortOption, setSortOption] = useState('recommended');
  const [currentProducts, setCurrentProducts] = useState([]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'birthdays':
        return "Memorable Birthday Gifts for Your Loved Ones";
      case 'anniversary':
        return "Celebrate Your Special Moments Together";
      case 'cakes':
        return "Delicious Cakes for Every Celebration";
      case 'roseday':
        return "Rose Day - Let Love Bloom";
      case 'proposeday':
        return "Propose Day - Make It Special";
      default:
        return "";
    }
  };

  const getPageIcon = () => {
    switch (currentPage) {
      case 'birthdays':
        return <Gift className="h-8 w-8 text-pink-600" />;
      case 'anniversary':
        return <HeartHandshake className="h-8 w-8 text-pink-600" />;
      case 'cakes':
        return <Cake className="h-8 w-8 text-pink-600" />;
      case 'roseday':
        return <Flower2 className="h-8 w-8 text-pink-600" />;
      case 'proposeday':
        return <Sparkles className="h-8 w-8 text-pink-600" />;
      default:
        return null;
    }
  };

  const handleCategoryClick = (category) => {
    setCurrentPage(category.toLowerCase());
    switch (category.toLowerCase()) {
      case 'birthdays':
        setCurrentProducts(birthdayProducts);
        break;
      case 'anniversary':
        setCurrentProducts(anniversaryProducts);
        break;
      case 'cakes':
        setCurrentProducts(cakeProducts);
        break;
      case 'roseday':
        setCurrentProducts(roseDayProducts);
        break;
      case 'proposeday':
        setCurrentProducts(proposeDayProducts);
        break;
      default:
        setCurrentProducts([]);
    }
  };

  const renderSubPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-fade-in">
        <div className="flex justify-center mb-4">
          {getPageIcon()}
        </div>
        <h1 className="text-4xl font-bold mb-4">{getPageTitle()}</h1>
        <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
      </div>
      
      <div className="flex justify-end mb-8">
        <div className="relative inline-block">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 hover:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="recommended">Recommended</option>
            <option value="new">New</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  {product.tagline && (
                    <p className="text-white text-sm italic">{product.tagline}</p>
                  )}
                </div>
              </div>
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Heart className="h-5 w-5 text-pink-600" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">₹{product.price}</p>
              <select className="w-full mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                {product.quantity.map((q) => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
              <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transform hover:scale-105 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Gift className="h-8 w-8 text-pink-600 animate-bounce hover:animate-none" />
              <span className="text-2xl font-bold text-gray-800">GiftHub</span>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search gifts..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <button className="flex items-center space-x-1 px-4 py-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition-colors transform hover:scale-105">
                  <BookOpen className="h-5 w-5" />
                  <span>Stories</span>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 cursor-pointer transform hover:scale-105 transition-transform">
                <Heart className="h-6 w-6" />
                <span>Wishlist</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 cursor-pointer transform hover:scale-105 transition-transform">
                <User className="h-6 w-6" />
                <span>Login</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-700">
                <Phone className="h-6 w-6" />
                <span>1800-123-4567</span>
              </div>
            </div>
          </div>

          <div className="py-4 border-t overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-all transform hover:scale-105"
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {currentPage === 'home' ? (
        <>
          <div className="relative h-[500px] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute bottom-10 left-10">
                      <h2 className="text-4xl font-bold text-white mb-4">{slide.title}</h2>
                      <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Delivery Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {deliveryOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="flex justify-center mb-4">{option.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">The Valentine Week of Love</h2>
              <p className="text-center text-gray-600 mb-12">Celebrate each day of love with special gifts</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {valentineDays.map((day, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={day.image}
                      alt={day.day}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                      <div className="absolute bottom-0 p-6 text-white">
                        <p className="text-sm font-medium text-pink-300">{day.date}</p>
                        <h3 className="text-xl font-bold mb-2">{day.day}</h3>
                        <p className="text-sm opacity-90">{day.description}</p>
                        <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                          Explore Gifts
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        renderSubPage()
      )}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
