install:
	npm install

publish:
	npm publish --dry-run
 
lint:
	npx eslint .
  
test:
	npm test

build:
	rm -rf dist
	npm run build

.PHONY: test
