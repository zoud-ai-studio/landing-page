.PHONY: setup lint type test e2e eval check

setup:
	git config core.hooksPath .githooks
	@if [ -f pyproject.toml ]; then uv sync; fi
	@if [ -f web/package.json ]; then npm ci --prefix web; fi

lint:
	@if [ -f pyproject.toml ]; then uv run ruff check .; fi
	@if [ -f web/package.json ]; then npm run lint --prefix web; fi

type:
	@if [ -d app ]; then uv run mypy app; fi
	@if [ -f web/package.json ]; then npm run typecheck --prefix web; fi

test:
	@if [ -f pyproject.toml ]; then uv run pytest -q; fi

e2e:
	@if [ -f web/package.json ]; then cd web && npx playwright test; fi

eval:
	@if [ -f evals/run.py ]; then uv run python evals/run.py; fi

check: lint type test
	@echo "make check: OK"
