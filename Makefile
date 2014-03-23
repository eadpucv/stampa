.PHONY: less

less:
	lessc less/stampa.less css/stampa.css --clean-css

css: less
