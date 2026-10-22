const areaNavbar = document.querySelector('.area__navbar');



async function buscaNavbar(){
try{
if(!areaNavbar) return;
const response =  await fetch('js/sidebar.html');

if(!response.ok){
    throw new Error('falha na requisição' + response.status);
}
const navbar = await response.text();
areaNavbar.innerHTML = navbar;
}catch(e){
    console.log(e);
}
};

buscaNavbar();