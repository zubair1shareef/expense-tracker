const sgMail = require('@sendgrid/mail')



exports.forgotPassword=(req,res)=>{
  var email=req.body.email
  console.log(email)
    sgMail.setApiKey(process.env.SEND_GRID_KEY)
const msg = {

    to:email, // Change to your recipient
    from: 'zubair0shareef@gmail.com', // Change to your verified sender
    subject: 'Forgot password',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })

}
