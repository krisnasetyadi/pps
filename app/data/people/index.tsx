import Alexander from "./images/processed/Alexander";
import Aliza from "./images/processed/Aliza";
import Alvin from "./images/processed/Alvin";
import Angie from "./images/processed/Angie";
import Arjun from "./images/processed/Arjun";
import Blair from "./images/processed/Blair";
import Claudia from "./images/processed/Claudia";
import Colin from "./images/processed/Colin";
import Ed from "./images/processed/Ed";
import Effie from "./images/processed/Effie";
import Eliot from "./images/processed/Eliot";
import Fabian from "./images/processed/Fabian";
import Gael from "./images/processed/Gael";
import Gerard from "./images/processed/Gerard";
import Hasan from "./images/processed/Hasan";
import Helena from "./images/processed/Helena";
import Ivan from "./images/processed/Ivan";
import Katina from "./images/processed/Katina";
import Lara from "./images/processed/Lara";
import Leo from "./images/processed/Leo";
import Lydia from "./images/processed/Lydia";
import Maribel from "./images/processed/Maribel";
import Milo from "./images/processed/Milo";
import Myra from "./images/processed/Myra";
import Narul from "./images/processed/Narul";
import Norah from "./images/processed/Norah";
import Oliver from "./images/processed/Oliver";
import Rahul from "./images/processed/Rahul";
import Renato from "./images/processed/Renato";
import Steve from "./images/processed/Steve";
import Tanya from "./images/processed/Tanya";
import Tori from "./images/processed/Tori";
import Vania from "./images/processed/Vania";
import { Task } from "gantt-task-react";

export type JobOrder = Task & {
  userId: string;
  assginee: string;
  role: string;
  title: string;
  tool: string;
  partDescription: string;
  consumable: string;
  machine: string;
  jobOrderNo: string;
  mwc: string;
  mpg: string;
  workRequest: string;
};

export const userName: string[] = [
  "70011955",
  "70013202",
  "70013203",
  "70015343",
  "70015389",
  "80300819",
  "80309000",
  "80309001",
  "80309002",
  "80309003",
  "80309004",
  "80309005",
  "80309006",
  "80309007",
  "80309008",
  "80309009",
  "80309010",
  "80309011",
  "admin1",
  "eng1",
  "eng2",
  "eng3",
  "he1",
  "heng1",
  "heng2",
  "ndt1",
  "ndt2",
  "oe1",
  "pw_test",
  "qa1",
];
const jobOrderNo: string[] = [
  "80001030Z",
  "80001030T",
  "80001030K",
  "80001030F",
  "80001029",
  "80001028",
  "80001027",
  "80001026",
  "80001025",
  "80001024",
  "80001023",
  "80001022",
  "80001021",
  "80001020",
  "80001019",
  "80001018",
  "80001017",
  "80001016",
  "80001015",
  "80001014",
  "80001013",
  "80001012",
  "80001011",
  "80001010",
  "80001009",
  "80001008",
  "80001007",
  "80001006",
  "80001005",
  "80001004",
];

const mwc: string[] = [
  "7802",
  "7802",
  "7802",
  "7802",
  "7802",
  "7802",
  "7802",
  "7802",
  "7802",
  "7802",
  "7802",
  "7802",
  "7403",
  "7403",
  "7403",
  "7403",
  "7802",
  "7802",
  "7802",
  "7002",
  "4306",
  "4306",
  "4306",
  "4306",
  "4306",
  "4306",
  "7402",
  "4303",
  "4303",
  "7402",
];

const mpg: string[] = [
  "78",
  "78",
  "78",
  "78",
  "78",
  "78",
  "78",
  "78",
  "78",
  "78",
  "78",
  "78",
  "48",
  "48",
  "48",
  "48",
  "78",
  "78",
  "78",
  "70",
  "65",
  "65",
  "65",
  "65",
  "65",
  "65",
  "48",
  "48",
  "48",
  "48",
];

const workRequest: string[] = [
  "SST",
  "REP",
  "O/H",
  "MOD",
  "ACX",
  "B/S",
  "CAL",
  "CAP",
  "CLK",
  "CLN",
];

const title: string[] = [
  "7802/78/80001030Z",
  "7802/78/80001030T",
  "7802/78/80001030K",
  "7802/78/80001030F",
  "7802/78/80001029",
  "7802/78/80001028",
  "7802/78/80001027",
  "7802/78/80001026",
  "7802/78/80001025",
  "7802/78/80001024",
  "7802/78/80001023",
  "7802/78/80001022",
  "7403/48/80001021",
  "7403/48/80001020",
  "7403/48/80001019",
  "7403/48/80001018",
  "7802/78/80001017",
  "7802/78/80001016",
  "7802/78/80001015",
  "7002/70/80001014",
  "4306/65/80001013",
  "4306/65/80001012",
  "4306/65/80001011",
  "4306/65/80001010",
  "4306/65/80001009",
  "4306/65/80001008",
  "7402/48/80001007",
  "4303/48/80001006",
  "4303/48/80001005",
  "7402/48/80001004",
];

const roles: string[] = [
  "Work Signatory",
  "Release Signatory",
  "NDT Technician",
  "Non-AC Holder",
];
const tools: string[] = [
  "ACTUATOR TEST RIG",
  "DIGITAL MULTIMETER",
  "FEELER GAUGE",
  "INFRARED THERMOMETER",
  "MICROMETER, DEPTH",
  "MICROMETER, INTERCHANGEABLE ANVIL",
  "SOLDERING, STATION",
  "1/2' FREE FIELD MICROPHONE",
  "1553 INTERFACE",
  "1RB, CONTROLLER",
  "2 CH DIGITA, 70 MHZ, OSCILLOSCOPE",
  "2 OUT OF 5 DECODER TEST BOX",
  "20FT DELAY LINE COAXIAL",
  "256H-BUS MEMORY MODULE",
];
const partDescription: string[] = [
  "NA",
  "DIGITAL MULTIMETER, 31/2 DGT",
  "0.0015 - 0.025 INCH",
  "62 MAX+ INFRARED THERMOMETER",
  "0-1 (0.001) INCH",
  "0-6 (0.00005) INCH ",
  "SOLDERING STATION",
  "1/2' FREE FIELD MICROPHONE",
  "1553 INTERFACE",
  "CONTROLLER 1 RB",
  "2 CH DIGITA, 70 MHZ, OSCILLOSCOPE",
  "TEST BOX, 2 OUT OF 5 DECODER",
  "20FT DELAY LINE COAXIAL",
  "256H-BUS MEMORY MODULE",
];
const consumables: string[] = [
  "Nails",
  "Screws",
  "Sandpaper",
  "Glue",
  "Batteries",
  "Sealant",
  "Paint",
  "Oil",
  "Cleaning Wipes",
];
const machines: string[] = [
  "Lathe",
  "CNC Machine",
  "Welding Machine",
  "Compressor",
  "Laser Cutter",
  "Milling Machine",
  "Forklift",
  "Vacuum Pump",
  "Hydraulic Press",
];
const currentDate = new Date();
const tasks: Task[] = [
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 24),
    name: "POC PPS",
    id: "POC PPS",
    progress: 0,
    type: "project",
    hideChildren: false,
    styles: {
      backgroundColor: "#0065FF",
      backgroundSelectedColor: "#0065FF",
    },
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2, 12, 28),
    name: "Idea",
    id: "Task 0",
    progress: 0,
    type: "task",
    project: "POC PPS",
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
    name: "Research",
    id: "Task 1",
    progress: 0,
    dependencies: ["Task 0"],
    type: "task",
    project: "POC PPS",
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
    name: "Discussion with team",
    id: "Task 2",
    progress: 0,
    dependencies: ["Task 1"],
    type: "task",
    project: "POC PPS",
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    name: "Developing",
    id: "Task 3",
    progress: 0,
    dependencies: ["Task 2"],
    type: "task",
    project: "POC PPS",
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    name: "Review",
    id: "Task 4",
    type: "task",
    progress: 0,
    dependencies: ["Task 2"],
    project: "POC PPS",
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    name: "Release",
    id: "Task 6",
    progress: currentDate.getMonth(),
    type: "milestone",
    dependencies: ["Task 4"],
    project: "POC PPS",
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
    name: "Party Time",
    id: "Task 9",
    progress: 0,
    isDisabled: true,
    type: "task",
  },
];

function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  // Check from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function generateTasksWithoutProject(): Task[] {
  const generatedTasks: Task[] = [];
  const currentDate = new Date();

  for (let i = 0; i < 31; i++) {
    generatedTasks.push({
      id: `Task ${i + 7}`,
      type: "task",
      name: title[i % title.length],
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 3),
      progress: 0,
      dependencies: i > 0 && isPrime(i) ? [`Task ${i + 6}`] : undefined,
      project: "POC PPS",
    });
  }
  return generatedTasks;
}

// Generate tasks and mix them
const generatedTasks = generateTasksWithoutProject();

// Replace "name" with "title" in the task list
const mergedTasks = tasks
  .concat(generatedTasks)
  .slice(0, 30)
  .map((task) => ({
    ...task,
  }));

// Create a new array to hold the mixed values of type Person
export let jobOrders: any[] = jobOrderNo.slice(0, 30).map((title, index) => ({
  id: mergedTasks[index].id,
  type: mergedTasks[index].type,
  assginee: userName[index],
  name: mwc[index] + "/" + mpg[index] + "/" + jobOrderNo[index],
  start: mergedTasks[index].start,
  end: mergedTasks[index].end,
  progress: mergedTasks[index].progress,
  styles: mergedTasks[index].styles,
  isDisabled: mergedTasks[index].isDisabled,
  project: mergedTasks[index].project,
  dependencies: mergedTasks[index].dependencies,
  hideChildren: mergedTasks[index].hideChildren,
  displayOrder: index + 1,
  userId: userName[index],
  role: roles[index % roles.length],
  title: mwc[index] + "/" + mpg[index] + "/" + jobOrderNo[index],
  tool: tools[index % tools.length],
  partDescription: partDescription[index % partDescription.length],
  consumable: consumables[index % consumables.length],
  machine: machines[index % machines.length],
  jobOrderNo: jobOrderNo[index],
  mwc: mwc[index],
  mpg: mpg[index],
  workRequest: workRequest[index % workRequest.length],
}));

let sharedLookupIndex: number = 0;

export function getPerson(): JobOrder {
  sharedLookupIndex++;
  return getPersonFromPosition({ position: sharedLookupIndex });
}

export function getPersonFromPosition({
  position,
}: {
  position: number;
}): JobOrder {
  return jobOrders[position - 1];
}

export function getPeopleFromPosition({
  amount,
  startIndex,
}: {
  amount: number;
  startIndex: number;
}): JobOrder[] {
  return Array.from({ length: amount }, () =>
    getPersonFromPosition({ position: startIndex++ })
  );
}

export function getPeople({ amount }: { amount: number }): JobOrder[] {
  return Array.from({ length: amount }, () => getPerson());
}

export type ColumnType = {
  title: string;
  columnId: string;
  items: JobOrder[];
};
export type ColumnMap = { [columnId: string]: ColumnType };

export function getData({
  columnCount,
  itemsPerColumn,
}: {
  columnCount: number;
  itemsPerColumn: number;
}) {
  const columnMap: ColumnMap = {};

  for (let i = 0; i < columnCount; i++) {
    const column: ColumnType = {
      title: `Column ${i}`,
      columnId: `column-${i}`,
      items: getPeople({ amount: itemsPerColumn }),
    };
    columnMap[column.columnId] = column;
  }
  const orderedColumnIds = Object.keys(columnMap);

  return {
    columnMap,
    orderedColumnIds,
    lastOperation: null,
  };
}

export function getBasicData() {
  sharedLookupIndex = 0;
  const columnMap: ColumnMap = {
    toDo: {
      title: "To Do",
      columnId: "toDo",
      items: getPeople({ amount: 10 }),
    },
    inProgress: {
      title: "In Progress",
      columnId: "inProgress",
      items: getPeople({ amount: 10 }),
    },
    done: {
      title: "Done",
      columnId: "done",
      items: getPeople({ amount: 10 }),
    },
  };

  const orderedColumnIds = ["toDo", "inProgress", "done"];
  return {
    columnMap,
    orderedColumnIds,
  };
}

export function getJobOrders() {
  return jobOrders;
}

export function setJobOrders(newJobOrders: any[]) {
  jobOrders = newJobOrders;
}
