# cm - Configuration Manager is a small application used
# to automatically configure Aerokube products.

selenoid-start: cm
	# configure and run Selenoid with next flags:
	# 	--vnc to download images with VNC server (to see live browser screen)
	# 	--browsers-json path/to/browsers.json to use an existing configuration file
	./cm selenoid start --vnc --browsers-json browsers.json
	# run Selenoid UI
	./cm selenoid-ui start

selenoid-stop: cm
	# stop Selenoid and Selenoid UI
	./cm selenoid-ui stop
	./cm selenoid stop
