template = document.querySelector("template").cloneNode(true);

chrome = {
    tabs: {
        getSelected: function(_, callback) {
            callback({url: "http://google.com"})
        }
    }
}

describe('defaultpopup', function () {

    beforeEach(function(){
        document.querySelector("#teste").innerHTML = template.innerHTML;
        options.init();
        this.link_tablet = document.querySelector("#tablet");
    })

    it('deve selecionar desktop como grupo ao clicar no link', function() {
        this.link_tablet.onclick();
        assert.equal(document.querySelector('#group').textContent, 'tablet');
    });

    it('deve setar o localStorage para desktop', function() {
        this.link_tablet.onclick();
        assert.equal(localStorage['X-Mobile-Group'], 'tablet');
    });

    it('deve mostrar as imagens para tablet removendo a class escondido', function() {
        var group_tablet_node = document.querySelector('#group_tablet');
        assert.equal(group_tablet_node.getAttribute('class'), 'escondido');
        this.link_tablet.onclick();
        assert.isNull(group_tablet_node.getAttribute('class'));
    });

    it('deve abrir um popup com a página atual ao clicar em um tablet', function() {
        window.open = sinon.spy();
        this.link_tablet.onclick();
        var img_tablet = document.querySelector('#group_tablet img');
        img_tablet.onclick();
        assert.include(window.open.getCall(0).args[2], "width=171,height=171");
    });
    
});

