import { useCartStore, selectTotalPrice } from './cartStore';
import { useLangStore } from '../i18n/langStore';
import CartItem from './CartItem';

export default function CartPanel({ onOrder }) {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const total = useCartStore(selectTotalPrice);
  const { t, orderType } = useLangStore();

  return (
    <aside className="cart-panel">
      <div className="cart-header">
        <div className="cart-title-row">
          <h2>{t('cart')}</h2>
          {orderType && (
            <span className={`order-type-badge ${orderType}`}>
              {orderType === 'dine-in' ? t('dineInBadge') : t('takeoutBadge')}
            </span>
          )}
        </div>
        {items.length > 0 && (
          <button className="clear-btn" onClick={clearCart}>{t('clearAll')}</button>
        )}
      </div>

      <div className="cart-items">
        {items.length === 0 ? (
          <p className="cart-empty">{t('emptyCart')}</p>
        ) : (
          items.map((item) => <CartItem key={item.menuId} item={item} />)
        )}
      </div>

      <div className="cart-footer">
        <div className="total-row">
          <span>{t('total')}</span>
          <span className="total-price">{total.toLocaleString()}원</span>
        </div>
        <button
          className="order-btn"
          disabled={items.length === 0}
          onClick={onOrder}
        >
          {t('orderBtn')}
        </button>
      </div>
    </aside>
  );
}
