import axios, {AxiosResponse} from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface TodoResponse {
    id: number;
    title: string;
    completed: boolean;
}

axios.get<TodoResponse>(url).then((response: AxiosResponse) => {
    const todo = response.data; // as TodoResponse

    const ID = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
    The todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${completed}
    `)
})