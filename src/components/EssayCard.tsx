import { Link } from "gatsby";
import React, { FC } from "react";
import Card from "./Card";
import TagLink from "./TagLink";

interface EssayCard {
  post: GatsbyTypes.Mdx;
  mini?: boolean;
}

const EssayCard: FC<EssayCard> = ({ post, mini = false }) => {
  if (!post) return null;

  return (
    <Link to={`/${post.frontmatter.slug}`}>
      <Card className="mb-10">
        <article className="h-full font-sans p-4">
          {!mini && (
            <div className="mb-1 text-gray-500 font-sans lining-nums">
              <small className="mr-3">{post.frontmatter.date}</small>
              <small>{post.fields.readingTime.text}</small>
            </div>
          )}
          {post.frontmatter.cover_image && (
            <img
              className="float-right rounded-md w-1/3 overflow-hidden border border-gray-200 m-0"
              src={post.frontmatter.cover_image.childImageSharp.fluid.src}
            />
          )}
          <div className="flex flex-col-reverse justify-between">
            <div className="flex-grow-0 w-full">
              <div className="mb-2">
                <div className="mr-8">
                  <h1
                    className={`mb-2 tracking-tight leading-none ${
                      mini ? "text-3xl" : "text-3xl"
                    }`}
                  >
                    {post.frontmatter.title}
                  </h1>
                  {post.frontmatter.subtitle && (
                    <h2
                      className={`font-sans text-xl my-0 indent-0 leading-tight font-normal ${
                        mini ? "text-lg" : "text-xl"
                      } mt-0`}
                    >
                      {post.frontmatter.subtitle}
                    </h2>
                  )}
                  <div class="max-h-48 overflow-y-hidden relative">
                    {post.excerpt && (
                      <>
                        <p className="font-sans text-base text-gray-600 max-w-full indent-0 mt-4">
                          {post.excerpt}
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {post.frontmatter.tags && (
                <div className={`font-sans ${mini && "text-sm"}`}>
                  {post.frontmatter.tags.map((tag, i) => (
                    <TagLink tag={tag} size={mini ? "sm" : "lg"} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </article>
      </Card>
    </Link>
  );
};

export default EssayCard;
