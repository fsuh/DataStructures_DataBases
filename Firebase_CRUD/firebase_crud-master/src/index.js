import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getDatabase, ref, get, set, child, update, remove} from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyCx78b99ZC6SDzSNFkKmf8DhR6HYqp5faM",
    authDomain: "globehealth-b81b2.firebaseapp.com",
    projectId: "globehealth-b81b2",
    storageBucket: "globehealth-b81b2.appspot.com",
    messagingSenderId: "273575030057",
    appId: "1:273575030057:web:a5fd0047f1073b07945b38",
    measurementId: "G-J4HY3BEGWR"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getDatabase(app);

        let enterID = document.querySelector("#enterID");
        let enterName = document.querySelector("#enterName");
        let enterAge = document.querySelector("#enterAge");
        let findID = document.querySelector("#findID");
        let findName = document.querySelector("#findName");
        let findAge = document.querySelector("#findAge");
      

        let insertBtn = document.querySelector("#insert");
        let updateBtn = document.querySelector("#update");
        let removeBtn = document.querySelector("#remove");
        let findBtn = document.querySelector("#find");

        function InsertData() {
            set(ref(db, "People/"+ enterID.value),{
                Name: enterName.value,
                ID: enterID.value,
                Age: enterAge.value
            })
            .then(()=>{
                alert("Data added successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        function FindData() {
            const dbref = ref(db);

            get(child(dbref, "People/" + findID.value))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    findName.innerHTML = "Name: " + snapshot.val().Name;
                    findAge.innerHTML = "Age: " + snapshot.val().Age;
                } else {
                    alert("No data found");
                }
            })
            .catch((error)=>{
                alert(error)
            })
            
        }

        function UpdateData(){
            update(ref(db, "People/"+ enterID.value),{
                Name: enterName.value,
                Age: enterAge.value
            })
            .then(()=>{
                alert("Data updated successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        function RemoveData(){
            remove(ref(db, "People/"+ enterID.value))
            .then(()=>{
                alert("Data deleted successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        insertBtn.addEventListener('click', InsertData);
        updateBtn.addEventListener('click', UpdateData);
        removeBtn.addEventListener('click', RemoveData);
        findBtn.addEventListener('click', FindData);