import Form from "@/components/ui/form";

export default function Login() {
  return (
    <div className="grid relative md:grid-cols-2 place-items-center h-screen bg-[url('/loginDeco.png')] bg-cover">
      <div className="">
        <Form />
      </div>
      <div className="hidden lg:block">
        <img
          src="/logo.png"
          alt="logo"
          className="absolute w-80 lg:w-auto right-[2vw] lg:right-[6vw] top-[40vh]"
        />
      </div>
    </div>
  );
}
