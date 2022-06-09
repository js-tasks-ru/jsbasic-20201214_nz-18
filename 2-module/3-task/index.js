let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// sum() {
//   let numberSum = this.a + this.b;

//   return numberSum;
// },
// mul() {
//   let numberMul = this.a * this.b;

//   return numberMul;
// },
// read(a, b) {
//   this.a = Number(prompt("Введите значение а"));
//   this.b = Number(prompt("Введите значение b"));
// },


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
