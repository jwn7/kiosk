import { useCartStore, selectTotalPrice } from './cartStore';
import CartItem from './CartItem';

export default function CartPanel({ onOrder }) {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const total = useCartStore(selectTotalPrice);

  return (
    <aside className="cart-panel">
      <div className="cart-header">
        <h2>장바구니</h2>
        {items.length > 0 && (
          <button className="clear-btn" onClick={clearCart}>전체 취소</button>
        )}
      </div>

      <div className="cart-items">
        {items.length === 0 ? (
          <p className="cart-empty">메뉴를 선택해주세요</p>
        ) : (
          items.map((item) => <CartItem key={item.menuId} item={item} />)
        )}
      </div>

      <div className="cart-footer">
        <div className="total-row">
          <span>합계</span>
          <span className="total-price">{total.toLocaleString()}원</span>
        </div>
        <button
          className="order-btn"
          disabled={items.length === 0}
          onClick={onOrder}
        >
          주문하기
        </button>
      </div>
    </aside>
  );
}
