export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]"); //NODELIST

  if (tooltips.length) {
    function onMouseOver() {
      // após passar o mouse por cima do elemento selecionado, vão acontecer as seguintes ações
      const toolTipBox = criartoolTipBox(this);

      onMouseMove.toolTipBox = toolTipBox; //criando a propiedade tooltipbox dentro do (callback ONMOUSEMOVE)
      this.addEventListener("mousemove", onMouseMove);

      onMouseLeave.element = this;
      onMouseLeave.toolTipBox = toolTipBox; //criando a propiedade tooltipbox dentro do (callback ONMOUSELEAVE)
      this.addEventListener("mouseleave", onMouseLeave);
    }

    const onMouseMove = {
      handleEvent(event) {
        this.toolTipBox.style.top = event.pageY + 20 + "px"; //para saber onde o mouse está passando dentro do data-tooltip (e transformar em px)
        this.toolTipBox.style.left = event.pageX + 20 + "px"; //para saber onde o mouse está passando dentro do data-tooltip (e transformar em px)
      },
    };

    const onMouseLeave = {
      handleEvent() {
        this.toolTipBox.remove();
        this.element.removeEventListener("mousemove", onMouseMove); // PARA REMOVER OS EVENTOS DEPOIS DE RETIRAR O MOUSE DO ELEMENTO
        this.element.removeEventListener("mouseleave", onMouseLeave); // PARA REMOVER OS EVENTOS DEPOIS DE RETIRAR O MOUSE DO ELEMENTO
      },
    };

    function criartoolTipBox(element) {
      const toolTipBox = document.createElement("div");
      const text = element.getAttribute("aria-label"); //vai retonar oque está dentro dessa aria-label
      toolTipBox.classList.add("tooltip");
      toolTipBox.innerText = text;
      document.body.appendChild(toolTipBox); //vai colocar o elemento lá em baixo do body.
      return toolTipBox;
    }

    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver); //evento para adicionar algo ao passar o mouse por cima do ELEMENTO
    });
  }
}
