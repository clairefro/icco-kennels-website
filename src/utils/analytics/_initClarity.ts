const initClarity = () => {
  (function (
    c,
    l,
    a: any,
    r: any,
    i,
    t: { async: any; src: any } = { async: undefined, src: undefined },
    y: { parentNode: any } = { parentNode: undefined }
  ) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r) || {};
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window as any, document, "clarity", "script", "epo57n5qju");
};

export default initClarity;
