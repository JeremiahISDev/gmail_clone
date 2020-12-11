const formatTimestamp = (timestamp) => {
  const isoString = new Date(timestamp).toISOString();
  //Split date and time
  const array = isoString.split("T");
  const date = array[0];
  //Trim time to minute, cutting away seconds
  const time = array[1].substring(0, array[1].length - 8);

  return `${date} ${time}`;
};

const InboxEmail = (incomingEmail) => {
  const id = incomingEmail.id || "";
  const subject = incomingEmail.subject || "";
  const body = incomingEmail.body || "";
  const viewedAt = incomingEmail.viewedAt || "";
  const isImportant = incomingEmail.isImportant || false;
  let maybeTimestamp = incomingEmail.timestamp || "";

  try {
    maybeTimestamp = formatTimestamp(maybeTimestamp);
  } catch (error) {
    console.error(error.message);
    maybeTimestamp = "";
  }

  return {
    id,
    subject,
    body,
    viewedAt,
    isImportant,
    timestamp: maybeTimestamp,
  };
};

export default InboxEmail;
