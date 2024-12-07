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

        //This would require function to be
        //run in an asynchronous environment ->
        //return blogPostList; 

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

        //This would require function to be
        //run in an asynchronous environment ->
        //return blogPostList; 

        LevelListStateSetter(LevelsList)
    }
    catch (error){
        console.log(error)
    }
}

export async function dbGetLessonById(lessonId, levelId, LessonStateSetter) {
    try {
      const LessonReference = doc(db, "lessons", lessonId, "levels", levelId);
      const documentSnapshot = await getDoc(LessonReference);
  
      if (documentSnapshot.exists()) {
        const lessonData = documentSnapshot.data();
        return LessonStateSetter(lessonData); // Set the entire lesson object
      } else {
        console.log("The lesson does not exist in the database");
      }
    } catch (error) {
      console.log("Error fetching lesson:", error);
    }
  }