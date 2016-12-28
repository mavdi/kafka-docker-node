This is the only way I could get Kafka and Zookeeper working on my local machine using docker.

I've also configured `kafka-manager` to hook up to the `zookeeper` instance.

## To run

`docker-compose up -d`

`docker ps` to see if everything is up and running.

`node test/index.js` to set and receive a test message.

`kafka-manager` is available at `http://localhost:9000`