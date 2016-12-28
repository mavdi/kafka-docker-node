var Kafka = require('no-kafka');
var producer = new Kafka.Producer();


var consumer = new Kafka.SimpleConsumer();
 
// data handler function can return a Promise 
var dataHandler = function (messageSet, topic, partition) {
    messageSet.forEach(function (m) {
        console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
    });
};

consumer.init().then(function () {
    // Subscribe partitons 0 and 1 in a topic: 
    return consumer.subscribe('kafka-test-topic', [0], dataHandler);
});

return producer.init().then(function(){
  return producer.send({
      topic: 'kafka-test-topic',
      partition: 0,
      message: {
          value: 'Hello!'
      }
  });
})
.then(function (result) {
    console.log(result)
  /*
  [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
  */
});