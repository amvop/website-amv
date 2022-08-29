const fs = require("fs");
const path = require("path");

export const readData = (data) => {
  return JSON.parse(
    fs.readFileSync(
      path.join(path.resolve(process.cwd(), "public/data"), data),
      "utf8"
    )
  );
};
