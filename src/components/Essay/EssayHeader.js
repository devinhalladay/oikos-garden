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
      <header className="mb-10 mt-20">
        <div className="mb-1 text-gray-500 font-sans lining-nums">
          <small className=" mr-3">{post.frontmatter.date}</small>
          <small>{post.fields.readingTime.text}</small>
        </div>
        <div className="mb-2">
          <h1 className="mb-2">{post.frontmatter.title}</h1>
          {post.frontmatter.subtitle && (
            <h2 className="font-sans text-2xl indent-0 text-gray-500 mt-0">
              {post.frontmatter.subtitle}
            </h2>
          )}
        </div>
        {post.frontmatter.tags && (
          <div className="font-sans">
            {post.frontmatter.tags.map((tag, i) => (
              <TagLink tag={tag} size={mini ? 'sm' : 'lg'} />
            ))}
          </div>
        )}
      </header>
    );
  }
}

export default EssayHeader;
