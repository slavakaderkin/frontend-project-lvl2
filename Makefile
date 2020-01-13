install-deps:
	npm install

install: install-deps

publish:
	npm publish --dry-run
 
lint:
	npx eslint .
  
test:
	npm test 

test-coverage:
	npx jest --coverage

build:
	rm -rf dist
	npm run build

.PHONY: test
