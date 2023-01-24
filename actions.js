const properties = document.querySelectorAll('.property');
const pagination = document.querySelector('.pagination');
const form  = document.querySelector('form');
const input  = document.querySelector('input');
const select = document.querySelector('select');


form.addEventListener('submit', async event => {
    try {
        event.preventDefault();
         await fetch('https://jsonplaceholder.typicode.com/photos')
            .then(result => {
                if(!result.ok){
                    throw new Error(result.statusText)
                }
                return result.text();
            }).then(data => 
                { 
                data = JSON.parse(data);
                properties.forEach((property,index) => {
                const img = property.querySelector('img');
                img.src = data[index].url
                console.log(img.src);
        
                })
            })

    } catch (error) {
        console.error("there is an error");
    }
})