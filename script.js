// ఈవెంట్ల డేటా fetch చేసేది
fetch('events.json')
  .then((res) => res.json())
  .then((events) => {
    const list = document.getElementById('event-list');

    events.forEach((event) => {
      // కార్డు div create
      const card = document.createElement('div');
      card.className = 'event-card';

      // event చిత్రాన్ని చూపించండి
      const img = document.createElement('img');
      img.src = `images/${event.images[0]}`;
      img.alt = event.title;
      card.appendChild(img);

      // కార్డు కంటెంట్ (పేరు & తేది)
      const content = document.createElement('div');
      content.className = 'event-card-content';
      content.innerHTML = `
        <h3>${event.title}</h3>
        <p>తేది: ${event.time}</p>
        <p>స్థలం: ${event.location}</p>
      `;
      card.appendChild(content);

      // క్లిక్ చేస్తే మోడల్ చూపించాలి
      card.onclick = () => showModal(event);
      list.appendChild(card);
    });
  })
  .catch((err) => console.error('ఎర్రర్:', err));

// మోడల్ చూపించే ఫంక్షన్
function showModal(event) {
  const modal = document.getElementById('event-modal');
  const modalData = document.getElementById('modal-data');

  // మోడల్‌లో వివరాలు జోడించు
  modalData.innerHTML = `
    <h3>${event.title}</h3>
    <p><strong>సమయం:</strong> ${event.time}</p>
    <p><strong>ప్రదేశం:</strong> ${event.location}</p>
    <div class="modal-images">
      ${event.images.map((img) => `<img src="images/${img}" alt="${event.title}">`).join('')}
    </div>
  `;

  modal.style.display = 'block';
}

// మోడల్ మూసే బటన్
document.querySelector('.close-btn').onclick = () => {
  document.getElementById('event-modal').style.display = 'none';
};

// బహుశా యూజర్Backdrop క్లిక్ చేస్తే కూడా మూసేయాలి
window.onclick = (e) => {
  if (e.target.id === 'event-modal') {
    document.getElementById('event-modal').style.display = 'none';
  }
};
