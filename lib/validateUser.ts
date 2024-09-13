export async function validateUser(
  email: string,
  password: string,
): Promise<
  | { data: null }
  | {
      data: {
        name: string;
        userid: string;
        token: string;
      };
    }
> {
  if (process.env.LOCAL_CMS_PROVIDER) {
    if (password === "123456") {
      return {
        data: {
          name: "Random",
          userid: "1",
          token: "",
        },
      };
    }
    return { data: null };
  }
  const url = "https://harkiratapi.classx.co.in/post/userLogin";
  const headers = {
    "Client-Service": process.env.APPX_CLIENT_SERVICE || "",
    "Auth-Key": process.env.APPX_AUTH_KEY || "",
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = new URLSearchParams();
  body.append("email", email);
  body.append("password", password);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data as any;
  } catch (error) {
    console.error("Error validating user:", error);
  }
  return {
    data: null,
  };
}
