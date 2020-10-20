function loadElement(element){
    if($(`#${element}`).length > 0){
        $.get(`/includes/${element}.html`).then(
            function(response){
                $(`#${element}`).html(response);
            }
        )
    }
}
loadElement("navbar");
loadElement("footer");
