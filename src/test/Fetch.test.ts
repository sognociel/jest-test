// https://jsonplaceholder.typicode.com/users 데이터

import { fetchData } from "./Fetch";

describe("jsonplaceholder user 데이터 가져오기", () => {
  test("데이터 가져오기 성공", async () => {
    const data = await fetchData("https://jsonplaceholder.typicode.com/users");
    const data1 = data[0];

    expect(data1.name).toBe("Leanne Graham");
  });
});
