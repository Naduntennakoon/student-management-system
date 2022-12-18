const router = require("express").router();
let Student = require("../models/Student");

router.route("/add").post((req,res) => {

    //Get the data sent from the front end
    const name = req.body.name;
    const age = number(req.body.age);
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
    Student.find().then((student) => {
        res.json(Student)
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
     const update = await Student.findByIdAndUpdate(userId, updateStudent);
     res.status(200).send({status: "User Updated!!", user: update})



})


module.exports = router;