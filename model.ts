// model.ts

// 1. TaskStatus Literal Union
type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task Interface
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// 3. addTask: Appends a new Task with a unique id and "todo" status
function addTask(tasks: Task[], title: string): Task[] {
  const newId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  const newTask: Task = {
    id: newId,
    title,
    status: "todo",
  };
  return [...tasks, newTask];
}

// 4. completeTask: Sets the matching task's status to "done"
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// 5. filterByStatus: Returns tasks matching the exact TaskStatus
function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// ------------------------------------------------------------------
// Custom Operations (Originality Requirement)
// ------------------------------------------------------------------

// Extra 1: deleteTask - Removes a task by ID
function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}

// Extra 2: advanceTask - Moves todo -> in-progress -> done
function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) return task;
    if (task.status === "todo") return { ...task, status: "in-progress" };
    if (task.status === "in-progress") return { ...task, status: "done" };
    return task;
  });
}