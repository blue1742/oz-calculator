import { 
  appendNumber, 
  setOperator, 
  resetDisplay, 
  calculate, 
  VALID_NUMBERS, 
  VALID_OPERATORS, 
  currentInput, 
  isError 
} from './index.js';

document.addEventListener("keydown", (event) => {
  const key = event.key;
  
  if (VALID_NUMBERS.includes(key)) {
    appendNumber(key, currentInput);
  }
  
  if (VALID_OPERATORS.includes(key)) {
    setOperator(key, currentInput);
  }
  
  if (key === "Enter") {
    calculate();
  }
  
  if (key === "Backspace") {
    subDisplay();
  }
});

// HTML 버튼 이벤트는 index.html에서 직접 호출
// HTML의 onclick 속성은 모듈 스코프에서는 동작하지 않음
// 따라서 여기서 직접 이벤트를 등록해줘야 합니다

import { appendNumber, setOperator, clearDisplay, calculate } from './input.js';

// 숫자 버튼 이벤트 연결
document.querySelectorAll('.calc-btn').forEach(button => {
  const value = button.textContent.trim();

  if (!isNaN(value)) {
    // 숫자일 경우
    button.addEventListener('click', () => appendNumber(value));
  } else {
    // 연산자 또는 기능 버튼 처리
    switch (value) {
      case '+':
      case '-':
      case '×':
      case '*':
      case '÷':
      case '/':
        const op = value === '×' ? '*' : value === '÷' ? '/' : value;
        button.addEventListener('click', () => setOperator(op));
        break;
      case '=':
        button.addEventListener('click', calculate);
        break;
      case 'C':
        button.addEventListener('click', clearDisplay);
        break;
    }
  }
});