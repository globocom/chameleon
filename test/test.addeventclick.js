describe('addeventClick', function () {
	beforeEach(function(){
		var link = document.querySelectorAll("#group_list a")
        link[0].onclick();
	});

    it('deve selecionar desktop como grupo ao clicar no link', function() {
        assert.equal(document.querySelector('#group').textContent, 'desktop');
    });

    it('deve setar o localStorage para desktop', function() {
    	assert.equal(localStorage['X-Mobile-Group'], 'desktop');
    });
});