export const menuCategories = [
  {
    id: 'coffee',
    name: '커피류',
    price: 2000,
    allowShot: true,
    items: [
      { id: 'americano-hot', name: '아메리카노 (핫)' },
      { id: 'americano-ice', name: '아메리카노 (아이스)' },
      { id: 'latte-hot', name: '카페라떼 (핫)' },
      { id: 'latte-ice', name: '카페라떼 (아이스)' },
      { id: 'cappuccino-hot', name: '카푸치노 (핫)' },
      { id: 'cappuccino-ice', name: '카푸치노 (아이스)' },
    ],
  },
  {
    id: 'drink',
    name: '음료류',
    price: 4000,
    allowShot: false,
    items: [
      { id: 'choco-frappe', name: '초코프라페' },
      { id: 'strawberry-frappe', name: '딸기프라페' },
      { id: 'banana-frappe', name: '바나나프라페' },
      { id: 'mint-frappe', name: '민트프라페' },
      { id: 'cherry-coke', name: '체리콕' },
    ],
  },
  {
    id: 'tea',
    name: '차류',
    price: 2000,
    allowShot: false,
    items: [
      { id: 'hibiscus', name: '히비스커스' },
      { id: 'green-tea', name: '녹차' },
      { id: 'chamomile', name: '캐모마일' },
      { id: 'peppermint', name: '페퍼민트' },
      { id: 'rooibos', name: '루이보스' },
    ],
  },
  {
    id: 'dessert',
    name: '디저트류',
    price: 4000,
    allowShot: false,
    items: [
      { id: 'cake', name: '케익' },
      { id: 'salt-bread', name: '소금빵' },
      { id: 'butter-bread', name: '버터빵' },
      { id: 'choco-cookie', name: '초코쿠키' },
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
