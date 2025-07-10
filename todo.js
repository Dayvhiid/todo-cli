import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const filePath = path.join(__dirname, 'todo.json');


function loadTodos() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}


function saveTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}


function addTodos(task) {
  const todos = loadTodos();
  todos.push({ id: Date.now(), task });
  saveTodos(todos);
  console.log(chalk.green('✔ Task added!'));
}


function listTodos() {
  const todos = loadTodos();
  if (todos.length === 0) {
    console.log(chalk.red('No tasks found.'));
  } else {
    console.log(chalk.green('\nYour Tasks:'));
    for (let i = 0; i < todos.length; i++) {
      const j = todos[i];
      console.log(`${i + 1}. ${chalk.white(j.task)} (${j.id})`);
    }
  }
}


export { saveTodos, addTodos, listTodos };
