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

    it('deve setar o localStorage para tablet', function() {
        this.link_tablet.onclick();
        assert.equal(localStorage['X-Mobile-Group'], 'tablet');
    });

    it('deve setar o titulo para tablet', function() {
        this.link_tablet.onclick();
        assert.equal(document.querySelector("h1").textContent, 'tablet');
    });

    it('deve verificar se o reload foi executado', function() {
        this.link_tablet.onclick();
        assert.include(chrome.tabs.arguments, 'reload');
    })
});

