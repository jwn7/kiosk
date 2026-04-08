import { useState } from 'react';
import CategorySidebar from './features/menu/CategorySidebar';
import MenuGrid from './features/menu/MenuGrid';
import CartPanel from './features/cart/CartPanel';
import OrderConfirm from './features/order/OrderConfirm';
import PaymentSelect from './features/order/PaymentSelect';
import OrderComplete from './features/order/OrderComplete';
import { menuCategories } from './features/menu/menuData';
import './App.css';

export default function App() {
  const [screen, setScreen] = useState('menu');
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [orderNumber, setOrderNumber] = useState(null);

  const handleComplete = (num) => {
    setOrderNumber(num);
    setScreen('complete');
  };

  const handleReset = () => {
    setOrderNumber(null);
    setScreen('menu');
  };

  return (
    <div className="kiosk-app">
      {screen === 'menu' && (
        <>
          <CategorySidebar activeCategory={activeCategory} onSelect={setActiveCategory} />
          <main className="menu-main">
            <header className="kiosk-header">
              <h1 className="brand">☕ Shot Up</h1>
            </header>
            <MenuGrid activeCategory={activeCategory} />
          </main>
          <CartPanel onOrder={() => setScreen('confirm')} />
        </>
      )}

      {screen === 'confirm' && (
        <OrderConfirm
          onBack={() => setScreen('menu')}
          onPay={() => setScreen('payment')}
        />
      )}

      {screen === 'payment' && (
        <PaymentSelect
          onComplete={handleComplete}
          onBack={() => setScreen('confirm')}
        />
      )}

      {screen === 'complete' && (
        <OrderComplete orderNumber={orderNumber} onReset={handleReset} />
      )}
    </div>
  );
}
