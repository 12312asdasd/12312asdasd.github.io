// Контент для модальных окон
const details = {
    'details-ban': {
        title: 'подробности сноса',
        text: 'не стопроцентный. Вы оплачиваете 250р только тогда, когда аккаунт будет снесен. Время ожидания 1-7 дней.'
    },
    'details-info': {
        title: 'подробнее',
        text: 'поиск данных людей тоже не стопроцентный, примерный срок исполнения до 3 дней.'
    },
    'details-anime': {
        title: 'подробности',
        text: 'аниме сигна- вы даете мне название вашего аниме персонажа, фон и текст который там должен присутствовать. После чего я вам дам итог работы.'
    },
    'details-portrait': {
        title: 'подробности',
        text: 'портер с человеком- вы даёте мне свое фото в полный рост и фото аниме персонажа/вашей подруги/друга или же любого человека в мире (даже флаттершай к примеру)'
    }
};

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function showModal(detailKey) {
    const modal = document.getElementById('modal');
    const data = details[detailKey];
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-text').innerText = data.text;
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

function showError() {
    alert("товаров нету в наличии");
}
