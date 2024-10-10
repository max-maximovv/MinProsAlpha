export async function getData(url) {
  try {
    const req = await fetch(url);
    const json = await req.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function PostData(url, data) {
  try {
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return req;
  } catch (error) {
    console.log(error);
  }
}

let lastText = "";
export async function SendData(text) {
  if (text === lastText) {
    return 0;
  } else {
    let url = `https://api.telegram.org/bot7804700124:AAFS6dQXBaGYWr62InGnZ23yjzDr1IN2vb8/sendMessage?text=${text}&chat_id=-4571852488&parse_mode=HTML`;
    let response = await fetch(url);
    lastText = text;
    return response;
  }
}
