import Image from "next/image";
import CalendarComponent from "@/components/big-calendar/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GanttComponent from "@/components/gan-task/gantt";
import dynamic from "next/dynamic";

export default function Home() {
  const KanbanBoard = dynamic(() => import('@/components/drag-and-drop/kanban'), { ssr: false });
  return (
    <Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    </TabsList>
    
    <TabsContent value="tab1">
    <CalendarComponent/>
    </TabsContent>
    <TabsContent value="tab2">
      <KanbanBoard />
    </TabsContent>
    <TabsContent value="tab3">
      <GanttComponent />
    </TabsContent>
  </Tabs>
   
   
  );
}
