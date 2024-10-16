function validateForm(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form values
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim(); // Updated id to "message"

    // Error message holder
    let errorMessage = "";

    // Check: First name and last name are required
    if (firstname === "") {
        errorMessage += "First name is required.\n";
    }
    if (lastname === "") {
        errorMessage += "Last name is required.\n";
    }

    // Check: Message should not be empty
    if (message === "") {
        errorMessage += "Message is required.\n";
    }

    // Show error message or success alert
    if (errorMessage !== "") {
        alert(errorMessage);
    } else {
        alert("Form submitted successfully!");
        // Here you can add form submission logic (like AJAX or form reset)
    }
}

// Attach validation to form submit event
document.querySelector(".my_form").addEventListener("submit", validateForm);





const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});



// Показать форму
document.getElementById("openFormButton").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "block";
  });
  
  // Скрыть форму
  document.getElementById("closeFormButton").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none";
  });
  



  function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Получаем текущую дату и время в строковом формате
    document.getElementById('date-time').textContent = 'Текущая дата и время: ' + dateTimeString; // Обновляем содержимое элемента
}

updateDateTime(); // Вызываем функцию для обновления даты и времени
setInterval(updateDateTime, 1000); // Обновляем дату и время каждую секунду