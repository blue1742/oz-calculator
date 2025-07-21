import calculateOperation from './operations.js';
import { 
    resetDisplay, 
    setDisplay, 
    subDisplay, 
    appendNumber, 
    setOperator, 
    VALID_NUMBERS, 
    VALID_OPERATORS 
} from './input.js';
import { showError, removeError } from './error.js';
import saveHistory from './history.js';

// 상태 변수들
let history = [];
let currentInput = "";
let firstNumber = null;
let operator = null;
let isError = false;

// 모든 함수와 상태 변수 export
export { 
    calculateOperation,
    resetDisplay,
    setDisplay,
    subDisplay,
    appendNumber,
    setOperator,
    showError,
    removeError,
    saveHistory,
    VALID_NUMBERS,
    VALID_OPERATORS,
    history,
    currentInput,
    firstNumber,
    operator,
    isError
};

// 메인 계산 함수 - default export
export default function calculate() {
    try {
        // 필수 값 검증
        if (firstNumber === null || operator === null || !currentInput) {
            isError = true;
            throw new Error("계산에 필요한 값이 부족합니다.");
        }

        // 두 번째 숫자 변환 및 검증
        const secondNumber = Number(currentInput);
        if (isNaN(secondNumber)) {
            isError = true;
            throw new Error("유효한 숫자를 입력하세요.");
        }

        // 계산 수행
        const result = calculateOperation(firstNumber, secondNumber, operator);
        
        // 히스토리에 저장
        saveHistory(firstNumber, operator, secondNumber, result, history);
        
        // 결과 표시
        const resultElement = document.getElementById("result");
        resultElement.classList.remove("d-none", "alert-danger");
        resultElement.classList.add("alert-info");
        resultElement.textContent = `결과: ${result}`;
        
        // 상태 초기화
        resetDisplay();
        firstNumber = null;
        operator = null;
        isError = false;
        
    } catch (error) {
        // 에러 처리
        isError = true;
        showError(error.message);
    }
}