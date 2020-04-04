const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv').config() 
const soap = require('soap');
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';



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
  var price = req.body.price;
  Countries.push({
    id: Id++,
    name: name,
    price: price
  });
  res.send(Countries);
  console.log('New Country', name);
});

app.put('/api/countries/:country_id', (req, res) => { // อัพเดทประเทศจากไอดี
  var id = req.params.country_id,
    name = req.body.name;
    price = req.body.price

  Countries.map(Country => {
    if (Country.id == id) {
      Country.name = name;
      Country.price = price
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

app.get('/', routes.index);
app.get('/login/callback', routes.loginCallback);
app.get('/logout', routes.logout);

const out = `
<html>
<style>
body {
  text-align: center;
}
</style>
<body>
<img src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/Logo-PSU-TH-01.png" width="450" height="270"/>
  <h2>PSU Passport Authentication (SOAP) </h2>
 <form action="/psupassport" method="post">
 Username: <input type="text" name="username" /> <br>
 Password: <input type="password" name="password" /> <br>
 <input type="submit" value="Submit">
</form>
</body>
</html> 
`
app.get('/psupassport', (req, res) => {
   res.send(out)
})
app.post('/psupassport', (req, res) => {
   soap.createClient(url, (err, client) => {
      if (err) {
         res.redirect("http://localhost:80")
      }
      else {
         let user = {}
         user.username = req.body.username
         user.password = req.body.password

         client.GetStaffDetails(user, function (err, response) {

            if (err) {
               res.redirect("http://localhost:80")
            }
            else {
               console.log(response);
               if (response.GetStaffDetailsResult.string[0]) {
                  req.session.access_token = '123'
                  req.session.expires = 60000
                  res.redirect("http://localhost:3000/#total")
               } else {
                  res.redirect("http://localhost:80")
               }
            }
         });
      }
   });
})

app.get('/test', (req, res) => {
 if (req.session.access_token)
      return res.sendStatus(200)
   res.sendStatus(401)
})


app.listen(process.env.PORT, () => console.log('server running ' + process.env.PORT));


