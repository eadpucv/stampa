.PHONY: less

less:
	lessc less/stampa.less css/stampa.css --clean-css

l:
	lessc less-fontawesome/stampa.less css/stampa.css --clean-css

css: less
