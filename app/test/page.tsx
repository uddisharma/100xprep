import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="given" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-[#27272a] min-h-[45px]">
        <TabsTrigger value="given">Given</TabsTrigger>
        <TabsTrigger value="taken">Taken</TabsTrigger>
      </TabsList>
      <TabsContent value="given">
        <p>Given</p>
      </TabsContent>
      <TabsContent value="taken">
        <p>Taken</p>
      </TabsContent>
    </Tabs>
  );
}
