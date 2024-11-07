const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Record {
  id: number;
  email: string;
}

const getData = async (url: string): Promise<Record[]> => {
  const response = await fetch(url, {
    method: "get",
  })
    .then((res) => res.json() as Promise<Record[]>)
    .catch((error) => {
      throw new Error(error);
    });

  return response;
};

getData(COMMENTS_URL).then((data: Record[]) => {
  data.forEach((record) =>
    console.log(`ID: ${record.id}, Email: ${record.email}`)
  );
});
