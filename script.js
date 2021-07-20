
let myValue = 0, serviceUuid='19b10010-e8f2-537e-4f6c-d104768a1214';
      let myBLE;

      function setup() {
        // Create a p5ble class
        myBLE = new p5ble();

        createCanvas(200, 200);
        textSize(20);
        textAlign(CENTER, CENTER);

        // Create a 'Connect' button
        const connectButton = createButton('Connect')
        connectButton.mousePressed(connectToBle);
      }

      function connectToBle() {
        // Connect to a device by passing the service UUID
        myBLE.connect(serviceUuid, gotCharacteristics);
      }

      // A function that will be called once got characteristics
      function gotCharacteristics(error, characteristics) {
        if (error) console.log('error: ', error);
//         console.log('characteristics: ', characteristics);

       for(let i =0;i<3;i++){
        // Read the value of the first characteristic
        myBLE.read(characteristics[i], gotValue);
      }
      }

      // A function that will be called once got values
      function gotValue(error, value) {
        if (error) console.log('error: ', error);
        console.log(`value: ${value}`);
        myValue = value;
        // After getting a value, call p5ble.read() again to get the value again
        myBLE.read(myCharacteristic, gotValue);
      }
