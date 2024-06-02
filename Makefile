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

tree:
	# Create logs directory if not exists
	mkdir -p logs
	# Generate project structure and save it to logs/project_structure.txt
	tree -I "node_modules|.git|.DS_Store" > ./logs/project_structure.txt
