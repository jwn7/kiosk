export const menuCategories = [
  {
    id: 'coffee',
    name: '커피류',
    nameEn: 'Coffee',
    price: 2000,
    allowShot: true,
    items: [
      { id: 'americano-hot',    name: '아메리카노 (핫)',      nameEn: 'Americano (Hot)',      image: '/menu/americano-hot.jpg' },
      { id: 'americano-ice',    name: '아메리카노 (아이스)',  nameEn: 'Americano (Iced)',     image: '/menu/americano-ice.jpg' },
      { id: 'latte-hot',        name: '카페라떼 (핫)',        nameEn: 'Café Latte (Hot)',     image: '/menu/latte-hot.jpg' },
      { id: 'latte-ice',        name: '카페라떼 (아이스)',    nameEn: 'Café Latte (Iced)',    image: '/menu/latte-ice.jpg' },
      { id: 'cappuccino-hot',   name: '카푸치노 (핫)',        nameEn: 'Cappuccino (Hot)',     image: '/menu/cappuccino-hot.jpg' },
      { id: 'cappuccino-ice',   name: '카푸치노 (아이스)',    nameEn: 'Cappuccino (Iced)',    image: '/menu/cappuccino-ice.jpg' },
    ],
  },
  {
    id: 'drink',
    name: '음료류',
    nameEn: 'Drinks',
    price: 4000,
    allowShot: false,
    items: [
      { id: 'choco-frappe',       name: '초코프라페',   nameEn: 'Choco Frappé',      image: '/menu/choco-frappe.jpg' },
      { id: 'strawberry-frappe',  name: '딸기프라페',   nameEn: 'Strawberry Frappé', image: '/menu/strawberry-frappe.jpg' },
      { id: 'banana-frappe',      name: '바나나프라페', nameEn: 'Banana Frappé',     image: '/menu/banana-frappe.jpg' },
      { id: 'mint-frappe',        name: '민트프라페',   nameEn: 'Mint Frappé',       image: '/menu/mint-frappe.jpg' },
      { id: 'cherry-coke',        name: '체리콕',       nameEn: 'Cherry Coke',       image: '/menu/cherry-coke.jpg' },
    ],
  },
  {
    id: 'tea',
    name: '차류',
    nameEn: 'Tea',
    price: 2000,
    allowShot: false,
    items: [
      { id: 'hibiscus',   name: '히비스커스', nameEn: 'Hibiscus',   image: '/menu/hibiscus.jpg' },
      { id: 'green-tea',  name: '녹차',       nameEn: 'Green Tea',  image: '/menu/green-tea.jpg' },
      { id: 'chamomile',  name: '캐모마일',   nameEn: 'Chamomile',  image: '/menu/chamomile.png' },
      { id: 'peppermint', name: '페퍼민트',   nameEn: 'Peppermint', image: '/menu/peppermint.jpg' },
      { id: 'rooibos',    name: '루이보스',   nameEn: 'Rooibos',    image: '/menu/rooibos.jpg' },
    ],
  },
  {
    id: 'dessert',
    name: '디저트류',
    nameEn: 'Dessert',
    price: 4000,
    allowShot: false,
    items: [
      { id: 'cake',         name: '케익',   nameEn: 'Cake',           image: '/menu/cake.jpg' },
      { id: 'salt-bread',   name: '소금빵', nameEn: 'Salt Bread',     image: '/menu/salt-bread.jpg' },
      { id: 'butter-bread', name: '버터빵', nameEn: 'Butter Bread',   image: '/menu/butter-bread.jpg' },
      { id: 'choco-cookie', name: '초코쿠키', nameEn: 'Choco Cookie', image: '/menu/choco-cookie.jpg' },
    ],
  },
];

export const menuMap = {};
for (const cat of menuCategories) {
  for (const item of cat.items) {
    menuMap[item.id] = { ...item, category: cat.id, basePrice: cat.price, allowShot: cat.allowShot };
  }
}
