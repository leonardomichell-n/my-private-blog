exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { password } = JSON.parse(event.body);
    const correctPassword = process.env.SITE_PASSWORD;

    if (password === correctPassword) {
      return {
        statusCode: 200,
        headers: {
          'Set-Cookie': 'auth=authenticated; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=2592000',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ success: true }),
      };
    }

    return {
      statusCode: 401,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ success: false, error: 'Incorrect password' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      heade
      