// 에러 메시지를 표시하는 함수
const showError = (message) => {
    const resultElement = document.getElementById("result");
    
    // 기존 클래스 제거
    resultElement.classList.remove("d-none", "alert-info");
    // 에러 스타일 추가
    resultElement.classList.add("alert-danger");
    // 에러 메시지 설정
    resultElement.textContent = `오류: ${message}`;
    
    // 에러 메시지를 잠시 후에 자동으로 숨김 (선택사항)
    setTimeout(() => {
        removeError();
    }, 3000);
};

// 에러 표시를 제거하는 함수
const removeError = () => {
    const resultElement = document.getElementById("result");
    
    // 에러 스타일 제거
    resultElement.classList.remove("alert-danger");
    // 결과 영역 숨김
    resultElement.classList.add("d-none");
    // 텍스트 초기화
    resultElement.textContent = "";
};

export { showError, removeError };