# Task Manager App

**Course:** F2025 MAD201-01 – Cross Platform Mobile Application  
**Assignment:** 5  
**Student:** Khushi Patel  
**Student ID:** A00198843  

---

##  Overview

This project is a simple Task Manager mobile application built using **React Native (Expo)**, **TypeScript**, and **Expo Router**.  
The app allows users to manage daily tasks with a clean and easy-to-use interface.

This assignment demonstrates:

- Multi-screen navigation using **Stack** and **Tab** navigators  
- Global state management using **Context API**  
- Passing data between screens  
- Basic UI layout and reusable components  
- Expo Router file-based routing with TypeScript  

---

##  Features

- Add a new task (title + description)
- View all tasks on the *All Tasks* tab
- View only completed tasks on the *Completed* tab
- Mark tasks as completed/pending
- View full task details
- Delete tasks

---

## Navigation Structure

This project uses **Expo Router**:

### Stack Navigation (`app/_layout.tsx`)
- `(tabs)` → Main Tab Navigation
- `add-task` → Add Task screen
- `task-details` → Task Details screen

### Tab Navigation (`app/(tabs)/_layout.tsx`)
- `all-tasks` → Shows all tasks
- `completed` → Shows completed tasks only

The root route (`/`) redirects automatically to:

`/(tabs)/all-tasks`

---

##  State Management

A global task store is implemented using **React Context API**:

`context/TaskContext.tsx` includes:
- `tasks` (array of task objects)
- `addTask()`
- `removeTask()`
- `toggleComplete()`
- `updateTask()`

This allows all screens to share and update task data consistently.

---

##  Main Files

### Core Screens
- `app/(tabs)/all-tasks.tsx`
- `app/(tabs)/completed.tsx`
- `app/add-task.tsx`
- `app/task-details.tsx`

### Navigation
- `app/_layout.tsx` (stack)
- `app/(tabs)/_layout.tsx` (tabs)
- `app/index.tsx` (redirect)

### Logic
- `context/TaskContext.tsx` (global state)

### UI Component
- `components/TaskItem.tsx`
