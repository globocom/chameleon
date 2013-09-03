var group_node = document.querySelector("#group");

group_node.textContent = localStorage['X-Mobile-Group'] || 'desktop';

var links_menu = document.querySelectorAll("#group_list a");

for (var i=0; i < links_menu.length; i++) {
    links_menu[i].onclick = function(){
        var group = this.textContent;
        localStorage['X-Mobile-Group'] = group;
        group_node.textContent = group
    }
};
