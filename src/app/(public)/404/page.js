export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4 w-screen h-screen justify-center items-center">
      <h1 className="playfair-display-600 text-3xl sm:text-4xl md:text-6xl"><strong>404 - Page Not Found</strong></h1>
      <p className="font-sans text-sm sm:text-base md:text-2xl">Sorry, we couldn't find the page you're looking for.</p>
    </div>
  );
}
