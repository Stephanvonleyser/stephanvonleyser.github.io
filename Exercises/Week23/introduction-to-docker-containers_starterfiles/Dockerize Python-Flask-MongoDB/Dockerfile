FROM python:2.7
WORKDIR /todo

COPY src/requirements.txt /todo/requirements.txt
COPY src/templates/todo.html /todo/templates/todo.html
COPY src/app.py /todo/app.py

RUN pip install -r requirements.txt