// ★ローディング画面

// ローダーを最低でもこれだけは表示してから消す（ミニマム表示時間）
const MIN_DURATION = 600; // ms（任意で調整）

const loader = document.getElementById('loader');
const start = performance.now();

function hideLoader() {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, MIN_DURATION - elapsed);
    setTimeout(() => loader?.classList.add('is-hidden'), wait);
}

// ページの初期パース完了時点でもう少し待機しておく場合（任意）
// document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', hideLoader);

// 画像読み込み失敗などでロードイベントが来ない最悪ケース対策（タイムアウト）
setTimeout(() => {
    if (!loader.classList.contains('is-hidden')) hideLoader();
}, 8000); // 8秒で強制的に閉じる（任意）
``


// ★スライドメニュー
const openBtn = document.querySelector("#menu-open") //開くボタン
const closeBtn = document.querySelector("#menu-close") //閉じるボタン
const menuPanel = document.querySelector("#menu-panel") //パネル全体
const menuLists = document.querySelectorAll(".menu-list li") //リスト配列
// メニュー全体で使いまわすtimingOptions
const menuOptions = {
    duration: 1400,
    easing:'ease',
    fill:'forwards'
}

// メニューを開く処理
openBtn.addEventListener('click',()=>{
    menuPanel.animate(
        {
            translate: ['100vw', 0]
        },
    menuOptions
    );
});

// メニューを閉じる処理
closeBtn.addEventListener('click',()=>{
    menuPanel.animate(
        {
            translate: [0,'100vw']
        },
    menuOptions
    );
});


// ★吹き出しのランダムメッセージ
function randomMessage() {
    const messages = [
        "こんにちは！", 
        "こんばんは！", 
        "おはよう！", 
        "はろー！", 
        "やほー！"
    ];

    const el = document.getElementById("random-message");
    el.textContent = messages[Math.floor(Math.random() * messages.length)];
}

document.addEventListener("DOMContentLoaded", randomMessage);
``
