const initSmartlook = () => {
  const w = window as unknown as { smartlook: any };
  if (!w.smartlook) {
    (function (d) {
      const o: any = (w.smartlook = function () {
          o.api.push(arguments);
        }),
        h = d.getElementsByTagName("head")[0];
      const c = d.createElement("script");
      o.api = new Array();
      c.async = true;
      c.type = "text/javascript";
      c.charset = "utf-8";
      c.src = "https://web-sdk.smartlook.com/recorder.js";
      h.appendChild(c);
    })(document);
  }

  w.smartlook("init", "e6a134f51b3897f57dba598b03553b1aec10f625", {
    region: "eu",
  });
};

export default initSmartlook;
