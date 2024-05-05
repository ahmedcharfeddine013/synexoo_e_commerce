"use client";

import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Divide, Search } from "lucide-react";
import { product } from "@/types/product";
import axios from "axios";
import { Card, CardTitle } from "./ui/card";

export default function SearchProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products?title=${searchTerm}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <form className="flex items-center justify-center">
        <Label className="sr-only">Search product</Label>
        <div id="search_product" className="relative">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="outline-none border-none border-b-2"
          ></Input>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400 transition-all duration-300"></span>
        </div>
        <Button className="bg-transparent text-gray-400 hover:bg-transparent">
          <Search />
        </Button>
      </form>

      {/* results */}

      {loading && <div>Loading...</div>}
      {/* {!loading && searchResults.length === 0 && <div>No Items found</div>}
      {!loading && searchResults.length > 0 && (
        <div>
          {searchResults.map((product: product) => (
            <searchItem key={product.id} {...product} />
          ))}
        </div>
      )} */}
    </div>
  );
}

function searchItem({ item }: { item: product }) {
  return (
    <Card>
      <CardTitle>{item.title}</CardTitle>
    </Card>
  );
}
