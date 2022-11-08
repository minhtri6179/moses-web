FROM python:3.8 

WORKDIR /moses-web 

COPY requirements.txt . 

RUN pip install -r requirements.txt 

COPY ./app ./app 

CMD [ "python", "./app/app.py" ]
