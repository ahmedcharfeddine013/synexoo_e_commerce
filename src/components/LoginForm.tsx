import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import PageHeader from "./PageHeader";

export default function LoginForm() {
  return (
    <form className="bg-secondary p-10 rounded-xl flex items-center justify-center flex-col gap-5 w-[80%] md:w-[30rem] ">
      <PageHeader>LOGIN</PageHeader>
      <div className="flex items-center justify-center w-full flex-col gap-4">
        <Input placeholder="username" className="border-none shadow-sm"></Input>
        <Input placeholder="password" className="border-none shadow-sm"></Input>
      </div>
      <div className="flex items-center justify-between w-full flex-row ">
        <Link className="text-sm text-gray-600" href={"/auth/signup"}>
          New?{" "}
          <span className="text-gray-900 hover:underline">Create account</span>
        </Link>
        <a href="" className="text-gray-900 hover:underline text-sm">
          forgot password ?
        </a>
      </div>
      <Button className="w-full">Login</Button>
    </form>
  );
}
