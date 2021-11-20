import type { ReactNode } from "react";
export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex bg-gray-100">
      <aside className="relative hidden w-64 h-screen shadow-xl font-karla bg-main sm:block">
        <div className="p-6">
          <a
            href="index.html"
            className="text-3xl font-semibold text-white uppercase hover:text-gray-300"
          >
            Admin
          </a>
          <button className="flex items-center justify-center w-full py-2 mt-5 font-semibold bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg cta-btn hover:shadow-xl hover:bg-gray-300">
            <i className="mr-3 fas fa-plus"></i> New Report
          </button>
        </div>
        <nav className="pt-3 text-base font-semibold text-white">
          {["Providers", "Blank Page"].map((x) => (
            <a
              key={x}
              href="/providers"
              className="flex items-center py-4 pl-6 text-white hover:bg-secondary "
            >
              <i className="mr-3 fas fa-tachometer-alt"></i>
              {x}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="absolute bottom-0 flex items-center justify-center w-full py-4 text-white upgrade-btn active-nav-link"
        >
          <i className="mr-3 fas fa-arrow-circle-up"></i>
          Upgrade to Pro!
        </a>
      </aside>
      <div className="flex flex-col w-full h-screen overflow-y-hidden">
        <div className="flex flex-col w-full overflow-x-hidden border-t">
          <main className="flex-grow w-full p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
