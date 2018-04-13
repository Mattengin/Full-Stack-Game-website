////WIP
import { Router } from "express";


const router = Router();
router.post('/upload', (req, res, next) => {
    console.log(req);
    let imageFile = req.files.file;
  
    imageFile.mv(`${__dirname}/client/${req.body.filename}.jpg`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.json({file: `client/${req.body.filename}.jpg`});
    });
  console.log("uploaded")
  })
  
//   router.post('/', (req, res) => {
//     classTable.insert(req.body)
//     .then((results) => {
//         res.json(results);
//     }).catch((err) => {
//         console.log(err);
//         res.sendStatus(500);
//     });
// });Í

////WIP
  // catch 404 and forward to error handler
//   app.use(function(req, res, next) {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   });
  
//   // error handler
//   app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
//   });
  
export default router;