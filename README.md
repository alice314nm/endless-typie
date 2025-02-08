# ⌨️ **Endless Typie**

## 🎯 **Project Overview**  
 **Endless Typie** is an interactive web application designed to help to **learn and improve blind typing skills**. The platform provides **structured lessons, real-time practice, and progress tracking**, making typing fun and efficient.  

## ✨ **Key Features**  

### 🔐 **User Authentication**  
- Users can **sign up and log in** using **Google or email** through **Firebase Authentication**.  
- Secure account management ensures personalized tracking of progress.  

### 🏆 **Lesson Progress Tracking**  
- Users complete **structured typing lessons**, with their **progress saved** in Firestore.  
- Each lesson tracks **words per minute (WPM) and accuracy**.  

### ⌨️ **Typing Records & Analytics**  
- Typing speed, accuracy, and completed lessons are **automatically recorded**.  
- Data is **stored in Firestore** for future analysis.  

### 📊 **Dashboard for Progress Visualization**  
Users can view their progress with:  
- **Average typing speed (WPM)**  
- **Lesson progress** (completion status of lessons)  
- **Typing history & performance trends** over time  

---

## 🛠️ **Tech Stack**  

| **Technology**  | **Purpose**  |  
|----------------|-------------|  
| **React**  | Frontend framework for UI & component-based development  |  
| **React Router**  | Handles navigation between different sections of the app  |  
| **Firebase Authentication**  | Enables secure user login via Google or email  |  
| **Firestore (Firebase Database)**  | Stores user progress, typing records, and lesson data  |  

---

## 🚀 **How to Run the Project**  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-repo-url.git
   cd your-repo-name
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the development server**  
   ```bash
   npm run dev
   ```

4. **Access the app** at http://localhost:3000 or view the **deployed version** at https://endless-typie.vercel.app/
