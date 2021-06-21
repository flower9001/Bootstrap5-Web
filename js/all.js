// tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

$(document).ready(function() {

    function tab_top(){
        return $("#toTab").offset().top - 60;
    };

    function formTop(){
        return $("#form").offset().top;
    };

    
    // go to tab
    $("#myTab>li>button").click(function() {
        $("html,body").animate({
            scrollTop: tab_top()
        }, 100);
    });

    // go to form
    $("#bottom_btn").click(function() {
        $("html,body").animate({
            scrollTop: formTop()
        }, 100);
    });

    // bottom button
    $(window).scroll(function() {
        // 當前視窗頂部高度
        let now_top = $(window).scrollTop();
        // 當前視窗底部高度
        let now_bottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (now_top > tab_top() && now_bottom > 90) {
            $("#bottom_btn").addClass("d-block");
            $("#bottom_btn").removeClass("d-none");
        } else {
            $("#bottom_btn").addClass("d-none");
            $("#bottom_btn").removeClass("d-block");
        }
    });

    // Validation
    $("form>div>button").click(function() {
        $("form").addClass("was-validated");
    });
    
});