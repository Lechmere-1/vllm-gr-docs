(() => {
  const selector = document.querySelector("[data-gr-version-selector]");
  if (!selector) return;

  const summary = selector.querySelector("summary");
  const close = () => { selector.open = false; };

  document.addEventListener("click", (event) => {
    if (!selector.contains(event.target)) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && selector.open) {
      close();
      summary.focus();
      event.preventDefault();
    }
  });

  selector.addEventListener("focusout", (event) => {
    if (!selector.contains(event.relatedTarget)) close();
  });

  const current = selector.querySelector("[data-gr-current-version]");
  current?.addEventListener("click", (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey
      || current.pathname !== window.location.pathname) return;
    event.preventDefault();
    close();
    summary.focus();
  });

  for (const id of ["__drawer", "__search"]) {
    document.getElementById(id)?.addEventListener("change", (event) => {
      if (event.target.checked) close();
    });
  }
})();
