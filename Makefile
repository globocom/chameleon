#creating mocha-phantom variable
mocha-phantomjs = node_modules/mocha-phantomjs/bin/mocha-phantomjs

test-addeventclick:
	$(mocha-phantomjs) -R spec test/addeventclick.html

test-background:
	$(mocha-phantomjs) -R spec test/background.html

test-resize:
	$(mocha-phantomjs) -R spec test/resize.html	

run-tests:
	make test-addeventclick
	make test-background
	make test-resize
