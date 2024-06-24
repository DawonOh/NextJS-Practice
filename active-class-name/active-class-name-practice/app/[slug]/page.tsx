export default function DetailPage({ params }: { params: { slug: string } }) {
  const pageName = params.slug !== undefined ? params.slug : "index";
  return <p>Hello, I&#39;m the {pageName} page</p>;
}
