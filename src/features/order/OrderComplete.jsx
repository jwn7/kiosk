import { useEffect } from 'react';
import { useCartStore } from '../cart/cartStore';

export default function OrderComplete({ orderNumber, onReset }) {
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
    const timer = setTimeout(() => {
      onReset();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="screen order-complete">
      <div className="complete-icon">✅</div>
      <h1>주문 완료!</h1>
      <div className="order-number-box">
        <p className="order-label">주문 번호</p>
        <p className="order-number">{orderNumber}</p>
      </div>
      <p className="auto-reset">5초 후 자동으로 처음으로 돌아갑니다</p>
      <button className="btn-primary" onClick={onReset}>
        처음으로
      </button>
    </div>
  );
}
