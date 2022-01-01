import { Link } from 'gatsby';
import React from 'react';
import Card from '../Card';
import TagLink from '../TagLink';

function EssayHeader({ post, isLinked, mini }) {
  if (isLinked) {
    return (
      <Link to={`/${post.frontmatter.slug}`}>
        <Card>
          <article className="h-full font-sans p-4">
            {!mini && (
              <div className="mb-1 text-gray-500 font-sans lining-nums">
                <small className="mr-3">
                  {post.frontmatter.date}
                </small>
                <small>{post.fields.readingTime.text}</small>
              </div>
            )}
            <div className="flex flex-col-reverse sm:flex-row justify-between">
              <div className="sm:flex-grow-0 w-full sm:w-3/5">
                <div className="mb-2">
                  <div className="mr-8">
                    <h1
                      className={`mb-2 tracking-tight leading-none ${mini ? 'text-3xl' : 'text-3xl'
                        }`}>
                      {post.frontmatter.title}
                    </h1>
                    {post.frontmatter.subtitle && (
                      <h2
                        className={`font-sans text-xl my-0 indent-0 leading-tight font-normal ${mini ? 'text-lg' : 'text-xl'
                          } mt-0`}>
                        {post.frontmatter.subtitle}
                      </h2>
                    )}
                    {post.excerpt && (
                      <div class="max-h-48 overflow-y-hidden relative">
                        <p className="font-sans text-base text-gray-600 max-w-full indent-0 mt-4">
                          {post.excerpt}
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>
                      </div>
                    )}
                  </div>
                </div>
                {post.frontmatter.tags && (
                  <div className={`font-sans ${mini && 'text-sm'}`}>
                    {post.frontmatter.tags.map((tag, i) => (
                      <TagLink tag={tag} size={mini ? 'sm' : 'lg'} />
                    ))}
                  </div>
                )}
              </div>
              <div className="w-full sm:w-1/4 justify-self-end mb-5 sm:mb-0">
                {post.frontmatter.cover_image && (
                  <img
                    className="rounded-md overflow-hidden border border-gray-200 m-0"
                    src={
                      post.frontmatter.cover_image.childImageSharp
                        .fluid.src
                    }
                  />
                )}
              </div>
            </div>
          </article>
        </Card>
      </Link>
    );
  } else {
    return (
      <header className="pb-14 mb-14 border-gray-100 border-b-8">
        <div className="mb-1 text-gray-500 font-sans lining-nums text-center font-medium">
          <small className="mr-3">{post.frontmatter.date}</small>
          <small className="mr-3">
            {post.fields.readingTime.text}
          </small>
          {post.frontmatter.tags &&
            post.frontmatter.tags.map((tag, i) => (
              <TagLink tag={tag} size={'sm'} />
            ))}
        </div>
        <div className="mb-2 text-center justify-center items-center flex flex-col">
          <h1 className="mb-2 font-serif font-light pb-8">
            {post.frontmatter.title}
          </h1>
          <div className="bg-domain-red w-px h-64"></div>
          {post.frontmatter.subtitle && (
            <p className="font-sans text-2xl indent-0 mt-8">
              {post.frontmatter.subtitle}
            </p>
          )}
        </div>
      </header>
    );
  }
}

export default EssayHeader;
