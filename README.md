# IoT Hub Raspberry Pi 3 Client application

## Running this sample
### Install package
Install all packages by the following command:

```bash
npm install
```

### Run your client application
Run the client application with your Azure IoT hub device connection string, note your connection should be quoted in the command.

```bash
node index.js "<your Azure IoT hub device connection string>"
```

### Test your code

```bash
npm test
```

This will test your code:

- [X] eslint
- [X] receive message sent by your client
- [X] call stop method to your client app
- [X] call start method to your client app

### Send Cloud-to-Device command
You can send a C2D message to your device. You can see the device prints out the message and blinks once receiving the message.

### Send Device Method command
You can send `start` or `stop` device method command to your Pi to start/stop sending message to your IoT hub.
