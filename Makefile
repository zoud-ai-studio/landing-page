.PHONY: setup check test e2e eval

setup:
	git config core.hooksPath .githooks
	npm ci
	npx playwright install chromium

test:
	npm test

e2e:
	npm run build
	npm run e2e

eval:
	npm run build
	npm run eval

check:
	npm run lint
	npm run typecheck
	npm test
	npm run build
	test -f out/index.html
	@echo "make check: OK"
