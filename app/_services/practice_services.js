import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase";

export async function dbGetRandomPracticeText(practiceTextSetter){
    try {
        const allLessonsReference = collection(db, "practiceTexts");
        const querySnapshot = await getDocs(allLessonsReference);
        const lessons = querySnapshot.docs.map(doc => doc.data());
        
        if (lessons.length === 0) {
            console.log("No lessons found in the database.");
            return;
        }

        const randomLesson = lessons[Math.floor(Math.random() * lessons.length)];
        if (randomLesson && randomLesson.textToType) {
          practiceTextSetter(randomLesson.textToType);
        } else {
          console.log("Invalid lesson data");
        }
    } catch (error) {
        console.error("Error fetching random lesson:", error);
    }
}