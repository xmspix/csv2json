"use strict";

class csv2json {
  constructor() {}

  async convert(file) {
    let data = [];
    let headers = [];
    let records = [];

    await file.split(/\r?\n/).forEach((line) => {
      data.push(line);
    });

    headers = await data
      .shift()
      .split(",")
      .map((e) => e.trim().replace(/\s/g, ""));

    return (records = await data.map((e) =>
      headers.reduce(
        (ac, a, i) => ({
          ...ac,
          [a]: e.split(",")[i] ? e.split(",")[i].trim() : null,
        }),
        {}
      )
    ));
  }
}

module.exports = new csv2json();
