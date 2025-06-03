fetch('events.json')
  .then(res => res.json())
  .then(events => {
    const list = document.getElementById('event-list');
    events.forEach((event, index) => {
      const div = document.createElement('div');
      div.className = 'event-card';
      div.innerText = event.title;
      div.onclick = () => showModal(event);
      list.appendChild(div);
    });
  });

function showModal(event) {
  const modal = document.getElementById('event-modal');
  const modalData = document.getElementById('modal-data');
  modalData.innerHTML = `
    <h3>${event.title}</h3>
    <p><strong>సమయం:</strong> ${event.time}</p>
    <p><strong>ప్రదేశం:</strong> ${event.location}</p>
    ${event.images.map(img => `<img src="images/${img}" width="100%">`).join('')}
  `;
  modal.style.display = 'block';
}

document.querySelector('.close-btn').onclick = () => {
  document.getElementById('event-modal').style.display = 'none';
}
