import Todo from "@/app/components/Todo"
import fetchTodo from "@/lib/fetchTodo"
import { notFound } from "next/navigation"


type Props = {
    params: {
        id: string
    }
};

// export async function generateMetadata({ params: {id} }:Props ) {
    
//     const todos = await fetchTodo(id);

//     if (!todos?.id) {
//         return {
//             title : 'title not found'
//         }
//     };

//     return {
//         title: todos.title
//     };

// };

export default async function page({ params: { id } }: Props) {

    const todo = await fetchTodo(id)

    if (!todo) notFound()

    return (
        <Todo {...todo} />
    )
};

// export async function generateStaticParams() {
    
//     const todos: any = await fetchTodos();

//     return todos?.map((item:any) => {
//         item.id.toString();
//     })
// }

// those commented lines gave some problems