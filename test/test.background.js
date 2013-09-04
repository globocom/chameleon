describe('Background', function () {

    beforeEach(function(){
        delete localStorage['X-Mobile-Group'];
    })

    it("deve ser definido o requestFilter para todas as URL", function(){
        assert.equal(requestFilter.urls[0], "<all_urls>")
    });

    it("listenerSendHeader deve adicionar o cabeçalho HTTP indicando o grupo mobile", function(){
        var details = {requestHeaders: []};

        details = listenerSendHeader(details);

        var cabecalhoEsperado = {"name": "X-Mobile-Group", "value": "desktop"}
        assert.equal(details.requestHeaders[0].name, cabecalhoEsperado.name);
        assert.equal(details.requestHeaders[0].value, cabecalhoEsperado.value);
    });

    it("listenerSendHeader deve adicionar o cabeçalho HTTP indicando o grupo mobile definido do localstorage", function(){
        localStorage['X-Mobile-Group'] = 'feature';
        var details = {requestHeaders: []};

        details = listenerSendHeader(details);

        var cabecalhoEsperado = {"name": "X-Mobile-Group", "value": "feature"}
        assert.equal(details.requestHeaders[0].name, cabecalhoEsperado.name);
        assert.equal(details.requestHeaders[0].value, cabecalhoEsperado.value);
    });

    it("listenerSendMenssage deve enviar uma mensagem contendo o grupo mobile para o contexto da página utilizando o sendResponse", function(){
        var resposta_enviada;
        var sendResponse = function(response){
            resposta_enviada = response
        }
        listenerSendMenssage({storage: "group"}, "sender dummy", sendResponse);
        assert.equal(resposta_enviada.group, "desktop")
    });

    it("listenerSendMenssage deve enviar uma mensagem contendo o grupo mobile definida no localStorage para o contexto da página", function(){
        localStorage['X-Mobile-Group'] = 'feature';
        var resposta_enviada;
        var sendResponse = function(response){
            resposta_enviada = response
        }
        listenerSendMenssage({storage: "group"}, "sender dummy", sendResponse);
        assert.equal(resposta_enviada.group, "feature")
    });

    it("listenerSendHeader deve esta registrado no chrome.webRequest.onBeforeSendHeaders para o browser capitar o header HTTP para as páginas acessadas", function(){
        assert.equal(chrome.webRequest.onBeforeSendHeaders.argumentos_passados_para_addListener[0], listenerSendHeader)
    });

    it("listenerSendMenssage deve esta registrado no chrome.runtime.onMessage.addListener para o browser enviar as informações para o contexto das páginas acessadas pelo usuário", function(){
        assert.equal(chrome.runtime.onMessage.argumentos_passados_para_addListener[0], listenerSendMenssage)
    });

});
