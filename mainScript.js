document.addEventListener('keydown', function(event) {
    const navLinks = document.querySelectorAll('.nav-link');
    let currentIndex = -1;

    // Поиск активного элемента навигации
    navLinks.forEach((link, index) => {
        if (link.classList.contains('activ')) {
            currentIndex = index;
        }
    });

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        // Переход к следующему элементу
        currentIndex = (currentIndex + 1) % navLinks.length;
        updateActiveLink(navLinks, currentIndex);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        // Переход к предыдущему элементу
        currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
        updateActiveLink(navLinks, currentIndex);
    }
});

function updateActiveLink(navLinks, currentIndex) {
    // Удалить класс 'activ' у всех ссылок
    navLinks.forEach(link => link.classList.remove('activ'));

    // Добавить класс 'activ' к текущей ссылке
    navLinks[currentIndex].classList.add('activ');

    // Установить фокус на текущую ссылку
    navLinks[currentIndex].focus();
}



// Get all elements with the class 'btn'
const playSoundBtns = document.getElementsByClassName('btn');
const notificationSound = document.getElementById('btn-sound');

// Loop through all elements and add event listeners
for (let i = 0; i < playSoundBtns.length; i++) {
  playSoundBtns[i].addEventListener('click', () => {
    // Play the sound when any button with class 'btn' is clicked
    notificationSound.play();
  });
}





function validateForm(event) {
    event.preventDefault();
    
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const message = document.getElementById("message").value.trim();

    let errorMessage = "";

    // Check each field using switch-case
    switch (true) {
        case (firstname === ""):
            errorMessage += "First name is required.\n";
            break;
        case (lastname === ""):
            errorMessage += "Last name is required.\n";
            break;
        case (message === ""):
            errorMessage += "Message is required.\n";
            break;
        default:
            break;
    }

    if (errorMessage !== "") {
        alert(errorMessage);
    } else {
        // Get the current hour
        const currentHour = new Date().getHours();
        let greeting = "";

        // Determine the greeting based on the time of day
        if (currentHour < 12) {
            greeting = "Good morning";
        } else if (currentHour < 18) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }

        alert("Form submitted successfully!");
        alert(greeting + ", " + firstname + "!");
    }
}


document.querySelector(".my_form").addEventListener("submit", validateForm);



function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Получаем текущую дату и время в строковом формате
    document.getElementById('date-time').textContent = 'Time for starting your healthy lifestyle: ' + dateTimeString; // Обновляем содержимое элемента
}

updateDateTime(); // Вызываем функцию для обновления даты и времени
setInterval(updateDateTime, 1000); // Обновляем дату и время каждую секунду



document.getElementById("footer").style.backgroundColor="#FFC16C";
document.getElementById("feature_part").style.cssText="text-align: center; font-size: 30px; font-weight: bold;"



// Твой API-ключ OpenWeatherMap
const apiKey = 'ТВОЙ_РЕАЛЬНЫЙ_API_КЛЮЧ';

// ID города Астана (Нур-Султан)
const cityId = 1526273;

// Ссылка на кнопку и элемент для вывода погоды
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherDiv = document.getElementById('weather');

// Флаг, указывающий, отображаются ли данные о погоде
let isWeatherVisible = false;

// Функция для загрузки и отображения погоды
function getWeather() {
    // Если данные о погоде уже отображены, скрываем их
    if (isWeatherVisible) {
        weatherDiv.style.display = 'none';
        getWeatherBtn.textContent = 'weather in Astana for workout outside';  // Меняем текст кнопки
        isWeatherVisible = false;
    } else {
        // Если данные скрыты, загружаем и отображаем погоду
        const url = `https://api.openweathermap.org/data/2.5/weather?id=1526273&appid=8a641813331a93541243c8b37afc51ad&units=metric&lang=eng`;

        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            // Получаем данные о температуре и погоде
            const temp = data.main.temp;
            const description = data.weather[0].description;
            
            // Выводим данные на страницу
            weatherDiv.innerHTML = `
              <p>Temperature: ${temp}°C</p>
              <p>Weather: ${description}</p>
            `;

            // Показываем блок с погодой
            weatherDiv.style.display = 'block';
            getWeatherBtn.textContent = 'weather in Astana for workout outside';  // Меняем текст кнопки
            isWeatherVisible = true;
          })
          .catch(error => {
            console.error('Ошибка при загрузке данных о погоде:', error);
            weatherDiv.innerHTML = 'Не удалось загрузить данные о погоде';
            weatherDiv.style.display = 'block';  // Показываем блок даже при ошибке
            isWeatherVisible = true;
          });
    }
}

// Добавляем обработчик события на кнопку
getWeatherBtn.addEventListener('click', getWeather);




document.getElemen