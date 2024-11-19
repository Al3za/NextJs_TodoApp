import Todo from "./Todo"
import fetchTodos from "@/lib/fetchTodos"
//import { useRouter /*redirect*/ } from 'next/navigation'

export default async function TodoList() {
    const todos = await fetchTodos()

    let content
    if (!todos || todos.length === 0) {
        content = (
            <p>No Todos Available</p>
        )
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // const router = useRouter()
        // router.refresh() works only on client components
       
        const sortedTodos = todos.reverse()

        content = (
            <>
                {sortedTodos.map(todo => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </>
        )
    }

    return content
}