import Form from "@/components/ui/form";

export default function Login() {
  return (
    <div className="grid relative lg:grid-cols-3 place-items-center h-screen bg-[url('/loginDeco.png')] bg-cover">
      <div className="grid place-items-center lg:col-span-2 w-full">
        <Form />
      </div>
      <div className="hidden lg:block">
        <img
          src="/logo.png"
          alt="logo"
          className="absolute w-80   right-[2vw] lg:columns-1 lg:right-[6vw] top-[40vh]"
        />
      </div>
    </div>
  );
}
