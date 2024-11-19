"use client";
import { deleteTodo } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export default function DeleteButton({ todo }: { todo: Todo }) {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await deleteTodo(todo);
        router.refresh();
      }}
      // formAction={async () => {
      // 'use server' // if we use formAction to call a server action we need to write 'use server' even if'use server' is allready written on the action file
      //     await deleteTodo(todo);
      //     router.refresh()
      // }}
      className="p-3 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-red-400 hover:cursor-pointer hover:bg-red-300"
    >
      <FaTrash />
    </button>
  );
}
