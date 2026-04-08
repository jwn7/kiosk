import { useState } from 'react';
import HomeScreen from './features/home/HomeScreen';
import CategorySidebar from './features/menu/CategorySidebar';
import MenuGrid from './features/menu/MenuGrid';
import CartPanel from './features/cart/CartPanel';
import OrderConfirm from './features/order/OrderConfirm';
import PaymentSelect from './features/order/PaymentSelect';
import OrderComplete from './features/order/OrderComplete';
import { menuCategories } from './features/menu/menuData';
import { useLangStore } from './features/i18n/langStore';
import './App.css';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [orderNumber, setOrderNumber] = useState(null);
  const { t, lang } = useLangStore();

  const handleComplete = (num) => {
    setOrderNumber(num);
    setScreen('complete');
  };

  const handleReset = () => {
    setOrderNumber(null);
    setScreen('home');
  };

  if (screen === 'home') {
    return <HomeScreen onStart={() => setScreen('menu')} />;
  }

  return (
    <div className="kiosk-app">
      {screen === 'menu' && (
        <>
          <CategorySidebar activeCategory={activeCategory} onSelect={setActiveCategory} onHome={handleReset} />
          <main className="menu-main">
            <header className="kiosk-header">
              <span className="header-category-label">
                {lang === 'en'
                  ? menuCategories.find(c => c.id === activeCategory)?.nameEn
                  : menuCategories.find(c => c.id === activeCategory)?.name}
              </span>
            </header>
            <MenuGrid activeCategory={activeCategory} />
          </main>
          <CartPanel onOrder={() => setScreen('confirm')} />
        </>
      )}

      {screen === 'confirm' && (
        <OrderConfirm onBack={() => setScreen('menu')} onPay={() => setScreen('payment')} />
      )}

      {screen === 'payment' && (
        <PaymentSelect onComplete={handleComplete} onBack={() => setScreen('confirm')} />
      )}

      {screen === 'complete' && (
        <OrderComplete orderNumber={orderNumber} onReset={handleReset} />
      )}
    </div>
  );
}
