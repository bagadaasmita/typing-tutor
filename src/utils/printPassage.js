const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Opens a clean page with only the passage and starts the browser's print dialog. */
export function printPassage(title, passage) {
  const w = window.open("", "_blank", "width=800,height=700");
  if (!w) {
    window.alert("Please allow pop-ups for this site to print the passage.");
    return;
  }
  w.document.write(
    `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>` +
      `<style>body{font-family:Georgia,serif;font-size:20px;line-height:1.9;max-width:760px;margin:40px auto;padding:0 24px}` +
      `h1{font-family:Arial,sans-serif;font-size:18px;margin-bottom:24px}</style></head>` +
      `<body><h1>${escapeHtml(title)}: typing practice passage</h1><p>${escapeHtml(passage)}</p></body></html>`
  );
  w.document.close();
  w.focus();
  w.print();
}