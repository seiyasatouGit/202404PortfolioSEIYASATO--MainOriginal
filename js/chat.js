// document.getElementById('send-button').addEventListener('click', function() {
//     const userInput = document.getElementById('user-input').value;
//     if (userInput.trim() !== '') {
//         appendMessage('ユーザー', userInput, 'user-message');
//         document.getElementById('user-input').value = '';
//         // シンプルな応答ロジック
//         setTimeout(function() {
//             appendMessage('ボット', 'これはフェイクのチャットボット応答です。', '');
//         }, 1000);
//     }
// });

// function appendMessage(sender, message, className) {
//     const chatLog = document.getElementById('chat-log');
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${className}`;
//     messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
//     chatLog.appendChild(messageDiv);
//     chatLog.scrollTop = chatLog.scrollHeight;
// }




//会話追加
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendMessage('ユーザー', userInput, 'user-message');
        document.getElementById('user-input').value = '';
        // 応答ロジック
        setTimeout(function() {
            const botResponse = generateResponse(userInput);
            appendMessage('ボット', botResponse, '');
        }, 1000);
    }
});

function appendMessage(sender, message, className) {
    const chatLog = document.getElementById('chat-log');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function generateResponse(input) {
    const normalizedInput = input.toLowerCase().trim();
    let response = 'これはフェイクのチャットボット応答です。';

    if (normalizedInput.includes('こんにちは')) {
        response = 'こんにちは！ご機嫌いかがですか？';
    } else if (normalizedInput.includes('元気')) {
        response = 'それは良かったです！';
    } else if (normalizedInput.includes('名前')) {
        response = '私はチャットボットです。';
    } else if (normalizedInput.includes('ありがとう')) {
        response = 'どういたしまして！';
    }

    return response;
}