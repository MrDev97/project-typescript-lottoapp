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

