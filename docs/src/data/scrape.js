console.log([...document.querySelectorAll("ytd-grid-video-renderer")].map((v) => {
  const link = v.querySelector("#thumbnail")?.href ?? "";
  const id = /v=(.{11})/.exec(link)?.[1];
  const time = v.querySelector("span#text.ytd-thumbnail-overlay-time-status-renderer")?.innerText.trim();
  const title = v.querySelector("#video-title")?.innerText;
  return `${id} ${time} ${title}`;
}).join("\n"));
console.log([
  /v=(.{11})/.exec(window.location)?.[1],
  document.querySelector(".ytp-time-duration").innerText.trim(),
  document.querySelector(".ytd-video-primary-info-renderer").innerText.split("\n")[0].trim()
].join(" "));
