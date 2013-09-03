(function () {
	function addeventClick(){
		var links_menu = document.querySelectorAll("#group_list a");
		var group_node = document.querySelector("#group");
	
		group_node.textContent = localStorage['X-Mobile-Group'] || 'desktop';

		for (var i=0; i < links_menu.length; i++) {
	    	links_menu[i].onclick = function(){
	        	var group = this.textContent;
	        	localStorage['X-Mobile-Group'] = group;
	        	group_node.textContent = group
	    	}
		};	
	}
	return addeventClick();
})();