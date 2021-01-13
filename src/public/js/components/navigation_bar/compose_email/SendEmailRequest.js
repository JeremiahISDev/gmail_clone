const SendEmailRequest = (recipientsString, subject, message) => {
  //look for spaces, tabs, commas and semi-colons
  const regex = /(\s|,|;|\t)/;
  const recipients = recipientsString
    .split(regex)
    .filter((str) => str.trim())
    .filter((str) => !regex.test(str));
  const data = {
    recipients,
    subject,
    message,
  };

  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return request;
};

export default SendEmailRequest;
