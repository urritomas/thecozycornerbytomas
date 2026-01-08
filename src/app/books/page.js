import Image from "next/image";
import BookCard from "@/components/BookCard";

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    description: "A dazzling novel about all the choices that go into a life well lived.",
    price: "18.99",
    image: "/books/midnight-library.jpg",
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    description: "A lone astronaut must save Earth from extinction in this thrilling sci-fi adventure.",
    price: "16.99",
    image: "/books/hail-mary.jpg",
  },
  {
    id: 3,
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    description: "A female chemist in the 1960s breaks barriers in a male-dominated world.",
    price: "17.99",
    image: "/books/lessons-chemistry.jpg",
  },
];

export const metadata = {
  title: "Books - The Cozy Corner",
  description: "Browse our hand-picked collection of books",
};

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Image
            src="/logo.svg"
            alt="The Cozy Corner logo"
            width={40}
            height={40}
          />
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Our Books
          </h1>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          Explore our hand-picked collection of books that warm the heart and inspire the mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
