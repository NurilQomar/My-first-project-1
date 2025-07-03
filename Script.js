
document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.item').forEach(i =>
            i.classList.remove('active'))
            item.classList.add('active');
            console.log(item)
            console.log(i)
        });
    }); 
    
const items = document.querySelectorAll(".wrapper-card .item");
  let index = 0;

  setInterval(() => {
    items.forEach((item, i) => item.classList.remove("active"));
    items[index % items.length].classList.add("active");
    index++;
  }, 3000);
  
instagram.addEventListener("click",()=>{
  instagram.style.color = 'purple';
})