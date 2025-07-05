let main = document.querySelector(".main");
let s = "";

let links = [
    "https://yt3.googleusercontent.com/SrR4yedn6iaf431Y8ciCu6m_NTu0xqPyAYTps0WV0QgQO9NA2JUZDdJMg4435wI-wR8peEW59A=s900-c-k-c0x00ffffff-no-rj",
    "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
];

for (let i = 0; i <= 43; i++) {
    let randNum = Math.floor(Math.random()*4)
    s += `<div class="card"><img src='${links[randNum]}'></img></div>`;
}
main.innerHTML = s;
main.addEventListener("dblclick",()=>{
    main.style.backgroundColor = 'red';
})