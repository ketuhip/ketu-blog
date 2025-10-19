import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-col flex items-left md:justify-left mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        ketu Blog.
      </h1>
      <h2 className="text-left md:text-left text-base mt-5 md:pl-8">
        投稿者の日常ややったことを書くブログ
      </h2>
    </section>
  );
};

export default Intro;
