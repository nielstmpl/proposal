(function () {
  var params = new URLSearchParams(location.search);
  var v = params.get("v") || sessionStorage.getItem("proposal-variant") || "warga";
  if (v !== "warga" && v !== "donatur" && v !== "sponsor") v = "warga";
  sessionStorage.setItem("proposal-variant", v);
  window.PROPOSAL_VARIANT = v;
  document.write('<script src="config-' + v + '.js"><\/script>');
})();
