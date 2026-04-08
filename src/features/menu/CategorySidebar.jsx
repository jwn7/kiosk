import { menuCategories } from './menuData';
import { useLangStore } from '../i18n/langStore';

const ICONS = { coffee: '☕', drink: '🧋', tea: '🍵', dessert: '🍰' };

export default function CategorySidebar({ activeCategory, onSelect }) {
  const { lang, t } = useLangStore();

  return (
    <aside className="category-sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-icon">☕</span>
        <span className="sidebar-logo-text">Shot Up</span>
      </div>
      <nav className="sidebar-nav">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onSelect(cat.id)}
          >
            <span className="cat-icon">{ICONS[cat.id]}</span>
            <span className="cat-name">{lang === 'en' ? cat.nameEn : cat.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
