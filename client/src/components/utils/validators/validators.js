export const required = value => {
    if(value) return undefined;
    return "Поле обязательное";
};

export const maxLengthCreater = (maxLength) => (value) => {
    if(value.length > maxLength) return `Максимальная длина ${maxLength} символов`;
    return undefined;
};
export const emailValid = value =>{
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return " Некорректный email ";
};
export const passwordValid = value => {
    const lowerCaseLetters = /[a-z]/g;
    if (!value.match(lowerCaseLetters)) return "Пароль должен состоять из цифр, заглавных и строчных букв";

    const upperCaseLetters = /[A-Z]/g;
    if(!value.match(upperCaseLetters)) return "Пароль должен состоять из цифр, заглавных и строчных букв";

    const numbers = /[0-9]/g;
    if(!value.match(numbers)) return "Пароль должен состоять из цифр, заглавных и строчных букв";

    if(value.length < 3 || value.length > 15) return " Пароль должен больше 3 и меньше 15 ";
};