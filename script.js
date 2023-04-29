//your JS code here. If required.
 const browserInfoDiv = document.getElementById('browser-info');
    const browserName = getBrowserName();
    const version = getBrowserVersion();
    const message = `You are using ${browserName} version ${version}`;
    browserInfoDiv.textContent = message;

    function getBrowserName() {
      const userAgent = navigator.userAgent;
      if (userAgent.indexOf("Firefox") !== -1) {
        return "Firefox";
      } else if (userAgent.indexOf("Chrome") !== -1) {
        return "Chrome";
      } else if (userAgent.indexOf("Edge") !== -1) {
        return "Microsoft Edge";
      } else if (userAgent.indexOf("Safari") !== -1) {
        return "Safari";
      } else {
        return "Unknown browser";
      }
    }
 function getBrowserVersion() {
      const userAgent = navigator.userAgent;
      let version;
      if (userAgent.indexOf("Firefox") !== -1) {
        version = userAgent.match(/Firefox\/(\d+)/)[1];
      } else if (userAgent.indexOf("Chrome") !== -1) {
        version = userAgent.match(/Chrome\/(\d+)/)[1];
      } else if (userAgent.indexOf("Edge") !== -1) {
        version = userAgent.match(/Edge\/(\d+)/)[1];
      } else if (userAgent.indexOf("Safari") !== -1) {
        version = userAgent.match(/Version\/(\d+)/)[1];
      } else {
        version = "Unknown version";
      }
      return version;
    }