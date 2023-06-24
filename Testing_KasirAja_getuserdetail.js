const { assert } = require("chai");

const request_agung = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
const userId = "59a2108a-9d61-4344-a712-43be4d105e04";
const aut =
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBiM2NmZTZkLTQ2OTctNGE0Ni04MzFkLWQzOGM4MWRkM2E1OSIsImNvbXBhbnlJZCI6Ijg3OTRjODlhLWVkNTQtNDNkYy05NjZhLTc0ZDNjYmY4ZDcyZiIsImlhdCI6MTY4NzM2NTk3OH0.qERZWfL4AgfpmFhIemQw86S1CSMZiiCACncGwpHDFWs";
describe("list user", () => {
  it("berhasil dapat detail list", async function () {
    const respons = await request_agung.get("/units/${userId}").set({
      Athorization: aut,
      Accept: "aplication/json",
    });
    expect(respons.body.status).to.eql("success");
    expect(respons.status).to.eql("200");
  });
  it("gagal dapat detail list", async function () {
    const respons = await request_agung.get("/units/${userId}").set({
      Athorization: aut,
      Accept: "aplication/json",
    });
    expect(respons.body.status).to.eql("fail");
    expect(respons.status).to.eql("400");
  });
});
