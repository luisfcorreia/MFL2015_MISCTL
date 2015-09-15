// Create a client instance
var host = "127.0.0.1"
var port = 1883
var client = new Paho.MQTT.Client(host, port, "myclientid_" + parseInt(Math.random() * 100, 10));

// connect the client
client.connect({onSuccess:onConnect});

// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
}

// send command to rover
function sendCommand(cmd){
  var message = new Paho.MQTT.Message(cmd);
  message.destinationName = "rover/command";
  client.send(message);
}
