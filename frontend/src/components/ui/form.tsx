import { useForm, type SubmitHandler } from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";
type Inputs = {
  example: string;
  exampleRequired: string;
};
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "./separator";
import { useState } from "react";

export default function Form() {
  const [showpw, setShowpw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-3 rounded-xl bg-white p-5 shadow-lg w-max"
    >
      <div className="">
        <div className="grid place-items-center">
          <p className="text-2xl font-bold ">LOG IN</p>
          <p className="text-sm ">Welcome Back</p>
          <p className="text-sm ">Please login to continue</p>
        </div>
        <div className="grid w-60 lg:w-[20vw] gap-4">
          <div>
            <p className="px-1 font-normal ">Username</p>
            <Input {...register("example")} placeholder="Username" />
          </div>
          <div>
            <p className="px-1 font-normal ">Password</p>
            <span className="relative">
              <Input
                {...register("exampleRequired", { required: true })}
                placeholder="Password"
                type={showpw ? "text" : "password"}
              />
              <span
                className="absolute top-0 right-4 cursor-pointer"
                onClick={() => setShowpw((prev) => !prev)}
              >
                {!showpw && <EyeClosed />}
                {showpw && <Eye />}
              </span>
            </span>
          </div>
          {errors.exampleRequired && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
          <div className="flex text-sm gap-1 px-1 opacity-55">
            Don't have an account? <p>Sign up</p>
          </div>
          <Button className="w-full cursor-pointer" type="submit">
            Submit
          </Button>
          <Separator />
          <Button variant={"outline"} className="cursor-pointer">
            <img src="/google.svg" alt="google" />
            Continue with google
          </Button>
        </div>
      </div>
    </form>
  );
}
