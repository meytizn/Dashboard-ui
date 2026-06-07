"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  body: z.string().min(1, { message: "Body is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  date: z.string().min(1, { message: "Date is required" }),
});

type FormData = z.infer<typeof formSchema>;

const posts = [
  {
    id: 1,
    title: "hello",
    body: "mehdi",
    author: "villy",
    date: "1405",
  },
];

export default function Page() {
  const params = useParams<{ id: string }>();

  const post = posts.find((p) => p.id === Number(params.id));

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title ?? "",
      body: post?.body ?? "",
      author: post?.author ?? "",
      date: post?.date ?? "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Updated Post:", data);

      // await axios.put(`/api/posts/${params.id}`, data);

      toast.success("Post updated successfully!");
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to update post"
      );
    }
  };

  if (!post) {
    return (
      <div className="mx-auto max-w-xl p-4">
        <p className="text-red-600">Post not found</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full p-4">
      <h1 className="mb-6 text-2xl font-bold">Edit Post</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div>


          <input
            id="title"
            {...register("title")}
            placeholder="Title"
            className="w-full rounded border p-2"
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-600">
              {errors.title.message}
            </p>
          )}
        </div>



        <div>

          <textarea
            id="body"
            {...register("body")}
            placeholder="Body"
            className="min-h-32 w-full rounded border p-2"
          />

          {errors.body && (
            <p className="mt-1 text-sm text-red-600">
              {errors.body.message}
            </p>
          )}
        </div>



        <div>



          <input
            id="author"
            {...register("author")}
            placeholder="Author"
            className="w-full rounded border p-2"
          />

          {errors.author && (
            <p className="mt-1 text-sm text-red-600">
              {errors.author.message}
            </p>
          )}
        </div>

        <div>


          <input
            id="date"
            {...register("date")}
            placeholder="Date"
            className="w-full rounded border p-2"
          />

          {errors.date && (
            <p className="mt-1 text-sm text-red-600">
              {errors.date.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50  bg-gray-700 text-white "
        >
          {isSubmitting ? "Updating..." : "Update Post"}
        </button>
      </form>
    </div>
  );
}