// 认证管理
let isLoggedIn = false;

function checkAuth() {
    // 简化版本：直接返回 true
    console.log('Auth check passed');
    return true;
}

function login(type) {
    console.log('Login called with type:', type);
    isLoggedIn = true;
    return true;
}

function logout() {
    console.log('Logout called');
    isLoggedIn = false;
    window.location.href = 'login.html';
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-[var(--blue)] text-white px-4 py-2 rounded-full border-2 border-black z-[400]';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}
