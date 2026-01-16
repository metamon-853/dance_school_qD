// ハンバーガーメニューの開閉
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // メニュー内のリンクをクリックしたときにメニューを閉じる
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // メニュー外をクリックしたときにメニューを閉じる
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// スクロール時のヘッダー表示制御
let lastScroll = 0;
let scrollThreshold = 100; // この値以上スクロールしたらヘッダーを表示/非表示
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // トップ付近では常に表示
    if (currentScroll < 50) {
        header.classList.add('visible');
    } else {
        // スクロール方向を検知
        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            // 下にスクロール中 → 非表示
            header.classList.remove('visible');
        } else if (currentScroll < lastScroll) {
            // 上にスクロール中 → 表示
            header.classList.add('visible');
        }
    }
    
    // シャドウの調整
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// フェードインアニメーション（スクロール時）
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象の要素を監視
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.class-card, .feature, .contact-info, .contact-form');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // お問い合わせフォームの処理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// フォーム送信処理
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // バリデーション
    if (!validateForm(form)) {
        return;
    }
    
    // 送信ボタンを無効化
    submitButton.disabled = true;
    submitButton.textContent = '送信中...';
    
    // ここで実際の送信処理を実装
    // 例：メール送信サービス（Formspree、EmailJSなど）を使用
    // または、サーバーサイドのAPIエンドポイントに送信
    
    // デモ用：送信成功のメッセージを表示
    setTimeout(() => {
        alert('お問い合わせありがとうございます。\n内容を確認次第、ご連絡いたします。');
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = '送信する';
    }, 1000);
    
    // 実際の送信処理の例（コメントアウト）:
    /*
    fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('お問い合わせありがとうございます。\n内容を確認次第、ご連絡いたします。');
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = '送信する';
    })
    .catch(error => {
        alert('送信に失敗しました。もう一度お試しください。');
        submitButton.disabled = false;
        submitButton.textContent = '送信する';
    });
    */
}

// フォームバリデーション
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ff6b6b';
            
            // エラー表示をリセット
            setTimeout(() => {
                field.style.borderColor = '#e0e0e0';
            }, 3000);
        } else {
            field.style.borderColor = '#e0e0e0';
        }
    });
    
    // メールアドレスの形式チェック
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            isValid = false;
            emailField.style.borderColor = '#ff6b6b';
            alert('正しいメールアドレスを入力してください。');
            setTimeout(() => {
                emailField.style.borderColor = '#e0e0e0';
            }, 3000);
        }
    }
    
    if (!isValid) {
        alert('必須項目を入力してください。');
    }
    
    return isValid;
}

