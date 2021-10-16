setup:
	@yarn

test:
	@yarn test

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

id-images-docker:
	@docker images -a projeto-integrador-ii_check-credit-card -q

rm-images-docker:
	@docker rmi docker images a projeto-integrador-ii_check-credit-card q -f

rm-all-docker:
	@make rm-images-docker && make down-docker