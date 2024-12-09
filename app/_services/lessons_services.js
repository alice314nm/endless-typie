import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase";

export async function dbGetAllLessons(LessonsListStateSetter){
    try {
        const allLessonsReference = collection(db, "lessons");
        const allLessonsQuery = query(allLessonsReference);
        const querySnapshot = await getDocs(allLessonsQuery);

        let LessonsList = [];
        
        querySnapshot.forEach((docSnap)=>{
            let thisLesson = {
                id: docSnap.id,
                ...docSnap.data()
            }

            LessonsList.push(thisLesson)
        });

        LessonsListStateSetter(LessonsList)
    }
    catch (error){
        console.log(error)
    }
}

export async function dbGetAllLevelsByLessonId(lessonId, LevelListStateSetter){
    try {
        const allLevelsReference = collection(db, "lessons", lessonId, 'levels');
        const allLevelQuery = query(allLevelsReference);
        const querySnapshot = await getDocs(allLevelQuery);

        let LevelsList = [];
        
        querySnapshot.forEach((docSnap)=>{
            let thisLesson = {
                id: docSnap.id,
                ...docSnap.data()
            }

            LevelsList.push(thisLesson)
        });        

        LevelListStateSetter(LevelsList)
    }
    catch (error){
        console.log(error)
    }
}

export async function dbGetLevelsById(lessonId, levelId, LevelStateSetter) {
    try {
      const LessonReference = doc(db, "lessons", lessonId, "levels", levelId);
      const documentSnapshot = await getDoc(LessonReference);
  
      if (documentSnapshot.exists()) {
        const lessonData = documentSnapshot.data();
        return LevelStateSetter(lessonData);
      } else {
        console.log("The lesson does not exist in the database");
      }
    } catch (error) {
      console.log("Error fetching lesson:", error);
    }
}

export async function dbGetLessonById(lessonId, LessonStateSetter) {
    try {
      const LevelReference = doc(db, "lessons", lessonId);
      const documentSnapshot = await getDoc(LevelReference);
  
      if (documentSnapshot.exists()) {
        const lessonData = documentSnapshot.data();
        return LessonStateSetter(lessonData);
      } else {
        console.log("The lesson does not exist in the database");
      }
    } catch (error) {
      console.log("Error fetching lesson:", error);
    }
  }