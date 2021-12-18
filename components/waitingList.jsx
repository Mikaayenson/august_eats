import dynamic from "next/dynamic";

export default function WaitingList() {
  const Referlist = dynamic(
    () =>
      import("referlist").then((referlist) =>
        referlist.initialize({ domain: "augusteats" })
      ),
    { ssr: false }
  );

  return (
    <div className="sm:flex">
        <Referlist />
        <div className="min-w-0 flex-1">
        <label htmlFor="email" className="sr-only">
            Email address
        </label>
        <input
            id="referlistemail"
            type="email"
            placeholder="Enter your email"
            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-offset-gray-900"
        />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">

        <input type="button" id="referlistbutton" value="Join waitlist" className="block w-full py-3 px-4 rounded-md shadow bg-orange-500 text-white font-medium hover:from-orange-500 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-offset-gray-900"/>
        </div>
    </div>
  );
}