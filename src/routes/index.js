const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    console.log('HOME');
});

router.get('/signup',(req, res, next) => {

});

router.post('/signup',(req, res, next) => {
    
});

router.get('/signin',(req, res, next) => {

});

router.post('/signin',(req, res, next) => {
    
});

module.exports = router;