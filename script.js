// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

// class Library {
//   // Приватное свойство для хранения списка книг
//   #books;

//   // Конструктор, принимающий начальный список книг
//   constructor(initialBooks = []) {
//     // Проверка на наличие дубликатов в начальном списке книг
//     const uniqueBooks = new Set(initialBooks);
//     if (uniqueBooks.size !== initialBooks.length) {
//       throw new Error("Начальный список книг содержит дубликаты");
//     }
//     // Инициализация приватного свойства #books
//     this.#books = [...uniqueBooks];
//   }

//   // Геттер для получения текущего списка книг
//   get allBooks() {
//     return [...this.#books]; // Возвращаем копию списка книг, чтобы защитить от изменений
//   }

//   // Метод для добавления книги в список
//   addBook(title) {
//     // Проверка, есть ли книга с таким названием в списке
//     if (this.#books.includes(title)) {
//       throw new Error(`Книга с названием "${title}" уже существует в списке`);
//     }
//     // Добавление книги в список
//     this.#books.push(title);
//   }

//   // Метод для удаления книги из списка по названию
//   removeBook(title) {
//     // Проверка, есть ли книга с таким названием в списке
//     const bookIndex = this.#books.indexOf(title);
//     if (bookIndex === -1) {
//       throw new Error(`Книга с названием "${title}" не найдена в списке`);
//     }
//     // Удаление книги из списка
//     this.#books.splice(bookIndex, 1);
//   }

//   // Метод для проверки наличия книги в библиотеке
//   hasBook(title) {
//     return this.#books.includes(title); // Возвращаем true, если книга есть в списке, иначе false
//   }
// }

// // Пример использования класса Library

// try {
//   // Создаем экземпляр библиотеки с начальным списком книг
//   const library = new Library(["1984", "Brave New World"]);

//   // Получаем и выводим текущий список книг
//   console.log(library.allBooks); // ["1984", "Brave New World"]

//   // Добавляем новую книгу
//   library.addBook("Fahrenheit 451");
//   console.log(library.allBooks); // ["1984", "Brave New World", "Fahrenheit 451"]

//   // Проверяем наличие книги в библиотеке
//   console.log(library.hasBook("1984")); // true
//   console.log(library.hasBook("Moby Dick")); // false

//   // Удаляем книгу из списка
//   library.removeBook("1984");
//   console.log(library.allBooks); // ["Brave New World", "Fahrenheit 451"]

//   // Попытка добавить дубликат книги
//   library.addBook("Brave New World"); // Ошибка: Книга с названием "Brave New World" уже существует в списке
// } catch (error) {
//   console.error(error.message);
// }

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// const initialData = [
// {
// product: "Apple iPhone 13",
// reviews: [
// {
// id: "1",
// text: "Отличный телефон! Батарея держится долго.",
// },
// {
// id: "2",
// text: "Камера супер, фото выглядят просто потрясающе.",
// },
// ],
// },
// {
// product: "Samsung Galaxy Z Fold 3",
// reviews: [
// {
// id: "3",
// text: "Интересный дизайн, но дорогой.",
// },
// ],
// },
// {
// product: "Sony PlayStation 5",
// reviews: [
// {
// id: "4",
// text: "Люблю играть на PS5, графика на высоте.",
// },
// ],
// },
// ];

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

// Начальные данные для продуктов и отзывов
// const initialData = [
//   {
//     product: "Apple iPhone 13",
//     reviews: [
//       { id: "1", text: "Отличный телефон! Батарея держится долго." },
//       { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
//     ],
//   },
//   {
//     product: "Samsung Galaxy Z Fold 3",
//     reviews: [{ id: "3", text: "Интересный дизайн, но дорогой." }],
//   },
//   {
//     product: "Sony PlayStation 5",
//     reviews: [{ id: "4", text: "Люблю играть на PS5, графика на высоте." }],
//   },
// ];

// // Функция для добавления отзыва
// function addReview(reviewText) {
//   // Проверка длины отзыва
//   if (reviewText.length < 50 || reviewText.length > 500) {
//     throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
//   }

//   // Создание нового элемента отзыва
//   const reviewElement = document.createElement("div");
//   reviewElement.textContent = reviewText;
//   // Добавление нового отзыва в контейнер
//   document.getElementById("reviewsContainer").appendChild(reviewElement);
// }

// // Функция для инициализации отзывов из начальных данных
// function loadInitialData() {
//   const reviewsContainer = document.getElementById("reviewsContainer");

//   // Перебор начальных данных и добавление их в контейнер отзывов
//   initialData.forEach((product) => {
//     product.reviews.forEach((review) => {
//       const reviewElement = document.createElement("div");
//       reviewElement.textContent = review.text;
//       reviewsContainer.appendChild(reviewElement);
//     });
//   });
// }

// // Инициализация начальных данных при загрузке страницы
// loadInitialData();

// // Добавление слушателя события на кнопку для отправки отзыва
// document.getElementById("submitReview").addEventListener("click", () => {
//   const reviewInput = document.getElementById("reviewInput");
//   const reviewText = reviewInput.value;

//   try {
//     // Попытка добавить новый отзыв
//     addReview(reviewText);
//     // Очистка поля ввода
//     reviewInput.value = "";
//   } catch (error) {
//     // Вывод ошибки в консоль
//     console.error(error.message);
//   }
// });
