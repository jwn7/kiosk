import { menuCategories } from './menuData';

const ICONS = {
  coffee: '☕',
  drink: '🧋',
  tea: '🍵',
  dessert: '🍰',
};

export default function CategorySidebar({ activeCategory, onSelect }) {
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
            <span className="cat-name">{cat.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
