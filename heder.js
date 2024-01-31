function wabclick(data){ 

    let dbox=  document.getElementsByClassName("section");
    for(let i=0;i<dbox.length;i++){
     dbox[i].style.display="none";
    } 
    document.getElementsByClassName(data)[0].style.display='flex';
    console.log('dbox');
}
