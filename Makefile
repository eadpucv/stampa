.PHONY: less

less:
	lessc less/compiler.less css/stampa.css --clean-css
	lessc less/basic.less css/basic.css --clean-css

css: 
	make less

server:
	jekyll server --watch --baseurl= --port=3333

font:
	grunt webfont
	make less