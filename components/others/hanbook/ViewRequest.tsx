import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HandbookRequestType } from "@/types";
import { Label } from "@radix-ui/react-label";
import React from "react";

const HandBookViewRequest = ({
  handbook,
}: {
  handbook: HandbookRequestType;
}) => {
  if (!handbook) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 md:mt-0 lg:mt-0">
      <Card>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              readOnly
              placeholder="Enter the title"
              defaultValue={handbook?.title}
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description"> Description</Label>
            <Textarea
              name="description"
              id="description"
              placeholder="Enter the description"
              className="min-h-[150px]"
              readOnly
              defaultValue={handbook?.description}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HandBookViewRequest;
