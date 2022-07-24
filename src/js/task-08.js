// Задание 8
//Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть 
// по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert 
// с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, 
// собери значения полей в обьект, где имя поля будет именем
// свойства, а значение поля - значением свойства.Для доступа 
// к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти 
// значения полей формы методом reset.
const refs = {
    form: document.querySelector('.login-form'),
};

const message = "Please fill in all the fields!";
const handleSubmit = (event) => { 
    event.preventDefault();
    const { email, password } = event.target.elements;
    
    if (email.value !== '' && password.value !== '') { 
        console.log({ 'Email': email.value });
        console.log({ 'Password': password.value });  
        event.currentTarget.reset();
    }
    else {
        alert(message);
}  
};
refs.form.addEventListener('submit', handleSubmit);



