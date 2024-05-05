import React from "react";
import PageHeader from "./PageHeader";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";

export default function RegisterForm() {
  return (
    <form className="bg-secondary p-10 rounded-xl flex items-center justify-center flex-col gap-5 w-[80%] md:w-[30rem] ">
      <PageHeader>Create an account</PageHeader>
      <div className="flex items-center justify-center w-full flex-col gap-4">
        <Input
          type="text"
          placeholder="username"
          className="border-none shadow-sm"
        ></Input>
        <Input
          type="email"
          placeholder="email"
          className="border-none shadow-sm"
        ></Input>
        <Input
          type="password"
          placeholder="password"
          className="border-none shadow-sm"
        ></Input>
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
      <Button className="w-full">Sign Up</Button>
    </form>
  );
}
