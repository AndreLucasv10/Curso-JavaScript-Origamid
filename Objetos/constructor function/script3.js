/*const Dom = {
  seletor: "li",
  element() {
    return document.querySelector(this.seletor);
  },
  ativar() {
    this.element().classList.add("ativar");
  },
};
Dom.ativar();
Dom.seletor = "ul";
Dom.ativar();
*/

function Dom(seletor) {
  (this.element = function () {
    return document.querySelector(seletor);
  }),
    (this.ativar = function () {
      this.element().classList.add("ativar");
    }),
    (this.remove = function () {
      this.element().ClassList.remove();
    });
}
const li = new Dom("li");

li.element();
