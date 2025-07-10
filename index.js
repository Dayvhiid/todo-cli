import {addTodos,saveTodos,listTodos} from './todo.js';
import inquirer from 'inquirer';

const main = async () => {
    const { action } = await inquirer.prompt([{
        type: 'input',
        name: 'action',
        message: 'choose an action',
        choices: ['Add Task', 'List Tasks', 'Delete Task', 'Exit'],
}]);
        
    if (action === 'Add Task'){
        const {task} = await inquirer.prompt([{
            type: 'input',
            name: 'task',
            message: 'Enter Your Task'
    }]);
        addTodos(task);
        main();
    }
    
    if (action === 'List Task'){
        listTodos();
        main();
    }
    
    if (action === 'Exit Task'){
         console.log('👋 Goodbye!');
         process.exit();
    }
}
main();