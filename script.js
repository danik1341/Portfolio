const show = function(shown,hidden) {
    document.getElementById(shown).style.display='flex';
    document.getElementById(hidden).style.display='none';
    return false;
}
const goToAddi = (page) => {
    if(document.getElementById(page).style.display='flex'){
        document.getElementById('about_additional').scrollIntoView({behavior: 'smooth'});
    }   
}
