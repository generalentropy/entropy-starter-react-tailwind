function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <div className="flex flex-col text-center text-pink-300">
        <h1 className="mb-2 text-4xl font-bold">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
      </div>
    </div>
  );
}

export default NotFound;
