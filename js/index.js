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


// 吹き出しのランダムメッセージ
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
