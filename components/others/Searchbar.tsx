"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Searchbar = ({ text }: { text: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const [query, setQuery] = useState(searchParams.get("query") ?? "");
  const [debouncedQuery, setDebouncedQuery] = useState(query); // State for debounced query
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${path}?query=${debouncedQuery}`);
  };

  // Effect for debouncing the query input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // 500ms delay

    // Cleanup function to clear the timeout if the query changes
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Effect to handle debounced query changes
  useEffect(() => {
    if (debouncedQuery === "") {
      router.push(`${path}`);
    } else {
      router.push(`${path}?query=${debouncedQuery}`);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="px-2 md:px-0 w-full md:w-[400px] ">
      <Input
        ref={inputRef}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder={`Search ${text} (Ctrl + K)`}
      />
    </form>
  );
};

export default Searchbar;
