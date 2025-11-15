// Controle das abas 01 / 02 / 03

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-section]");
  const sections = document.querySelectorAll(".personagem-section");

  if (!buttons.length || !sections.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.section;
      const targetId = `section-${target}`;

      // ativa botão
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // mostra só a seção correspondente
      sections.forEach((sec) => {
        sec.classList.toggle("active", sec.id === targetId);
      });
    });
  });
});
