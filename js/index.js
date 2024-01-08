const userId = "2"; // 유저 아이디

const eventSource = new EventSource(`http://localhost:5000/sse/${userId}`);

// SSE 이벤트 수신
eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("Received data:", data);
};

// SSE 연결이 열렸을 때
eventSource.onopen = () => {
    console.log("SSE connection opened");
};

// SSE 연결이 닫혔을 때
eventSource.onclose = () => {
    console.log("SSE connection closed");
};

// SSE 연결 에러가 발생했을 때
eventSource.onerror = (error) => {
    console.error("SSE connection error:", error);
};

// // 예시로 SSE 업데이트를 수행하는 POST 요청
// fetch("http://localhost:5000/sse", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         userId: 1,
//     }),
// });
