import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`fixed w-full left-0 top-0 bg-blue-500 text-white py-6 px-10 flex items-center justify-between`}
    >
      <h1 className={`font-bold`}>XenTravels</h1>
      <ul className={"flex"}>
        <li>
          <Link
            href={"/"}
            className={
              "text-xs text-gray-200 hover:underline block ml-7 hover:text-white transition-all"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className={
              "text-xs text-gray-200 hover:underline block ml-7 hover:text-white transition-all"
            }
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
