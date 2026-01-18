import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <p>LOG IN</p>
          <p>Welcome Back</p>
          <p>Please login to continue</p>
        </div>
        <div>
          <Input {...register("example")} />

          <Input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}

          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}
