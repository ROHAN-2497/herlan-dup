import { Input } from "@/components/ui/input";
import { LucideLocateFixed, Map, MapPinIcon, Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-red-500 w-full text-white">
      <div className="container md:flex justify-between items-center py-2">
        <div className="flex gap-1 py-2">
          {" "}
          <MapPinIcon />
          <p className=""> Store Locator</p>
        </div>
        <Input
          placeholder="search products..."
          className="rounded-full md:w-[50%]"
        />
        <div className="flex gap-1 py-2">
          {" "}
          <User />
          <p>My Account</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
