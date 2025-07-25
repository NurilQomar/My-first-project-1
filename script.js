
document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.item').forEach(i =>
            i.classList.remove('active'))
            item.classList.add('active');
        });
    }); 
    
const items = document.querySelectorAll(".wrapper-card .item");
  let index = 0;

  setInterval(() => {
    items.forEach((item, i) => item.classList.remove("active"));
    items[index % items.length].classList.add("active");
    index++;
  }, 3000);
  
instagram.addEventListener("click",async ()=>{
  instagram.style.color = '#536ee0';
  setTimeout(() => {
    instagram.style.color = "black";
    instagram.style.fontSize = "30px"
  }, 500);
})
whatsapp.addEventListener("click",()=>{
  whatsapp.style.color = '#6ff624';
})
facebook.addEventListener("click",()=>{
  facebook.style.color = '#316fea';
})
youtube.addEventListener("click",()=>{
  youtube.style.color = '#de2626';
})
