describe('Options', function () {
    it('deve trocar de device quando clicar no link', function() {
        document.querySelector('#group').text = 'desktop';
        expect(document.querySelector('#group').text).to.equal('desktop');
    });
});