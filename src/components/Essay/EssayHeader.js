import { Link } from 'gatsby';
import React from 'react';
import TagLink from '../TagLink';

function EssayHeader({ post, isLinked, mini }) {
  if (isLinked) {
    return (
      <Link to={`/${post.frontmatter.slug}`}>
        <article
          className={`h-full mb-6 border-gray-200 hover:bg-gray-50 transition-colors duration-300 ${
            isLinked ? 'border rounded-lg overflow-hidden p-3' : null
          }`}>
          {!mini && (
            <div className="mb-1 text-gray-500 font-sans lining-nums">
              <small className="mr-3">{post.frontmatter.date}</small>
              <small>{post.fields.readingTime.text}</small>
            </div>
          )}
          <div className="flex">
            <div className="flex-grow">
              <div className="mb-2">
                <div className="flex-grow mr-5">
                  <h1
                    className={`mb-2 tracking-tight mb-0 leading-none ${
                      mini ? 'text-2xl' : 'text-3xl'
                    }`}>
                    {post.frontmatter.title}
                  </h1>
                  {post.frontmatter.subtitle && (
                    <h2
                      className={`font-serif my-0 indent-0 leading-tight text-gray-500 ${
                        mini ? 'text-lg' : 'text-xl'
                      } mt-0`}>
                      {post.frontmatter.subtitle}
                    </h2>
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
            <div className="cover-image">
              {post.frontmatter.cover_image && (
                <img
                  className="rounded-md overflow-hidden border border-gray-200 m-0"
                  src={
                    post.frontmatter.cover_image.childImageSharp.fluid
                      .src
                  }
                />
              )}
            </div>
          </div>
        </article>
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
