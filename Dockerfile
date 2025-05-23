# Dockerfile
FROM python:3.10-slim


WORKDIR /app

COPY server/requirements.txt .
RUN pip install -r requirements.txt

COPY server/ ./server/

ENV FLASK_APP=server/app.py

EXPOSE 5000
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
