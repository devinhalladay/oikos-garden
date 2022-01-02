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
    <Link to={`/essays/${post.frontmatter.slug}`}>
      <Card>
        <article className="h-full font-sans p-4 flex flex-col-reverse sm:flex-row gap-8 items-center justify-between">
          <div className="flex flex-col justify-between flex-grow-0 w-full">
            <h1
              className={`mb-2 tracking-tight leading-none ${
                mini ? "text-2xl" : "text-3xl"
              }`}
            >
              {post.frontmatter.title}
            </h1>
            {!mini && (
              <>
                <div className="text-gray-500 font-sans lining-nums leading-none font-medium">
                  <small className="mr-3">{post.frontmatter.date}</small>
                  <small className="mr-3">{post.fields.readingTime.text}</small>
                  {post.frontmatter.tags.map((tag, i) => (
                    <TagLink tag={tag} size={"sm"} />
                  ))}
                </div>
              </>
            )}
            {post.frontmatter.subtitle && (
              <h2 className="font-sans my-0 indent-0 leading-tight font-normal text-lg mt-4">
                {post.frontmatter.subtitle}
              </h2>
            )}
          </div>
          {post.frontmatter.cover_image && (
            <img
              className="rounded-md w-1/3 shrink-0 self-start overflow-hidden border border-gray-200 m-0"
              src={post.frontmatter.cover_image.childImageSharp.fluid.src}
            />
          )}
        </article>
      </Card>
    </Link>
  );
};

export default EssayCard;
