$(document).ready(function(){
    $(".dropdown__user").click(function(){
        $(this).find(".dropdown__content").slideToggle("slow");
    });

    let readURL = function(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".file-upload").on('change', function(){
        readURL(this);
    });

    $(".upload-button").on('click', function() {
        $(".file-upload").click();
    });

});

$(document).on("click", function(event){
    let $trigger = $(".dropdown__user");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown__content").slideUp("slow");
    }
});
