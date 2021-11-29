const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    console.log('Página de inicio');
});

module.exports = router;