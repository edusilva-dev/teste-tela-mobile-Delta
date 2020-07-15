(function (){
    let flag = false;
    $(".btn-confirm").click(function(){
        if($("#address").val() != ""){
            if(flag == false){
                geocode();
                changeMapPosition();
                $("#hide").removeClass("hide");
                $(".auto-info").addClass("auto-info-animated");    
                $(".search").addClass('search-animated');
                $("#address").val("");
                flag = true;
            }
        }
    });

    $("#maps").click(function(){
        $(".search").removeClass('search-animated');
        flag = false;
    })
    
}());
