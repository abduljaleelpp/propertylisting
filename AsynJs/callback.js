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
function getProfiles(){
    
    setTimeout(() => {
        let output ='';
        profiles.forEach((element,index)=> {
            output += `<li>post ${index}</li>`;
        });
        document.body.innerHTML =output;
        log();
    }, 3000);
}
function createProfile(profile,callback ){
    setTimeout(function () {
        profiles.push(profile);
        callback();
    },0);
}
   
const profile3 = { id : 3,
    name: "jaleel",
    address : {
        street :"Poovathikkal",
        house : "poovancheeri"
    } };
createProfile(profile3,getProfiles);
function log () {
    profiles.forEach((element,index,array)=> {
    setTimeout(() =>{
        console.log(element.id,index,array.length)
    },0)

})
};
