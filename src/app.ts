import inquirer from 'inquirer';

const chosenNumbers: number[] = [];
const randomNumbers: number[] = [];

const startApp = async (): Promise<void> => {
    const result = await inquirer.prompt([{
        name: 'number',
        type: 'input',
        message: 'Podaj liczbę...'
    }]);
};

const validateInput = (input: string): boolean => {
    const number = parseInt(input);
    if (isNaN(number)) {
        console.log('Please enter a number');
        return false;
    }
    if (number < 1 || number > 49) {
        console.log('Please enter a number between 1 and 49');
        return false;
    }
    if (chosenNumbers.includes(number)) {
        console.log('You have already chosen this number');
        return false;
    }
    return true;
};