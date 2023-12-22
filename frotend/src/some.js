async function getData(url) {
  var response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

<h1>{response.message}</h1>;
