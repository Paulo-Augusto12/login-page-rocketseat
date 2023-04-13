export async function login(login: string, password: string) {
  try {
    const apiRoute = "/api/login";
    const params = {
      login,
      password,
    };

    const response = await fetch(apiRoute, {
      method: "POST",
      body: JSON.stringify(params),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
