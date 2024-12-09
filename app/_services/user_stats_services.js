import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, writeBatch } from "firebase/firestore";
import { db } from "../_utils/firebase";

export const initializeUserData = async (user, db) => {
    const userRef = doc(db, 'users', user.uid);
    const statsWithKeyboardRef = doc(userRef, 'stats', 'statsWithKeyboard');
    const statsWithoutKeyboardRef = doc(userRef, 'stats', 'statsWithoutKeyboard');
  
    const lessonsData = [
      { id: 'lesson1', completed: "0" },
      { id: 'lesson2', completed: "0" },
      { id: 'lesson3', completed: "0" },
      { id: 'lesson4', completed: "0" },
      { id: 'lesson5', completed: "0" },
      { id: 'lesson6', completed: "0" },
    ];
  
    const statsWithKeyboardData = {
      stats: [],
    };
  
    const statsWithoutKeyboardData = {
      stats: [],
    };
  
    const levelsData = {
      lesson1: [
        { id: 'level1', completed: false },
        { id: 'level2', completed: false },
        { id: 'level3', completed: false },
        { id: 'level4', completed: false },
        { id: 'level5', completed: false },
        { id: 'level6', completed: false },
      ],
      lesson2: [
        { id: 'level1', completed: false },
        { id: 'level2', completed: false },
        { id: 'level3', completed: false },
        { id: 'level4', completed: false },
        { id: 'level5', completed: false },
      ],
      lesson3: [
        { id: 'level1', completed: false },
        { id: 'level2', completed: false },
        { id: 'level3', completed: false },
        { id: 'level4', completed: false },
        { id: 'level5', completed: false },
      ],
      lesson4: [
        { id: 'level1', completed: false },
        { id: 'level2', completed: false },
        { id: 'level3', completed: false },
        { id: 'level4', completed: false },
        { id: 'level5', completed: false },
      ],
      lesson5: [
        { id: 'level1', completed: false },
        { id: 'level2', completed: false },
        { id: 'level3', completed: false },
        { id: 'level4', completed: false },
        { id: 'level5', completed: false },
      ],
      lesson6: [
        { id: 'level1', completed: false },
        { id: 'level2', completed: false },
        { id: 'level3', completed: false },
        { id: 'level4', completed: false },
        { id: 'level5', completed: false },
      ],
    };
  
    const batch = writeBatch(db);
  
    try {
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        // Set user basic data
        batch.set(userRef, { email: user.email, createdAt: new Date().toISOString() });
  
        // Set lessons and levels
        lessonsData.forEach((lesson) => {
          const lessonRef = doc(userRef, 'lessons', lesson.id);
          batch.set(lessonRef, { id: lesson.id, completed: lesson.completed });
  
          if (levelsData[lesson.id]) {
            levelsData[lesson.id].forEach((level) => {
              const levelRef = doc(userRef, 'lessons', lesson.id, 'levels', level.id);
              batch.set(levelRef, { id: level.id, completed: level.completed });
            });
          }
        });
  
        // Set statsWithKeyboard data
        batch.set(statsWithKeyboardRef, statsWithKeyboardData);
  
        // Set statsWithoutKeyboard data
        batch.set(statsWithoutKeyboardRef, statsWithoutKeyboardData);
  
        await batch.commit();
        console.log('User data initialized successfully.');
      } else {
        console.log('User data already exists.');
      }
    } catch (error) {
      console.error('Error initializing user data:', error.message);
    }
  };


export async function dbAddStatWithKeyboard(userId, wpm, accuracy) {
    try {
        const statsWithKeyboardRef = doc(db, 'users', userId, 'stats', 'statsWithKeyboard');

        const newStat = {
            timestamp: Date.now(),
            wpm,
            accuracy,
        };

        await updateDoc(statsWithKeyboardRef, {
            stats: arrayUnion(newStat),
        });

    } catch (error) {
        console.error("Error adding statsWithKeyboard:", error);
    }
}

export async function dbAddStatWithoutKeyboard(userId, wpm, accuracy) {
    try {
      const statsWithoutKeyboardRef = doc(db, 'users', userId, 'stats', 'statsWithoutKeyboard');
  
      const newStat = {
        timestamp: Date.now(),
        wpm,
        accuracy,
        };

        await updateDoc(statsWithoutKeyboardRef, {
            stats: arrayUnion(newStat),
        });
  
    } catch (error) {
        console.error("Error adding statsWithKeyboard:", error);
    }
  }

  export async function dbCalculateStatsWithKeyboard(userId) {
    try {
      const statsWithKeyboardRef = doc(db, 'users', userId, 'stats', 'statsWithKeyboard');
      const statsDoc = await getDoc(statsWithKeyboardRef);
  
      if (statsDoc.exists()) {
        const statsData = statsDoc.data().stats || [];
  
        if (statsData.length === 0) {
          console.log("No stats found.");
          return { averageWpm: 0, averageAccuracy: 0, highestWpm: 0, highestAccuracy: 0 };
        }
  
        let totalWpm = 0;
        let totalAccuracy = 0;
        let highestWpm = 0;
        let highestAccuracy = 0;
  
        statsData.forEach(stat => {
          const wpm = parseFloat(stat.wpm);
          const accuracy = parseFloat(stat.accuracy);
  
          // Update the total for averages calculation
          if (!isNaN(wpm) && !isNaN(accuracy)) {
            totalWpm += wpm;
            totalAccuracy += accuracy;
  
            // Track highest values
            if (wpm > highestWpm) {
              highestWpm = wpm;
            }
            if (accuracy > highestAccuracy) {
              highestAccuracy = accuracy;
            }
          } else {
            console.warn("Invalid stat values:", stat);
          }
        });
  
        let averageWpm = (totalWpm / statsData.length).toFixed(2);
        let averageAccuracy = (totalAccuracy / statsData.length).toFixed(2);
  
        // Handle NaN for averages
        averageWpm = isNaN(averageWpm) ? 0 : averageWpm;
        averageAccuracy = isNaN(averageAccuracy) ? 0 : averageAccuracy;
  
        return { averageWpm, averageAccuracy, highestWpm, highestAccuracy };
      } else {
        return { averageWpm: 0, averageAccuracy: 0, highestWpm: 0, highestAccuracy: 0 };
      }
    } catch (error) {
      console.error("Error calculating averages:", error);
      return { averageWpm: 0, averageAccuracy: 0, highestWpm: 0, highestAccuracy: 0 };
    }
  }
  
  export async function dbCalculateStatsWithoutKeyboard(userId) {
    try {
      const statsWithoutKeyboardRef = doc(db, 'users', userId, 'stats', 'statsWithoutKeyboard');
      const statsDoc = await getDoc(statsWithoutKeyboardRef);
  
      if (statsDoc.exists()) {
        const statsData = statsDoc.data().stats || [];
  
        if (statsData.length === 0) {
          return { averageWpm: 0, averageAccuracy: 0, highestWpm: 0, highestAccuracy: 0 };
        }
  
        let totalWpm = 0;
        let totalAccuracy = 0;
        let highestWpm = 0;
        let highestAccuracy = 0;
  
        statsData.forEach(stat => {
          const wpm = parseFloat(stat.wpm);
          const accuracy = parseFloat(stat.accuracy);
  
          // Update the total for averages calculation
          if (!isNaN(wpm) && !isNaN(accuracy)) {
            totalWpm += wpm;
            totalAccuracy += accuracy;
  
            // Track highest values
            if (wpm > highestWpm) {
              highestWpm = wpm;
            }
            if (accuracy > highestAccuracy) {
              highestAccuracy = accuracy;
            }
          } else {
            console.warn("Invalid stat values:", stat);
          }
        });
  
        let averageWpm = (totalWpm / statsData.length).toFixed(2);
        let averageAccuracy = (totalAccuracy / statsData.length).toFixed(2);
  
        // Handle NaN for averages
        averageWpm = isNaN(averageWpm) ? 0 : averageWpm;
        averageAccuracy = isNaN(averageAccuracy) ? 0 : averageAccuracy;

  
        return { averageWpm, averageAccuracy, highestWpm, highestAccuracy };
      } else {
        return { averageWpm: 0, averageAccuracy: 0, highestWpm: 0, highestAccuracy: 0 };
      }
    } catch (error) {
      console.error("Error calculating averages:", error);
      return { averageWpm: 0, averageAccuracy: 0, highestWpm: 0, highestAccuracy: 0 };
    }
  }
  
  export async function dbCountStatsWithKeyboard(userId) {
    try {
      const statsWithKeyboardRef = doc(db, 'users', userId, 'stats', 'statsWithKeyboard');
      const statsDoc = await getDoc(statsWithKeyboardRef);
  
      if (statsDoc.exists()) {
        const statsData = statsDoc.data().stats || [];
        const count = statsData.length;
  
        return count;
      } else {
        return 0;
      }
    } catch (error) {
      console.error("Error counting statsWithKeyboard:", error);
      return 0;
    }
  }

  export async function dbCountStatsWithoutKeyboard(userId) {
    try {
      const statsWithoutKeyboardRef = doc(db, 'users', userId, 'stats', 'statsWithoutKeyboard');
      const statsDoc = await getDoc(statsWithoutKeyboardRef);
  
      if (statsDoc.exists()) {
        const statsData = statsDoc.data().stats || [];
        const count = statsData.length;
  
        return count;
      } else {
        return 0;
      }
    } catch (error) {
      return 0;
    }
  }
  
  export async function dbUpdateLessonCompletionStatus(userId) {
    const userRef = doc(db, 'users', userId);
    const lessonsRef = collection(userRef, 'lessons');
    const lessonDocs = await getDocs(lessonsRef);
  
    const batch = writeBatch(db);  
  
    try {
      await Promise.all(lessonDocs.docs.map(async (lessonDoc) => {
        const lessonId = lessonDoc.id;
        const levelsRef = collection(userRef, 'lessons', lessonId, 'levels');
        const levelDocs = await getDocs(levelsRef);
  
        const totalLevels = levelDocs.size;
        let completedLevels = 0;
  
        levelDocs.forEach((levelDoc) => {
          const levelData = levelDoc.data();
          if (levelData.completed) {
            completedLevels += 1;
          }
        });
  
        let lessonStatus = 0; // Default to "not completed"
        if (completedLevels === totalLevels) {
          lessonStatus = 2; // All levels completed
        } else if (completedLevels > 0) {
          lessonStatus = 1; // Some levels completed
        }
  
        const lessonRef = doc(userRef, 'lessons', lessonId);
        batch.update(lessonRef, { completed: lessonStatus.toString() });
      }));
  
      await batch.commit();
    } catch (error) {
      console.error('Error updating lesson completion statuses:', error.message);
    }
  };

  export async function dbGetUserLessonById(userId, lessonId) {
    try {
      const LevelReference = doc(db, 'users', userId, "lessons", lessonId);
      const documentSnapshot = await getDoc(LevelReference);
  
      if (documentSnapshot.exists()) {
        const lessonData = documentSnapshot.data();
        return lessonData.completed;
      } else {
        console.log("The lesson does not exist in the database");
        return "0"; 
      }
    } catch (error) {
      console.log("Error fetching lesson:", error);
      return "0"; 
    }
  }

export async function dbGetUserLessonsLevelsById(userId, setLessonsData) {
  const userRef = doc(db, 'users', userId);
  const lessonsRef = collection(userRef, 'lessons');
  const lessonDocs = await getDocs(lessonsRef);

  try {
    const lessonsData = [];

    // Loop through all lessons and get the level data
    await Promise.all(lessonDocs.docs.map(async (lessonDoc) => {
      const lessonId = lessonDoc.id;
      const levelsRef = collection(userRef, 'lessons', lessonId, 'levels');
      const levelDocs = await getDocs(levelsRef);

      let completedLevels = 0;

      // Count completed levels
      levelDocs.forEach((levelDoc) => {
        const levelData = levelDoc.data();
        if (levelData.completed) {
          completedLevels += 1;
        }
      });

      // Push data for each lesson, including the total levels and completed levels
      lessonsData.push({
        lessonId,
        totalLevels: levelDocs.size,
        completedLevels
      });
    }));

    // Update state with lessons data
    setLessonsData(lessonsData);

  } catch (error) {
    console.error('Error updating lesson completion statuses:', error.message);
  }
}

export async function dbGetUserLessonLevelsById(userId, lessonId, levelId) {
    try {
      const levelsRef = collection(db, 'users', userId, 'lessons', lessonId, 'levels');
      const levelSnapshot = await getDocs(levelsRef);  
  
      if (!levelSnapshot.empty) {
        const levelStatuses = levelSnapshot.docs.map(doc => {
          const levelData = doc.data();
          return levelData.completed;
        });
  
        levelsSetter(levelStatuses);
        return levelStatuses;
      } else {
        console.log("No levels found for the given lesson");
        return []; 
      }
    } catch (error) {
      console.log("Error fetching lesson levels:", error);
      return []; 
    }
  }

  export async function dbUpdateLevelStatus (userId, lessonId, levelId, status) {
    try {
        const levelRef = doc(db, 'users', userId, 'lessons', lessonId, 'levels', levelId);
        await updateDoc(levelRef, { completed: status });
        console.log(`Level ${levelId} status updated to ${status}`);
    } catch (error) {
        console.error('Error updating level status:', error);
    }
};

