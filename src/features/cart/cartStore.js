import { create } from 'zustand';
import { menuMap } from '../menu/menuData';

export const getItemPrice = (item) =>
  (item.basePrice + item.shotCount * 500) * item.quantity;

export const selectTotalPrice = (state) =>
  state.items.reduce((sum, item) => sum + getItemPrice(item), 0);

export const useCartStore = create((set) => ({
  items: [],

  addItem: (menuId) => {
    const menu = menuMap[menuId];
    if (!menu) return;
    set((state) => {
      const existing = state.items.find((i) => i.menuId === menuId);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.menuId === menuId ? { ...i, quantity: Math.min(i.quantity + 1, 999) } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            menuId,
            name: menu.name,
            category: menu.category,
            basePrice: menu.basePrice,
            allowShot: menu.allowShot,
            quantity: 1,
            shotCount: 0,
          },
        ],
      };
    });
  },

  removeItem: (menuId) =>
    set((state) => ({ items: state.items.filter((i) => i.menuId !== menuId) })),

  updateQty: (menuId, delta) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.menuId === menuId
          ? { ...i, quantity: Math.min(Math.max(i.quantity + delta, 1), 999) }
          : i
      ),
    })),

  addShot: (menuId) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.menuId === menuId && i.allowShot && i.shotCount < 2
          ? { ...i, shotCount: i.shotCount + 1 }
          : i
      ),
    })),

  removeShot: (menuId) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.menuId === menuId && i.shotCount > 0
          ? { ...i, shotCount: i.shotCount - 1 }
          : i
      ),
    })),

  clearCart: () => set({ items: [] }),
}));
