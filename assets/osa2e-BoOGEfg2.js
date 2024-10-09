import{j as e,r as u,c as v}from"./client-Cgxip4d8.js";import{a as d}from"./axios-BimPEqV4.js";const g=t=>e.jsxs("form",{onSubmit:t.addName,children:[e.jsxs("div",{children:["Name:",e.jsx("input",{name:"name",value:t.newName})]}),e.jsxs("div",{children:["Number:",e.jsx("input",{name:"number",value:t.newNumber})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",children:"Add"})})]}),p=t=>e.jsxs("div",{children:["filter shown with",e.jsx("input",{value:t.filters,onChange:t.handleFilterChange})]}),c="http://localhost:3001/persons",N=()=>d.get(c).then(s=>s.data),q=t=>d.post(c,t).then(r=>r.data),y=(t,s)=>d.put(`${c}/${t}`,s).then(h=>h.data),P=t=>d.delete(`${c}/${t}`).then(r=>r.data),o={getAll:N,create:q,update:y,deleteItem:P},k=({person:t,onDelete:s})=>e.jsxs("li",{children:[e.jsxs("span",{children:[t.name," ",t.number]})," ",e.jsx("button",{onClick:()=>{window.confirm("Do you want to delete "+t.name+"?")&&o.deleteItem(t.id).then(()=>s())},children:"Delete"})]}),A=()=>{const[t,s]=u.useState([]),[r,h]=u.useState("");u.useEffect(()=>{o.getAll().then(n=>{s(n)})},[]);const j=n=>{n.preventDefault();const i=n.target.elements.name.value,w=n.target.elements.number.value,m={name:i,number:w},l=t.find(a=>a.name===i);l?window.confirm(l.name+" is already added to phonebook, replace the old number with a new one?")&&o.update(l.id,m).then(a=>{s(t.map(x=>x.id!==l.id?x:a)),n.target.reset()}):o.create(m).then(a=>{s(t.concat(a)),n.target.reset()})},b=t.filter(n=>n.name.toLowerCase().includes(r.toLowerCase())),f=n=>{h(n.target.value)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Phonebook"}),e.jsx(p,{filters:r,handleFilterChange:f}),e.jsx("h3",{children:"Add a new"}),e.jsx(g,{addName:j}),e.jsx("h2",{children:"Numbers"}),e.jsx("ul",{children:b.map(n=>e.jsx(k,{person:n,onDelete:()=>{o.getAll().then(i=>{s(i)})}},n.id))})]})},C=()=>e.jsxs("main",{children:[e.jsx("h1",{children:"Osa 2e Tyylien lisääminen React-sovellukseen"}),e.jsx("div",{className:"theory"}),e.jsx("h2",{children:"Tehtävät 2.16.-2.17."}),e.jsx("div",{className:"task"}),e.jsx("div",{className:"theory",children:e.jsx(A,{})}),e.jsx("h2",{children:"Tehtävät 2.18.-2.20."}),e.jsx("div",{className:"task"})]});v.createRoot(document.getElementById("root")).render(e.jsx(C,{}));
