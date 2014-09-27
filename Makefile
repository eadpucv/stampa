.PHONY: less

less:
	lessc less/stampa.less css/stampa.css --clean-css
	lessc less/basic.less css/basic.css --clean-css

css: less

server:
	jekyll server --watch --baseurl= --port=3333
