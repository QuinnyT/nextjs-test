import List from "layouts/list";

export default function Page() {
  const goodsList = [
    {
      image: "",
      name: "good1",
    },
    {
      image: "",
      name: "good2",
    },
  ]
  return (
    <>
      <List items={goodsList} />
    </>
  );
}
