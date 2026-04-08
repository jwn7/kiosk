export async function submitOrder(_items, _paymentMethod, _totalPrice) {
  // Firebase 없이 랜덤 4자리 주문번호 생성
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const orderNumber = Array.from({ length: 4 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('');
  return orderNumber;
}
