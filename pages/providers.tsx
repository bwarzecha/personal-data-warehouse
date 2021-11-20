import type { NextPage } from "next";
import { Fitbit, Google, Todoist } from "@icons-pack/react-simple-icons";
import { providers } from "lib/providers";
const Providers: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-7 gap-4">
        <Fitbit className="w-36 h-36" color="#00B0B9" />
        <Google className="w-36 h-36" color="#4285F4" />
        <Todoist className="w-36 h-36" color="#E44332" />
      </div>
    </div>
  );
};

export default Providers;
