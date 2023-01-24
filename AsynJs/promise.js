const profiles = [ {
    id : 1,
    name: "jaleel",
    address : {
        street :"Poovathikkal",
        house : "poovancheeri"
    }
 },

{
    id : 2,
    name: "Poovan",
    address : {
        street :"areacode",
        house : "Malappuram"
    }

}
];
function getProfiles() {
    return new Promise(()=>
    {
        let output ='';
        profiles.forEach((element,index)=> {
            output += `<li>post ${index}</li>`;
        });
        document.body.innerHTML =output;
    
});
};

function createProfile(profile ){
    return new Promise((resolve,reject)=> {
    setTimeout(()=>{
        profiles.push(profile);
        const error =false;
        if (!error)
            resolve();
        else
            reject("error");
    },3000)
});
}
   
const profile3 = { id : 3,
    name: "jaleel",
    address : {
        street :"Poovathikkal",
        house : "poovancheeri"
    } };
createProfile(profile3).then(getProfiles).then(log);
    
function log () {
    profiles.forEach((element,index,array)=> {
    setTimeout(() =>{
        console.log(element.id,index,array.length)
    },0)

})
};
