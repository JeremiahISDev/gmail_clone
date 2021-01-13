import InboxEmail from "../InboxEmail";

describe("InboxEmail", () => {
  it("has a module", () => {
    expect(InboxEmail).toBeDefined();
    const expected = "function";
    const actual = typeof InboxEmail;
    expect(actual).toEqual(expected);
  });

  it("should return empty values for an invalid IncomingEmail", () => {
    const IncomingEmail = {};
    const expected = {
      id: "",
      subject: "",
      body: "",
      timestamp: "",
      viewedAt: "",
      isImportant: false,
    };
    const actual = InboxEmail(IncomingEmail);
    expect(expected).toEqual(actual);
  });

  it("should return correct values for a valid IncomingEmail", () => {
    const dateTime = "2018-08-19T09:29:21.318Z";
    const formattedDateTime = "2018-08-19 09:29";
    const incomingEmail = {
      id: "1",
      subject: "foo",
      body: "bar",
      isImportant: false,
      viewedAt: undefined,
      timestamp: dateTime,
    };
    const expected = {
      id: "1",
      subject: "foo",
      body: "bar",
      isImportant: false,
      viewedAt: "",
      timestamp: formattedDateTime,
    };
    const actual = InboxEmail(incomingEmail);
    expect(actual).toEqual(expected);
  });
});
