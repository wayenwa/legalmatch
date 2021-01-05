WP_CLI=docker exec -it legalmatch-wp-cli

install:
	docker-compose exec -T legalmatch-wp-cli sh < install.sh
	$(WP_CLI) wp plugin install custom-post-type --activate --allow-root
	$(WP_CLI) wp plugin install advanced-custom-fields --activate --allow-root
	$(WP_CLI) wp plugin install acf-to-rest-api --activate --allow-root
	