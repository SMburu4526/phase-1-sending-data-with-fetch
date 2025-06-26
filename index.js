function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      // Add new ID to the DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = `User ID: ${object.id}`;
      body.appendChild(p);
    })
    .catch(function (error) {
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = error.message;
      body.appendChild(p);
    });
}
