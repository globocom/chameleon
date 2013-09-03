#creating mocha-phantom variable
mocha-phantomjs = node_modules/mocha-phantomjs/bin/mocha-phantomjs

test-option:
	$(mocha-phantomjs) -R spec test/option.html

test-background:
	$(mocha-phantomjs) -R spec test/background.html

run-tests:
	make test-option
	make test-background