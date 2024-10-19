import { Link } from "react-router-dom";

export const Li = ({ children, path, isActive }) => {
  return (
    <li
      className="hover:flex-auto  bg-[#dddddd] font-semibold rounded transition-all duration-default ease-in-out"
      style={isActive ? { filter: "invert(100%)" } : { filter: "invert(0)" }}
    >
      <Link
        className="flex items-center justify-center w-auto px-4 py-2 gap-2 text-md"
        to={path}
      >
        {children}
      </Link>
    </li>
  );
};

export const Figure = ({ title, img, content, alt }) => {
  return (
    <figure className="w-[380px] flex flex-col gap-4 p-2 drop-shadow-xl shadow-xl bg-[#fff] cursor-default">
      <img className="w-full h-[290px] object-cover" src={img} alt={alt} />
      <div className="w-full h-[340px] flex flex-col justify-start items-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg px-1 text-pretty">{content}</p>
      </div>
    </figure>
  );
};

export const Name = ({ name, github, githubLink }) => {
  return (
    <h4 className="font-medium flex gap-3 text-lg">
      {name}:
      <a href={githubLink || "#"} className="text-xl underline">
        <i className="fa-brands fa-github"></i> @{github}
      </a>
    </h4>
  );
};

export const Field = ({ name, id, type, value, onChange }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <label className="text-xl font-medium md:text-lg" htmlFor={id}>
        {name}
      </label>
      <input
        className="w-full h-10 px-8 md:px-2 text-xl md:text-md rounded shadow-lg bg-[#dddddd] outline-none transition duration-default focus:scale-100 focus:shadow-2xl md:w-3/4"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export const Button = ({ children, type, path, isLink = false }) => {
  return (
    <>
      {!isLink ? (
        <button
          className="py-3 px-6 bg-[#222] w-auto md:w-full text-gray-100 text-xl transition-all rounded-md hover:flex-auto md:text-md drop-shadow-md"
          type={type}
        >
          {children}
        </button>
      ) : (
        <Link
          className="py-3 px-6 bg-[#222] w-auto md:w-full text-gray-100 text-xl content-center transition-all text-center rounded-md hover:flex-auto md:text-md drop-shadow-md"
          to={path}
        >
          {children}
        </Link>
      )}
    </>
  );
};
