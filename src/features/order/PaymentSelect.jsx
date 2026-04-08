import { useState } from 'react';
import { useCartStore, selectTotalPrice } from '../cart/cartStore';
import { submitOrder } from './orderService';

export default function PaymentSelect({ onComplete, onBack }) {
  const items = useCartStore((s) => s.items);
  const total = useCartStore(selectTotalPrice);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePay = async (method) => {
    setLoading(true);
    setError(null);
    try {
      const orderNumber = await submitOrder(items, method, total);
      onComplete(orderNumber);
    } catch (err) {
      setError('주문 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="screen payment-select">
      <h1>결제 방법 선택</h1>
      <p className="payment-total">결제 금액: <strong>{total.toLocaleString()}원</strong></p>

      {error && <p className="payment-error">{error}</p>}

      <div className="payment-methods">
        <button
          className="payment-btn credit"
          onClick={() => handlePay('credit')}
          disabled={loading}
        >
          <span className="payment-icon">💳</span>
          신용카드
        </button>
        <button
          className="payment-btn samsung"
          onClick={() => handlePay('samsung')}
          disabled={loading}
        >
          <span className="payment-icon">📱</span>
          삼성페이
        </button>
      </div>

      {loading && <p className="payment-loading">처리 중...</p>}

      <button className="btn-secondary back-btn" onClick={onBack} disabled={loading}>
        뒤로
      </button>
    </div>
  );
}
