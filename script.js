// Логика переключения вкладок
function openTab(tabId, event) {
    // Скрываем все вкладки
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Убираем активный класс у всех кнопок
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Показываем нужную вкладку
    document.getElementById(tabId).classList.add('active');
    
    // Делаем нажатую кнопку активной
    event.currentTarget.classList.add('active');
}

// Логика мини-теста
function checkAnswer(button, isCorrect, questionId) {
    // Блокируем кнопки для этого вопроса, чтобы нельзя было нажать дважды
    const parent = document.getElementById(questionId);
    const buttons = parent.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);

    const feedback = document.getElementById('fb-' + questionId);
    feedback.classList.add('show');

    if (isCorrect) {
        // Если ответ верный
        button.classList.add('correct');
        feedback.textContent = "✅ Верно!";
        feedback.style.color = "var(--success)";
    } else {
        // Если ответ неверный
        button.classList.add('wrong');
        feedback.textContent = "❌ Ошибка! Правильный ответ выделен зеленым.";
        feedback.style.color = "var(--error)";
        
        // Автоматически подсвечиваем правильный ответ зеленым
        buttons.forEach(btn => {
            // Ищем кнопку, у которой в onclick передается true
            if (btn.getAttribute('onclick').includes('true')) {
                btn.classList.add('correct');
            }
        });
    }
}