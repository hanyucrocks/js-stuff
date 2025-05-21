// DOM new element shuru
/*
parent children stuff and stuff

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bg-black{
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>
<body style="background-color: #212121; color:#fff;">
    <div class="parent">
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
<script>
    // const parent = document.querySelector('.parent')
    // for(let i = 0; i < parent.children.length;i++){
    //     console.log(parent.children[i].innerHTML);
    // }
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    // const dyaone = document.querySelector('.day')
    // console.log(dyaone);
    // console.log(dyaone.nextElementSibling);

    // console.log("NODES: ", parent.childNodes);
    const div = document.createElement('div');
    console.log(div);
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title", "generated tiote")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    // div.innerText = "blue is the warmest "
    const addText = document.createTextNode("below her mouth")
    div.appendChild(addText)
    
    document.body.appendChild(div)
</script>
</html>



*/