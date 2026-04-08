import { menuCategories } from './menuData';
import { useCartStore } from '../cart/cartStore';
import { useLangStore } from '../i18n/langStore';

export default function MenuGrid({ activeCategory }) {
  const addItem = useCartStore((s) => s.addItem);
  const items = useCartStore((s) => s.items);
  const lang = useLangStore((s) => s.lang);

  const category = menuCategories.find((c) => c.id === activeCategory);
  if (!category) return null;

  return (
    <div className="menu-grid">
      {category.items.map((item) => {
        const inCart = items.find((i) => i.menuId === item.id);
        const displayName = lang === 'en' ? item.nameEn : item.name;
        return (
          <button
            key={item.id}
            className={`menu-card ${inCart ? 'in-cart' : ''}`}
            onClick={() => addItem(item.id)}
          >
            {item.image && (
              <img src={item.image} alt={displayName} className="menu-img" />
            )}
            <div className="menu-card-body">
              <span className="menu-name">{displayName}</span>
              <span className="menu-price">{category.price.toLocaleString()}원</span>
            </div>
            {inCart && <span className="cart-badge">{inCart.quantity}</span>}
          </button>
        );
      })}
    </div>
  );
}
