# Random Number Generator

Simple random number generator that can be used for raffles etc. 

![CleanShot 2024-03-19 at 14 36 53@2x](https://github.com/al-lac/random-number-generator/assets/11136952/cd0421fa-4218-44f3-865a-cc7a08a43830)


## Run container from GitHub registry

```bash
docker pull ghcr.io/al-lac/random-number-generator:main
docker run -p 8080:8080 random-number-generator:latest
```

## Build it yourself

```bash
docker build -t random-number-generator .
docker run -p 8080:8080 random-number-generator:latest
```
