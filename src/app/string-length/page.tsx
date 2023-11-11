"use client";

import { useState } from "react";
import { H3 } from "~/components/typography";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";

const DEFAULT_VALUE = "{}";

const parseTo = (data: string) => {
  return data.length.toString();
};

export default function Json() {
  const { toast } = useToast();
  const [data, setData] = useState(DEFAULT_VALUE);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handleCopy = (data: string) => {
    void navigator.clipboard.writeText(data);
    toast({
      title: "Copied",
      description: "Copied to clipboard",
    });
  };

  return (
    <div className={"flex h-full flex-col gap-2"}>
      <H3>String Length</H3>
      <div className={"grid h-full  gap-4 sm:grid-cols-2"}>
        <div className={"flex h-full flex-col gap-4"}>
          <Input onChange={handleOnChange} />
          <div className={"flex items-center gap-2"}>
            <Button
              variant={"ghost"}
              className={"w-min"}
              onClick={() => {
                handleCopy(parseTo(data));
              }}
            >
              Copy Length
            </Button>
            <p>String is {parseTo(data)} characters long</p>
          </div>
        </div>
      </div>
    </div>
  );
}
