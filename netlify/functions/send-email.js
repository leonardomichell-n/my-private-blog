// netlify/functions/send-email.js
const https = require('https');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  // Using Resend API (free tier: 100 emails/day)
  const data = JSON.stringify({
    from: 'noreply@yourdomain.com',
    to: process.env.YOUR_EMAIL,
    subject: `New message from ${name}`,
    html: `
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  const options = {
    hostname: 'api.resend.com',
    path: '/emails',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve({
            statusCode: 200,
            body: JSON.stringify({ success: true }),
          });
        } else {
          resolve({
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
          });
        }
      });
    });

    req.on('error', () => {
      resolve({
        statusCode: 500,
        body: JSON.stringify({ error: 'Network error' }),
      });
    });

    req.write(data);
    req.end();
  });
};
