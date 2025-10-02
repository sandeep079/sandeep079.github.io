fetch('/posts.json')
  .then(r => r.json())
  .then(data => {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('results');
    const list = document.getElementById('postList');
    input.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      if (!q) { results.innerHTML = ''; list.style.display = ''; return; }
      const filtered = data.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
      list.style.display = 'none';
      results.innerHTML = filtered.length
        ? '<ul>' + filtered.map(p =>
            `<li><a href="${p.url}">${p.title}</a><p>${p.excerpt}</p></li>`).join('')
        + '</ul>'
        : '<p>No matches</p>';
    });
  });