'use client';
import React, { useState } from 'react';
import { FaHome, FaShoppingCart, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';


// commodityData truncated for brevity
const commodityData = [
  {
    name: 'Tomato',
    price: 20,
    unit: 'kg',
    image: '/images/Tomato.jpg',
    category: 'Vegetables',
    farmer: 'Raju',
    locality: 'Nalgonda',
  },
  {
    name: 'Potato',
    price: 20,
    unit: 'kg',
    image: '/images/Potato.jpg',
    category: 'Vegetables',
    farmer: 'Sita',
    locality: 'Warangal',
  },
  {
    name: 'Onion',
    price: 20,
    unit: 'kg',
    image: '/images/Onion.jpg',
    category: 'Vegetables',
    farmer: 'Lakshman',
    locality: 'Kurnool',
  },
  {
    name: 'Carrot',
    price: 35,
    unit: 'kg',
    image: '/images/Carrot.jpg',
    category: 'Vegetables',
    farmer: 'Meena',
    locality: 'Vijayawada',
  },
  {
    name: 'Cauliflower',
    price: 25,
    unit: 'kg',
    image: '/images/Cauliflower.webp',
    category: 'Vegetables',
    farmer: 'Ramesh',
    locality: 'Tirupati',
  },
  {
    name: 'Brinjal',
    price: 30,
    unit: 'kg',
    image: '/images/Brinjal.jpg',
    category: 'Vegetables',
    farmer: 'Anita',
    locality: 'Kadapa',
  },
  {
    name: 'Spinach',
    price: 20,
    unit: 'bundle',
    image: '/images/Spinach.webp',
    category: 'Vegetables',
    farmer: 'Prakash',
    locality: 'Guntur',
  },
  {
    name: 'Cabbage',
    price: 20,
    unit: 'kg',
    image: '/images/Cabbage.jpg',
    category: 'Vegetables',
    farmer: 'Sundar',
    locality: 'Rajahmundry',
  },
  {
    name: 'Peas',
    price: 105,
    unit: 'kg',
    image: '/images/Peas.webp',
    category: 'Vegetables',
    farmer: 'Radha',
    locality: 'Vizag',
  },
  {
    name: 'Radish',
    price: 40,
    unit: 'kg',
    image: '/images/Raddish.webp',
    category: 'Vegetables',
    farmer: 'Vikram',
    locality: 'Anantapur',
  },
  {
    name: 'Pumpkin',
    price: 120,
    unit: 'kg',
    image: '/images/Pumpkin.jpg',
    category: 'Vegetables',
    farmer: 'Lakshmi',
    locality: 'Khammam',
  },
  {
    name: 'Bottle Gourd',
    price: 26,
    unit: 'kg',
    image: '/images/Bottlegourd.webp',
    category: 'Vegetables',
    farmer: 'Suresh',
    locality: 'Nellore',
  },
  {
    name: 'Bitter Gourd',
    price: 30,
    unit: 'kg',
    image: '/images/Bittergourd.jpg',
    category: 'Vegetables',
    farmer: 'Geetha',
    locality: 'Kakinada',
  },
  {
    name: 'Okra',
    price: 20,
    unit: 'kg',
    image: '/images/Okra.avif',
    category: 'Vegetables',
    farmer: 'Manoj',
    locality: 'Eluru',
  },
  {
    name: 'Sweet Corn',
    price: 47,
    unit: 'kg',
    image: '/images/Sweetcorn.webp',
    category: 'Vegetables',
    farmer: 'Bhavani',
    locality: 'Chittoor',
  },
  {
    name: 'Green Beans',
    price: 35,
    unit: 'kg',
    image: '/images/GreenBeans.jpg',
    category: 'Vegetables',
    farmer: 'Sanjay',
    locality: 'Adilabad',
  },
  {
    name: 'Garlic',
    price: 200,
    unit: 'kg',
    image: '/images/Garlic.jpg',
    category: 'Vegetables',
    farmer: 'Meena',
    locality: 'Medak',
  },
  {
    name: 'Ginger',
    price: 91,
    unit: 'kg',
    image: '/images/Ginger.jpg',
    category: 'Vegetables',
    farmer: 'Ravi',
    locality: 'Nizamabad',
  },
  {
    name: 'Chili',
    price: 20,
    unit: 'kg',
    image: '/images/Chili.jpg',
    category: 'Vegetables',
    farmer: 'Kiran',
    locality: 'Mahbubnagar',
  },
  {
    name: 'Cucumber',
    price: 28,
    unit: 'kg',
    image: '/images/Cucumber.jpg',
    category: 'Vegetables',
    farmer: 'Swapna',
    locality: 'Srikakulam',
  },
  {
    name: 'Apple',
    price: 13,
    unit: 'pcs',
    image: '/images/Apple.webp',
    category: 'Fruits',
    farmer: 'John',
    locality: 'Shimla',
  },
  {
    name: 'Banana',
    price: 40,
    unit: 'dozen',
    image: '/images/Bannana.jpg',
    category: 'Fruits',
    farmer: 'Priya',
    locality: 'TamilNadu',
  },
  {
    name: 'Mango',
    price: 22.75,
    unit: 'kg',
    image: '/images/Mango.webp',
    category: 'Fruits',
    farmer: 'Anil',
    locality: 'UttarPradesh',
  },
  {
    name: 'Pineapple',
    price: 40,
    unit: 'pcs',
    image: '/images/Pineapple.webp',
    category: 'Fruits',
    farmer: 'Mary',
    locality: 'Vazhakulam',
  },
  {
    name: 'Papaya',
    price: 31,
    unit: 'pcs',
    image: '/images/Papaya.jpg',
    category: 'Fruits',
    farmer: 'Kumar',
    locality: 'Rajahmundry',
  },
  {
    name: 'Grapes',
    price: 100,
    units: ['kg', '50 g', '250 g'],
    image: '/images/Grapes.webp',
    category: 'Fruits',
    farmer: 'Sonal',
    locality: 'Nasik',
  },
  {
    name: 'Watermelon',
    price: 20,
    unit: 'pcs',
    image: '/images/Watermelon.webp',
    category: 'Fruits',
    farmer: 'Deepak',
    locality: 'Karnataka',
  },
  {
    name: 'Orange',
    price: 4.80,
    unit: 'pcs',
    image: '/images/Orange.webp',
    category: 'Fruits',
    farmer: 'Sneha',
    locality: 'Nagpur',
  },
  {
    name: 'Lemon',
    price: 7.20,
    unit: 'pcs',
    image: '/images/Lemon.jpg',
    category: 'Fruits',
    farmer: 'Rajesh',
    locality: 'Ukhrul',
  },
  {
    name: 'Guava',
    price: 5.50,
    unit: 'pcs',
    image: '/images/Guava.webp',
    category: 'Fruits',
    farmer: 'Rekha',
    locality: 'Bihar',
  },
];


export default function CustomerDashboard() {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMenu, setActiveMenu] = useState('home');
  const [homeCategory, setHomeCategory] = useState(null);
  const [profile, setProfile] = useState({ name: '', phone: '', email: '', address: '' });

  // Payment states
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' or 'card'
  const [upiApp, setUpiApp] = useState('phonepe'); // 'phonepe', 'gpay', 'paytm'
  const [paymentVia, setPaymentVia] = useState('scanner'); // 'scanner' or 'app'
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [scannedUpiCode, setScannedUpiCode] = useState('');

  // Quantity change handler
  const handleQuantityChange = (name, delta, price, unit) => {
    setSelectedItems((prev) => {
      const newQty = (prev[name]?.quantity || 0) + delta;
      if (newQty < 0) return prev;
      return {
        ...prev,
        [name]: { quantity: newQty, price, unit },
      };
    });
  };

  const handleLogout = () => {
    setSelectedItems({});
    setSearchTerm('');
    setActiveMenu('home');
    setHomeCategory(null);
    router.push('/');
  };

  const totalPrice = Object.values(selectedItems).reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const filteredCommodity = homeCategory
    ? commodityData.filter(
        (c) =>
          c.category === homeCategory &&
          c.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleCardChange = (field, value) => {
    setCardDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleSimulateScan = () => {
    setScannedUpiCode(`upi://pay?pa=${upiApp}@upi&pn=${upiApp.toUpperCase()}&am=${totalPrice}`);
    alert('QR Code scanned! UPI code set.');
  };

  const handleAppPay = () => {
    alert(`Payment via ${upiApp.toUpperCase()} app successful! Amount: ₹${totalPrice}`);
    setPaymentSuccess(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === 'upi') {
      if (paymentVia === 'scanner') {
        if (!scannedUpiCode) {
          alert('Please scan the UPI QR code first.');
          return;
        }
        alert(`Payment via ${upiApp.toUpperCase()} successful! Amount: ₹${totalPrice}`);
        setPaymentSuccess(true);
      } else {
        // pay via app direct
        handleAppPay();
      }
    } else {
      const { number, expiry, cvv } = cardDetails;
      if (!number || !expiry || !cvv) {
        alert('Please fill all card details.');
        return;
      }
      alert(`Card payment successful! Amount: ₹${totalPrice}`);
      setPaymentSuccess(true);
    }
  };

  const handleConfirmOrderClick = () => {
    if (Object.values(selectedItems).every((item) => item.quantity <= 0)) {
      alert('Please select items before confirming order.');
      return;
    }
    setActiveMenu('payment');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-56 bg-green-600 text-white flex flex-col justify-between fixed h-full">
        <div>
          <div className="text-3xl font-bold text-center py-6 border-b border-green-700">
            Innovation in Agriculture
          </div>
          <nav className="flex flex-col mt-6 space-y-1">
            <button
              onClick={() => {
                setActiveMenu('home');
                setHomeCategory(null);
                setPaymentSuccess(false);
              }}
              className={`flex items-center px-6 py-3 text-lg font-medium hover:bg-green-700 transition-colors ${
                activeMenu === 'home' ? 'bg-green-700' : ''
              }`}
            >
              <FaHome className="mr-3" /> Home
            </button>
            <button
              onClick={() => {
                setActiveMenu('orders');
                setPaymentSuccess(false);
              }}
              className={`flex items-center px-6 py-3 text-lg font-medium hover:bg-green-700 transition-colors ${
                activeMenu === 'orders' ? 'bg-green-700' : ''
              }`}
            >
              <FaShoppingCart className="mr-3" /> My Orders
            </button>
            <button
              onClick={() => {
                setActiveMenu('profile');
                setPaymentSuccess(false);
              }}
              className={`flex items-center px-6 py-3 text-lg font-medium hover:bg-green-700 transition-colors ${
                activeMenu === 'profile' ? 'bg-green-700' : ''
              }`}
            >
              <FaUserCircle className="mr-3" /> My Profile
            </button>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center px-6 py-3 text-lg font-medium bg-red-600 hover:bg-red-700 transition-colors"
        >
          <FaSignOutAlt className="mr-3" /> Logout
        </button>
      </div>

      {/* Main content */}
      <div className="ml-56 flex-grow p-6 overflow-y-auto relative">
        {/* Selected Items Summary on top-right */}
        {Object.keys(selectedItems).some((key) => selectedItems[key].quantity > 0) && (
          <div className="fixed top-4 right-4 bg-green-50 p-4 border rounded shadow-lg w-72 z-10">
            <h3 className="font-semibold mb-2">Selected Items:</h3>
            <ul className="text-sm space-y-1 max-h-60 overflow-y-auto">
              {Object.entries(selectedItems).map(([name, { quantity, price, unit }]) =>
                quantity > 0 ? (
                  <li key={name}>
                    {name}: {quantity} {unit} × ₹{price} = ₹{quantity * price}
                  </li>
                ) : null
              )}
            </ul>
            <p className="font-bold mt-2">Total Price: ₹{totalPrice}</p>
          </div>
        )}

        {/* HOME */}
        {activeMenu === 'home' && (
          <>
            <h1 className="text-3xl font-bold mb-4">Welcome to Innovation in Agriculture!</h1>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">Select Category:</h2>
              <div className="space-x-4">
                {['Vegetables', 'Fruits'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setHomeCategory(category)}
                    className={`px-4 py-2 rounded ${
                      homeCategory === category
                        ? 'bg-green-700 text-white'
                        : 'bg-green-300 text-green-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {homeCategory && (
              <>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">
                    Search {homeCategory}:
                  </label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded w-full max-w-md"
                    placeholder={`Search ${homeCategory.toLowerCase()}...`}
                  />
                </div>

                <h2 className="text-xl font-semibold mb-2">{homeCategory}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredCommodity.map(({ name, price, unit, image, farmer, locality }) => (
                    <div
                      key={name}
                      className="border rounded p-4 flex flex-col items-center shadow hover:shadow-lg transition"
                    >
                      <img src={image} alt={name} className="w-32 h-32 object-cover mb-2 rounded" />
                      <h3 className="font-semibold">{name}</h3>
                      <p className="text-sm text-gray-700 mb-1">
                        Farmer: <span className="font-medium">{farmer}</span>
                      </p>
                      <p className="text-sm text-gray-700 mb-1">
                        Locality: <span className="font-medium">{locality}</span>
                      </p>
                      <p>Price: ₹{price} / {unit}</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() => handleQuantityChange(name, -1, price, unit)}
                          className="bg-red-500 text-white px-2 rounded disabled:opacity-50"
                          disabled={!selectedItems[name] || selectedItems[name].quantity <= 0}
                        >
                          −
                        </button>
                        <span>{selectedItems[name]?.quantity || 0}</span>
                        <button
                          onClick={() => handleQuantityChange(name, 1, price, unit)}
                          className="bg-green-500 text-white px-2 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* ORDERS */}
        {activeMenu === 'orders' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">My Orders</h1>
            {Object.keys(selectedItems).some((key) => selectedItems[key].quantity > 0) ? (
              <div>
                <ul className="mb-4">
                  {Object.entries(selectedItems).map(([name, { quantity, price, unit }]) =>
                    quantity > 0 ? (
                      <li key={name} className="mb-1">
                        {name}: {quantity} {unit} × ₹{price} = ₹{quantity * price}
                      </li>
                    ) : null
                  )}
                </ul>
                <p className="font-bold mb-4">Total Price: ₹{totalPrice}</p>
                <button
                  onClick={handleConfirmOrderClick}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Confirm Order & Proceed to Payment
                </button>
              </div>
            ) : (
              <p>No items selected yet.</p>
            )}
          </div>
        )}

        {/* PROFILE */}
        {activeMenu === 'profile' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">My Profile</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Profile saved!');
              }}
              className="max-w-md space-y-4"
            >
              <div>
                <label className="block mb-1 font-medium">Name:</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => handleProfileChange('name', e.target.value)}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone:</label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => handleProfileChange('phone', e.target.value)}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email:</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleProfileChange('email', e.target.value)}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Address:</label>
                <textarea
                  value={profile.address}
                  onChange={(e) => handleProfileChange('address', e.target.value)}
                  className="border p-2 rounded w-full"
                  rows={3}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save Profile
              </button>
            </form>
          </div>
        )}

        {/* PAYMENT */}
        {activeMenu === 'payment' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Payment</h1>
            {paymentSuccess ? (
              <div className="bg-green-200 p-4 rounded text-green-900">
                Payment successful! Thank you for your order.
              </div>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="max-w-md space-y-4">
                <div>
                  <label className="font-semibold mb-1 block">Select Payment Method:</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => {
                      setPaymentMethod(e.target.value);
                      setPaymentSuccess(false);
                    }}
                    className="border p-2 rounded w-full"
                  >
                    <option value="upi">UPI</option>
                    <option value="card">Card</option>
                  </select>
                </div>

                {/* UPI payment section */}
                {paymentMethod === 'upi' && (
                  <>
                    <div>
                      <label className="font-semibold mb-1 block">Choose Payment Via:</label>
                      <select
                        value={paymentVia}
                        onChange={(e) => {
                          setPaymentVia(e.target.value);
                          setScannedUpiCode('');
                          setPaymentSuccess(false);
                        }}
                        className="border p-2 rounded w-full mb-4"
                      >
                        <option value="scanner">Scan QR Code</option>
                        <option value="app">Pay via App</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-semibold mb-1 block">Select UPI App:</label>
                      <select
                        value={upiApp}
                        onChange={(e) => {
                          setUpiApp(e.target.value);
                          setScannedUpiCode('');
                          setPaymentSuccess(false);
                        }}
                        className="border p-2 rounded w-full"
                      >
                        <option value="phonepe">PhonePe</option>
                        <option value="gpay">Google Pay</option>
                        <option value="paytm">Paytm</option>
                      </select>
                    </div>

                    {paymentVia === 'scanner' ? (
                      <div className="mt-4">
                        <p className="mb-2">
                          Scan this QR code with your {upiApp.toUpperCase()} app to pay ₹{totalPrice}:
                        </p>
                        {/* Simulated QR Code (placeholder image or div) */}
                        <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-gray-600 rounded mb-2">
                          QR CODE ({upiApp.toUpperCase()})
                        </div>
                        <button
                          type="button"
                          onClick={handleSimulateScan}
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                          Simulate Scan
                        </button>
                        {scannedUpiCode && (
                          <p className="mt-2 text-green-700 break-all">Scanned UPI Code: {scannedUpiCode}</p>
                        )}
                      </div>
                    ) : (
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={handleAppPay}
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                          Pay via {upiApp.toUpperCase()} App ₹{totalPrice}
                        </button>
                      </div>
                    )}
                  </>
                )}

                {/* Card payment section */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">Card Number:</label>
                      <input
                        type="text"
                        value={cardDetails.number}
                        onChange={(e) => handleCardChange('number', e.target.value)}
                        className="border p-2 rounded w-full"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Expiry Date:</label>
                      <input
                        type="text"
                        value={cardDetails.expiry}
                        onChange={(e) => handleCardChange('expiry', e.target.value)}
                        className="border p-2 rounded w-full"
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">CVV:</label>
                      <input
                        type="password"
                        value={cardDetails.cvv}
                        onChange={(e) => handleCardChange('cvv', e.target.value)}
                        className="border p-2 rounded w-full"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                )}

                {!paymentSuccess && paymentMethod !== 'upi' && (
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Pay ₹{totalPrice}
                  </button>
                )}

                {!paymentSuccess && paymentMethod === 'upi' && paymentVia === 'scanner' && (
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
                  >
                    Confirm Payment
                  </button>
                )}
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}