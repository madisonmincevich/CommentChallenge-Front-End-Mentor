fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#currentCommenter").innerText =
      data.comments[0].user.username;
    document.querySelector("#datePosted").innerText =
      data.comments[0].createdAt;
    document.querySelector("#commentPosted").innerText =
      data.comments[0].content;
    document.querySelector("#score").innerText = data.comments[0].score;

    document.querySelector("#score2").innerText = data.comments[1].score;
    document.querySelector("#currentCommenter2").innerText =
      data.comments[1].user.username;
    document.querySelector("#datePosted2").innerText =
      data.comments[1].createdAt;
    document.querySelector("#commentPosted2").innerText =
      data.comments[1].content;

    document.querySelector("#score3").innerText =
      data.comments[1].replies[0].score;
    document.querySelector("#currentCommenter3").innerText =
      data.comments[1].replies[0].user.username;
    document.querySelector("#datePosted3").innerText =
      data.comments[1].replies[0].createdAt;
    document.querySelector("#commentPosted3").innerText =
      data.comments[1].replies[0].content;
    document.querySelector("#replyingTo").innerText =
      data.comments[1].replies[0].replyingTo;

    document.querySelector("#score4").innerText =
      data.comments[1].replies[1].score;
    document.querySelector("#currentCommenter4").innerText =
      data.comments[1].replies[1].user.username;
    document.querySelector("#datePosted4").innerText =
      data.comments[1].replies[1].createdAt;
    document.querySelector("#commentPosted4").innerText =
      data.comments[1].replies[1].content;
    document.querySelector("#replyingTo2").innerText =
      data.comments[1].replies[1].replyingTo;
  });
