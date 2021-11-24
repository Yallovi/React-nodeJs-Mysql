export const required = value => {
    if(value) return undefined;
    return "Поле обязательное";
};

export const maxLengthCreater = (maxLength) => (value) => {
    if(value.length > maxLength) return `Максимальная длина ${maxLength} символов`;
    return undefined;
};