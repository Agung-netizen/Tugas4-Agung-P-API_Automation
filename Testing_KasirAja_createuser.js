const request_agung = require("supertest")("https://kasir-api.belajarqa.com");
const assert = require("chai").expect;
// const getuser = require("./Testing_Kasiraja_login");
// const token = getuser.auth;
const aut =
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBiM2NmZTZkLTQ2OTctNGE0Ni04MzFkLWQzOGM4MWRkM2E1OSIsImNvbXBhbnlJZCI6Ijg3OTRjODlhLWVkNTQtNDNkYy05NjZhLTc0ZDNjYmY4ZDcyZiIsImlhdCI6MTY4NzM2NTk3OH0.qERZWfL4AgfpmFhIemQw86S1CSMZiiCACncGwpHDFWs";
// const token = response.body.data.accessToken;
describe("Createuser", function () {
  it("berhasil create user", async function () {
    const response = await request_agung
      .post("/users")
      .send({
        name: "kasir-serbaguna",
        email: "user@example.com",
        password: "jiasda2321@",
      })
      .set({
        Authorization: token,
        Accept: "aplication/json",
      });
    assert(await response.body.message).to.eql("User berhasil ditambahkan");
    assert(await response.body.status).to.eql("success");
  });
  it("gagal create user", async function () {
    const respons = await request_agung
      .post("/users")
      .send({
        name: "",
        email: "user@example.com",
        password: "jiasda2321@",
      })
      .set({
        Authorization: token,
        Accept: "aplication/json",
      });
    assert(await respons.body.message).to.eql('"name" is not allowed to be empty');
    assert(await respons.body.status).to.eql("fail");
  });
});
