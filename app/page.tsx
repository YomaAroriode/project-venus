import Link from "next/link";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
      <img
        src="/logo.svg"
        alt="School Management Solution Logo"
        className="h-36 w-36 rounded-full"
      />
      <Button className="px-12" asChild>
        <Link href="/admin">Login</Link>
      </Button>
    </div>
  );
};

export default Login;
