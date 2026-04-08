import { useCartStore, selectTotalPrice, getItemPrice } from '../cart/cartStore';
import { useLangStore } from '../i18n/langStore';

export default function OrderConfirm({ onBack, onPay }) {
  const items = useCartStore((s) => s.items);
  const total = useCartStore(selectTotalPrice);
  const { lang, t } = useLangStore();

  return (
    <div className="screen order-confirm">
      <h1>{t('orderConfirm')}</h1>

      <ul className="confirm-list">
        {items.map((item) => {
          const displayName = lang === 'en' ? (item.nameEn ?? item.name) : item.name;
          return (
            <li key={item.menuId} className="confirm-row">
              <span className="confirm-name">
                {displayName}
                {item.shotCount > 0 && ` (${t('shot')} ${item.shotCount})`}
                {' '}× {item.quantity}
              </span>
              <span className="confirm-price">{getItemPrice(item).toLocaleString()}원</span>
            </li>
          );
        })}
      </ul>

      <div className="confirm-total">
        <span>{t('totalAmount')}</span>
        <span className="total-price">{total.toLocaleString()}원</span>
      </div>

      <div className="confirm-actions">
        <button className="btn-secondary" onClick={onBack}>{t('back')}</button>
        <button className="btn-primary" onClick={onPay}>{t('pay')}</button>
      </div>
    </div>
  );
}
