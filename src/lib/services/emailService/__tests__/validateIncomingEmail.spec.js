const validateIncomingEmail = require("../validateIncomingEmail");

describe("validateIncomingEmail", () => {
  it("has a module", () => {
    expect(validateIncomingEmail).toBeDefined();
    const expected = "function";
    const actual = typeof validateIncomingEmail;
    expect(actual).toEqual(expected);
  });

  it("calls next with an error if recipients is missing", () => {
    const req = {
      body: {},
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error('ValidationError: "recipients" is required')
    );
  });

  it("calls next with an error if recipients is not an array", () => {
    const req = {
      body: {
        recipients: "fail",
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error('ValidationError: "recipients" must be an array')
    );
  });

  it("calls next with an error if recipients has an invalid email string", () => {
    const req = {
      body: {
        recipients: ["fail", "test@test.sh"],
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error('ValidationError: "recipients[0]" must be a valid email')
    );
  });

  it("calls next with an error if subject is missing", () => {
    const req = {
      body: {
        recipients: ["foo@bar.se"],
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error('ValidationError: "subject" is required')
    );
  });

  it("calls next with an error if subject is not a string", () => {
    const req = {
      body: {
        recipients: ["foo@bar.se"],
        subject: 1,
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error('ValidationError: "subject" must be a string')
    );
  });

  it("calls next with an error if subject is a string with a length of less than 1", () => {
    const req = {
      body: {
        recipients: ["foo@bar.se"],
        subject: "",
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error('ValidationError: "subject" is not allowed to be empty')
    );
  });

  it("calls next with an error if subject is a string with a length of greater than 255", () => {
    let subject = "";
    for (let i = 0; i < 256; i++) {
      subject += 1;
    }
    const req = {
      body: {
        recipients: ["foo@bar.se"],
        subject,
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error(
        'ValidationError: "subject" length must be less than or equal to 255 characters long'
      )
    );
  });

  it("calls next with an error if message is missing", () => {
    const req = {
      body: {
        recipients: ["foo@bar.se"],
        subject: "testtest",
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error('ValidationError: "message" is required')
    );
  });

  it("calls next with an error if message is not a string", () => {
    const req = {
      body: {
        recipients: ["foo@bar.se"],
        subject: "testtest",
        message: 1,
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error('ValidationError: "message" must be a string')
    );
  });

  it("calls next with an error if message is a string less than 1", () => {
    const req = {
      body: {
        recipients: ["foo@bar.se"],
        subject: "testtests",
        message: "",
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error('ValidationError: "message" is not allowed to be empty')
    );
  });

  it("calls next with an error if message is a string with a length greater than 1000", () => {
    let message = "";
    for (let i = 0; i < 1001; i++) {
      message += 1;
    }

    const req = {
      body: {
        recipients: ["foo@bar.se"],
        subject: "testets",
        message,
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalledWith(
      new Error(
        'ValidationError: "message" length must be less than or equal to 1000 characters long'
      )
    );
  });

  it("calls next with an error if everything is ok", () => {
    const req = {
      body: {
        recipients: ["foo@bar.se"],
        subject: "testets",
        message: "foo",
      },
    };
    const res = {};
    const next = jest.fn();
    validateIncomingEmail(req, res, next);
    expect(next).toBeCalled;
  });
});
