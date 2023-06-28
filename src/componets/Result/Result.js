import '../../index.scss';

const Result = ({ text }) => {

    function FindUniqueCharacter(text) {

        try {

            if (!text) {
                return "Введіть слова в поле вводу!"
            }
            // Масив, в який пушуться унікальні символи
            const firstUniqueChars = [];

            // Об'єкт для вирахування кількості входжень кожного унікального символу в масиві
            const uniqueCharsCount = {};

            // Перетворюємо текст на масив слів
            const words = text.split(" ");

            // Проходимося по кожному слову
            for (const word of words) {
                const charCount = {};

                // Рахуємо кількість кожного символу в слові
                for (const char of word) {
                    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
                }

                // Знаходимо перший унікальний символ
                for (const char of word) {
                    if (charCount[char] === 1) {
                        firstUniqueChars.push(char);
                        break;
                    }
                }
            }

            for (const char of firstUniqueChars) {
                uniqueCharsCount[char] = uniqueCharsCount[char] ? uniqueCharsCount[char] + 1 : 1;
            }

            for (const char of firstUniqueChars) {
                if (uniqueCharsCount[char] === 1) {
                    return char;
                }
            }

            // Якщо унікальний символ не знайдено, повертаємо вказану строку
            return ("Унікального символу не знайдено!");
        } catch (err) {
            console.log(err);
            return "Виникла помилка. Спробуйте пізніше";
        }
    }
    return (
        <p className='result'>{FindUniqueCharacter(text)}</p>
    )
}

export default Result;
