import { useState } from 'react';
import { useCartStore, selectTotalPrice } from '../cart/cartStore';
import { useLangStore } from '../i18n/langStore';
import { submitOrder } from './orderService';

export default function PaymentSelect({ onComplete, onBack }) {
  const items = useCartStore((s) => s.items);
  const total = useCartStore(selectTotalPrice);
  const { t } = useLangStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePay = async (method) => {
    setLoading(true);
    setError(null);
    try {
      const orderNumber = await submitOrder(items, method, total);
      onComplete(orderNumber);
    } catch {
      setError(t('payError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="screen payment-select">
      <h1>{t('selectPayment')}</h1>
      <p className="payment-total">{t('payAmount')}: <strong>{total.toLocaleString()}원</strong></p>

      {error && <p className="payment-error">{error}</p>}

      <div className="payment-methods">
        <button className="payment-btn" onClick={() => handlePay('credit')} disabled={loading}>
          <span className="payment-icon">💳</span>
          {t('creditCard')}
        </button>
        <button className="payment-btn" onClick={() => handlePay('samsung')} disabled={loading}>
          <span className="payment-icon">📱</span>
          {t('samsungPay')}
        </button>
      </div>

      {loading && <p className="payment-loading">{t('processing')}</p>}

      <button className="btn-secondary back-btn" onClick={onBack} disabled={loading}>
        {t('back')}
      </button>
    </div>
  );
}
