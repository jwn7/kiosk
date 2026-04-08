import { create } from 'zustand';
import { translations } from './translations';

export const useLangStore = create((set, get) => ({
  lang: 'ko',
  orderType: null, // 'dine-in' | 'takeout'
  setLang: (lang) => set({ lang }),
  setOrderType: (type) => set({ orderType: type }),
  t: (key) => translations[get().lang][key] ?? key,
}));
