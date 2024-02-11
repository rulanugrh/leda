FROM python:3.7
LABEL author="kiyo"
ADD . .
RUN pip3 install -r requirements.txt
EXPOSE 8081
CMD [ "python3", "main.py"]