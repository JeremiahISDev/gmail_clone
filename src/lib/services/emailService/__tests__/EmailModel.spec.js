const mongoose = require("mongoose");
const EmailModel = require("../EmailModel");

describe("EmailModel", () => {
  let db;

  beforeAll((done) => {
    db = mongoose.connect(
      "mongodb://localhost:27017/test",
      { useNewUrlParser: true, useUnifiedTopology: true },
      done
    );
  });

  afterAll((done) => {
    db.close(done);
  });

  beforeEach((done) => {
    EmailModel.remove({}, done);
  });

  it("correctly serialises the model", async () => {
    const subject = "foo";
    const message = "bar";
    const timestamp = new Date("2018-08-23T16:42:41.897Z");
    const recipients = [];
    const email = new EmailModel({ recipients, subject, message, timestamp });
    await email.save();
    const emailInDatabase = await EmailModel.findById(email.id);
    const expected = {
      recipients,
      isImportant: false,
      _id: email.id,
      subject,
      message,
      timestamp,
      __v: 0,
    };
    const expectedString = JSON.stringify(expected);
    const actual = JSON.stringify(emailInDatabase);
    await expect(expectedString).toEqual(actual);
  });
});
