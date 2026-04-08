export const menuCategories = [
  {
    id: 'coffee',
    name: '커피류',
    price: 2000,
    allowShot: true,
    items: [
      { id: 'americano-hot', name: '아메리카노 (핫)', image: '/menu/americano-hot.jpg' },
      { id: 'americano-ice', name: '아메리카노 (아이스)', image: '/menu/americano-ice.jpg' },
      { id: 'latte-hot', name: '카페라떼 (핫)', image: '/menu/latte-hot.jpg' },
      { id: 'latte-ice', name: '카페라떼 (아이스)', image: '/menu/latte-ice.jpg' },
      { id: 'cappuccino-hot', name: '카푸치노 (핫)', image: '/menu/cappuccino-hot.jpg' },
      { id: 'cappuccino-ice', name: '카푸치노 (아이스)', image: '/menu/cappuccino-ice.jpg' },
    ],
  },
  {
    id: 'drink',
    name: '음료류',
    price: 4000,
    allowShot: false,
    items: [
      { id: 'choco-frappe', name: '초코프라페', image: '/menu/choco-frappe.jpg' },
      { id: 'strawberry-frappe', name: '딸기프라페', image: '/menu/strawberry-frappe.jpg' },
      { id: 'banana-frappe', name: '바나나프라페', image: '/menu/banana-frappe.jpg' },
      { id: 'mint-frappe', name: '민트프라페', image: '/menu/mint-frappe.jpg' },
      { id: 'cherry-coke', name: '체리콕', image: '/menu/cherry-coke.jpg' },
    ],
  },
  {
    id: 'tea',
    name: '차류',
    price: 2000,
    allowShot: false,
    items: [
      { id: 'hibiscus', name: '히비스커스', image: '/menu/hibiscus.jpg' },
      { id: 'green-tea', name: '녹차', image: '/menu/green-tea.jpg' },
      { id: 'chamomile', name: '캐모마일', image: '/menu/chamomile.png' },
      { id: 'peppermint', name: '페퍼민트', image: '/menu/peppermint.jpg' },
      { id: 'rooibos', name: '루이보스', image: '/menu/rooibos.jpg' },
    ],
  },
  {
    id: 'dessert',
    name: '디저트류',
    price: 4000,
    allowShot: false,
    items: [
      { id: 'cake', name: '케익', image: '/menu/cake.jpg' },
      { id: 'salt-bread', name: '소금빵', image: '/menu/salt-bread.jpg' },
      { id: 'butter-bread', name: '버터빵', image: '/menu/butter-bread.jpg' },
      { id: 'choco-cookie', name: '초코쿠키', image: '/menu/choco-cookie.jpg' },
    ],
  },
];

// menuId → category 매핑 (빠른 조회)
export const menuMap = {};
for (const cat of menuCategories) {
  for (const item of cat.items) {
    menuMap[item.id] = { ...item, category: cat.id, basePrice: cat.price, allowShot: cat.allowShot };
  }
}
