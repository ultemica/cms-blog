.PHONY: deploy
deploy:
	act --job deploy --eventpath .github/pull_request.closed.develop.json --secret-file .secrets --platform ubuntu-24.04=catthehacker/ubuntu:act-22.04
