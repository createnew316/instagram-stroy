var arr=[
    {dp:"https://images.unsplash.com/photo-1662113241777-694279281844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", img:"https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {dp:"https://images.unsplash.com/photo-1661983226582-20cc128803bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",img:"https://images.unsplash.com/photo-1662228733241-3fc5b275adfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"},
    { dp:"https://images.unsplash.com/photo-1662447176130-60356c625453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",img:"https://images.unsplash.com/photo-1662043591521-aa26cf3c6021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    { dp:"https://images.unsplash.com/photo-1662368298353-9bbb868acdd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",img:"https://images.unsplash.com/photo-1662382013448-06a17e4ddc0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    { dp:"https://images.unsplash.com/photo-1662372628736-8d73db5ff270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",img:"https://images.unsplash.com/photo-1662385864104-cddde7bfe5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"},
    {dp:"https://images.unsplash.com/photo-1662390238646-e54b52eec60c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", img:"https://images.unsplash.com/photo-1662330287468-399c22049d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=421&q=80"},
    {dp:"https://images.unsplash.com/photo-1662354798086-4991f12f4854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", img:"https://images.unsplash.com/photo-1662013604057-24f59a2f4f76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"},
    {dp:"https://images.unsplash.com/photo-1662047317898-a4bfef8c2aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",img:"https://images.unsplash.com/photo-1657664072464-e525da1d426e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},
    { dp:"https://images.unsplash.com/photo-1661983229220-aac517da1a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",img:"https://images.unsplash.com/photo-1657214059493-986710bc4788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {dp:"https://images.unsplash.com/photo-1662064355050-90d87b1f93ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", img:"https://images.unsplash.com/photo-1659535907680-0e219b46c01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {dp:"https://images.unsplash.com/photo-1662139118870-c1fb4fe50b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", img:"https://images.unsplash.com/photo-1657664049378-c8aadfe323f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"},
    {dp:"https://images.unsplash.com/photo-1662219718657-825868c36f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", img:"https://images.unsplash.com/photo-1662013605801-805f37020711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"},
    {dp:"https://images.unsplash.com/photo-1662287767572-766aa8cf78f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", img:"https://images.unsplash.com/photo-1661985656718-fa60ef3c26d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
]

var clutter="";

arr.forEach(function(data,idx){
    clutter+= `  <div class="stroyian">
    <img id="${idx}" src="${data.dp}" alt="">
</div>`
})

document.querySelector("#stroy").innerHTML=clutter

document.querySelector("#stroy").addEventListener("click",function(dets){
    document.querySelector("#fullpreview").style.display="initial";
    document.querySelector("#fullpreview").style.backgroundImage=`url(${arr[dets.target.id].img})`;
    setTimeout(function(){
        document.querySelector("#fullpreview").style.display="none";

    },2500)
    if(growth<100){

    setInterval(function(){
        document.querySelector("#growth").style.width=`${growth++}%`;

    },25)
}else{
    growth=0;
}
})

var frame=document.querySelector("#frame");
var once=document.querySelector("#Once");
var icon=document.querySelector("#nav1>#icon1");
var h4=document.querySelector("h4")
var flag=0;
var count=400

frame.addEventListener("dblclick",function(){
    if(flag===0){
        once.style.opacity= `1`;
        once.transition= `.5s ease`;
        icon.style.color="red";
        h4.innerHTML=count;
        count--
        flag=1;

    }
    else{
        once.style.opacity= `0`;
        once.transition= `.5s ease`;
        icon.style.color="white";
        h4.innerHTML=count;
        count++
        flag=0;
    }
})

var h5=document.querySelector("#postid h5")

h5.addEventListener("click",function(){
    if(flag===0){
        h5.innerHTML="Follow";
        h5.style.color="black";
        flag=1;
    }
    else{
        h5.innerHTML="Following";
        h5.style.color="blue";
        flag=0
    }
})