$(function() {
    $("#group").text(localStorage['X-Mobile-Group'] || 'desktop');
    $("#group_list a").click(function(){
        var group = $(this).text();
        localStorage['X-Mobile-Group'] = group;
        $("#group").text(group);
    })
});
