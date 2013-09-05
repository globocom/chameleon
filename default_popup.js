options = {
    group: localStorage['X-Mobile-Group'] || 'desktop',
    init: function(){
        var that = this;
        that.get_nodes();
        that.atualizarGroup();
        for (var i=0; i < this.linksMenu.length; i++) {
            this.linksMenu[i].onclick = function(){
                that.atualizarGroup(this.textContent);
                that.abrirMenuDeDevices();
            }
        };
        for (var i=0; i < this.nodesDevices.length; i++) {
            this.nodesDevices[i].onclick = function(){
                that.open(this.dataset.width, this.dataset.height);
            }
        };
    },
    get_nodes: function(){
          this.linksMenu = document.querySelectorAll("#group_list a");
          this.groupNode = document.querySelector("#group");
          this.nodesMenu = document.querySelectorAll("menu");
          this.nodesDevices = document.querySelectorAll("menu img");
  
    },
    atualizarGroup: function(group){
        this.group = group || this.group;
        localStorage['X-Mobile-Group'] = this.group;
        this.groupNode.textContent = this.group;
    },
    abrirMenuDeDevices: function(){
        for (var i=0; i < this.nodesMenu.length; i++) {
            this.nodesMenu[i].setAttribute("class", "escondido");
        };
        var nodeMenu = document.querySelector("#group_"+this.group);
        nodeMenu.removeAttribute('class');
    },
    open: function(windowWidth, windowHeight){
        var that = this;
        windowWidth = windowWidth || 171;
        windowHeight = windowHeight || 171;
        chrome.tabs.getSelected(null, function(tab) {
            that.popup = window.open(tab.url,"POPUP","width="+windowWidth+",height="+windowHeight);
        });
    }
}
options.init()