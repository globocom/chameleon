#creating mocha-phantom variable


mocha-phantomjs = node_modules/mocha-phantomjs/bin/mocha-phantomjs
bower = node_modules/.bin/bower

npm-install:
	npm install

npm-update:
	npm install

bower-install:
	$(bower) install

test-default_popup:
	$(mocha-phantomjs) -R spec test/default_popup.html

test-background:
	$(mocha-phantomjs) -R spec test/background.html


run-tests:
	make test-default_popup
	make test-background
