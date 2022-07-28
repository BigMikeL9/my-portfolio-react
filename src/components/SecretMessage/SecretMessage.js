// BUG ???? Should be in CamelCase since this is not a Component. But Mehh!!

const SecretMessage = () => {
  document.addEventListener("keydown", function (event) {
    const isSecretKey = 192;

    if (event.keyCode === isSecretKey)
      console.log(
        "%cDeveloped with ❤️ by Mikel Kamel 👉 https://mikelkamel.com/",
        "font-size:12px;font-weight: bold;color:#fff; background-color: #355764; padding:5px 10px;border-radius:4px;"
      );
  });
};

export default SecretMessage;
