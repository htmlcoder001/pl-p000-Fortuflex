//! меняем 'input[name="country_code"]' на 'select[name="country_code"]' если на ленде СПЛИТ ГЕО
const countryNodeSelector = 'input[name="country_code"]';

//! Новую страну добавлять в формате "ТелефонныйКод_МинДлинаНомера_МаксДлинаНомера".
//! Если нет информации по длине телефона пишем просто "ТелефонныйКод", по умолчанию будет мин 6 макс 20.
function getPhonePrefix(countryCode) {
  switch (countryCode) {
    case "MA": // Марокко
      return "212_12_14";
    case "PA": // Панама
      return "507_9_13";
    case "SV": // Сальвадор
      return "503_8_12";
    case "VE": // Венесуэлла
      return "58_8_13";
    case "DZ": // Алжир
      return "213_10_12";
    case "MX": // Мексика
      return "52_12_12";
    case "BG": // Болгария
      return "359_12_12";
    case "HR": // Хорватия
      return "385_8_13";
    case "DO": // Доминикана
      return "1_8_11";
    case "PY": // Парагвай
      return "595_8_13";
    case "CO": // Колумбия
      return "57_12_12";
    case "PE": // Перу
      return "51_10_11";
    case "GT": // Гватемала
      return "502_11_11";
    case "PL": // Польша
      return "48_11_11";
    case "IN": // Индия
      return "91_12_12";
    case "CL": // Чили
      return "56_10_11";
    case "IT": // Италия
      return "39_8_16";
    case "EC": // Эквадор
      return "593_11_13";
    case "CZ": // Чешская Республика
      return "420_12_12";
    case "HU": // Венгрия
      return "36_8_12";
    case "LT": // Литва
      return "370_11_11";
    case "MY": // Малайзия
      return "60_11_14";
    case "GR": // Греция
      return "30_12_12";
    case "AT": // Австрия
      return "43_12_16";
    case "UA": // Украина
      return "380_12_12";
    case "CY": // Кипр
      return "357_11_11";
    case "PT": // Португалия
      return "351_12_12";
    case "SK": // Словакия
      return "421_12_12";
    case "SI": // Словения
      return "386_11_11";
    case "EE": // Эстония
      return "372_10_11";
    case "SA": // Саудовская Аравия
      return "966_12_12";
    case "PH": // Филиппины
      return "63_10_12";
    case "JO": // Иордания
      return "962_11_12";
    case "IQ": // Ирак
      return "964_11_13";
    case "KW": // Кувейт
      return "965_11_12";
    case "NG": // Нигерия
      return "234_13_13";
    case "OM": // Оман
      return "968_11_11";
    case "CI": // Кот-дИвуар
      return "225_11_13";
    case "KE": // Кения
      return "254_9_15";
    case "AL": // Албания
      return "355_12_12";
    case "XK": // Косово
      return "383_11_11";
    case "ES": // Испания
      return "34_11_11";
    case "ZA": // ЮАР
      return "27_4_11";
    case "BE": // Бельгия
      return "32_11_11";
    case "RO": // Румыния
      return "40_8_12";
    case "BR": // Бразилия
      return "55_12_13";
    case "ZW": // Зимбабве
      return "263";
    case "AM": // Армения
      return "374";
    case "GA": // Габон
      return "241";
    case "NG": // Нигерия
      return "234";
    case "NI": // Никарагуа
      return "505";
    case "LV": // Латвия
      return "371";
    case "GH": // Гана
      return "233";
    case "AO": // Ангола
      return "244";
    case "LU": // Люксембург
      return "352";
    case "AR": // Аргентина
      return "54";
    case "SN": // Сенегал
      return "221";
    case "BD": // Бангладеш
      return "880";
    case "VE": // Венесуэла
      return "58";
    case "CR": // Коста-Рика
      return "506";
    case "NP": // Непал
      return "977";
    case "AZ": // Азербайджан
      return "994";
    case "BO": // Боливия
      return "591";
    case "HN": // Гондурас
      return "504";
    case "ME": // Черногория
      return "382";
    case "KZ": // Казахстан
      return "7";
    case "FR": // Франция
      return "33";
    case "UZ": // Узбекистан
      return "998";
    case "LK": // Шри-Ланка
      return "94";
    case "MD": // Молдова
      return "373";
    case "BA": // Босния
      return "387";
    case "BY": // Беларусь
      return "375";
    case "UK": // Великобритания
      return "44";
    case "RS": // Сербия
      return "381";
    case "MK": // Македония
      return "389";
    case "GE": // Грузия
      return "995";
    case "KG": // Кыргызстан
      return "996";
    case "TR": // Турция
      return "90";
    case "DE": // Германия
      return "49";
    case "TW": // Тайвань
      return "886";
    case "CH": // Швейцария
      return "41";
    case "NL": // Нидерланды
      return "31";
    case "ID": // Индонезия
      return "62";
    case "CM": // Камерун
      return "237";
    case "MR": // Мавритания
      return "222";
    case "RW": // Руанда
      return "250";
    case "TJ": // Таджикистан
      return "992";
    case "UY": // Уругвай
      return "598";
    case "TN": // Тунис
      return "216";
    case "SG": // Сингапур
      return "65";
    case "TH": // Таиланд
      return "66";
    case "AE": // ОАЭ
      return "971";
    case "QA": // Катар
      return "974";
    case "DK": // Дания
      return "45";
    case "FI": // Финляндия
      return "358";
    case "ML": // Мали
      return "223";
    case "PK": // Пакистан
      return "92";
    default:
      return "_6_20";
  }
}

function setMask() {
  // Находим код страны, если на странице select вместо input то поменять селектор!
  const countryNode = document.querySelector(countryNodeSelector);

  const phoneMinLength = +getPhonePrefix(document.querySelector(countryNodeSelector).value.toUpperCase()).split("_")[1] || 6;
  const phoneMaxLength = +getPhonePrefix(document.querySelector(countryNodeSelector).value.toUpperCase()).split("_")[2] || 20;
  const tooShortNumMessage = "The phone number must contain at least " + phoneMinLength + " digits.";

  // Если наш елемент с кодом страны это селект то вешаем слушатель на смену страны
  if (countryNode.tagName === "SELECT") {
    const selectCountryNodes = document.querySelectorAll(countryNodeSelector);

    function onGeoSelectChange({ target }) {
      // Пробегаемся по всем формам и селектам и удаляем прошлые слушатели.
      var forms = document.querySelectorAll('form[method="post"]');
      forms.forEach(function (form) {
        form.removeEventListener("submit", handleFormSubmit);
        var phoneInputs = form.querySelectorAll('input[name="phone"]');
        phoneInputs.forEach(function (phoneInput) {
          phoneInput.value = "";
          phoneInput.removeEventListener("input", handlePhoneInput);
        });
      });
      selectCountryNodes.forEach((node) => {
        node.removeEventListener("change", onGeoSelectChange);
      });
      // меняем значение всех селектов форм на странице на одинаковое
      const geoSelectors = document.querySelectorAll(countryNodeSelector);
      geoSelectors.forEach((selector) => {
        selector.value = target.value;
      });
      // Заново запускаем маску.
      setMask();
    }

    selectCountryNodes.forEach((node) => {
      node.addEventListener("change", onGeoSelectChange);
    });
  }
  let phonePrefix = getPhonePrefix(countryNode.value.toUpperCase()).split("_")[0];
  // Функция для обработки события ввода
  function handlePhoneInput(event) {
    var phoneInput = event.target;
    var inputValue = phoneInput.value;
    var numericValue = inputValue.replace(/[^\d]/g, "");
    // Если номер не начинается с phonePrefix, добавляем phonePrefix в начало.
    if (!numericValue.startsWith(phonePrefix)) {
      numericValue = phonePrefix + numericValue.substr(3);
    }
    // Добавление "+" в начло
    phoneInput.value = "+" + numericValue;
    // Если номер не содержит хотя бы phoneMinLength цифр, устанавливаем кастомный error с сообщением на инпут.
    if (numericValue.length < phoneMinLength) {
      phoneInput.setCustomValidity(tooShortNumMessage);
    } else {
      phoneInput.setCustomValidity("");
    }
  }
  // Функция для обработки события отправки формы
  function handleFormSubmit(event) {
    var phoneInput = event.target.querySelector('input[name="phone"]');
    var numericValue = phoneInput.value.replace(/[^\d]/g, "");
    // Если номер не содержит хотя бы phoneMinLength цифр, запрещаем отправку формы и выводим алерт.
    if (numericValue.length < phoneMinLength) {
      event.preventDefault();
      alert(tooShortNumMessage);
      return;
    }
    // проверка на дубль
    if (!checkPhoneNumber(event)) {
      event.preventDefault();
    }
  }
  // Находим все формы на странице
  var forms = document.querySelectorAll('form[method="post"]');
  // Пробегаемся по всем формам
  forms.forEach(function (form) {
    form.addEventListener("submit", handleFormSubmit);
    // Находим все поля имени в каждой форме.
    var nameInputs = form.querySelectorAll('input[name="name"]');
    nameInputs.forEach(function (nameInput) {
      // Делаем поле обязательным для отправки формы
      nameInput.setAttribute("required", "");
    });
    // Находим все поля ввода телефона в каждой форме.
    var phoneInputs = form.querySelectorAll('input[name="phone"]');
    // Пробегаемся по всем полям ввода и вешаем на них функцию проверки при вводе.
    phoneInputs.forEach(function (phoneInput) {
      // Делаем поле обязательным для отправки формы
      phoneInput.setAttribute("required", "");
      // Устанавливаем максимальную длину номера телефона (на 1 больше так как еще "+")
      phoneInput.setAttribute("maxlength", phoneMaxLength + 1);
      phoneInput.value = "+" + phonePrefix; // Устанавливаем начальное значение при загрузке страницы
      phoneInput.addEventListener("input", handlePhoneInput);
    });
  });
}

document.addEventListener("DOMContentLoaded", setMask);

const modalStyle = document.createElement("style");
modalStyle.textContent = `
    /* Стили для модального окна */
    #mmyMModal {
    font-family: roboto;
    display: none;
    position: fixed;
    z-index: 99999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    animation: .3s ease 0s normal none 1 running fadeIn;
    }
    #mmyMModal .mmodal-content {
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    max-width: 600px;
    width: 80%;
    max-height: 80vh;
    overflow-y: auto;
    text-align: center;
    font-weight: 800;
    color: black;
    border-radius: 10px;
    }
    #mmyMModal .ccloseWWindow {
    color: #aaa;
    position: absolute;
    top: -3px;
    right: 5px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    z-index: 9999;
    }
    #mmyMModal .ccloseWWindow:hover,
    #mmyMModal .ccloseWWindow:focus {
    color: black;
    text-decoration: none;
    }
    #mmyMModal .mmodal-ttext {
    all: initial;
    font-size: 25px;
    font-weight: 700;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    }
    #mmyMModal .success_icon {
    all: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    }
    #mmyMModal .success_icon p {
    all: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    position: relative;
    font-family: sans-serif;
    }
    #mmyMModal .success_icon p::before {
    all: initial;
    content: "Х";
    font-size: 50px;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto, sans-serif;
    }
    #mmyMModal .success_icon p::after {
    all: initial;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ef2c2c;
    z-index: -1;
    }
    /* Адаптивные стили для модального окна */
    @media only screen and (max-width: 768px) {
      #mmyMModal .mmodal-ccontent {
      padding: 30px;
      font-size: 16px;
      }
      #mmyMModal .success_icon p {
      font-size: 40px;
      width: 80px;
      height: 80px;
      line-height: 80px;
      }
    }
    @keyframes fadeIn {
      from {
      opacity: 0;
      }
      to {
      opacity: 1;
      }
    }
    @keyframes iconScale {
       0% {
       opacity: 0
       }
       100% {
       opacity: 1
       }
    }
    body.modal-open {
        overflow: hidden;
    }`;

/* Создание модального окна */
const modalHTML = `
    <!-- Модальное окно -->
    <div id="mmyMModal" class="mmodalWWindow">
      <div class="mmodal-content">
        <div class="modal-inner">
          <p id="eerror-ttitle" class="mmodal-ttext"></p>
          <div class="success_icon">
            <p class="closeIcon">X</p>
          </div>
          <span class="ccloseWWindow">&times;</span>
          <p id="mmodalTText" class="mmodal-ttext"></p>
        </div>
      </div>
    </div>
    `;

// Добавляем стили и HTML для модального окна на страницу
document.head.appendChild(modalStyle);
document.body.insertAdjacentHTML("beforeend", modalHTML);

// Добавляем обработчик события на иконку "X" в модальном окне
var icon = document.querySelector("#mmyMModal .success_icon p");
if (icon) {
  icon.addEventListener("click", function () {
    icon.style.animation = "iconScale 0.5s ease";
    setTimeout(function () {
      icon.style.animation = "";
    }, 500);
  });
}

// Функция для отображения модального окна с текстом в зависимости от страны
function showModal(errorMessage, errorTitle) {
  var modal = document.getElementById("mmyMModal");
  var errorTitleElement = document.getElementById("eerror-ttitle");
  var modalTextElement = document.getElementById("mmodalTText");

  // Устанавливка заголовка и сообщения об ошибке
  errorTitle = errorTitle.trim(); // Убираем пробелы в начале и конце строки
  errorMessage = errorMessage.trim(); // Убираем пробелы в начале и конце строки
  errorTitleElement.textContent = errorTitle;
  modalTextElement.textContent = errorMessage;

  // Отображение модального окна
  modal.style.display = "block";

  // При нажатии на Х закрыть модальное окно
  var span = document.querySelector("#mmyMModal .ccloseWWindow");
  span.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  };

  // При нажатии на любое место закрыть модальное окно
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  };
  document.body.classList.add("modal-open");
}

// Функция для проверки уникальности номера телефона
function checkPhoneNumber(event) {
  var form = event.target; // Получаем форму, на которой произошло событие
  var offer = form.querySelector('input[name="offer_name"]').value; // Получаем значение поля "offer" из формы, на которой произошло событие (меняется)
  var phone = form.querySelector('input[name="phone"]').value; // Получаем значение поля "phone" из формы, на которой произошло событие
  var country = form.querySelector(countryNodeSelector).value; // Получаем значение поля "country_code" из формы, на которой произошло событие (меняется)

  // Получаем данные из LocalStorage
  var storagePhone123 = localStorage.getItem("storagePhone123");
  if (!storagePhone123) {
    storagePhone123 = {};
  } else {
    storagePhone123 = JSON.parse(storagePhone123);
  }

  // Блокируем кнопку
  var submitBtn = form.querySelector('[type="submit"]');
  submitBtn.disabled = true;

  // Проверка уникальности номера телефона для выбранного оффера
  if (storagePhone123.hasOwnProperty(offer) && storagePhone123[offer].includes(phone)) {
    var errorMessage, errorTitle;
    switch (country.toUpperCase()) {
      case "AL":
        errorTitle = "Gabim";
        errorMessage = "Më vjen keq, keni dërguar tashmë një kërkesë."; // Албанский перевод
        break;
      case "RS":
        errorTitle = "Грешка";
        errorMessage = "Извините, већ сте поднели захтев."; // Сербский перевод
        break;
      case "MK":
        errorTitle = "Грешка";
        errorMessage = "Извинете, веќе сте поднеле барање."; // Македонский перевод
        break;
      case "MX":
      case "CO":
      case "PE":
      case "GT":
      case "HN":
      case "BO":
      case "EC":
      case "CL":
      case "AR":
      case "KE":
      case "VE":
      case "CR":
        errorTitle = "Error";
        errorMessage = "Lo siento, ya has enviado una solicitud."; // Испанский перевод
        break;
      case "XK":
        errorTitle = "Gabim";
        errorMessage = "Më vjen keq, keni dërguar tashmë një kërkesë."; // Косовский перевод
        break;
      case "GE":
        errorTitle = "შეცდომა";
        errorMessage = "საწარმოშო უკვე გამოგეგზავნათ."; // Грузинский перевод
        break;
      case "BG":
        errorTitle = "Грешка";
        errorMessage = "Съжаляваме, вече сте изпратили заявка."; // Болгарский перевод
        break;
      case "BA":
        errorTitle = "Грешка";
        errorMessage = "Извиняваме се, вече сте изпратили заявка."; // Боснийский перевод
        break;
      case "HR":
        errorTitle = "Грешка";
        errorMessage = "Извинете, веќе сте поднеле барање."; // Хорватский перевод
        break;
      case "MD":
        errorTitle = "Eroare";
        errorMessage = "Ne pare rau, ati trimis deja o cerere."; // Молдавский перевод
        break;
      case "RO":
        errorTitle = "Eroare";
        errorMessage = "Ne pare rău, ați trimis deja o cerere."; // Румынский перевод
        break;
      case "KG":
        errorTitle = "Катаалууга чатылат";
        errorMessage = "Кечиресиз, сиз мурожаат жөнөткөн болгонуз."; // Кыргызский перевод
        break;
      case "TR":
        errorTitle = "Hata";
        errorMessage = "Üzgünüz, zaten bir talep gönderdiniz."; // Турецкий перевод
        break;
      case "UZ":
        errorTitle = "Xatolik";
        errorMessage = "Кечиринг, сиз мурожаатни юборгансиз."; // Узбекский перевод
        break;
      case "LK":
        errorTitle = "වැරදි";
        errorMessage = "සමාවෙන්න, ඔබ දැනටමත් විමසීමට යොමු කළා."; // Шри-Ланкийский перевод
        break;
      case "ME":
        errorTitle = "Грешка";
        errorMessage = "Извините, вы уже подали запрос."; // Черногорский перевод
        break;
      case "KZ":
        errorTitle = "Қате";
        errorMessage = "Кешіріңіз, сіз әлі де өтініш жібергенсіз."; // Казахский перевод
      case "FR":
      case "CI":
      case "CM":
      case "SN":
        errorTitle = "Erreur";
        errorMessage = "Désolé, vous avez déjà soumis une demande."; // Французский перевод
        break;
      case "PL":
        errorTitle = "Błąd";
        errorMessage = "Przepraszamy, już wysłałeś(aś) zapytanie."; // Польский перевод
        break;
      case "AZ":
        errorTitle = "Səhv";
        errorMessage = "Bağışlayın, siz artıq bir tələb göndəribsiniz."; // Азербайджанский перевод
        break;
      case "IN":
        errorTitle = "त्रुटि";
        errorMessage = "क्षमा करें, आपने पहले से ही एक अनुरोध भेज दिया है।"; // Индийский перевод
        break;
      case "BY":
        errorTitle = "Памылка";
        errorMessage = "Прабачце, вы ўжо падалі заяўку."; // Белорусский перевод
        break;
      case "NP":
        errorTitle = "त्रुटि";
        errorMessage = "माफ गर्नुहोस्, तपाईंले पहिले नै एक अनुरोध पठाएका छन्।"; // Непальский перевод
        break;
      case "IT":
        errorTitle = "Errore";
        errorMessage = "Ci dispiace, hai già inviato una richiesta."; // Итальянский перевод
        break;
      case "CZ":
        errorTitle = "Chyba";
        errorMessage = "Omlouváme se, již jste odeslal(a) žádost."; // Чешский перевод
        break;
      case "ZA":
        errorTitle = "Fout";
        errorMessage = "Jammer, u het reeds 'n versoek gestuur."; // Африкаанс (ЮАР) перевод
        break;
      case "BD":
        errorTitle = "ত্রুটি";
        errorMessage = "দুঃখিত, আপনি ইতিমধ্যে একটি অনুরোধ প্রেরণ করেছেন।"; // Бангладеш
        break;
      case "HU":
        errorTitle = "Hiba";
        errorMessage = "Sajnáljuk, már elküldte a kérelmet."; // Венгрия
        break;
      case "LT":
        errorTitle = "Klaida";
        errorMessage = "Atsiprašome, jūs jau pateikėte užklausą."; // Литва
        break;
      case "AM":
        errorTitle = "Սխալ";
        errorMessage = "Ցավոք, արդեն ուղարկել եք հարցումը։"; // Армения
        break;
      case "GA":
        errorTitle = "Erreur";
        errorMessage = "Désolé, vous avez déjà soumis une demande."; // Габон
        break;
      case "NG":
        errorTitle = "Error";
        errorMessage = "Sorry, you have already submitted a request."; // Нигерия
        break;
      case "BE":
        errorTitle = "Fout";
        errorMessage = "Sorry, u heeft al een aanvraag ingediend."; // Бельгия
        break;
      case "NI":
        errorTitle = "Error";
        errorMessage = "Lo siento, ya has enviado una solicitud."; // Никарагуа
        break;
      case "LV":
        errorTitle = "Kļūda";
        errorMessage = "Atvainojiet, jūs jau esat iesnieguši pieprasījumu."; // Латвия
        break;
      case "GH":
        errorTitle = "Error";
        errorMessage = "Sorry, you have already submitted a request."; // Гана
        break;
      case "AO":
        errorTitle = "Erro";
        errorMessage = "Desculpe, você já enviou uma solicitação."; // Ангола
        break;
      default:
        errorTitle = "Error";
        errorMessage = "Sorry, you have already submitted an inquiry."; // По умолчанию английский
    }

    showModal(errorMessage, errorTitle);

    // Разблокировать кнопку через 10 секунд
    setTimeout(function () {
      var submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = false;
    }, 10000);

    return false; // Отменить отправку формы
  }

  // Добавляем массив оффера для телефонов если его нет
  if (!storagePhone123.hasOwnProperty(offer)) {
    storagePhone123[offer] = [];
  }

  // Добавляем номер телефона в данные LocalStorage
  storagePhone123[offer].push(phone);

  // Обновляем данные в LocalStorage
  localStorage.setItem("storagePhone123", JSON.stringify(storagePhone123));

  return true;
}
