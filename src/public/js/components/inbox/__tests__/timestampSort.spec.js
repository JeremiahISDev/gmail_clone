import timestampSort from "../timestampSort";

const Email = (timestamp) => {
  return { timestamp };
};

describe("timestampSort", () => {
  it("has a module", () => {
    expect(timestampSort).toBeDefined();
    const expected = "function";
    const actual = typeof timestampSort;
    expect(actual).toEqual(expected);
  });

  it("sorts emails in ascending order", () => {
    const email1 = Email(1000);
    const email2 = Email(4030);
    const email3 = Email(1001);
    const emails = [email1, email2, email3];
    const expected = [email2, email3, email1];
    const actual = emails.sort(timestampSort);
    expect(actual).toEqual(expected);
  });
});
