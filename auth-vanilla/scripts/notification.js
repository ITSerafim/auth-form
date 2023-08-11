const notificationEl = document.querySelector("#notification");

const notification = {
  addStyleAndMessage: (style, message) => {
    notificationEl.classList.add(style);
    notificationEl.textContent = message;
  },
  removeStyle: (style) => {
    notificationEl.classList.remove(style);
  },

  removeStyles: (styles) => {
    styles.forEach((style) => {
      notificationEl.classList.remove(style);
    });
  },
};

function view(data, message) {
  if (data.statusCode === 200 || data.statusCode === 201) {
    notification.addStyleAndMessage("notification-success", message);
  } else if (data.statusCode !== 200 || data.statusCode !== 201) {
    notification.addStyleAndMessage("notification-error", data.message);
  } else {
    notification.addStyleAndMessage(
      "notification-error",
      "Возникла непредвиденная ошибка"
    );
  }

  setTimeout(() => {
    notification.removeStyles(["notification-success", "notification-error"]);
  }, 1500);
}

function validate(message) {
  notification.addStyleAndMessage("notification-error", message);

  setTimeout(() => {
    notification.removeStyle("notification-error");
  }, 1500);
}

export { view, validate };
