# Use an official Python runtime as a parent image
FROM python:3.9.13-slim

# Install system dependencies for MySQL
RUN apt-get update && apt-get install -y \
    default-libmysqlclient-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 8000 for the Django server
EXPOSE 8000
 
# Run migrations (optional, remove if not needed in Docker image)
# RUN python manage.py migrate

# Define environment variable
ENV PYTHONUNBUFFERED 1

# Define the command to run your app
ENTRYPOINT ["python", "manage.py", "runserver", "0.0.0.0:8000"]