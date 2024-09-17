import notFoundImage from "../assets/images/notfound.webp";

function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <div className="flex flex-col text-center text-fuchsia-200">
        <img src={notFoundImage} />

        <p className="mx-2 text-lg">
          Sorry, the page you are looking for could not be found.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
