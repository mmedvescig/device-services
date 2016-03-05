module.exports = {
  createJSON: function (measuresBuffer,remoteZigbeeId){
    //Procesamos el Buffer
    tempBuffer = new Buffer(measuresBuffer.slice(2,6));
    temperature = tempBuffer.readFloatLE(0);

    //Creamos el objeto JSON
    var parkingJSON =
    { "device" :
       {
         "zigbeeId" : remoteZigbeeId,
         "measuresType" : 101,
         "timestamp" : new Date(),
         "measures" :
         {
           "temperature" : temperature
         }
       }
     };
  return parkingJSON;
  }
}
