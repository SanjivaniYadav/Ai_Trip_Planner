import { Link } from "react-router";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="sticky top-0 p-3 bg-white shadow-md flex gap-2 justify-between items-center px-5 z-50">
      <Link to={"/"}>
        <div className="flex gap-2 items-center">
          <img src="/logo.svg" alt="logo" />
          <h2 className="text-2xl font-bold text-red-950">Tripify</h2>
        </div>
      </Link>

      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
