import { FaEdit } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import ThemeButton from "../ui/ThemeBtn";

function Navbar() {
  return (
    <header className="navbar sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo / App Name */}
        <div className="flex items-center gap-2">
          <FaEdit className="text-xl navbar-icon" />
          <h1 className="text-lg font-semibold navbar-title">To-Do</h1>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeButton />
          <FiSettings className="text-xl cursor-pointer navbar-icon" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
