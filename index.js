fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#currentUser").innerText =
      data.comments[0].user.username;
    document.querySelector("#datePosted").innerText =
      data.comments[0].createdAt;
    document.querySelector("#commentPosted").innerText =
      data.comments[0].content;
    document.querySelector("#score").innerText = data.comments[0].score;
  });
