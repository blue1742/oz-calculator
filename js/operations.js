// 사칙연산 수행
export default function calculateOperation(firstNumber, secondNumber, operator) {
    // 입력값 유효성 검사
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw new Error('첫 번째와 두 번째 인수는 숫자여야 합니다.');
    }
    
    if (typeof operator !== 'string') {
        throw new Error('연산자는 문자열이어야 합니다.');
    }
    
    // 사칙연산 수행
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        
        case '-':
            return firstNumber - secondNumber;
        
        case '*':
            return firstNumber * secondNumber;
        
        case '/':
            // 0으로 나누기 에러 처리
            if (secondNumber === 0) {
                throw new Error('0으로 나눌 수 없습니다.');
            }
            return firstNumber / secondNumber;
        
        default:
            throw new Error(`지원하지 않는 연산자입니다: ${operator}. (+, -, *, / 만 지원합니다)`);
    }
}

// 사용 예시 (테스트용)
/*
try {
    console.log(calculateOperation(10, 5, '+')); // 15
    console.log(calculateOperation(10, 5, '-')); // 5
    console.log(calculateOperation(10, 5, '*')); // 50
    console.log(calculateOperation(10, 5, '/')); // 2
    console.log(calculateOperation(10, 0, '/')); // Error: 0으로 나눌 수 없습니다.
} catch (error) {
    console.error(error.message);
}
*/
