const router = require('express').Router();
const Bear = require( './bearModel' );
router
  .route( '/' )
  .get( get )
  .post( post );
// router
//   .route('/')  
//   .get((req, res) => {
//     res.status(200).json({ route: '/api/bears/' });
//   })
//   .post((req, res) => {
//     res.status(201).json({ status: 'please implement POST functionality' });
//   });

router
  .route('/:id')
  .get((req, res) => {
    res.status(200).json({ route: '/api/bears/' + req.params.id });
  })
  .delete((req, res) => {
    res.status(200).json({ status: 'please implement DELETE functionality' });
  })
  .put((req, res) => {
    res.status(200).json({ status: 'please implement PUT functionality' });
  });
function get( req, res )
{
  res.status( 201 ).json( { route: '/api/bears/' } );
}
function post( req, res )
{
  const bearData = req.body;
  
  const bear = new Bear( bearData );
  bear
    .save()
    .then( bear =>
    {
      res.status( 201 ).json( bear );
    } )
    .catch( err =>
    {
      res.status( 500 ).json( err );
    } );
}
module.exports = router;
