const request_agung = require("supertest")("https://kasir-api.belajarqa.com");
const assert = require("chai").expect;

describe("register/daftar", function () {
  it("berhasil register", async function () {
    const response = await request_agung.post("/registration").send({
      name: "{{name}}",
      email: "eki@mail.com",
      password: "123",
    });

    assert(response.status).to.eql(201);
    assert(response.body.message).to.eql("Toko berhasil didaftarkan");
  });

  it("gagal register", async function () {
    const response = await request_agung.post("/registration").send({
      name: "",
      email: "sample@ex.co",
      password: "123adsfadf@",
    });

    assert(response.status).to.eql(400);
    assert(response.body.message).to.eql('"name" is not allowed to be empty');
  });
});
