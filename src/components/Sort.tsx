import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { MoveUpRightIcon } from "lucide-react";
import { MoveDownRight } from "lucide-react";

export default function Sort() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select By..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="a-z">A - Z</SelectItem>
          <SelectItem value="z-a">Z - A</SelectItem>
          <SelectItem value="price-min">Price Min</SelectItem>
          <SelectItem value="price-max">Price Max</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
