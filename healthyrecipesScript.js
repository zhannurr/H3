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



// function changeBackgroundColor() {
//     const section = document.getElementById("cards");
//     section.style.backgroundColor = section.style.backgroundColor === "lightblue" ? "lightgray" : "lightblue";
// }

document.getElementById("footer").style.backgroundColor="#FFC16C";


// Get all elements with the class 'btn'
const playSoundBtns = document.getElementsByClassName("btn");
const notificationSound = document.getElementById('btn-sound');

// Loop through all elements and add event listeners
for (let i = 0; i < playSoundBtns.length; i++) {
  playSoundBtns[i].addEventListener('click', () => {
    // Play the sound when any button with class 'btn' is clicked
    notificationSound.play();
  });
}

