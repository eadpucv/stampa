.PHONY: less

less:
	lessc less/compiler.less css/stampa.css --clean-css
	lessc less/basic.less style/basic.css --clean-css

css: 
	make less

server:
	jekyll server --watch --baseurl= --port=3333

font:
	grunt webfont
	make less

zip-icons:
	zip -r -X dist/icons.zip icons

zip-webfont:
	zip -r -X dist/stampa-webfont fonts
	zip -r -X dist/stampa-webfont css

all:
	make font
	rm dist/icons.zip
	rm dist/stampa-webfont.zip
	make zip-icons
	make zip-webfont

dist:
	rm dist/icons.zip
	rm dist/stampa-webfont.zip
	make zip-icons
	make zip-webfont