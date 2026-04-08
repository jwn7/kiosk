import { menuCategories } from './menuData';

export default function CategorySidebar({ activeCategory, onSelect }) {
  return (
    <aside className="category-sidebar">
      {menuCategories.map((cat) => (
        <button
          key={cat.id}
          className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </aside>
  );
}
