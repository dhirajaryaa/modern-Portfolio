import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function PowContent() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const api = `https://raw.githubusercontent.com/dhirajaryaa/proof-of-work/main/${slug}.md`;
    fetch(api)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [slug]);

  return (
    <section className="p-6 max-w-3xl mx-auto prose dark:prose-invert
     prose-sm">
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </Markdown>
    </section>
  );
}

export default PowContent;
