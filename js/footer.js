// Shows the "|" before the phone | LinkedIn group only when that group
// sits on the same line as email. When it wraps to its own row on narrow
// screens, the divider is hidden instead of dangling at the start of the
// new line. Phone and the LinkedIn icon are always kept together (see
// .footer-line2 white-space: nowrap in site.css), so only this one
// divider ever needs to adapt.
function updateFooterDividers() {
  document.querySelectorAll(".footer-contact").forEach(function (list) {
    var email = list.querySelector(".footer-email");
    var line2 = list.querySelector(".footer-line2");
    var divider = list.querySelector(".footer-divider");
    if (!email || !line2 || !divider) return;
    // A genuine wrap to a new row moves offsetTop by roughly a full line
    // height (~25-30px); same-row baseline/centering jitter is only a
    // few px, so a mid-range threshold cleanly tells them apart. The
    // divider's own space is always reserved (see site.css), so this
    // check is unaffected by our own visibility toggle below.
    var wrapped = line2.offsetTop > email.offsetTop + 15;
    divider.style.visibility = wrapped ? "hidden" : "visible";
  });
}

updateFooterDividers();
window.addEventListener("resize", updateFooterDividers);
window.addEventListener("orientationchange", updateFooterDividers);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateFooterDividers);
}
if (window.ResizeObserver) {
  document.querySelectorAll(".footer-contact").forEach(function (list) {
    new ResizeObserver(updateFooterDividers).observe(list);
  });
}
