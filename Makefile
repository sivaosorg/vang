.PHONY: dev start build clean publish

dev:
	npm run dev

start:
	npm run start

build:
	npm run build

clean:
	rm -rf dist

publish:
	npm run publish

host: clean build
	@if [ -d "dist/client" ]; then \
	  cd dist/client && http-server -p 4001 -o; \
	else \
	  echo "Error: dist/client directory does not exist. Ensure the build step creates it."; \
	fi

tree:
	# Create logs directory if not exists
	mkdir -p logs
	# Generate project structure and save it to logs/project_structure.txt
	tree -I "node_modules|.git|.DS_Store" > ./logs/project_structure.txt
