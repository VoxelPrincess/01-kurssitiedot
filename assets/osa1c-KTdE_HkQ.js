import{j as e,c}from"./client-Cgxip4d8.js";const l=t=>{const o="Pekka",{counter:a}=t,i=n=>new Date().getFullYear()-n,s=({name:n,age:r})=>e.jsxs("div",{children:[e.jsxs("p",{children:["Hello ",n,", you are ",r," years old"]}),e.jsxs("p",{children:["So you were probably born ",i(r)]})]});return e.jsxs("div",{children:[e.jsx("h3",{children:"Greetings"}),e.jsx(s,{name:"Maya",age:36}),e.jsx(s,{name:o,age:10}),e.jsx("div",{children:a})]})};let d=1;const j=()=>e.jsxs("main",{children:[e.jsx("h1",{children:"Osa 1c Komponentin tila ja tapahtumankäsittely"}),e.jsx("div",{className:"theory",children:e.jsx(l,{counter:d})})]});c.createRoot(document.getElementById("root")).render(e.jsx(j,{}));
