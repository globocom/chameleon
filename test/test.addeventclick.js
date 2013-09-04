describe('addeventClick', function () {
	beforeEach(function(){
		var links = $("#group_list a");
        links.eq(0).click()
	});

    it('deve selecionar desktop como grupo ao clicar no link', function() {
        assert.equal($('#group').text(), 'desktop');
    });

    it('deve setar o localStorage para desktop', function() {
    	assert.equal(localStorage['X-Mobile-Group'], 'desktop');
    });
});