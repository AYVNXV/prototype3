const pageName = document.body.dataset.page;
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

document.querySelectorAll(`[data-nav="${pageName}"]`).forEach((link) => {
  link.setAttribute("aria-current", "page");
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation?.classList.toggle("is-open", !isExpanded);
});

document.querySelector("[data-inquiry-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const text = `Assalam o Alaikum, I am ${data.get("name")}. Topic: ${data.get("topic")}. ${data.get("message")}`;
  document.querySelector("[data-form-status]").textContent = "WhatsApp will open with your message ready to send.";
  window.open(`https://wa.me/923000000000?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});
