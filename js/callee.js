const main = async () => {
  console.log("@@@@@@");
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  document.getElementById("localCideo").srcObject = mediaStream;
};

main();
