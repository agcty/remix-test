import { json, LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = () => {
  return json({ hey: "this is a test2" });
};

export default function Test() {
  const data = useLoaderData();

  return <div>{JSON.stringify(data)}</div>;
}
