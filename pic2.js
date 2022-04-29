const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')
const container= document.querySelector('.carousel')
 
let idx = 0

// 每兩秒執行函式run一次
let interval = setInterval(run, 2000)

// idx+1，然後執行changeImage函式
function run() {
    idx++
    changeImage()
}

// 比對idx和img陣列的長度，然後判斷要輸出什麼值來套用translateX屬性
function changeImage() {
    // 由於array.length是從1開始計算，跟index的起始數字不同，因此img.length要 - 1
    if(idx > img.length - 1) {
        idx = 0
      // 避免prev按鈕行為讓idx小於零
    } else if(idx < 0) {
        idx = img.length - 1
    }
    // 從這行translateX可以判斷，idx最初必須為零，然後要顯示最後一張圖片，idx不能大於img.length
    console.log(container.getBoundingClientRect().width);
    imgs.style.transform = `translateX(${-idx * container.getBoundingClientRect().width}px)`
}

// next按鈕行為，先改變圖片位置，兩秒後再重啟計時器。
rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

// prev按鈕行為
leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

// 重設計時器
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}