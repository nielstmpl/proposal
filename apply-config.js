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

  function formatRp(n) {
    return Number(n || 0).toLocaleString("id-ID");
  }

  function storageKey() {
    const v = window.PROPOSAL_VARIANT || "warga";
    return "proposal-config-" + v;
  }

  function sumAnggaran(items) {
    return (items || []).reduce((s, row) => s + (row.jumlah || 0), 0);
  }

  function enrich(cfg) {
    const c = JSON.parse(JSON.stringify(cfg));
    c.sponsor = c.sponsor || {};
    c.sponsor.namaLengkap =
      c.sponsor.namaLengkap ||
      (c.sponsor.brand
        ? `${c.sponsor.nama} (${c.sponsor.brand})`
        : c.sponsor.nama || "");
    c.sponsor.benefitTitle = `Benefit Untuk ${c.sponsor.namaLengkap}`;
    c.sponsor.kerjaSama = `Bentuk kerja sama untuk ${c.sponsor.namaLengkap}`;
    c.penerima = c.penerima || {};
    if (c.variant === "sponsor" || c.sponsor.nama) {
      if (!c.penerima.nama) c.penerima.nama = c.sponsor.nama;
      if (!c.penerima.namaLengkap) c.penerima.namaLengkap = c.sponsor.namaLengkap;
      if (!c.penerima.label) c.penerima.label = "Diajukan Kepada";
    }
    if (!c.penerima.namaLengkap) {
      c.penerima.namaLengkap = c.penerima.brand
        ? `${c.penerima.nama} (${c.penerima.brand})`
        : c.penerima.nama || "";
    } else if (c.penerima.nama) {
      const nama = String(c.penerima.nama).trim();
      const lengkap = String(c.penerima.namaLengkap).trim();
      if (nama.length > lengkap.length && nama.startsWith(lengkap)) {
        c.penerima.namaLengkap = nama;
      }
    }
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
    c.anggaran = c.anggaran || { items: [] };
    c.anggaran.total = sumAnggaran(c.anggaran.items);
    c.anggaran.totalFormatted = "Rp. " + formatRp(c.anggaran.total);
    return c;
  }

  function loadConfig() {
    let cfg = window.PROPOSAL_CONFIG || {};
    try {
      const raw = localStorage.getItem(storageKey());
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

  function renderAnggaran(cfg) {
    const tbody = document.getElementById("anggaran-tbody");
    if (!tbody || !cfg.anggaran?.items) return;
    tbody.innerHTML = cfg.anggaran.items.map((row) => {
      if (row.type === "section") {
        return `<tr class="section-row"><td colspan="6">${row.label}</td></tr>`;
      }
      return `<tr>
        <td class="col-no">${row.no}</td>
        <td>${row.uraian}</td>
        <td class="col-vol">${row.vol}</td>
        <td class="col-sat">${row.sat}</td>
        <td class="col-harga">${formatRp(row.harga)}</td>
        <td class="col-jumlah">${formatRp(row.jumlah)}</td>
      </tr>`;
    }).join("");
    const totalEl = document.getElementById("anggaran-total");
    if (totalEl) totalEl.textContent = cfg.anggaran.totalFormatted;
    const catatanEl = document.getElementById("anggaran-catatan");
    if (catatanEl && cfg.anggaran.catatan) catatanEl.textContent = cfg.anggaran.catatan;
  }

  function renderPanitia(cfg) {
    const p = cfg.panitia;
    if (!p) return;

    const pel = document.getElementById("panitia-pelindung");
    if (pel) pel.textContent = p.pelindung || "";
    const pen = document.getElementById("panitia-penasihat");
    if (pen) pen.textContent = p.penasihat || "";

    const intiEl = document.getElementById("panitia-inti-extra");
    if (intiEl && p.inti) {
      intiEl.innerHTML = p.inti.map((row) => `
        <div class="row-item">
          <span class="label">${row.label}</span>
          <span class="val">${row.nama}</span>
        </div>`).join("");
    }

    const seksiEl = document.getElementById("panitia-seksi");
    if (seksiEl && p.seksi) {
      seksiEl.innerHTML = p.seksi.map((s) => `
        <div class="seksi-box">
          <h3>${s.title}</h3>
          <p><strong>Koordinator:</strong> ${s.koordinator}</p>
          <p><strong>Anggota:</strong> ${s.anggota}</p>
        </div>`).join("");
    }

    const catEl = document.getElementById("panitia-catatan");
    if (catEl && p.catatan) catEl.textContent = p.catatan;
  }

  function renderKegiatan1(cfg) {
    const k = cfg.kegiatan1;
    if (!k) return;
    const setHtml = (id, val) => {
      const el = document.getElementById(id);
      if (el && val != null) el.innerHTML = val;
    };
    setHtml("kg1-tags", k.tags);
    setHtml("kg1-title", k.title);
    setHtml("kg1-date", k.date);
    setHtml("kg1-desc", k.desc);
    setHtml("kg1-meta", k.meta);
    const sub = document.getElementById("rangkaian-sub");
    if (sub && cfg.rangkaianSub) sub.textContent = cfg.rangkaianSub;
  }

  function renderTimelinePraAgustus(cfg) {
    const t = cfg.timelinePraAgustus;
    if (!t) return;
    const setHtml = (id, val) => {
      const el = document.getElementById(id);
      if (el && val != null) el.innerHTML = val;
    };
    setHtml("tl-pra-date", t.date);
    setHtml("tl-pra-title", t.title);
    setHtml("tl-pra-desc", t.desc);
  }

  function renderHal9(cfg) {
    const h = cfg.hal9;
    if (!h) return;

    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el && val != null) el.textContent = val;
    };
    const setHtml = (id, val) => {
      const el = document.getElementById(id);
      if (el && val != null) el.innerHTML = interpolate(val, cfg);
    };

    setText("hal9-bar", h.barTitle);
    setText("hal9-title", h.title);
    setText("hal9-subtitle", interpolate(h.subtitle || "", cfg));
    setHtml("hal9-intro", h.intro);
    setText("hal9-part-title", h.partisipasiTitle);
    setText("hal9-benefits-title", interpolate(h.benefitsTitle || "", cfg));

    const partEl = document.getElementById("hal9-part-grid");
    if (partEl && h.items) {
      partEl.innerHTML = h.items.map((item) => `
        <div class="part-box">
          <div class="letter">${item.letter}</div>
          <h3>${item.title}</h3>
          <p>${interpolate(item.desc, cfg)}</p>
        </div>`).join("");
    }

    const benEl = document.getElementById("hal9-benefits");
    if (benEl && h.benefits) {
      benEl.innerHTML = h.benefits.map((b) => `<li>${interpolate(b, cfg)}</li>`).join("");
    }
  }

  function fitRecipientName(el, text) {
    if (!el || !text) return;
    el.textContent = text;
    el.style.letterSpacing = "normal";
    el.style.wordSpacing = "normal";
    el.style.whiteSpace = "normal";
    el.style.overflowWrap = "break-word";
    const len = text.length;
    if (len > 28) el.style.fontSize = "5.5mm";
    else if (len > 22) el.style.fontSize = "6.5mm";
    else if (len > 16) el.style.fontSize = "7.2mm";
    else el.style.fontSize = "";
  }

  function apply(cfg) {
    document.querySelectorAll("[data-cfg]").forEach((el) => {
      const path = el.dataset.cfg;
      const val = getByPath(cfg, path);
      if (val == null) return;
      if (path === "penerima.namaLengkap") {
        fitRecipientName(el, String(val));
        return;
      }
      el.textContent = String(val);
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

    renderAnggaran(cfg);
    renderPanitia(cfg);
    renderHal9(cfg);
    renderKegiatan1(cfg);
    renderTimelinePraAgustus(cfg);
  }

  window.reloadProposalConfig = function () {
    apply(loadConfig());
  };

  window.getProposalStorageKey = storageKey;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => apply(loadConfig()));
  } else {
    apply(loadConfig());
  }
})();
