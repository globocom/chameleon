describe('Resize', function () {


    it("screenMessage deve estar enviando mensagem correta", function(){
        assert.equal(chrome.runtime.argumentos_passados_para_sendMessage[1], screenMessage)
    });

    it('screenMessage deve possuir as dimensões de um tablet', function(){
    	window.open = sinon.spy();
		response = {group: 'tablet'};
		screenMessage(response);
		assert.equal(window.open.getCall(0).args[2], "width=640,height=500,left=320,top=150");
    });

    it('screenMessage deve possuir as dimensões de um smart', function(){
    	window.open = sinon.spy();
		response = {group: 'smart'};
		screenMessage(response);
		assert.equal(window.open.getCall(0).args[2], "width=500,height=500,left=390,top=150");
    });

    it('screenMessage deve possuir as dimensões de uma feature', function(){
    	window.open = sinon.spy();
		response = {group: 'feature'};
		screenMessage(response);
		assert.equal(window.open.getCall(0).args[2], "width=319,height=500,left=480.5,top=150");
    });



});