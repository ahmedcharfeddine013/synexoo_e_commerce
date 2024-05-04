import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function SearchProduct() {
  return (
    <form className="flex items-center justify-center">
      <Label className="sr-only">Search product</Label>
      <div id="search_product" className="relative">
        <Input
          placeholder="Search..."
          className="outline-none border-none border-b-2"
        ></Input>
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400 transition-all duration-300"></span>
      </div>
      <Button className="bg-transparent text-gray-400 hover:bg-transparent">
        <Search />
      </Button>
    </form>
  );
}
