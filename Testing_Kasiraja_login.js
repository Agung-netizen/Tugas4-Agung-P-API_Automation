const request_agung = require("supertest")("https://kasir-api.belajarqa.com");
const assert = require("chai").expect;

describe("post login", async function () {
  var token = await Response.body.data.accessToken;
  it("berhasil login", async function () {
    const response = await request_agung.post("/authentications").send({
      email: "eki@mail.com",
      password: "123",
    });
    assert(await response.status).to.eql(201);
  });
  it("tidak berhasil login", async function () {
    const response = await request_agung.post("/authentications").send({
      email: "select * from email",
      password: "1",
    });
    assert(await response.body.status).to.eql("fail");
    assert(await response.body.message).to.eql('"email" must be a valid email');
  });
});
