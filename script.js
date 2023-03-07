const show = function(shown,hidden) {
    document.getElementById(shown).style.display='flex';
    document.getElementById(hidden).style.display='none';
    return false;
}
const goToAddi = (page) => {
    if(document.getElementById(page).style.display==='flex'){
        document.getElementById('about_additional').scrollIntoView({behavior: 'smooth'});
    }   
}
const goToProj = (page) => {
    if(document.getElementById(page).style.display==='flex'){
        document.getElementById('project_detail_page').scrollIntoView({behavior: 'smooth'});
    } 
}
const goToProjRecent = () => {
    if(document.getElementById('project_section').style.display==='flex'){
        show('project_detail_page','project_section');
    }
    document.getElementById('project_detail_page').scrollIntoView({behavior: 'smooth'});
}