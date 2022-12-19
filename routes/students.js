const router = require("express").Router();
let Student = require("../models/Student");

router.route("/add").post((req,res) => {

    //Get the data sent from the front end
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender; 

    const newStudent = new Student({

        name,
        age,
        gender
    })

    //Exception handling......
    newStudent.save().then(() =>{
        res.json("Student Added!!")
    }).catch((err) => {
        console.log("error!!");
    })


})

router.route("/").get((req,res) =>{
    Student.find().then((students) => {
        res.json(students)
    }).catch((error) => {
        console.log("error!!");
    })

})

router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
     /* mehemath puluwan
     const name = req.body.name;
     const age = number(req.body.age);
     const gender = req.body.gender; */

     //D-structure
     const {name, age, gender} = req.body;

     const updateStudent = {

        name,
        age,
        gender
     }
     const update = await Student.findByIdAndUpdate(userId, updateStudent)
     .then (() => {
        res.status(200).send({status: "User Updated!!"})

     }).catch((error) => {

        console.log(error);
        res.status(500).send({status: "Error with updating data!!", error: error.message});
     })
})

router.route("/delete/:id").delete(async(req,res) => {
    let userID = req.params.id;
    await Student.findByIdAndDelete(userID).then(() => {
        res.student(200).send({status:"User Deleted!!"});
    }).catch ((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with Delete User!!", error: error.message});
    })
})
  
router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;
    await Student.findById(userId).then(() => {
        res.student(200).send({status:"User Fetched!!",user: user});   
    }).catch ((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with Fetch User!!,", error: err.message});
    })
})

module.exports = router;