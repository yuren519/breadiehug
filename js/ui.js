// UI 工具函数
function closeModal(event, id) {
    if (event.target.id === id) {
        document.getElementById(id).classList.remove('active');
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-[var(--blue)] text-white px-4 py-2 rounded-full border-2 border-black z-[400]';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1500);
}
