/** @format */

const express = require("express");
const chai = require("chai");
const request = require("supertest");
const { assert } = require("console");

const app = express();

describe("GET /api", () => {
	it("should return 501", () => {
		request(app).get("/api").send().expect(501);
	});
});

describe("GET /api/weather/city/bellingham", () => {
	it("should return weather", () => {
		request(app)
			.get("/api/weather/city/bellingham")
			.send()
			.expect(200)
			.then((res) => {
				assert(res.body);
			});
	});
});
