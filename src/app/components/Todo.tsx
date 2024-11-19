import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { deleteTodo } from "@/lib/actions";
import UpdateCheckbox from "./UpdateCheckbox";
import DeleteButton from "./DeleteButton";

export default function Todo(todo: Todo) {
  return (
    <form className="my-4 flex justify-between items-center">
      <label htmlFor="completed" className="text-2xl hover:underline">
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
        {/* read belove page about link navigation problems */}
      </label>

      <div className="flex items-center gap-4">
        <UpdateCheckbox todo={todo} />

        <button
          formAction={async () => {
            "use server"; // if we use formAction to call a server action we need to write 'use server' even if'use server' is allready written on the action file
            await deleteTodo(todo);
          }}
          className="p-3 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-red-400 hover:cursor-pointer hover:bg-red-300"
        >
          <FaTrash />
        </button>
      </div>
    </form>
  );
}

{
  /* Hard navigation will grab fresh data (like when you refresh the page);
    soft navigation use cache data (Link tag is soft);
    on client side there is also chaching data betwen pages
    so when you revalidate on server (revalidatePath('/')) , you ll need to do it on client side as well ( router.refresh() )
    */
}
{
  /* i dati sono salvati nel server, ma non vengono disposti, si vedono come erano al tempo della creazione del todo */
}
