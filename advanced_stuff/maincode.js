 const requestUrl = 'https://api.github.com/users/hanyucrocks';
   const xhr = new XMLHttpRequest()
   xhr.open('GET', requestUrl)
   xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText); // string to json
        console.log(data.followers);
    }
   }
   xhr.send();