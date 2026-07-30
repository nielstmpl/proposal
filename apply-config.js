(function () {
  function deepMerge(target, source) {
    const out = { ...target };
    for (const key of Object.keys(source)) {
      if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
        out[key] = deepMerge(out[key] || {}, source[key]);
      } else {
        out[key] = source[key];
      }
    }
    return out;
  }

  function getByPath(obj, path) {
    return path.split(".").reduce((o, k) => (o != null ? o[k] : undefined), obj);
  }

  function enrich(cfg) {
    const c = JSON.parse(JSON.stringify(cfg));
    c.sponsor = c.sponsor || {};
    c.sponsor.namaLengkap =
      c.sponsor.namaLengkap ||
      (c.sponsor.brand
        ? `${c.sponsor.nama} (${c.sponsor.brand})`
        : c.sponsor.nama);
    c.sponsor.benefitTitle = `Benefit Untuk ${c.sponsor.namaLengkap}`;
    c.sponsor.kerjaSama = `Bentuk kerja sama untuk ${c.sponsor.namaLengkap}`;
    c.meta = c.meta || {};
    c.meta.tanggalSurat = `${c.surat?.tempat || ""}, ${c.surat?.tanggal || ""}`.replace(/^,\s*/, "");
    const tema = c.meta.tema || "";
    const idx = tema.lastIndexOf(" ");
    if (idx > 0) {
      c.meta.temaFirst = tema.slice(0, idx);
      c.meta.temaLast = tema.slice(idx + 1);
    } else {
      c.meta.temaFirst = tema;
      c.meta.temaLast = "";
    }
    return c;
  }

  function loadConfig() {
    let cfg = window.PROPOSAL_CONFIG || {};
    try {
      const raw = localStorage.getItem("proposal-config-override");
      if (raw) cfg = deepMerge(cfg, JSON.parse(raw));
    } catch (e) {
      console.warn("Gagal baca override config:", e);
    }
    return enrich(cfg);
  }

  function interpolate(str, cfg) {
    return String(str).replace(/\{\{([^}]+)\}\}/g, (_, path) => {
      const val = getByPath(cfg, path.trim());
      return val != null ? val : "";
    });
  }

  function apply(cfg) {
    document.querySelectorAll("[data-cfg]").forEach((el) => {
      const val = getByPath(cfg, el.dataset.cfg);
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll("[data-cfg-html]").forEach((el) => {
      const val = getByPath(cfg, el.dataset.cfgHtml);
      if (val != null) el.innerHTML = interpolate(val, cfg);
    });

    document.querySelectorAll("[data-cfg-tpl]").forEach((el) => {
      const val = getByPath(cfg, el.dataset.cfgTpl);
      if (val != null) el.innerHTML = interpolate(val, cfg);
    });

    document.querySelectorAll("[data-cfg-src]").forEach((el) => {
      const val = getByPath(cfg, el.dataset.cfgSrc);
      const block = el.closest(".sign-block");
      if (val) {
        el.src = val;
        el.style.display = "";
        block?.classList.add("has-ttd");
      } else {
        el.style.display = "none";
        block?.classList.remove("has-ttd");
      }
    });

    document.querySelectorAll("[data-cfg-hide-if-empty]").forEach((el) => {
      const val = getByPath(cfg, el.dataset.cfgHideIfEmpty);
      el.style.display = val ? "" : "none";
    });
  }

  window.reloadProposalConfig = function () {
    apply(loadConfig());
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => apply(loadConfig()));
  } else {
    apply(loadConfig());
  }
})();
