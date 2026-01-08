import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <div className="flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-zinc-900">
      <div className="relative w-full h-64">
        <Image
          src={book.image}
          alt={`Book cover: ${book.title} by ${book.author}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-black dark:text-white">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          by {book.author}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm flex-grow">
          {book.description}
        </p>
        <p className="text-lg font-bold text-black dark:text-white mt-3">
          ${book.price}
        </p>
      </div>
    </div>
  );
}
