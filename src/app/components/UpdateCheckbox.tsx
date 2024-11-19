'use client' // we need javascript on this page, thats why we 'use client'

import { updateTodo } from '@/lib/actions'
//import { useTransition } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { useRouter /*redirect*/ } from 'next/navigation'
import { experimental_useOptimistic as useOptimistic } from 'react'

export default function UpdateCheckbox({ 
    todo,
}: {
    todo: Todo,
}) {
    //const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const { pending } = useFormStatus()
    const [optimisticTodo, addOptimisticTodo] = useOptimistic(
        todo,
        (
            state: Todo,
            completed: boolean
        ) => ({ ...state, completed })
    ) // optimistic update change the UI imediatly, without waiting the input to get to the server.
    // in this way the check box ll change immediatly and if the request gets an error, the check box 
    // rollback and return on the state it was before 

    return (

        <input
            type="checkbox"
            checked={optimisticTodo.completed} // this is what is displayed inside the UI in the checkbox. on click ill be true or false instantly
            //checked={todo.completed}
            id="completed"
            name="completed"
            //onChange={() => startTransition(() => updateTodo(todo))}
            onChange={async () => {
                addOptimisticTodo(!todo.completed)// this return the opposite value of completed, it updates the addOptimisticTodo value that ll be shown directly in the checked of the form
                await updateTodo(todo) // then it ll hit the server where and make the update on the db
                router.refresh() // updates client-side cache on all pages
            
            }}
            disabled={pending} // the form will be disabled until the fetch is done
            className="min-w-[2rem] min-h-[2rem]"
        />

    )
}