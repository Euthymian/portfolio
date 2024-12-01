var express = require('express');
var router = express.Router();

var projects = [
  { projectName: 'The Seeking', description: 'Your drawer', image: '142637.jpg' },
  { projectName: 'The Idea', description: 'Bare foot on the grass', image: '518733.jpg' },
  { projectName: 'The Awakening', description: 'Follow the signals', image: '1354157.jpeg' }
];
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Portfolio' });
// });
router.get('/', function(req, res, next) { 
  if(req.user && req.user.displayName){ 
    const displayName = req.user.displayName; 
    // req.user.displayName = null; 
    res.render('users', { username: displayName, projects: projects }); 
  } 
  else{ 
    res.render('index', { title: 'Portfolio', message:'Please log in ...' }); 
  }
  // res.render('users', { username: "BETTER", projects: projects });
});

router.post('/new_project', (req, res) => {
  const { projectName, description } = req.body;
  let image = 'nproject.png';
  projects.push({ projectName: projectName, description: description, image: image });
  res.redirect('/');
})

module.exports = projects;
module.exports = router;