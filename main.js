
const products = [
    { id: 1, name: "Áo Sơ Mi Trắng Premium", price: 390000, category: "ao", badge: "HOT", img: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Áo Thun Oversize Trắng Basic", price: 250000, category: "ao", badge: "NEW", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Quần Tây Nam Form Slimfit", price: 480000, category: "quan", badge: "", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Giày Sneaker Cổ Điển White", price: 690000, category: "phukien", badge: "BEST", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Áo Khoác Blazer Hàn Quốc", price: 890000, category: "ao", badge: "SALE", img: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Túi Xách Da Công Sở", price: 580000, category: "phukien", badge: "", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Áo Polo Nam Phong Cách", price: 320000, category: "ao", badge: "", img: "https://images.unsplash.com/photo-1625910513413-5fc2841f3e79?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Quần Jeans Denim Cổ Điển", price: 520000, category: "quan", badge: "", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Mũ Khaki Minimalist", price: 180000, category: "phukien", badge: "", img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Áo Hoodie Be Nữ Tính", price: 420000, category: "ao", badge: "NEW", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Quần Short Kaki Năng Động", price: 290000, category: "quan", badge: "", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80" },
    { id: 12, name: "Kính Râm Thời Trang Alpha", price: 260000, category: "phukien", badge: "HOT", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80" },
    { id: 13, name: "Áo Len Dệt Kim Mùa Thu", price: 450000, category: "ao", badge: "", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80" },
    { id: 14, name: "Váy Dài Vintage Thanh Lịch", price: 620000, category: "ao", badge: "NEW", img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80" },
    { id: 15, name: "Áo Khoác Denim Streetwear", price: 750000, category: "ao", badge: "HOT", img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80" },
    { id: 16, name: "Quần Jogging Thể Thao", price: 340000, category: "quan", badge: "", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&q=80" },
    { id: 17, name: "Ví Da Nam Cao Cấp", price: 310000, category: "phukien", badge: "", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80" },
    { id: 18, name: "Giày Loafer Da Thật", price: 820000, category: "phukien", badge: "BEST", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80" },
    { id: 19, name: "Áo Sơ Mi Họa Tiết Tropical", price: 360000, category: "ao", badge: "", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80" },
    { id: 20, name: "Chân Váy Xếp Ly Công Sở", price: 380000, category: "quan", badge: "", img: "https://images.unsplash.com/photo-15883496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80" },
    { id: 21, name: "Thắt Lưng Da Thật Unisex", price: 220000, category: "phukien", badge: "", img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80" },
    { id: 22, name: "Áo Cardigan Len Mỏng", price: 410000, category: "ao", badge: "", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80" },
    { id: 23, name: "Quần Cargo Khaki Nhiều Túi", price: 490000, category: "quan", badge: "HOT", img: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=600&q=80" },
    { id: 24, name: "Đồng Hồ Thời Trang Nam", price: 950000, category: "phukien", badge: "BEST", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80" }
];

const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

const showToast = (msg) => {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<span>✓</span> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
};

const showModal = (title, text, icon = "🎉", onConfirm = null) => {
    let modalOverlay = document.getElementById('customModalOverlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'customModalOverlay';
        modalOverlay.className = 'custom-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="custom-modal">
                <div class="custom-modal-icon" id="modalIcon"></div>
                <div class="custom-modal-title" id="modalTitle"></div>
                <div class="custom-modal-text" id="modalText"></div>
                <button class="btn" id="modalBtn">ĐỒNG Ý</button>
            </div>
        `;
        document.body.appendChild(modalOverlay);
    }
    document.getElementById('modalIcon').textContent = icon;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalText').textContent = text;
    modalOverlay.classList.add('active');
    
    document.getElementById('modalBtn').onclick = () => {
        modalOverlay.classList.remove('active');
        if (onConfirm) onConfirm();
    };
};

const updateHeaderState = () => {
    const cart = JSON.parse(localStorage.getItem('alpha_cart')) || [];
    const countEl = document.getElementById('cartCount');
    if (countEl) countEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    const userBox = document.getElementById('userStateBox');
    if (userBox) {
        const currentUser = JSON.parse(localStorage.getItem('alpha_user'));
        if (currentUser) {
            userBox.innerHTML = `
                <div class="user-info">
                    <span>👤 ${currentUser.fullname || currentUser.email}</span>
                    <button class="btn-logout" onclick="logout()">Thoát</button>
                </div>
            `;
        } else {
            userBox.innerHTML = `<a href="login.html" class="icon" title="Đăng nhập">♙</a>`;
        }
    }
};

window.logout = () => {
    localStorage.removeItem('alpha_user');
    showToast('Đã đăng xuất tài khoản!');
    updateHeaderState();
    setTimeout(() => window.location.reload(), 1000);
};

const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem('alpha_cart')) || [];
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('alpha_cart', JSON.stringify(cart));
    updateHeaderState();
    showToast(`Đã thêm "${product.name}" vào giỏ hàng`);
};

const renderProducts = (items = products, limit = null) => {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    let list = items;
    if (limit) list = items.slice(0, limit);

    grid.innerHTML = list.map((p, idx) => `
        <div class="card" style="animation-delay: ${idx * 0.05}s">
            <div class="photo">
                ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
                <img src="${p.img}" alt="${p.name}" loading="lazy">
            </div>
            <div class="detail">
                <div class="name">${p.name}</div>
                <div class="bottom">
                    <div class="price">${formatPrice(p.price)}</div>
                    <button class="add" onclick="addToCart(${p.id})">+ Thêm</button>
                </div>
            </div>
        </div>
    `).join('');
};

const setupTabs = () => {
    const tabs = document.querySelectorAll('.tab-btn');
    if (tabs.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.dataset.category;
            if (cat === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === cat);
                renderProducts(filtered);
            }
        });
    });
};

const setupSearch = () => {
    const searchInput = document.getElementById('searchInput');
    const suggestionsBox = document.getElementById('searchSuggestions');
    if (!searchInput || !suggestionsBox) return;

    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        if (val.length === 0) {
            suggestionsBox.classList.remove('active');
            return;
        }

        const matches = products.filter(p => p.name.toLowerCase().includes(val)).slice(0, 5);
        if (matches.length > 0) {
            suggestionsBox.innerHTML = matches.map(m => `
                <div class="suggestion-item" onclick="addToCart(${m.id}); document.getElementById('searchSuggestions').classList.remove('active');">
                    <img src="${m.img}" alt="${m.name}">
                    <div class="info">
                        <div class="name">${m.name}</div>
                        <div class="price">${formatPrice(m.price)}</div>
                    </div>
                </div>
            `).join('');
            suggestionsBox.classList.add('active');
        } else {
            suggestionsBox.innerHTML = `<div style="padding:12px; color:#888; text-align:center;">Không tìm thấy sản phẩm</div>`;
            suggestionsBox.classList.add('active');
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.classList.remove('active');
        }
    });
};

const renderCartPage = () => {
    const cartItemsContainer = document.getElementById('cartItemsList');
    if (!cartItemsContainer) return;

    let cart = JSON.parse(localStorage.getItem('alpha_cart')) || [];
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px 0;">
                <p style="color: var(--text-muted); font-size: 16px;">Giỏ hàng của bạn đang trống.</p>
                <a href="products.html" class="btn" style="margin-top: 15px;">KHÁM PHÁ SẢN PHẨM</a>
            </div>
        `;
        document.getElementById('cartTotal').textContent = '0 ₫';
        document.getElementById('cartTotalFinal').textContent = '0 ₫';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-qty">
                    <button onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQty(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeItem(${item.id})">Xóa</button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const formattedTotal = formatPrice(total);
    document.getElementById('cartTotal').textContent = formattedTotal;
    document.getElementById('cartTotalFinal').textContent = formattedTotal;
};

window.updateQty = (id, change) => {
    let cart = JSON.parse(localStorage.getItem('alpha_cart')) || [];
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
        localStorage.setItem('alpha_cart', JSON.stringify(cart));
        renderCartPage();
        updateHeaderState();
    }
};

window.removeItem = (id) => {
    let cart = JSON.parse(localStorage.getItem('alpha_cart')) || [];
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('alpha_cart', JSON.stringify(cart));
    renderCartPage();
    updateHeaderState();
    showToast('Đã xóa sản phẩm khỏi giỏ hàng');
};

document.addEventListener('DOMContentLoaded', () => {
    updateHeaderState();
    setupSearch();
    setupTabs();
    
    if (document.getElementById('homeProductGrid')) {
        renderProducts(products, 6);
    } else {
        renderProducts();
    }

    renderCartPage();

    if (window.location.pathname.includes('login.html')) {
        const users = JSON.parse(localStorage.getItem('alpha_registered_users')) || [];
        if (users.length === 0) {
            showModal("Thông báo", "Bạn chưa có tài khoản. Vui lòng đăng ký trước tiên!", "📌", () => {
                window.location.href = 'register.html';
            });
        }
    }

    const regForm = document.getElementById('registerForm');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullname = document.getElementById('regFullname').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;

            let users = JSON.parse(localStorage.getItem('alpha_registered_users')) || [];
            if (users.some(u => u.email === email)) {
                showModal("Lỗi", "Email này đã tồn tại!", "⚠️");
                return;
            }

            users.push({ fullname, email, password });
            localStorage.setItem('alpha_registered_users', JSON.stringify(users));

            showModal("Đăng ký thành công!", "Tài khoản của bạn đã tạo thành công. Vui lòng đăng nhập.", "🎉", () => {
                window.location.href = 'login.html';
            });
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            let users = JSON.parse(localStorage.getItem('alpha_registered_users')) || [];
            const userMatch = users.find(u => u.email === email && u.password === password);

            if (userMatch) {
                localStorage.setItem('alpha_user', JSON.stringify(userMatch));
                showModal("Đăng nhập thành công", `Chào mừng ${userMatch.fullname} quay trở lại!`, "✨", () => {
                    window.location.href = 'index.html';
                });
            } else {
                showModal("Đăng nhập thất bại", "Email hoặc mật khẩu không chính xác!", "❌");
            }
        });
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            let cart = JSON.parse(localStorage.getItem('alpha_cart')) || [];
            if (cart.length === 0) {
                showModal("Thông báo", "Giỏ hàng của bạn đang trống!", "🛒");
                return;
            }

            const currentUser = JSON.parse(localStorage.getItem('alpha_user'));
            if (!currentUser) {
                showModal("Yêu cầu đăng nhập", "Bạn cần đăng nhập tài khoản để tiến hành đặt hàng!", "🔒", () => {
                    window.location.href = 'login.html';
                });
                return;
            }

            showModal("Đặt hàng thành công", "Đơn hàng của bạn đã gửi đi thành công! Cảm ơn bạn đã lựa chọn Alpha Fashion.", "🎁", () => {
                localStorage.removeItem('alpha_cart');
                window.location.href = 'index.html';
            });
        });
    }
});
