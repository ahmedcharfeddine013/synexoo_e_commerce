"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import PageHeader from "./PageHeader";
import { useAuth, User } from "@/context/UserContext";

export default function LoginForm() {
  const { login, error, user } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState<string | null>(null);

  //   const handleLogin = async () => {
  //     try {
  //       // Fetch the list of users from the API
  //       const response = await axios.get("https://fakestoreapi.com/users");
  //       const userData: User[] = await response.data

  //       // Check if the entered username exists in the fetched user data
  //       const userExists = userData.some((u) => u.username === username);

  //       if (userExists) {
  //         // If the user exists, attempt to log in
  //         await login(username, password);
  //         router.push("/shop");
  //       } else {
  //         // If the user does not exist, display an error
  //         setError("User not found");
  //       }
  //     } catch (error) {
  //       console.error("Login error:", error);
  //       setError("Login failed. Please try again later.");
  //     }
  //   };

  async function handleLogin() {
    if (username && password) {
      login(username, password);
    }
  }

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="bg-secondary p-10 rounded-xl flex items-center justify-center flex-col gap-5 w-[80%] md:w-[30rem] "
      >
        <PageHeader>LOGIN</PageHeader>
        <div className="flex items-center justify-center w-full flex-col gap-4">
          <Input
            type="text"
            placeholder="username"
            className="border-none shadow-sm"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            type="password"
            placeholder="password"
            className="border-none shadow-sm"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        <div className="flex items-center justify-between w-full flex-row ">
          <Link className="text-sm text-gray-600" href={"/auth/signup"}>
            New?{" "}
            <span className="text-gray-900 hover:underline">
              Create account
            </span>
          </Link>
          <a href="" className="text-gray-900 hover:underline text-sm">
            forgot password ?
          </a>
        </div>
        <Button className="w-full">Login</Button>
      </form>
    </>
  );
}
