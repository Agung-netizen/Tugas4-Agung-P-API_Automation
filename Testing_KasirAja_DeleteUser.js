const request_agung = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
const userId = "59a2108a-9d61-4344-a712-43be4d105e04";

describe("delete User", function () {
  it("berhasil delete", async function () {
    const response = await request_agung.delete("/users/${userId}");
    expect(response.body.status).to.eql("success");
    expect(response.body.message).to.eql("User berhasil dihapus");
  });
});
