
const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const loadingEle=document.querySelector(".loading");
const chatHeader=document.querySelector(".chat-header");
const container=document.querySelector(".container");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const responseObj = {
  hello: "Hey ! How can i help you?",
  hey: "Hey! How can i help you?",
  hi: "Hi ! How can i help you?",
  1: "Contact the technician 0775745980 ",
  2: "Costomer care officer 0786542132 ",
  3: "Contact the technician 0775745980 ",

  today: new Date().toDateString(),
  time: new Date().toLocaleTimeString(),
};

chatHeader.addEventListener("click",()=>{
  container.classList.toggle("collapse")
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  toggleLoading(false);
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
    toggleLoading(true);
  }, 1200);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "Try those, (1)-Technical Issues (2)-Contact Customer Care (3)-Payment Issues"
    : responseObj[userInput];
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

const toggleLoading=(show)=>loadingEle.classList.toggle("hide",show)