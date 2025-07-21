// 입력 처리 함수
const VALID_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const VALID_OPERATORS = ["+", "-", "*", "/"];

// 디스플레이 초기화
const resetDisplay = () => {
    return "";
};

// 디스플레이 설정
const setDisplay = (text) => {
    // 빈 문자열이나 null/undefined 처리
    if (text === null || text === undefined) {
        return "";
    }
    return String(text);
};

// 디스플레이에서 마지막 문자 제거 (백스페이스 기능)
const subDisplay = (currentInput) => {
    if (!currentInput || typeof currentInput !== 'string') {
        return "";
    }
    return currentInput.slice(0, -1);
};

// 숫자를 현재 입력에 추가
const appendNumber = (number, currentInput) => {
    // 유효성 검사
    if (!VALID_NUMBERS.includes(number)) {
        throw new Error("유효한 숫자를 입력하세요.");
    }
    
    // 현재 입력값이 없거나 null/undefined인 경우 처리
    const current = currentInput || "";
    
    // 맨 앞에 0이 있고 다른 숫자를 입력하는 경우 0 제거
    if (current === "0" && number !== "0") {
        return setDisplay(number);
    }
    
    // 이미 0만 있는 상태에서 0을 추가하려는 경우 그대로 반환
    if (current === "0" && number === "0") {
        return setDisplay("0");
    }
    
    return setDisplay(current + number);
};

// 연산자 설정
const setOperator = (op, currentInput) => {
    // 유효성 검사
    if (!VALID_OPERATORS.includes(op)) {
        throw new Error("유효한 연산자를 선택하세요.");
    }
    
    // 현재 입력값이 없는 경우 에러
    if (!currentInput || currentInput.trim() === "") {
        throw new Error("숫자를 먼저 입력하세요.");
    }
    
    return op;
};

export {
    resetDisplay,
    setDisplay,
    subDisplay,
    appendNumber,
    setOperator,
    VALID_NUMBERS,
    VALID_OPERATORS
};