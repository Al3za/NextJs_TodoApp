'use server'

import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export async function addTodo(data: FormData) {

    const title = data.get("title")

    await fetch('http://127.0.0.1:3500/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1, title, completed: false,
        })
    })// we talk to the db.json throug the fetch body here above, according to the method we tell the db what to do
    // and we pass that body that is needed to do the method operations;
    // P.S. npx json-server -w db.json -p 3500 -h 127.0.0.1 is the server command to start the db.json
    // it will accept CRUD methods like a real db

    revalidatePath('/') // revalidate is used for when we build the app and we run start
}



export async function deleteTodo(
    todo: Todo //number | string | any 
) {
    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: todo.id
        })// we talk to the db.json throug the fetch body here above, according to the method we tell the db what to do
        // and we pass that body that is needed to do the method operations
    })

    // await res.json() seems like res.json isnt needen, because we just tell the db to delete or update and we dont need a res
    revalidatePath('/') // revalidate is used for when we build the app and we run start (works even in dev mode)

}


export async function updateTodo(
    todo: Todo
) {
    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...todo, completed: !todo.completed // ...todo comprehend completed property, but we override it whit completed prps;
        }) // we talk to the db.json throug the fetch body here above, according to the method we tell the db what to do
        // and we pass that body that is needed to do the method operations
    })

    await res.json() //seems like res.json isnt needen, because we just tell the db to delete or update and we dont need a res
    revalidatePath('/') // revalidate is used for when we build the app and we run start (works even in dev mode)
    //to update and see new data after we added ones.
}
