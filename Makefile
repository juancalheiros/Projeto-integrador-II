setup:
	@yarn

test:
	@yarn test

run:
	@yarn start 

run-docker:
	@docker-compose up

down-docker:
	@docker-compose down -v

lint:
	@eslint src/