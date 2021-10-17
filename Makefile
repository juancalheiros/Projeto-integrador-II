setup:
	@yarn

test:
	@yarn test --watchAll

run:
	@yarn start 

lint:
	@eslint src/

#docker
run-docker:
	@docker-compose up

build-run-docker:
	@docker-compose up --build

container-docker:
	@docker ps -a

down-docker:
	@docker-compose down -v

images-docker: 
	@docker images -a

id-image-docker:
	@docker images -a projeto-integrador-ii_check-credit-card -q

clear-image-docker:
	@docker rmi docker images a projeto-integrador-ii_check-credit-card q -f

clear-all-docker:
	@make clear-image-docker && make down-docker