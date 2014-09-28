.PHONY: less

less:
	lessc fonts/stampa-compiler.less fonts/stampa.css --clean-css
	lessc fonts/basic.less fonts/basic.css --clean-css

css: less

server:
	jekyll server --watch --baseurl= --port=3333

font:
	grunt webfont
	make less