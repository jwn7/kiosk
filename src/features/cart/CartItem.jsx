import { useCartStore, getItemPrice } from './cartStore';
import { useLangStore } from '../i18n/langStore';

export default function CartItem({ item }) {
  const updateQty = useCartStore((s) => s.updateQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const addShot = useCartStore((s) => s.addShot);
  const removeShot = useCartStore((s) => s.removeShot);
  const { lang, t } = useLangStore();

  const displayName = lang === 'en' ? (item.nameEn ?? item.name) : item.name;

  return (
    <div className="cart-item">
      <div className="cart-item-top">
        <span className="cart-item-name">{displayName}</span>
        <button className="remove-btn" onClick={() => removeItem(item.menuId)}>✕</button>
      </div>

      {item.allowShot && (
        <div className="shot-control">
          <span className="shot-label">{t('shotAdd')}</span>
          <button className="shot-btn" onClick={() => removeShot(item.menuId)} disabled={item.shotCount === 0}>−</button>
          <span className="shot-count">{item.shotCount}</span>
          <button className="shot-btn" onClick={() => addShot(item.menuId)} disabled={item.shotCount === 2}>+</button>
          {item.shotCount > 0 && (
            <span className="shot-extra">+{(item.shotCount * 500).toLocaleString()}원</span>
          )}
        </div>
      )}

      <div className="cart-item-bottom">
        <div className="qty-control">
          <button className="qty-btn" onClick={() => updateQty(item.menuId, -1)} disabled={item.quantity === 1}>−</button>
          <span className="qty-count">{item.quantity}</span>
          <button className="qty-btn" onClick={() => updateQty(item.menuId, 1)} disabled={item.quantity === 999}>+</button>
        </div>
        <span className="item-subtotal">{getItemPrice(item).toLocaleString()}원</span>
      </div>
    </div>
  );
}
