const canvasStream = cvs.captureStream(30);
const audioStream  = sound.stream();     // MediaStreamAudioDestinationNode
const combined = new MediaStream([
  ...canvasStream.getVideoTracks(),
  ...audioStream.getAudioTracks()
]);