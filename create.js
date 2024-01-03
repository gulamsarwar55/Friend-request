const a = document.querySelector("#center");
const b = document.querySelector("#plus");

a.addEventListener("click", ()=> {
    document.querySelector("#center").innerHTML = `confirm`;
    a.style.backgroundColor="green";
})


b.addEventListener("click", () => {
    a.innerHTML=`Add friend`;
    a.style.backgroundColor="blue";
})