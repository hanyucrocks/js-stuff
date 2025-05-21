// DOM 4th
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <ul class="language">
        <li>Characters</li>
    </ul>
</body>
<script>
    function addLanguage(LangName){
        const li = document.createElement('li');
        li.innerHTML = `${LangName}`
        document.querySelector('.language').appendChild(li)
    }
    addLanguage("jasmine")
    addLanguage("dallas")

    function addOptiLanguage(LangName){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(LangName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('Joshlyn') // this approach is more optimised
    // edit

    const secondlang = document.querySelector("li:nth-child(2)");
    const newli = document.createElement('li')
    newli.textContent = "Emma"
    secondlang.replaceWith(newli)
    // edit
    const firstlang = document.querySelector("li:first-child");
    firstlang.outerHTML = '<li>BHM</li>'

    // remove
    const lastlang =document.querySelector('li:last-child')
    lastlang.remove()
</script>
</html>















*/