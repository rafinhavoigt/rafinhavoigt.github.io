function loadElement(element){
    if($(`#${element}`).length>0){
        return $(`#${element}`).load(`/includes/${element}.html`);
    }
}
loadElement("navbar");
loadElement("footer");
$.load(function(){
    $(".fadein").fadeIn();
});
