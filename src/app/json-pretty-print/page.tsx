"use client";

import { useEffect, useState } from "react";
import { H3 } from "~/components/typography";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/components/ui/use-toast";

const DEFAULT_VALUE = "{}";

const parseFrom = (data: string) => {
  return JSON.stringify(JSON.parse(data));
};

const parseTo = (data: string) => {
  return JSON.stringify(JSON.parse(data), null, 2);
};

export default function Json() {
  const { toast } = useToast();
  const [data, setData] = useState(DEFAULT_VALUE);
  const [visibleData, setVisibleData] = useState(DEFAULT_VALUE);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  const handleCopy = (data: string) => {
    void navigator.clipboard.writeText(data);
    toast({
      title: "Copied",
      description: "Copied to clipboard",
    });
  };

  useEffect(() => {
    try {
      setVisibleData(parseFrom(data));
    } catch (e) {
      toast({
        title: "Error",
        description: "Invalid JSON",
      });
    }
  }, [data, toast]);

  return (
    <div className={"flex h-full flex-col gap-2"}>
      <H3>JSON Pretty Print</H3>
      <div className={"grid h-full  gap-4 sm:grid-cols-2"}>
        <div className={"flex h-full flex-col gap-2"}>
          <Button
            variant={"ghost"}
            className={"w-min"}
            onClick={() => {
              handleCopy(parseFrom(visibleData));
            }}
          >
            Copy
          </Button>
          <Textarea
            className={"flex-grow"}
            value={parseFrom(visibleData)}
            onChange={handleOnChange}
          />
        </div>
        <div className={"flex h-full flex-col gap-2"}>
          <Button
            variant={"ghost"}
            className={"w-min"}
            onClick={() => {
              handleCopy(parseTo(visibleData));
            }}
          >
            Copy
          </Button>
          <Textarea
            className={"flex-grow"}
            value={parseTo(visibleData)}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
}
