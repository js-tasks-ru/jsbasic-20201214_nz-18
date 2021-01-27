let calculator = {
  read(a, b) {
    this.a = Number(prompt("Введите значение а"));
    this.b = Number(prompt("Введите значение b"));
  },
  sum() {
    let numberSum = this.a + this.b;

    return numberSum;
  },
  mul() {
    let numberMul = this.a * this.b;

    return numberMul;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
