const main = async () => {
  console.log("@@@@@@");
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  console.log("######");
  document.getElementById("localVideo").srcObject = mediaStream;
};

main();
