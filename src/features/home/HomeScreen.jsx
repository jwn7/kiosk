import { useLangStore } from '../i18n/langStore';

export default function HomeScreen({ onStart }) {
  const { lang, setLang, t } = useLangStore();

  const handleSelect = (type) => {
    useLangStore.getState().setOrderType(type);
    onStart();
  };

  return (
    <div className="home-screen">
      <div className="home-lang-toggle">
        <button
          className={`lang-btn ${lang === 'ko' ? 'active' : ''}`}
          onClick={() => setLang('ko')}
        >
          한국어
        </button>
        <span className="lang-divider">|</span>
        <button
          className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => setLang('en')}
        >
          English
        </button>
      </div>

      <div className="home-brand">
        <span className="home-brand-icon">☕</span>
        <h1 className="home-brand-name">{t('brand')}</h1>
      </div>

      <p className="home-subtitle">{t('selectOrderType')}</p>

      <div className="home-order-types">
        <button className="order-type-btn" onClick={() => handleSelect('dine-in')}>
          <span className="order-type-icon">🍽️</span>
          <span className="order-type-label">{t('dineIn')}</span>
          <span className="order-type-desc">{t('dineInDesc')}</span>
        </button>
        <button className="order-type-btn" onClick={() => handleSelect('takeout')}>
          <span className="order-type-icon">🛍️</span>
          <span className="order-type-label">{t('takeout')}</span>
          <span className="order-type-desc">{t('takeoutDesc')}</span>
        </button>
      </div>
    </div>
  );
}
