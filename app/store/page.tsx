// "use client";

import List from "layouts/list";

export default function Page() {
  const storesList = [
    {
      image: "",
      name: "store1",
    }
  ]
  return (
    <>
      <List items={storesList} />
    </>
  );
}
