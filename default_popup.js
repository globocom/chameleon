options = {
    group: localStorage['X-Mobile-Group'] || 'desktop',
    init: function(){
        var that = this;
        this.linksMenu = document.querySelectorAll("#group_list a");
        that.atualizarGroup();
        document.querySelector("#group_list").setAttribute("class", this.group)
        for (var i=0; i < this.linksMenu.length; i++) {
            this.linksMenu[i].onclick = function(){
                that.atualizarGroup(this.textContent);
                console.log(that);
                chrome.tabs.reload();
            }
        };
    },
    atualizarGroup: function(group){
        this.group = group || this.group;
        localStorage['X-Mobile-Group'] = this.group;
        document.querySelector('#group_list').setAttribute('class', this.group)
        document.querySelector('h1').textContent = this.group;
    }
}
options.init()