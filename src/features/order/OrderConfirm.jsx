import { useCartStore, selectTotalPrice, getItemPrice } from '../cart/cartStore';

export default function OrderConfirm({ onBack, onPay }) {
  const items = useCartStore((s) => s.items);
  const total = useCartStore(selectTotalPrice);

  return (
    <div className="screen order-confirm">
      <h1>주문 확인</h1>

      <ul className="confirm-list">
        {items.map((item) => (
          <li key={item.menuId} className="confirm-row">
            <span className="confirm-name">
              {item.name}
              {item.shotCount > 0 && ` (+샷 ${item.shotCount})`}
              {' '}× {item.quantity}
            </span>
            <span className="confirm-price">{getItemPrice(item).toLocaleString()}원</span>
          </li>
        ))}
      </ul>

      <div className="confirm-total">
        <span>총 금액</span>
        <span className="total-price">{total.toLocaleString()}원</span>
      </div>

      <div className="confirm-actions">
        <button className="btn-secondary" onClick={onBack}>뒤로</button>
        <button className="btn-primary" onClick={onPay}>결제하기</button>
      </div>
    </div>
  );
}
