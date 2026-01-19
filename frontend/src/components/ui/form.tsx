import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "./separator";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-3  rounded-xl bg-white p-5 shadow-lg">
        <div className="grid place-items-center">
          <p className="text-xl sm:text-2xl font-bold ">LOG IN</p>
          <p className="text-xs sm:text-sm ">Welcome Back</p>
          <p className="text-xs sm:text-sm ">Please login to continue</p>
        </div>
        <div className="grid w-[20vw] gap-4">
          <div>
            <p className="px-1 font-normal ">Username</p>
            <Input {...register("example")} placeholder="Username" />
          </div>
          <div>
            <p className="px-1 font-normal ">Password</p>
            <Input
              {...register("exampleRequired", { required: true })}
              placeholder="Password"
            />
          </div>
          {errors.exampleRequired && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
          <div className="flex gap-1 px-1 opacity-55">
            <p>Don't have an account? </p>
            <p>Sign up</p>
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
