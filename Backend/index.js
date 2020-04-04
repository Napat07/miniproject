const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv').config() 


const app = express();

app.listen(process.env.PORT,() =>  console.log('server ready 80') );

//app.listen(80)
app.use(cors()); // เรียกใช้ผ่านโดเมนอื่นได้
app.use(bodyParser.json()); // สำหรับอ่านข้อมูลจาก Axios
app.use(bodyParser.urlencoded({extended: true})); // ให้ผู้ใช้ป้อนข้อมูลเข้ามาได้

// CRUD
// Create
// Read
// Update
// Delete

var Countries = [],
  Id = 1;

app.get('/api/countries', (req, res) => { // ดึงค่าประเทศทุกประเทศ
  res.send(Countries);
  console.log('Get Countries');
});

app.post('/api/countries', (req, res) => { // เพิ่มประเทศใหม่
  var name = req.body.name;
  var lastname = req.body.lastname;
  var position = req.body.position;
  var age = req.body.age;
  Countries.push({
    id: Id++,
    name: name,
    lastname:lastname,
    position : position,
    age: age
  });
  res.send(Countries);
  console.log('New Country', name);
});

app.put('/api/countries/:country_id', (req, res) => { // อัพเดทประเทศจากไอดี
  var id = req.params.country_id,
    name = req.body.name;
    lastname = req.body.lastname;
    position = req.body.position;
    age = req.body.age

  Countries.map(Country => {
    if (Country.id == id) {
      Country.name = name;
      Country.lastname = lastname
      Country.position = position
      Country.age = age
    }
  });
  res.send(Countries);
  console.log('Update Country', name);
});

app.delete('/api/countries/:country_id', (req, res) => { // ลบประเทศจากไอดี
  var id = req.params.country_id,
    tmp = [];

  Countries.map(Country => {
    if (Country.id != id) {
      tmp.push(Country);
    }
  });
  Countries = tmp;
  res.send(Countries);
  console.log('Delete Country', id);
});

