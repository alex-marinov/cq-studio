FROM ubuntu:22.04

# Create a directory for the Flask app api
WORKDIR /api
COPY . /api

# Update and install necessary packages
RUN apt update && apt install -y \
	libgl1 \
	python3.10 \
	python3-pip \
	python3.10-venv &&\
	python3.10 -m pip install --upgrade pip &&\
	python3.10 -m venv env &&\
	/bin/bash -c "source env/bin/activate" &&\
	pip install flask cadquery

# EXPOSE 5328

ENTRYPOINT [ "python3" ]

CMD [ "app.py" ]
# CMD [ "python3", "-m", "flask", "run" ]