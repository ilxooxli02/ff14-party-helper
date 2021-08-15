console.log(
  Array.prototype.concat
    .apply([], ((en) => Object.keys(en).map((k) => en[k]))(require("os").networkInterfaces()))
    .filter((e) => e.family === "IPv4" && e.address !== "127.0.0.1")
    .sort((a, b) => b.cidr.indexOf("24") - a.cidr.indexOf("24"))
    .find(Boolean).address
);
