var arr=[
    {
        dp: "https://plus.unsplash.com/premium_photo-1720253089384-6876aba379e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3V0ZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1626548307930-deac221f87d9?q=80&w=834&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww", story:"https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww"},{dp:"https://images.unsplash.com/photo-1751378679063-cbd774c0f973?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww"},{dp:"https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",story:"https://plus.unsplash.com/premium_photo-1664267832256-176e55ccafd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"}
]

var clutter='';
arr.forEach(function(elm,idx){
    clutter+= `<div class="story">
                 <img id="${idx}" src="${elm.dp}" alt="">
            </div>`
})

var str= document.querySelector("#storybar")

str.innerHTML=clutter
str.addEventListener('click',function(dets){

    document.querySelector('#full-screen').style.display='block'
    document.querySelector('#full-screen').style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display='none'
    },2000)
})


