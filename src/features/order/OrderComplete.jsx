import { useEffect } from 'react';
import { useCartStore } from '../cart/cartStore';
import { useLangStore } from '../i18n/langStore';

export default function OrderComplete({ orderNumber, onReset }) {
  const clearCart = useCartStore((s) => s.clearCart);
  const { t } = useLangStore();

  useEffect(() => {
    clearCart();
    const timer = setTimeout(() => onReset(), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="screen order-complete">
      <div className="complete-icon">✅</div>
      <h1>{t('orderComplete')}</h1>
      <div className="order-number-box">
        <p className="order-label">{t('orderNumberLabel')}</p>
        <p className="order-number">{orderNumber}</p>
      </div>
      <p className="auto-reset">{t('autoReset')}</p>
      <button className="btn-primary" onClick={onReset}>{t('home')}</button>
    </div>
  );
}
