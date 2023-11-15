import { prisma } from "../../../src/db";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getAllTasksByUserId,
  getTaskById,
  getTasksByAssignedUsers,
  getTasksByProjectId,
  getTasksByUserIdAndState,
  updateTaskRecord,
} from "../../../src/actions/task";
import { ObjectId } from 'bson';
import { TaskToBeCreated } from "../../../src/interfaces/task";
import {describe, expect, it, beforeAll, afterAll, afterEach} from "@jest/globals";

describe("Task actions", () => {
  let createdTaskId: string;

  beforeAll(async () => {
    // Connect to the test database
    await prisma.$connect();
  });

  afterAll(async () => {
    // Disconnect from the test database
    await prisma.$disconnect();
  });

  afterEach(async () => {
    if (createdTaskId) {
      createdTaskId = ''; // Reset the ID after deletion to prevent trying to delete the same task multiple times
    }
  });

  describe("createTask", () => {
    it("should create a new task", async () => {
      const newTask: TaskToBeCreated = {
        name: "Test task",
        description: "This is a test task",
        state: "TODO",
        assignedUsers: [],
        projectId: new ObjectId().toString(),
        startDate: new Date(),
        endDate: new Date(),
      };

      const createdTask = await createTask(newTask);

      expect(createdTask).toHaveProperty("id");
      expect(createdTask.name).toBe(newTask.name);
      expect(createdTask.description).toBe(newTask.description);
      expect(createdTask.state).toBe(newTask.state);
      expect(createdTask.assignedUsers).toEqual(newTask.assignedUsers);
      expect(createdTask.projectId).toBe(newTask.projectId);
      expect(createdTask.startDate).toEqual(newTask.startDate);
      expect(createdTask.endDate).toEqual(newTask.endDate);

      createdTaskId = createdTask.id;
    });
  },);

  describe("getTaskById", () => {
    it("should return a task by its ID", async () => {
      const newTask: TaskToBeCreated = {
        name: "Test task",
        description: "This is a test task",
        state: "TODO",
        assignedUsers: [],
        projectId: new ObjectId().toString(),
        startDate: new Date(),
        endDate: new Date(),
      };

      const createdTask = await createTask(newTask);

      const task = await getTaskById(createdTask.id);

      expect(task).toEqual(createdTask);

      createdTaskId = createdTask.id;
    });
  });

  describe("updateTaskRecord", () => {
    it("should update a task by its ID", async () => {
      const projectId = new ObjectId().toString();
      const startDate = new Date();
      const endDate = new Date();
      const newTask: TaskToBeCreated = {
        name: "Test task",
        description: "This is a test task",
        state: "TODO",
        assignedUsers: [],
        projectId: projectId,
        startDate: startDate,
        endDate: endDate,
      };

      const createdTask = await createTask(newTask);

      const updatedTask = await updateTaskRecord(
        createdTask.id,
        "Updated task name",
        "This is an updated test task",
        "IN_PROGRESS",
        ["1", "2"],
        projectId,
        startDate,
        endDate
      );
      expect(updatedTask).toHaveProperty("id");
      expect(updatedTask.name).toBe("Updated task name");
      expect(updatedTask.description).toBe("This is an updated test task");
      expect(updatedTask.state).toBe("IN_PROGRESS");
      expect(updatedTask.assignedUsers).toEqual(["1", "2"]);
      expect(updatedTask.projectId).toBe(projectId);
      expect(updatedTask.startDate).toEqual(startDate);
      expect(updatedTask.endDate).toEqual(endDate);

      createdTaskId = createdTask.id;
    });
  });

  describe("deleteTask", () => {
    it("should delete a task by its ID", async () => {
      const projectId = new ObjectId().toString();
      const startDate = new Date();
      const endDate = new Date();
      const newTask: TaskToBeCreated = {
        name: "Test task",
        description: "This is a test task",
        state: "TODO",
        assignedUsers: [],
        projectId: projectId,
        startDate: startDate,
        endDate: endDate,
      };

      const createdTask = await createTask(newTask);
      createdTaskId = createdTask.id; // Set the ID for cleanup

      await deleteTask(createdTask.id);

      const task = await getTaskById(createdTask.id);
      expect(task).toBeNull(); // This line might throw if getTaskById does not handle not found cases properly
    });
  });

  describe("getAllTasks", () => {
    it("should return all tasks", async () => {
      const tasks = await getAllTasks();

      expect(tasks).toBeInstanceOf(Array);
    });
  });

  describe("getTasksByProjectId", () => {
    it("should return all tasks of a project", async () => {
      const tasks = await getTasksByProjectId(new ObjectId().toString());

      expect(tasks).toBeInstanceOf(Array);
    });
  });

  describe("getAllTasksByUserId", () => {
    it("should return all tasks of a user", async () => {
      const tasks = await getAllTasksByUserId(new ObjectId().toString());

      expect(tasks).toBeInstanceOf(Array);
    });
  });

  describe("getTasksByUserIdAndState", () => {
    it("should return all tasks of a user with a specific state", async () => {
      const tasks = await getTasksByUserIdAndState(new ObjectId().toString(), "TODO");

      expect(tasks).toBeInstanceOf(Array);
    });
  });

  describe("getTasksByAssignedUsers", () => {
    it("should return all tasks assigned to one or more users", async () => {
      const tasks = await getTasksByAssignedUsers(["1"]);

      expect(tasks).toBeInstanceOf(Array);
    });
  });
});