template = document.querySelector("template").cloneNode(true);


describe('defaultpopup', function () {

    beforeEach(function(){
        document.querySelector("#teste").innerHTML = template.innerHTML;
        options.init();
        this.link_tablet = document.querySelector("#tablet");
    })

    it('deve selecionar tablet como grupo ao clicar no link', function() {
        this.link_tablet.onclick();
        assert.equal(localStorage['X-Mobile-Group'], 'tablet');
    });

    it('deve setar o localStorage para desktop', function() {
        this.link_tablet.onclick();
        assert.equal(localStorage['X-Mobile-Group'], 'tablet');
    });

});

