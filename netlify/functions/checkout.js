// netlify/functions/checkout.js
const nodemailer = require('nodemailer');

// This is the function that runs when someone calls the back-end
exports.handler = async (event, context) => {
  // Only allow POST requests (when the form is submitted)
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed, use POST.' }),
    };
  }

  // Try to read the data sent from your website
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON.' }),
    };
  }

  // Get the order details from the data
  const { cartItems, phone, email, address, postalCode } = data;

  // Make sure nothing is missing
  if (
    !cartItems || cartItems.length === 0 ||
    !phone || !email || !address || !postalCode
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing order information.' }),
    };
  }

  // Create a string that includes all order details
  const orderDetails = `
Order Details:
${cartItems.map(item => {
  const sizeDetailsText = item.sizeDetails ? `Size Details: ${item.sizeDetails}` : 'No Size Details Provided';
  return `Product: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}, ${sizeDetailsText}`;
}).join('\n')}

Customer Information:
Phone: ${phone}
Email: ${email}
Address: ${address}
Postal Code: ${postalCode}
  `;

  try {
    // Set up the email sender (this uses your Gmail account)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // We'll set this up in Netlify later
        pass: process.env.GMAIL_PASS, // We'll set this up in Netlify later
      },
    });

    // Send the email with your order details
    await transporter.sendMail({
      from: `"Your Website" <${process.env.GMAIL_USER}>`,
      to: 'arafeys12@gmail.com', // This is the email that receives the order
      subject: 'New Order Received',
      text: orderDetails,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email.' }),
    };
  }
};
