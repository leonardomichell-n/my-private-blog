// netlify/functions/auth.js
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { password } = JSON.parse(event.body);
  const correctPassword = process.env.SITE_PASSWORD;

  if (password === correctPassword) {
    return {
      statusCode: 200,
      headers: {
        'Set-Cookie': 'auth=authenticated; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=2592000',
      },
      body: JSON.stringify({ success: true }),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ success: false }),
  };
};


