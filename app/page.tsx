import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Li Chen, a software engineer with a passion for building web applications.
        I specialize in the front-end stack, especially React, and have strong experience with TypeScript, Python, Java, and Spring Boot.
        I'm also passionate about data engineering and data science.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
