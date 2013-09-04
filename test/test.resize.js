describe('Resize', function () {


    it("screenMessage deve estar enviando mensagem correta", function(){
        assert.equal(chrome.runtime.argumentos_passados_para_sendMessage[1], screenMessage)
    });

    it('screenMessage deve possuir as dimensões de um tablet', function(){
    	window.open = sinon.spy();
		response = {group: 'tablet'};
		screenMessage(response);
        assert.include(window.open.getCall(0).args[2], "width=640,height=500", 'incorrect values');
    });

    it('screenMessage deve possuir as dimensões de um smart', function(){
    	window.open = sinon.spy();
		response = {group: 'smart'};
		screenMessage(response);
        assert.include(window.open.getCall(0).args[2], "width=500,height=500", 'incorrect values');
    });

    it('screenMessage deve possuir as dimensões de uma feature', function(){
    	window.open = sinon.spy();
		response = {group: 'feature'};
		screenMessage(response);
        assert.include(window.open.getCall(0).args[2], "width=319,height=500", 'incorrect values');
		
    });
});