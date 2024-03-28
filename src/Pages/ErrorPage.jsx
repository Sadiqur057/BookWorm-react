import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex w-screen h-screen items-center justify-center text-center">
      <div>
        <h1 className="font-bold text-5xl">Oops! </h1>
        <p className="font-bold text-3xl  py-5"> Error {error.status} : 
          <i> {error.statusText || error.message}</i>
        </p>
        <p className="font-medium text-3xl">
          Sorry, an unexpected error has occurred.
        </p>
        
        <Link to='/'><button className="btn bg-c-primary text-white mt-6">Go Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
