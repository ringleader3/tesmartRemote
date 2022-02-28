class channelChanger {
    changeChannel(channel){
      console.log('channel: ', channel)
      var net = require('net');
      var HOST = '192.168.1.10';
      var PORT = 5000;
      var channels = {
          '1': [0xAA, 0xBB, 0x03, 0x01, 0x01, 0xEE],
          '2': [0xAA, 0xBB, 0x03, 0x01, 0x02, 0xEE],
          '3': [0xAA, 0xBB, 0x03, 0x01, 0x03, 0xEE],
          '4': [0xAA, 0xBB, 0x03, 0x01, 0x04, 0xEE],
          '5': [0xAA, 0xBB, 0x03, 0x01, 0x05, 0xEE],
          '6': [0xAA, 0xBB, 0x03, 0x01, 0x06, 0xEE],
          '7': [0xAA, 0xBB, 0x03, 0x01, 0x07, 0xEE],
          '8': [0xAA, 0xBB, 0x03, 0x01, 0x08, 0xEE],
          '9': [0xAA, 0xBB, 0x03, 0x01, 0x09, 0xEE],
          '10': [0xAA, 0xBB, 0x03, 0x01, 0x0A, 0xEE],
          '11': [0xAA, 0xBB, 0x03, 0x01, 0x0B, 0xEE],
      }
      
      console.log("channel bytes: ", channels[channel])
      var bytesToSend = [0xAA, 0xBB, 0x03, 0x01, 0x01, 0xEE]

      let hexVal = new Uint8Array(channels[channel]);

      console.log('hexval: ', hexVal)
      
      var client = new net.Socket();
      client.connect(PORT, HOST, function() {
          console.log('CONNECTED TO: ' + HOST + ':' + PORT);
          // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
          client.write(hexVal);
      });

      // Add a 'data' event handler for the client socket
      // data is what the server sent to this socket
      client.on('data', function(data) {
          // Close the client socket completely
          client.destroy();
      });

      // Add a 'close' event handler for the client socket
      client.on('close', function() {
          console.log('Connection closed');
      });
      return
    }
}
module.exports = channelChanger;
