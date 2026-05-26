export function setMeta({ title, description, keywords }) {
  if (typeof document === 'undefined') return;

  if (title) document.title = title;

  const ensureMeta = (name) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    return el;
  };

  if (description !== undefined) {
    ensureMeta('description').setAttribute('content', description);
  }

  if (keywords !== undefined) {
    ensureMeta('keywords').setAttribute('content', keywords);
  }
}

export function clearMeta(names = ['description', 'keywords']) {
  if (typeof document === 'undefined') return;
  names.forEach((name) => {
    const el = document.querySelector(`meta[name="${name}"]`);
    if (el) el.remove();
  });
}
