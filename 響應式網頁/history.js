let leftList=document.querySelector(".leftlist");
let content=document.querySelector(".content");

content.addEventListener("mouseover",function(){
    content.innerText="King Gnu曾經說過「要成為一個群體，歌聲是必要的，如果只有樂器沒辦法聚集人心，人會因為人聲而被煽動、心被觸動、甚至想要跟著歌唱。」";
    content.style.color="white";
    content.style.background="rgb(144, 141, 141, 0.6)";
    content.style.textShadow=" 0.1em 0.1em #111";
})
content.addEventListener("mouseleave",function(){
    content.innerText="King Gnu（日語：King Gnu／キングヌー kingu nū */?）是一個日本4人搖滾樂隊，於2017年以常田大希為核心結成。現為日本索尼音樂旗下藝人。";
    content.style.color="black";
    content.style.background="rgb(244, 230, 230, 0.6)";
    content.style.textShadow="";
})
