/* eslint-disable */

declare namespace GatsbyTypes {
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GatsbyResolverContext } from 'gatsby-plugin-typegen/types';
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly flags: Maybe<SiteFlags>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteFlags = {
  readonly FAST_DEV: Maybe<Scalars['Boolean']>;
  readonly DEV_SSR: Maybe<Scalars['Boolean']>;
  readonly PARALLEL_SOURCING: Maybe<Scalars['Boolean']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Author>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly social: Maybe<Social>;
  readonly twitterHandle: Maybe<Scalars['String']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly canonicalUrl: Maybe<Scalars['String']>;
  readonly organization: Maybe<SiteSiteMetadataOrganization>;
};

type SiteSiteMetadataOrganization = {
  readonly name: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type GatsbyImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type MdxFrontmatter = {
  readonly title: Scalars['String'];
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type Mdx = Node & {
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Frontmatter;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  readonly fields: Maybe<MdxFields>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};

type MdxFields = {
  readonly readingTime: Maybe<MdxFieldsReadingTime>;
  readonly source: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
};

type MdxFieldsReadingTime = {
  readonly text: Maybe<Scalars['String']>;
  readonly minutes: Maybe<Scalars['Float']>;
  readonly time: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly fields: Maybe<MarkdownRemarkFields>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly date: Maybe<Scalars['Date']>;
  readonly updated: Maybe<Scalars['Date']>;
  readonly created: Maybe<Scalars['Date']>;
  readonly date_updated: Maybe<Scalars['Date']>;
};


type MarkdownRemarkFrontmatter_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type MarkdownRemarkFrontmatter_updatedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type MarkdownRemarkFrontmatter_createdArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type MarkdownRemarkFrontmatter_date_updatedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownRemarkFields = {
  readonly readingTime: Maybe<MarkdownRemarkFieldsReadingTime>;
};

type MarkdownRemarkFieldsReadingTime = {
  readonly text: Maybe<Scalars['String']>;
  readonly minutes: Maybe<Scalars['Float']>;
  readonly time: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type BrainNote = Node & {
  readonly title: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly rawContent: Maybe<Scalars['String']>;
  readonly content: Maybe<Scalars['String']>;
  readonly noteTemplate: Maybe<Scalars['String']>;
  readonly aliases: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly outboundReferences: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly outboundReferenceNotes: Maybe<ReadonlyArray<Maybe<BrainNote>>>;
  readonly inboundReferences: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly inboundReferenceNotes: Maybe<ReadonlyArray<Maybe<BrainNote>>>;
  readonly inboundReferencePreview: Maybe<ReadonlyArray<Maybe<InboundReferencePreview>>>;
  readonly externalInboundReferences: Maybe<ReadonlyArray<Maybe<ExternalInboundReference>>>;
  readonly externalOutboundReferences: Maybe<ReadonlyArray<Maybe<ExternalOutboundReference>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  readonly absolutePath: Maybe<Scalars['String']>;
  readonly inboundReferencePreviews: Maybe<ReadonlyArray<Maybe<BrainNoteInboundReferencePreviews>>>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type BrainNoteInboundReferencePreviews = {
  readonly source: Maybe<Scalars['String']>;
  readonly previewMarkdown: Maybe<Scalars['String']>;
  readonly previewHtml: Maybe<Scalars['String']>;
};

type ExternalInboundReference = {
  readonly siteName: Scalars['String'];
  readonly sourcePage: Scalars['String'];
  readonly sourceUrl: Scalars['String'];
  readonly previewHtml: Scalars['String'];
};

type ExternalOutboundReference = {
  readonly targetSite: Scalars['String'];
  readonly targetPage: Scalars['String'];
  readonly previewHtml: Scalars['String'];
};

type InboundReferencePreview = {
  readonly source: Scalars['String'];
  readonly previewHtml: Scalars['String'];
};

type Author = {
  readonly name: Maybe<Scalars['String']>;
  readonly summary: Maybe<Scalars['String']>;
};

type Social = {
  readonly twitter: Maybe<Scalars['String']>;
};

type Frontmatter = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly cover_image: Maybe<File>;
  readonly slug: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly featured: Maybe<Scalars['Boolean']>;
  readonly public: Maybe<Scalars['Boolean']>;
  readonly tag: Maybe<Scalars['String']>;
  readonly filters: Maybe<Scalars['String']>;
  readonly categories: Maybe<Scalars['String']>;
  readonly published: Maybe<Scalars['Boolean']>;
  readonly updated: Maybe<Scalars['Date']>;
  readonly external_url: Maybe<Scalars['String']>;
  readonly epistemic_status: Maybe<Scalars['String']>;
  readonly layout: Maybe<Scalars['String']>;
  readonly created: Maybe<Scalars['Date']>;
  readonly date_updated: Maybe<Scalars['Date']>;
  readonly social_image: Maybe<Scalars['String']>;
  readonly abstract: Maybe<Scalars['String']>;
  readonly draft: Maybe<Scalars['Boolean']>;
};


type Frontmatter_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Frontmatter_updatedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Frontmatter_createdArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Frontmatter_date_updatedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly brainNote: Maybe<BrainNote>;
  readonly allBrainNote: BrainNoteConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  flags: Maybe<SiteFlagsFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<FrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  fields: Maybe<MdxFieldsFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_brainNoteArgs = {
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  rawContent: Maybe<StringQueryOperatorInput>;
  content: Maybe<StringQueryOperatorInput>;
  noteTemplate: Maybe<StringQueryOperatorInput>;
  aliases: Maybe<StringQueryOperatorInput>;
  outboundReferences: Maybe<StringQueryOperatorInput>;
  outboundReferenceNotes: Maybe<BrainNoteFilterListInput>;
  inboundReferences: Maybe<StringQueryOperatorInput>;
  inboundReferenceNotes: Maybe<BrainNoteFilterListInput>;
  inboundReferencePreview: Maybe<InboundReferencePreviewFilterListInput>;
  externalInboundReferences: Maybe<ExternalInboundReferenceFilterListInput>;
  externalOutboundReferences: Maybe<ExternalOutboundReferenceFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  inboundReferencePreviews: Maybe<BrainNoteInboundReferencePreviewsFilterListInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allBrainNoteArgs = {
  filter: Maybe<BrainNoteFilterInput>;
  sort: Maybe<BrainNoteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type MdxFilterListInput = {
  readonly elemMatch: Maybe<MdxFilterInput>;
};

type MdxFilterInput = {
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<FrontmatterFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly fields: Maybe<MdxFieldsFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly cover_image: Maybe<FileFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly featured: Maybe<BooleanQueryOperatorInput>;
  readonly public: Maybe<BooleanQueryOperatorInput>;
  readonly tag: Maybe<StringQueryOperatorInput>;
  readonly filters: Maybe<StringQueryOperatorInput>;
  readonly categories: Maybe<StringQueryOperatorInput>;
  readonly published: Maybe<BooleanQueryOperatorInput>;
  readonly updated: Maybe<DateQueryOperatorInput>;
  readonly external_url: Maybe<StringQueryOperatorInput>;
  readonly epistemic_status: Maybe<StringQueryOperatorInput>;
  readonly layout: Maybe<StringQueryOperatorInput>;
  readonly created: Maybe<DateQueryOperatorInput>;
  readonly date_updated: Maybe<DateQueryOperatorInput>;
  readonly social_image: Maybe<StringQueryOperatorInput>;
  readonly abstract: Maybe<StringQueryOperatorInput>;
  readonly draft: Maybe<BooleanQueryOperatorInput>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MdxFieldsFilterInput = {
  readonly readingTime: Maybe<MdxFieldsReadingTimeFilterInput>;
  readonly source: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type MdxFieldsReadingTimeFilterInput = {
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly minutes: Maybe<FloatQueryOperatorInput>;
  readonly time: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.frontmatter.description'
  | 'childrenMdx.frontmatter.date'
  | 'childrenMdx.frontmatter.cover_image.sourceInstanceName'
  | 'childrenMdx.frontmatter.cover_image.absolutePath'
  | 'childrenMdx.frontmatter.cover_image.relativePath'
  | 'childrenMdx.frontmatter.cover_image.extension'
  | 'childrenMdx.frontmatter.cover_image.size'
  | 'childrenMdx.frontmatter.cover_image.prettySize'
  | 'childrenMdx.frontmatter.cover_image.modifiedTime'
  | 'childrenMdx.frontmatter.cover_image.accessTime'
  | 'childrenMdx.frontmatter.cover_image.changeTime'
  | 'childrenMdx.frontmatter.cover_image.birthTime'
  | 'childrenMdx.frontmatter.cover_image.root'
  | 'childrenMdx.frontmatter.cover_image.dir'
  | 'childrenMdx.frontmatter.cover_image.base'
  | 'childrenMdx.frontmatter.cover_image.ext'
  | 'childrenMdx.frontmatter.cover_image.name'
  | 'childrenMdx.frontmatter.cover_image.relativeDirectory'
  | 'childrenMdx.frontmatter.cover_image.dev'
  | 'childrenMdx.frontmatter.cover_image.mode'
  | 'childrenMdx.frontmatter.cover_image.nlink'
  | 'childrenMdx.frontmatter.cover_image.uid'
  | 'childrenMdx.frontmatter.cover_image.gid'
  | 'childrenMdx.frontmatter.cover_image.rdev'
  | 'childrenMdx.frontmatter.cover_image.ino'
  | 'childrenMdx.frontmatter.cover_image.atimeMs'
  | 'childrenMdx.frontmatter.cover_image.mtimeMs'
  | 'childrenMdx.frontmatter.cover_image.ctimeMs'
  | 'childrenMdx.frontmatter.cover_image.atime'
  | 'childrenMdx.frontmatter.cover_image.mtime'
  | 'childrenMdx.frontmatter.cover_image.ctime'
  | 'childrenMdx.frontmatter.cover_image.birthtime'
  | 'childrenMdx.frontmatter.cover_image.birthtimeMs'
  | 'childrenMdx.frontmatter.cover_image.blksize'
  | 'childrenMdx.frontmatter.cover_image.blocks'
  | 'childrenMdx.frontmatter.cover_image.publicURL'
  | 'childrenMdx.frontmatter.cover_image.childrenImageSharp'
  | 'childrenMdx.frontmatter.cover_image.childrenMdx'
  | 'childrenMdx.frontmatter.cover_image.id'
  | 'childrenMdx.frontmatter.cover_image.children'
  | 'childrenMdx.frontmatter.slug'
  | 'childrenMdx.frontmatter.tags'
  | 'childrenMdx.frontmatter.subtitle'
  | 'childrenMdx.frontmatter.featured'
  | 'childrenMdx.frontmatter.public'
  | 'childrenMdx.frontmatter.tag'
  | 'childrenMdx.frontmatter.filters'
  | 'childrenMdx.frontmatter.categories'
  | 'childrenMdx.frontmatter.published'
  | 'childrenMdx.frontmatter.updated'
  | 'childrenMdx.frontmatter.external_url'
  | 'childrenMdx.frontmatter.epistemic_status'
  | 'childrenMdx.frontmatter.layout'
  | 'childrenMdx.frontmatter.created'
  | 'childrenMdx.frontmatter.date_updated'
  | 'childrenMdx.frontmatter.social_image'
  | 'childrenMdx.frontmatter.abstract'
  | 'childrenMdx.frontmatter.draft'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.fields.readingTime.text'
  | 'childrenMdx.fields.readingTime.minutes'
  | 'childrenMdx.fields.readingTime.time'
  | 'childrenMdx.fields.readingTime.words'
  | 'childrenMdx.fields.source'
  | 'childrenMdx.fields.slug'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.frontmatter.description'
  | 'childMdx.frontmatter.date'
  | 'childMdx.frontmatter.cover_image.sourceInstanceName'
  | 'childMdx.frontmatter.cover_image.absolutePath'
  | 'childMdx.frontmatter.cover_image.relativePath'
  | 'childMdx.frontmatter.cover_image.extension'
  | 'childMdx.frontmatter.cover_image.size'
  | 'childMdx.frontmatter.cover_image.prettySize'
  | 'childMdx.frontmatter.cover_image.modifiedTime'
  | 'childMdx.frontmatter.cover_image.accessTime'
  | 'childMdx.frontmatter.cover_image.changeTime'
  | 'childMdx.frontmatter.cover_image.birthTime'
  | 'childMdx.frontmatter.cover_image.root'
  | 'childMdx.frontmatter.cover_image.dir'
  | 'childMdx.frontmatter.cover_image.base'
  | 'childMdx.frontmatter.cover_image.ext'
  | 'childMdx.frontmatter.cover_image.name'
  | 'childMdx.frontmatter.cover_image.relativeDirectory'
  | 'childMdx.frontmatter.cover_image.dev'
  | 'childMdx.frontmatter.cover_image.mode'
  | 'childMdx.frontmatter.cover_image.nlink'
  | 'childMdx.frontmatter.cover_image.uid'
  | 'childMdx.frontmatter.cover_image.gid'
  | 'childMdx.frontmatter.cover_image.rdev'
  | 'childMdx.frontmatter.cover_image.ino'
  | 'childMdx.frontmatter.cover_image.atimeMs'
  | 'childMdx.frontmatter.cover_image.mtimeMs'
  | 'childMdx.frontmatter.cover_image.ctimeMs'
  | 'childMdx.frontmatter.cover_image.atime'
  | 'childMdx.frontmatter.cover_image.mtime'
  | 'childMdx.frontmatter.cover_image.ctime'
  | 'childMdx.frontmatter.cover_image.birthtime'
  | 'childMdx.frontmatter.cover_image.birthtimeMs'
  | 'childMdx.frontmatter.cover_image.blksize'
  | 'childMdx.frontmatter.cover_image.blocks'
  | 'childMdx.frontmatter.cover_image.publicURL'
  | 'childMdx.frontmatter.cover_image.childrenImageSharp'
  | 'childMdx.frontmatter.cover_image.childrenMdx'
  | 'childMdx.frontmatter.cover_image.id'
  | 'childMdx.frontmatter.cover_image.children'
  | 'childMdx.frontmatter.slug'
  | 'childMdx.frontmatter.tags'
  | 'childMdx.frontmatter.subtitle'
  | 'childMdx.frontmatter.featured'
  | 'childMdx.frontmatter.public'
  | 'childMdx.frontmatter.tag'
  | 'childMdx.frontmatter.filters'
  | 'childMdx.frontmatter.categories'
  | 'childMdx.frontmatter.published'
  | 'childMdx.frontmatter.updated'
  | 'childMdx.frontmatter.external_url'
  | 'childMdx.frontmatter.epistemic_status'
  | 'childMdx.frontmatter.layout'
  | 'childMdx.frontmatter.created'
  | 'childMdx.frontmatter.date_updated'
  | 'childMdx.frontmatter.social_image'
  | 'childMdx.frontmatter.abstract'
  | 'childMdx.frontmatter.draft'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.fields.readingTime.text'
  | 'childMdx.fields.readingTime.minutes'
  | 'childMdx.fields.readingTime.time'
  | 'childMdx.fields.readingTime.words'
  | 'childMdx.fields.source'
  | 'childMdx.fields.slug'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<AuthorFilterInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly social: Maybe<SocialFilterInput>;
  readonly twitterHandle: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly canonicalUrl: Maybe<StringQueryOperatorInput>;
  readonly organization: Maybe<SiteSiteMetadataOrganizationFilterInput>;
};

type AuthorFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly summary: Maybe<StringQueryOperatorInput>;
};

type SocialFilterInput = {
  readonly twitter: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataOrganizationFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type SiteFlagsFilterInput = {
  readonly FAST_DEV: Maybe<BooleanQueryOperatorInput>;
  readonly DEV_SSR: Maybe<BooleanQueryOperatorInput>;
  readonly PARALLEL_SOURCING: Maybe<BooleanQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author.name'
  | 'siteMetadata.author.summary'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.social.twitter'
  | 'siteMetadata.twitterHandle'
  | 'siteMetadata.keywords'
  | 'siteMetadata.canonicalUrl'
  | 'siteMetadata.organization.name'
  | 'siteMetadata.organization.url'
  | 'port'
  | 'host'
  | 'flags.FAST_DEV'
  | 'flags.DEV_SSR'
  | 'flags.PARALLEL_SOURCING'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<SiteFlagsFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly jsxRuntime: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter.title'
  | 'frontmatter.description'
  | 'frontmatter.date'
  | 'frontmatter.cover_image.sourceInstanceName'
  | 'frontmatter.cover_image.absolutePath'
  | 'frontmatter.cover_image.relativePath'
  | 'frontmatter.cover_image.extension'
  | 'frontmatter.cover_image.size'
  | 'frontmatter.cover_image.prettySize'
  | 'frontmatter.cover_image.modifiedTime'
  | 'frontmatter.cover_image.accessTime'
  | 'frontmatter.cover_image.changeTime'
  | 'frontmatter.cover_image.birthTime'
  | 'frontmatter.cover_image.root'
  | 'frontmatter.cover_image.dir'
  | 'frontmatter.cover_image.base'
  | 'frontmatter.cover_image.ext'
  | 'frontmatter.cover_image.name'
  | 'frontmatter.cover_image.relativeDirectory'
  | 'frontmatter.cover_image.dev'
  | 'frontmatter.cover_image.mode'
  | 'frontmatter.cover_image.nlink'
  | 'frontmatter.cover_image.uid'
  | 'frontmatter.cover_image.gid'
  | 'frontmatter.cover_image.rdev'
  | 'frontmatter.cover_image.ino'
  | 'frontmatter.cover_image.atimeMs'
  | 'frontmatter.cover_image.mtimeMs'
  | 'frontmatter.cover_image.ctimeMs'
  | 'frontmatter.cover_image.atime'
  | 'frontmatter.cover_image.mtime'
  | 'frontmatter.cover_image.ctime'
  | 'frontmatter.cover_image.birthtime'
  | 'frontmatter.cover_image.birthtimeMs'
  | 'frontmatter.cover_image.blksize'
  | 'frontmatter.cover_image.blocks'
  | 'frontmatter.cover_image.publicURL'
  | 'frontmatter.cover_image.childrenImageSharp'
  | 'frontmatter.cover_image.childrenImageSharp.gatsbyImageData'
  | 'frontmatter.cover_image.childrenImageSharp.id'
  | 'frontmatter.cover_image.childrenImageSharp.children'
  | 'frontmatter.cover_image.childImageSharp.gatsbyImageData'
  | 'frontmatter.cover_image.childImageSharp.id'
  | 'frontmatter.cover_image.childImageSharp.children'
  | 'frontmatter.cover_image.childrenMdx'
  | 'frontmatter.cover_image.childrenMdx.rawBody'
  | 'frontmatter.cover_image.childrenMdx.fileAbsolutePath'
  | 'frontmatter.cover_image.childrenMdx.slug'
  | 'frontmatter.cover_image.childrenMdx.body'
  | 'frontmatter.cover_image.childrenMdx.excerpt'
  | 'frontmatter.cover_image.childrenMdx.headings'
  | 'frontmatter.cover_image.childrenMdx.html'
  | 'frontmatter.cover_image.childrenMdx.mdxAST'
  | 'frontmatter.cover_image.childrenMdx.tableOfContents'
  | 'frontmatter.cover_image.childrenMdx.timeToRead'
  | 'frontmatter.cover_image.childrenMdx.id'
  | 'frontmatter.cover_image.childrenMdx.children'
  | 'frontmatter.cover_image.childMdx.rawBody'
  | 'frontmatter.cover_image.childMdx.fileAbsolutePath'
  | 'frontmatter.cover_image.childMdx.slug'
  | 'frontmatter.cover_image.childMdx.body'
  | 'frontmatter.cover_image.childMdx.excerpt'
  | 'frontmatter.cover_image.childMdx.headings'
  | 'frontmatter.cover_image.childMdx.html'
  | 'frontmatter.cover_image.childMdx.mdxAST'
  | 'frontmatter.cover_image.childMdx.tableOfContents'
  | 'frontmatter.cover_image.childMdx.timeToRead'
  | 'frontmatter.cover_image.childMdx.id'
  | 'frontmatter.cover_image.childMdx.children'
  | 'frontmatter.cover_image.id'
  | 'frontmatter.cover_image.parent.id'
  | 'frontmatter.cover_image.parent.children'
  | 'frontmatter.cover_image.children'
  | 'frontmatter.cover_image.children.id'
  | 'frontmatter.cover_image.children.children'
  | 'frontmatter.cover_image.internal.content'
  | 'frontmatter.cover_image.internal.contentDigest'
  | 'frontmatter.cover_image.internal.description'
  | 'frontmatter.cover_image.internal.fieldOwners'
  | 'frontmatter.cover_image.internal.ignoreType'
  | 'frontmatter.cover_image.internal.mediaType'
  | 'frontmatter.cover_image.internal.owner'
  | 'frontmatter.cover_image.internal.type'
  | 'frontmatter.slug'
  | 'frontmatter.tags'
  | 'frontmatter.subtitle'
  | 'frontmatter.featured'
  | 'frontmatter.public'
  | 'frontmatter.tag'
  | 'frontmatter.filters'
  | 'frontmatter.categories'
  | 'frontmatter.published'
  | 'frontmatter.updated'
  | 'frontmatter.external_url'
  | 'frontmatter.epistemic_status'
  | 'frontmatter.layout'
  | 'frontmatter.created'
  | 'frontmatter.date_updated'
  | 'frontmatter.social_image'
  | 'frontmatter.abstract'
  | 'frontmatter.draft'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings.value'
  | 'headings.depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'fields.readingTime.text'
  | 'fields.readingTime.minutes'
  | 'fields.readingTime.time'
  | 'fields.readingTime.words'
  | 'fields.source'
  | 'fields.slug'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MdxGroupConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly updated: Maybe<DateQueryOperatorInput>;
  readonly created: Maybe<DateQueryOperatorInput>;
  readonly date_updated: Maybe<DateQueryOperatorInput>;
};

type MarkdownRemarkFieldsFilterInput = {
  readonly readingTime: Maybe<MarkdownRemarkFieldsReadingTimeFilterInput>;
};

type MarkdownRemarkFieldsReadingTimeFilterInput = {
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly minutes: Maybe<FloatQueryOperatorInput>;
  readonly time: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'frontmatter.tags'
  | 'frontmatter.date'
  | 'frontmatter.updated'
  | 'frontmatter.created'
  | 'frontmatter.date_updated'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fields.readingTime.text'
  | 'fields.readingTime.minutes'
  | 'fields.readingTime.time'
  | 'fields.readingTime.words'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type BrainNoteFilterListInput = {
  readonly elemMatch: Maybe<BrainNoteFilterInput>;
};

type BrainNoteFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly rawContent: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly noteTemplate: Maybe<StringQueryOperatorInput>;
  readonly aliases: Maybe<StringQueryOperatorInput>;
  readonly outboundReferences: Maybe<StringQueryOperatorInput>;
  readonly outboundReferenceNotes: Maybe<BrainNoteFilterListInput>;
  readonly inboundReferences: Maybe<StringQueryOperatorInput>;
  readonly inboundReferenceNotes: Maybe<BrainNoteFilterListInput>;
  readonly inboundReferencePreview: Maybe<InboundReferencePreviewFilterListInput>;
  readonly externalInboundReferences: Maybe<ExternalInboundReferenceFilterListInput>;
  readonly externalOutboundReferences: Maybe<ExternalOutboundReferenceFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly inboundReferencePreviews: Maybe<BrainNoteInboundReferencePreviewsFilterListInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type InboundReferencePreviewFilterListInput = {
  readonly elemMatch: Maybe<InboundReferencePreviewFilterInput>;
};

type InboundReferencePreviewFilterInput = {
  readonly source: Maybe<StringQueryOperatorInput>;
  readonly previewHtml: Maybe<StringQueryOperatorInput>;
};

type ExternalInboundReferenceFilterListInput = {
  readonly elemMatch: Maybe<ExternalInboundReferenceFilterInput>;
};

type ExternalInboundReferenceFilterInput = {
  readonly siteName: Maybe<StringQueryOperatorInput>;
  readonly sourcePage: Maybe<StringQueryOperatorInput>;
  readonly sourceUrl: Maybe<StringQueryOperatorInput>;
  readonly previewHtml: Maybe<StringQueryOperatorInput>;
};

type ExternalOutboundReferenceFilterListInput = {
  readonly elemMatch: Maybe<ExternalOutboundReferenceFilterInput>;
};

type ExternalOutboundReferenceFilterInput = {
  readonly targetSite: Maybe<StringQueryOperatorInput>;
  readonly targetPage: Maybe<StringQueryOperatorInput>;
  readonly previewHtml: Maybe<StringQueryOperatorInput>;
};

type BrainNoteInboundReferencePreviewsFilterListInput = {
  readonly elemMatch: Maybe<BrainNoteInboundReferencePreviewsFilterInput>;
};

type BrainNoteInboundReferencePreviewsFilterInput = {
  readonly source: Maybe<StringQueryOperatorInput>;
  readonly previewMarkdown: Maybe<StringQueryOperatorInput>;
  readonly previewHtml: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type BrainNoteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<BrainNoteEdge>;
  readonly nodes: ReadonlyArray<BrainNote>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<BrainNoteGroupConnection>;
};


type BrainNoteConnection_distinctArgs = {
  field: BrainNoteFieldsEnum;
};


type BrainNoteConnection_maxArgs = {
  field: BrainNoteFieldsEnum;
};


type BrainNoteConnection_minArgs = {
  field: BrainNoteFieldsEnum;
};


type BrainNoteConnection_sumArgs = {
  field: BrainNoteFieldsEnum;
};


type BrainNoteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: BrainNoteFieldsEnum;
};

type BrainNoteEdge = {
  readonly next: Maybe<BrainNote>;
  readonly node: BrainNote;
  readonly previous: Maybe<BrainNote>;
};

type BrainNoteFieldsEnum =
  | 'title'
  | 'slug'
  | 'rawContent'
  | 'content'
  | 'noteTemplate'
  | 'aliases'
  | 'outboundReferences'
  | 'outboundReferenceNotes'
  | 'outboundReferenceNotes.title'
  | 'outboundReferenceNotes.slug'
  | 'outboundReferenceNotes.rawContent'
  | 'outboundReferenceNotes.content'
  | 'outboundReferenceNotes.noteTemplate'
  | 'outboundReferenceNotes.aliases'
  | 'outboundReferenceNotes.outboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes'
  | 'outboundReferenceNotes.outboundReferenceNotes.title'
  | 'outboundReferenceNotes.outboundReferenceNotes.slug'
  | 'outboundReferenceNotes.outboundReferenceNotes.rawContent'
  | 'outboundReferenceNotes.outboundReferenceNotes.content'
  | 'outboundReferenceNotes.outboundReferenceNotes.noteTemplate'
  | 'outboundReferenceNotes.outboundReferenceNotes.aliases'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.title'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.slug'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.rawContent'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.content'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.noteTemplate'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.aliases'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.outboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.absolutePath'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.childrenMdx'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.id'
  | 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.children'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.title'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.slug'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.rawContent'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.content'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.noteTemplate'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.aliases'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.outboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.absolutePath'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.childrenMdx'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.id'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.children'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview.source'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview.previewHtml'
  | 'outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.siteName'
  | 'outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.sourcePage'
  | 'outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.sourceUrl'
  | 'outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.previewHtml'
  | 'outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences'
  | 'outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.targetSite'
  | 'outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.targetPage'
  | 'outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.previewHtml'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.rawBody'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.fileAbsolutePath'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.slug'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.body'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.excerpt'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.headings'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.html'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.mdxAST'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.tableOfContents'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.timeToRead'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.id'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMdx.children'
  | 'outboundReferenceNotes.outboundReferenceNotes.absolutePath'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.source'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.previewMarkdown'
  | 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.previewHtml'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.rawBody'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.fileAbsolutePath'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.slug'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.body'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.excerpt'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.headings'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.html'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.mdxAST'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.tableOfContents'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.timeToRead'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.id'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.children'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.id'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.excerpt'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.html'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.htmlAst'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.excerptAst'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.headings'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.timeToRead'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.tableOfContents'
  | 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.children'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.id'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.excerpt'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.rawMarkdownBody'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.html'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.htmlAst'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.excerptAst'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.headings'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.timeToRead'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.tableOfContents'
  | 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.children'
  | 'outboundReferenceNotes.outboundReferenceNotes.id'
  | 'outboundReferenceNotes.outboundReferenceNotes.parent.id'
  | 'outboundReferenceNotes.outboundReferenceNotes.parent.children'
  | 'outboundReferenceNotes.outboundReferenceNotes.children'
  | 'outboundReferenceNotes.outboundReferenceNotes.children.id'
  | 'outboundReferenceNotes.outboundReferenceNotes.children.children'
  | 'outboundReferenceNotes.outboundReferenceNotes.internal.content'
  | 'outboundReferenceNotes.outboundReferenceNotes.internal.contentDigest'
  | 'outboundReferenceNotes.outboundReferenceNotes.internal.description'
  | 'outboundReferenceNotes.outboundReferenceNotes.internal.fieldOwners'
  | 'outboundReferenceNotes.outboundReferenceNotes.internal.ignoreType'
  | 'outboundReferenceNotes.outboundReferenceNotes.internal.mediaType'
  | 'outboundReferenceNotes.outboundReferenceNotes.internal.owner'
  | 'outboundReferenceNotes.outboundReferenceNotes.internal.type'
  | 'outboundReferenceNotes.inboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes'
  | 'outboundReferenceNotes.inboundReferenceNotes.title'
  | 'outboundReferenceNotes.inboundReferenceNotes.slug'
  | 'outboundReferenceNotes.inboundReferenceNotes.rawContent'
  | 'outboundReferenceNotes.inboundReferenceNotes.content'
  | 'outboundReferenceNotes.inboundReferenceNotes.noteTemplate'
  | 'outboundReferenceNotes.inboundReferenceNotes.aliases'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.title'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.slug'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.rawContent'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.content'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.noteTemplate'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.aliases'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.outboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.absolutePath'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.childrenMdx'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.id'
  | 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.children'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.title'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.slug'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.rawContent'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.content'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.noteTemplate'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.aliases'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.outboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.absolutePath'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.childrenMdx'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.id'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.children'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview.source'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview.previewHtml'
  | 'outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.siteName'
  | 'outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.sourcePage'
  | 'outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.sourceUrl'
  | 'outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.previewHtml'
  | 'outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences'
  | 'outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.targetSite'
  | 'outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.targetPage'
  | 'outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.previewHtml'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.rawBody'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.fileAbsolutePath'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.slug'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.body'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.excerpt'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.headings'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.html'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.mdxAST'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.tableOfContents'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.timeToRead'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.id'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMdx.children'
  | 'outboundReferenceNotes.inboundReferenceNotes.absolutePath'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.source'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.previewMarkdown'
  | 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.previewHtml'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.rawBody'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.fileAbsolutePath'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.slug'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.body'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.excerpt'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.headings'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.html'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.mdxAST'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.tableOfContents'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.timeToRead'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.id'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.children'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.id'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.excerpt'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.html'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.htmlAst'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.excerptAst'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.headings'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.timeToRead'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.tableOfContents'
  | 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.children'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.id'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.excerpt'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.rawMarkdownBody'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.html'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.htmlAst'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.excerptAst'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.headings'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.timeToRead'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.tableOfContents'
  | 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.children'
  | 'outboundReferenceNotes.inboundReferenceNotes.id'
  | 'outboundReferenceNotes.inboundReferenceNotes.parent.id'
  | 'outboundReferenceNotes.inboundReferenceNotes.parent.children'
  | 'outboundReferenceNotes.inboundReferenceNotes.children'
  | 'outboundReferenceNotes.inboundReferenceNotes.children.id'
  | 'outboundReferenceNotes.inboundReferenceNotes.children.children'
  | 'outboundReferenceNotes.inboundReferenceNotes.internal.content'
  | 'outboundReferenceNotes.inboundReferenceNotes.internal.contentDigest'
  | 'outboundReferenceNotes.inboundReferenceNotes.internal.description'
  | 'outboundReferenceNotes.inboundReferenceNotes.internal.fieldOwners'
  | 'outboundReferenceNotes.inboundReferenceNotes.internal.ignoreType'
  | 'outboundReferenceNotes.inboundReferenceNotes.internal.mediaType'
  | 'outboundReferenceNotes.inboundReferenceNotes.internal.owner'
  | 'outboundReferenceNotes.inboundReferenceNotes.internal.type'
  | 'outboundReferenceNotes.inboundReferencePreview'
  | 'outboundReferenceNotes.inboundReferencePreview.source'
  | 'outboundReferenceNotes.inboundReferencePreview.previewHtml'
  | 'outboundReferenceNotes.externalInboundReferences'
  | 'outboundReferenceNotes.externalInboundReferences.siteName'
  | 'outboundReferenceNotes.externalInboundReferences.sourcePage'
  | 'outboundReferenceNotes.externalInboundReferences.sourceUrl'
  | 'outboundReferenceNotes.externalInboundReferences.previewHtml'
  | 'outboundReferenceNotes.externalOutboundReferences'
  | 'outboundReferenceNotes.externalOutboundReferences.targetSite'
  | 'outboundReferenceNotes.externalOutboundReferences.targetPage'
  | 'outboundReferenceNotes.externalOutboundReferences.previewHtml'
  | 'outboundReferenceNotes.childMdx.rawBody'
  | 'outboundReferenceNotes.childMdx.fileAbsolutePath'
  | 'outboundReferenceNotes.childMdx.frontmatter.title'
  | 'outboundReferenceNotes.childMdx.frontmatter.description'
  | 'outboundReferenceNotes.childMdx.frontmatter.date'
  | 'outboundReferenceNotes.childMdx.frontmatter.slug'
  | 'outboundReferenceNotes.childMdx.frontmatter.tags'
  | 'outboundReferenceNotes.childMdx.frontmatter.subtitle'
  | 'outboundReferenceNotes.childMdx.frontmatter.featured'
  | 'outboundReferenceNotes.childMdx.frontmatter.public'
  | 'outboundReferenceNotes.childMdx.frontmatter.tag'
  | 'outboundReferenceNotes.childMdx.frontmatter.filters'
  | 'outboundReferenceNotes.childMdx.frontmatter.categories'
  | 'outboundReferenceNotes.childMdx.frontmatter.published'
  | 'outboundReferenceNotes.childMdx.frontmatter.updated'
  | 'outboundReferenceNotes.childMdx.frontmatter.external_url'
  | 'outboundReferenceNotes.childMdx.frontmatter.epistemic_status'
  | 'outboundReferenceNotes.childMdx.frontmatter.layout'
  | 'outboundReferenceNotes.childMdx.frontmatter.created'
  | 'outboundReferenceNotes.childMdx.frontmatter.date_updated'
  | 'outboundReferenceNotes.childMdx.frontmatter.social_image'
  | 'outboundReferenceNotes.childMdx.frontmatter.abstract'
  | 'outboundReferenceNotes.childMdx.frontmatter.draft'
  | 'outboundReferenceNotes.childMdx.slug'
  | 'outboundReferenceNotes.childMdx.body'
  | 'outboundReferenceNotes.childMdx.excerpt'
  | 'outboundReferenceNotes.childMdx.headings'
  | 'outboundReferenceNotes.childMdx.headings.value'
  | 'outboundReferenceNotes.childMdx.headings.depth'
  | 'outboundReferenceNotes.childMdx.html'
  | 'outboundReferenceNotes.childMdx.mdxAST'
  | 'outboundReferenceNotes.childMdx.tableOfContents'
  | 'outboundReferenceNotes.childMdx.timeToRead'
  | 'outboundReferenceNotes.childMdx.wordCount.paragraphs'
  | 'outboundReferenceNotes.childMdx.wordCount.sentences'
  | 'outboundReferenceNotes.childMdx.wordCount.words'
  | 'outboundReferenceNotes.childMdx.fields.source'
  | 'outboundReferenceNotes.childMdx.fields.slug'
  | 'outboundReferenceNotes.childMdx.id'
  | 'outboundReferenceNotes.childMdx.parent.id'
  | 'outboundReferenceNotes.childMdx.parent.children'
  | 'outboundReferenceNotes.childMdx.children'
  | 'outboundReferenceNotes.childMdx.children.id'
  | 'outboundReferenceNotes.childMdx.children.children'
  | 'outboundReferenceNotes.childMdx.internal.content'
  | 'outboundReferenceNotes.childMdx.internal.contentDigest'
  | 'outboundReferenceNotes.childMdx.internal.description'
  | 'outboundReferenceNotes.childMdx.internal.fieldOwners'
  | 'outboundReferenceNotes.childMdx.internal.ignoreType'
  | 'outboundReferenceNotes.childMdx.internal.mediaType'
  | 'outboundReferenceNotes.childMdx.internal.owner'
  | 'outboundReferenceNotes.childMdx.internal.type'
  | 'outboundReferenceNotes.absolutePath'
  | 'outboundReferenceNotes.inboundReferencePreviews'
  | 'outboundReferenceNotes.inboundReferencePreviews.source'
  | 'outboundReferenceNotes.inboundReferencePreviews.previewMarkdown'
  | 'outboundReferenceNotes.inboundReferencePreviews.previewHtml'
  | 'outboundReferenceNotes.childrenMdx'
  | 'outboundReferenceNotes.childrenMdx.rawBody'
  | 'outboundReferenceNotes.childrenMdx.fileAbsolutePath'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.title'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.description'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.date'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.slug'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.tags'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.subtitle'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.featured'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.public'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.tag'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.filters'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.categories'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.published'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.updated'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.external_url'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.epistemic_status'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.layout'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.created'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.date_updated'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.social_image'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.abstract'
  | 'outboundReferenceNotes.childrenMdx.frontmatter.draft'
  | 'outboundReferenceNotes.childrenMdx.slug'
  | 'outboundReferenceNotes.childrenMdx.body'
  | 'outboundReferenceNotes.childrenMdx.excerpt'
  | 'outboundReferenceNotes.childrenMdx.headings'
  | 'outboundReferenceNotes.childrenMdx.headings.value'
  | 'outboundReferenceNotes.childrenMdx.headings.depth'
  | 'outboundReferenceNotes.childrenMdx.html'
  | 'outboundReferenceNotes.childrenMdx.mdxAST'
  | 'outboundReferenceNotes.childrenMdx.tableOfContents'
  | 'outboundReferenceNotes.childrenMdx.timeToRead'
  | 'outboundReferenceNotes.childrenMdx.wordCount.paragraphs'
  | 'outboundReferenceNotes.childrenMdx.wordCount.sentences'
  | 'outboundReferenceNotes.childrenMdx.wordCount.words'
  | 'outboundReferenceNotes.childrenMdx.fields.source'
  | 'outboundReferenceNotes.childrenMdx.fields.slug'
  | 'outboundReferenceNotes.childrenMdx.id'
  | 'outboundReferenceNotes.childrenMdx.parent.id'
  | 'outboundReferenceNotes.childrenMdx.parent.children'
  | 'outboundReferenceNotes.childrenMdx.children'
  | 'outboundReferenceNotes.childrenMdx.children.id'
  | 'outboundReferenceNotes.childrenMdx.children.children'
  | 'outboundReferenceNotes.childrenMdx.internal.content'
  | 'outboundReferenceNotes.childrenMdx.internal.contentDigest'
  | 'outboundReferenceNotes.childrenMdx.internal.description'
  | 'outboundReferenceNotes.childrenMdx.internal.fieldOwners'
  | 'outboundReferenceNotes.childrenMdx.internal.ignoreType'
  | 'outboundReferenceNotes.childrenMdx.internal.mediaType'
  | 'outboundReferenceNotes.childrenMdx.internal.owner'
  | 'outboundReferenceNotes.childrenMdx.internal.type'
  | 'outboundReferenceNotes.childrenMarkdownRemark'
  | 'outboundReferenceNotes.childrenMarkdownRemark.id'
  | 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.title'
  | 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.tags'
  | 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.date'
  | 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.updated'
  | 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.created'
  | 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.date_updated'
  | 'outboundReferenceNotes.childrenMarkdownRemark.excerpt'
  | 'outboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody'
  | 'outboundReferenceNotes.childrenMarkdownRemark.html'
  | 'outboundReferenceNotes.childrenMarkdownRemark.htmlAst'
  | 'outboundReferenceNotes.childrenMarkdownRemark.excerptAst'
  | 'outboundReferenceNotes.childrenMarkdownRemark.headings'
  | 'outboundReferenceNotes.childrenMarkdownRemark.headings.id'
  | 'outboundReferenceNotes.childrenMarkdownRemark.headings.value'
  | 'outboundReferenceNotes.childrenMarkdownRemark.headings.depth'
  | 'outboundReferenceNotes.childrenMarkdownRemark.timeToRead'
  | 'outboundReferenceNotes.childrenMarkdownRemark.tableOfContents'
  | 'outboundReferenceNotes.childrenMarkdownRemark.wordCount.paragraphs'
  | 'outboundReferenceNotes.childrenMarkdownRemark.wordCount.sentences'
  | 'outboundReferenceNotes.childrenMarkdownRemark.wordCount.words'
  | 'outboundReferenceNotes.childrenMarkdownRemark.parent.id'
  | 'outboundReferenceNotes.childrenMarkdownRemark.parent.children'
  | 'outboundReferenceNotes.childrenMarkdownRemark.children'
  | 'outboundReferenceNotes.childrenMarkdownRemark.children.id'
  | 'outboundReferenceNotes.childrenMarkdownRemark.children.children'
  | 'outboundReferenceNotes.childrenMarkdownRemark.internal.content'
  | 'outboundReferenceNotes.childrenMarkdownRemark.internal.contentDigest'
  | 'outboundReferenceNotes.childrenMarkdownRemark.internal.description'
  | 'outboundReferenceNotes.childrenMarkdownRemark.internal.fieldOwners'
  | 'outboundReferenceNotes.childrenMarkdownRemark.internal.ignoreType'
  | 'outboundReferenceNotes.childrenMarkdownRemark.internal.mediaType'
  | 'outboundReferenceNotes.childrenMarkdownRemark.internal.owner'
  | 'outboundReferenceNotes.childrenMarkdownRemark.internal.type'
  | 'outboundReferenceNotes.childMarkdownRemark.id'
  | 'outboundReferenceNotes.childMarkdownRemark.frontmatter.title'
  | 'outboundReferenceNotes.childMarkdownRemark.frontmatter.tags'
  | 'outboundReferenceNotes.childMarkdownRemark.frontmatter.date'
  | 'outboundReferenceNotes.childMarkdownRemark.frontmatter.updated'
  | 'outboundReferenceNotes.childMarkdownRemark.frontmatter.created'
  | 'outboundReferenceNotes.childMarkdownRemark.frontmatter.date_updated'
  | 'outboundReferenceNotes.childMarkdownRemark.excerpt'
  | 'outboundReferenceNotes.childMarkdownRemark.rawMarkdownBody'
  | 'outboundReferenceNotes.childMarkdownRemark.html'
  | 'outboundReferenceNotes.childMarkdownRemark.htmlAst'
  | 'outboundReferenceNotes.childMarkdownRemark.excerptAst'
  | 'outboundReferenceNotes.childMarkdownRemark.headings'
  | 'outboundReferenceNotes.childMarkdownRemark.headings.id'
  | 'outboundReferenceNotes.childMarkdownRemark.headings.value'
  | 'outboundReferenceNotes.childMarkdownRemark.headings.depth'
  | 'outboundReferenceNotes.childMarkdownRemark.timeToRead'
  | 'outboundReferenceNotes.childMarkdownRemark.tableOfContents'
  | 'outboundReferenceNotes.childMarkdownRemark.wordCount.paragraphs'
  | 'outboundReferenceNotes.childMarkdownRemark.wordCount.sentences'
  | 'outboundReferenceNotes.childMarkdownRemark.wordCount.words'
  | 'outboundReferenceNotes.childMarkdownRemark.parent.id'
  | 'outboundReferenceNotes.childMarkdownRemark.parent.children'
  | 'outboundReferenceNotes.childMarkdownRemark.children'
  | 'outboundReferenceNotes.childMarkdownRemark.children.id'
  | 'outboundReferenceNotes.childMarkdownRemark.children.children'
  | 'outboundReferenceNotes.childMarkdownRemark.internal.content'
  | 'outboundReferenceNotes.childMarkdownRemark.internal.contentDigest'
  | 'outboundReferenceNotes.childMarkdownRemark.internal.description'
  | 'outboundReferenceNotes.childMarkdownRemark.internal.fieldOwners'
  | 'outboundReferenceNotes.childMarkdownRemark.internal.ignoreType'
  | 'outboundReferenceNotes.childMarkdownRemark.internal.mediaType'
  | 'outboundReferenceNotes.childMarkdownRemark.internal.owner'
  | 'outboundReferenceNotes.childMarkdownRemark.internal.type'
  | 'outboundReferenceNotes.id'
  | 'outboundReferenceNotes.parent.id'
  | 'outboundReferenceNotes.parent.parent.id'
  | 'outboundReferenceNotes.parent.parent.children'
  | 'outboundReferenceNotes.parent.children'
  | 'outboundReferenceNotes.parent.children.id'
  | 'outboundReferenceNotes.parent.children.children'
  | 'outboundReferenceNotes.parent.internal.content'
  | 'outboundReferenceNotes.parent.internal.contentDigest'
  | 'outboundReferenceNotes.parent.internal.description'
  | 'outboundReferenceNotes.parent.internal.fieldOwners'
  | 'outboundReferenceNotes.parent.internal.ignoreType'
  | 'outboundReferenceNotes.parent.internal.mediaType'
  | 'outboundReferenceNotes.parent.internal.owner'
  | 'outboundReferenceNotes.parent.internal.type'
  | 'outboundReferenceNotes.children'
  | 'outboundReferenceNotes.children.id'
  | 'outboundReferenceNotes.children.parent.id'
  | 'outboundReferenceNotes.children.parent.children'
  | 'outboundReferenceNotes.children.children'
  | 'outboundReferenceNotes.children.children.id'
  | 'outboundReferenceNotes.children.children.children'
  | 'outboundReferenceNotes.children.internal.content'
  | 'outboundReferenceNotes.children.internal.contentDigest'
  | 'outboundReferenceNotes.children.internal.description'
  | 'outboundReferenceNotes.children.internal.fieldOwners'
  | 'outboundReferenceNotes.children.internal.ignoreType'
  | 'outboundReferenceNotes.children.internal.mediaType'
  | 'outboundReferenceNotes.children.internal.owner'
  | 'outboundReferenceNotes.children.internal.type'
  | 'outboundReferenceNotes.internal.content'
  | 'outboundReferenceNotes.internal.contentDigest'
  | 'outboundReferenceNotes.internal.description'
  | 'outboundReferenceNotes.internal.fieldOwners'
  | 'outboundReferenceNotes.internal.ignoreType'
  | 'outboundReferenceNotes.internal.mediaType'
  | 'outboundReferenceNotes.internal.owner'
  | 'outboundReferenceNotes.internal.type'
  | 'inboundReferences'
  | 'inboundReferenceNotes'
  | 'inboundReferenceNotes.title'
  | 'inboundReferenceNotes.slug'
  | 'inboundReferenceNotes.rawContent'
  | 'inboundReferenceNotes.content'
  | 'inboundReferenceNotes.noteTemplate'
  | 'inboundReferenceNotes.aliases'
  | 'inboundReferenceNotes.outboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes'
  | 'inboundReferenceNotes.outboundReferenceNotes.title'
  | 'inboundReferenceNotes.outboundReferenceNotes.slug'
  | 'inboundReferenceNotes.outboundReferenceNotes.rawContent'
  | 'inboundReferenceNotes.outboundReferenceNotes.content'
  | 'inboundReferenceNotes.outboundReferenceNotes.noteTemplate'
  | 'inboundReferenceNotes.outboundReferenceNotes.aliases'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.title'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.slug'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.rawContent'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.content'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.noteTemplate'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.aliases'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.outboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.absolutePath'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.childrenMdx'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.id'
  | 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.children'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.title'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.slug'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.rawContent'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.content'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.noteTemplate'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.aliases'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.outboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.absolutePath'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.childrenMdx'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.id'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.children'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview.source'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview.previewHtml'
  | 'inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.siteName'
  | 'inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.sourcePage'
  | 'inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.sourceUrl'
  | 'inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.previewHtml'
  | 'inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences'
  | 'inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.targetSite'
  | 'inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.targetPage'
  | 'inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.previewHtml'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.rawBody'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.fileAbsolutePath'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.slug'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.body'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.excerpt'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.headings'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.html'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.mdxAST'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.tableOfContents'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.timeToRead'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.id'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMdx.children'
  | 'inboundReferenceNotes.outboundReferenceNotes.absolutePath'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.source'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.previewMarkdown'
  | 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.previewHtml'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.rawBody'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.fileAbsolutePath'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.slug'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.body'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.excerpt'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.headings'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.html'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.mdxAST'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.tableOfContents'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.timeToRead'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.id'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.children'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.id'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.excerpt'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.html'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.htmlAst'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.excerptAst'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.headings'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.timeToRead'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.tableOfContents'
  | 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.children'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.id'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.excerpt'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.rawMarkdownBody'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.html'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.htmlAst'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.excerptAst'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.headings'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.timeToRead'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.tableOfContents'
  | 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.children'
  | 'inboundReferenceNotes.outboundReferenceNotes.id'
  | 'inboundReferenceNotes.outboundReferenceNotes.parent.id'
  | 'inboundReferenceNotes.outboundReferenceNotes.parent.children'
  | 'inboundReferenceNotes.outboundReferenceNotes.children'
  | 'inboundReferenceNotes.outboundReferenceNotes.children.id'
  | 'inboundReferenceNotes.outboundReferenceNotes.children.children'
  | 'inboundReferenceNotes.outboundReferenceNotes.internal.content'
  | 'inboundReferenceNotes.outboundReferenceNotes.internal.contentDigest'
  | 'inboundReferenceNotes.outboundReferenceNotes.internal.description'
  | 'inboundReferenceNotes.outboundReferenceNotes.internal.fieldOwners'
  | 'inboundReferenceNotes.outboundReferenceNotes.internal.ignoreType'
  | 'inboundReferenceNotes.outboundReferenceNotes.internal.mediaType'
  | 'inboundReferenceNotes.outboundReferenceNotes.internal.owner'
  | 'inboundReferenceNotes.outboundReferenceNotes.internal.type'
  | 'inboundReferenceNotes.inboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes'
  | 'inboundReferenceNotes.inboundReferenceNotes.title'
  | 'inboundReferenceNotes.inboundReferenceNotes.slug'
  | 'inboundReferenceNotes.inboundReferenceNotes.rawContent'
  | 'inboundReferenceNotes.inboundReferenceNotes.content'
  | 'inboundReferenceNotes.inboundReferenceNotes.noteTemplate'
  | 'inboundReferenceNotes.inboundReferenceNotes.aliases'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.title'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.slug'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.rawContent'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.content'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.noteTemplate'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.aliases'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.outboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.absolutePath'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.childrenMdx'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.id'
  | 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.children'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.title'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.slug'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.rawContent'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.content'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.noteTemplate'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.aliases'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.outboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.absolutePath'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.childrenMdx'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.id'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.children'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview.source'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview.previewHtml'
  | 'inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.siteName'
  | 'inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.sourcePage'
  | 'inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.sourceUrl'
  | 'inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.previewHtml'
  | 'inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences'
  | 'inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.targetSite'
  | 'inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.targetPage'
  | 'inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.previewHtml'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.rawBody'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.fileAbsolutePath'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.slug'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.body'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.excerpt'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.headings'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.html'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.mdxAST'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.tableOfContents'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.timeToRead'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.id'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMdx.children'
  | 'inboundReferenceNotes.inboundReferenceNotes.absolutePath'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.source'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.previewMarkdown'
  | 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.previewHtml'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.rawBody'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.fileAbsolutePath'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.slug'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.body'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.excerpt'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.headings'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.html'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.mdxAST'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.tableOfContents'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.timeToRead'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.id'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.children'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.id'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.excerpt'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.html'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.htmlAst'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.excerptAst'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.headings'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.timeToRead'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.tableOfContents'
  | 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.children'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.id'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.excerpt'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.rawMarkdownBody'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.html'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.htmlAst'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.excerptAst'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.headings'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.timeToRead'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.tableOfContents'
  | 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.children'
  | 'inboundReferenceNotes.inboundReferenceNotes.id'
  | 'inboundReferenceNotes.inboundReferenceNotes.parent.id'
  | 'inboundReferenceNotes.inboundReferenceNotes.parent.children'
  | 'inboundReferenceNotes.inboundReferenceNotes.children'
  | 'inboundReferenceNotes.inboundReferenceNotes.children.id'
  | 'inboundReferenceNotes.inboundReferenceNotes.children.children'
  | 'inboundReferenceNotes.inboundReferenceNotes.internal.content'
  | 'inboundReferenceNotes.inboundReferenceNotes.internal.contentDigest'
  | 'inboundReferenceNotes.inboundReferenceNotes.internal.description'
  | 'inboundReferenceNotes.inboundReferenceNotes.internal.fieldOwners'
  | 'inboundReferenceNotes.inboundReferenceNotes.internal.ignoreType'
  | 'inboundReferenceNotes.inboundReferenceNotes.internal.mediaType'
  | 'inboundReferenceNotes.inboundReferenceNotes.internal.owner'
  | 'inboundReferenceNotes.inboundReferenceNotes.internal.type'
  | 'inboundReferenceNotes.inboundReferencePreview'
  | 'inboundReferenceNotes.inboundReferencePreview.source'
  | 'inboundReferenceNotes.inboundReferencePreview.previewHtml'
  | 'inboundReferenceNotes.externalInboundReferences'
  | 'inboundReferenceNotes.externalInboundReferences.siteName'
  | 'inboundReferenceNotes.externalInboundReferences.sourcePage'
  | 'inboundReferenceNotes.externalInboundReferences.sourceUrl'
  | 'inboundReferenceNotes.externalInboundReferences.previewHtml'
  | 'inboundReferenceNotes.externalOutboundReferences'
  | 'inboundReferenceNotes.externalOutboundReferences.targetSite'
  | 'inboundReferenceNotes.externalOutboundReferences.targetPage'
  | 'inboundReferenceNotes.externalOutboundReferences.previewHtml'
  | 'inboundReferenceNotes.childMdx.rawBody'
  | 'inboundReferenceNotes.childMdx.fileAbsolutePath'
  | 'inboundReferenceNotes.childMdx.frontmatter.title'
  | 'inboundReferenceNotes.childMdx.frontmatter.description'
  | 'inboundReferenceNotes.childMdx.frontmatter.date'
  | 'inboundReferenceNotes.childMdx.frontmatter.slug'
  | 'inboundReferenceNotes.childMdx.frontmatter.tags'
  | 'inboundReferenceNotes.childMdx.frontmatter.subtitle'
  | 'inboundReferenceNotes.childMdx.frontmatter.featured'
  | 'inboundReferenceNotes.childMdx.frontmatter.public'
  | 'inboundReferenceNotes.childMdx.frontmatter.tag'
  | 'inboundReferenceNotes.childMdx.frontmatter.filters'
  | 'inboundReferenceNotes.childMdx.frontmatter.categories'
  | 'inboundReferenceNotes.childMdx.frontmatter.published'
  | 'inboundReferenceNotes.childMdx.frontmatter.updated'
  | 'inboundReferenceNotes.childMdx.frontmatter.external_url'
  | 'inboundReferenceNotes.childMdx.frontmatter.epistemic_status'
  | 'inboundReferenceNotes.childMdx.frontmatter.layout'
  | 'inboundReferenceNotes.childMdx.frontmatter.created'
  | 'inboundReferenceNotes.childMdx.frontmatter.date_updated'
  | 'inboundReferenceNotes.childMdx.frontmatter.social_image'
  | 'inboundReferenceNotes.childMdx.frontmatter.abstract'
  | 'inboundReferenceNotes.childMdx.frontmatter.draft'
  | 'inboundReferenceNotes.childMdx.slug'
  | 'inboundReferenceNotes.childMdx.body'
  | 'inboundReferenceNotes.childMdx.excerpt'
  | 'inboundReferenceNotes.childMdx.headings'
  | 'inboundReferenceNotes.childMdx.headings.value'
  | 'inboundReferenceNotes.childMdx.headings.depth'
  | 'inboundReferenceNotes.childMdx.html'
  | 'inboundReferenceNotes.childMdx.mdxAST'
  | 'inboundReferenceNotes.childMdx.tableOfContents'
  | 'inboundReferenceNotes.childMdx.timeToRead'
  | 'inboundReferenceNotes.childMdx.wordCount.paragraphs'
  | 'inboundReferenceNotes.childMdx.wordCount.sentences'
  | 'inboundReferenceNotes.childMdx.wordCount.words'
  | 'inboundReferenceNotes.childMdx.fields.source'
  | 'inboundReferenceNotes.childMdx.fields.slug'
  | 'inboundReferenceNotes.childMdx.id'
  | 'inboundReferenceNotes.childMdx.parent.id'
  | 'inboundReferenceNotes.childMdx.parent.children'
  | 'inboundReferenceNotes.childMdx.children'
  | 'inboundReferenceNotes.childMdx.children.id'
  | 'inboundReferenceNotes.childMdx.children.children'
  | 'inboundReferenceNotes.childMdx.internal.content'
  | 'inboundReferenceNotes.childMdx.internal.contentDigest'
  | 'inboundReferenceNotes.childMdx.internal.description'
  | 'inboundReferenceNotes.childMdx.internal.fieldOwners'
  | 'inboundReferenceNotes.childMdx.internal.ignoreType'
  | 'inboundReferenceNotes.childMdx.internal.mediaType'
  | 'inboundReferenceNotes.childMdx.internal.owner'
  | 'inboundReferenceNotes.childMdx.internal.type'
  | 'inboundReferenceNotes.absolutePath'
  | 'inboundReferenceNotes.inboundReferencePreviews'
  | 'inboundReferenceNotes.inboundReferencePreviews.source'
  | 'inboundReferenceNotes.inboundReferencePreviews.previewMarkdown'
  | 'inboundReferenceNotes.inboundReferencePreviews.previewHtml'
  | 'inboundReferenceNotes.childrenMdx'
  | 'inboundReferenceNotes.childrenMdx.rawBody'
  | 'inboundReferenceNotes.childrenMdx.fileAbsolutePath'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.title'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.description'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.date'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.slug'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.tags'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.subtitle'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.featured'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.public'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.tag'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.filters'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.categories'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.published'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.updated'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.external_url'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.epistemic_status'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.layout'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.created'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.date_updated'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.social_image'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.abstract'
  | 'inboundReferenceNotes.childrenMdx.frontmatter.draft'
  | 'inboundReferenceNotes.childrenMdx.slug'
  | 'inboundReferenceNotes.childrenMdx.body'
  | 'inboundReferenceNotes.childrenMdx.excerpt'
  | 'inboundReferenceNotes.childrenMdx.headings'
  | 'inboundReferenceNotes.childrenMdx.headings.value'
  | 'inboundReferenceNotes.childrenMdx.headings.depth'
  | 'inboundReferenceNotes.childrenMdx.html'
  | 'inboundReferenceNotes.childrenMdx.mdxAST'
  | 'inboundReferenceNotes.childrenMdx.tableOfContents'
  | 'inboundReferenceNotes.childrenMdx.timeToRead'
  | 'inboundReferenceNotes.childrenMdx.wordCount.paragraphs'
  | 'inboundReferenceNotes.childrenMdx.wordCount.sentences'
  | 'inboundReferenceNotes.childrenMdx.wordCount.words'
  | 'inboundReferenceNotes.childrenMdx.fields.source'
  | 'inboundReferenceNotes.childrenMdx.fields.slug'
  | 'inboundReferenceNotes.childrenMdx.id'
  | 'inboundReferenceNotes.childrenMdx.parent.id'
  | 'inboundReferenceNotes.childrenMdx.parent.children'
  | 'inboundReferenceNotes.childrenMdx.children'
  | 'inboundReferenceNotes.childrenMdx.children.id'
  | 'inboundReferenceNotes.childrenMdx.children.children'
  | 'inboundReferenceNotes.childrenMdx.internal.content'
  | 'inboundReferenceNotes.childrenMdx.internal.contentDigest'
  | 'inboundReferenceNotes.childrenMdx.internal.description'
  | 'inboundReferenceNotes.childrenMdx.internal.fieldOwners'
  | 'inboundReferenceNotes.childrenMdx.internal.ignoreType'
  | 'inboundReferenceNotes.childrenMdx.internal.mediaType'
  | 'inboundReferenceNotes.childrenMdx.internal.owner'
  | 'inboundReferenceNotes.childrenMdx.internal.type'
  | 'inboundReferenceNotes.childrenMarkdownRemark'
  | 'inboundReferenceNotes.childrenMarkdownRemark.id'
  | 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.title'
  | 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.tags'
  | 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.date'
  | 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.updated'
  | 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.created'
  | 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.date_updated'
  | 'inboundReferenceNotes.childrenMarkdownRemark.excerpt'
  | 'inboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody'
  | 'inboundReferenceNotes.childrenMarkdownRemark.html'
  | 'inboundReferenceNotes.childrenMarkdownRemark.htmlAst'
  | 'inboundReferenceNotes.childrenMarkdownRemark.excerptAst'
  | 'inboundReferenceNotes.childrenMarkdownRemark.headings'
  | 'inboundReferenceNotes.childrenMarkdownRemark.headings.id'
  | 'inboundReferenceNotes.childrenMarkdownRemark.headings.value'
  | 'inboundReferenceNotes.childrenMarkdownRemark.headings.depth'
  | 'inboundReferenceNotes.childrenMarkdownRemark.timeToRead'
  | 'inboundReferenceNotes.childrenMarkdownRemark.tableOfContents'
  | 'inboundReferenceNotes.childrenMarkdownRemark.wordCount.paragraphs'
  | 'inboundReferenceNotes.childrenMarkdownRemark.wordCount.sentences'
  | 'inboundReferenceNotes.childrenMarkdownRemark.wordCount.words'
  | 'inboundReferenceNotes.childrenMarkdownRemark.parent.id'
  | 'inboundReferenceNotes.childrenMarkdownRemark.parent.children'
  | 'inboundReferenceNotes.childrenMarkdownRemark.children'
  | 'inboundReferenceNotes.childrenMarkdownRemark.children.id'
  | 'inboundReferenceNotes.childrenMarkdownRemark.children.children'
  | 'inboundReferenceNotes.childrenMarkdownRemark.internal.content'
  | 'inboundReferenceNotes.childrenMarkdownRemark.internal.contentDigest'
  | 'inboundReferenceNotes.childrenMarkdownRemark.internal.description'
  | 'inboundReferenceNotes.childrenMarkdownRemark.internal.fieldOwners'
  | 'inboundReferenceNotes.childrenMarkdownRemark.internal.ignoreType'
  | 'inboundReferenceNotes.childrenMarkdownRemark.internal.mediaType'
  | 'inboundReferenceNotes.childrenMarkdownRemark.internal.owner'
  | 'inboundReferenceNotes.childrenMarkdownRemark.internal.type'
  | 'inboundReferenceNotes.childMarkdownRemark.id'
  | 'inboundReferenceNotes.childMarkdownRemark.frontmatter.title'
  | 'inboundReferenceNotes.childMarkdownRemark.frontmatter.tags'
  | 'inboundReferenceNotes.childMarkdownRemark.frontmatter.date'
  | 'inboundReferenceNotes.childMarkdownRemark.frontmatter.updated'
  | 'inboundReferenceNotes.childMarkdownRemark.frontmatter.created'
  | 'inboundReferenceNotes.childMarkdownRemark.frontmatter.date_updated'
  | 'inboundReferenceNotes.childMarkdownRemark.excerpt'
  | 'inboundReferenceNotes.childMarkdownRemark.rawMarkdownBody'
  | 'inboundReferenceNotes.childMarkdownRemark.html'
  | 'inboundReferenceNotes.childMarkdownRemark.htmlAst'
  | 'inboundReferenceNotes.childMarkdownRemark.excerptAst'
  | 'inboundReferenceNotes.childMarkdownRemark.headings'
  | 'inboundReferenceNotes.childMarkdownRemark.headings.id'
  | 'inboundReferenceNotes.childMarkdownRemark.headings.value'
  | 'inboundReferenceNotes.childMarkdownRemark.headings.depth'
  | 'inboundReferenceNotes.childMarkdownRemark.timeToRead'
  | 'inboundReferenceNotes.childMarkdownRemark.tableOfContents'
  | 'inboundReferenceNotes.childMarkdownRemark.wordCount.paragraphs'
  | 'inboundReferenceNotes.childMarkdownRemark.wordCount.sentences'
  | 'inboundReferenceNotes.childMarkdownRemark.wordCount.words'
  | 'inboundReferenceNotes.childMarkdownRemark.parent.id'
  | 'inboundReferenceNotes.childMarkdownRemark.parent.children'
  | 'inboundReferenceNotes.childMarkdownRemark.children'
  | 'inboundReferenceNotes.childMarkdownRemark.children.id'
  | 'inboundReferenceNotes.childMarkdownRemark.children.children'
  | 'inboundReferenceNotes.childMarkdownRemark.internal.content'
  | 'inboundReferenceNotes.childMarkdownRemark.internal.contentDigest'
  | 'inboundReferenceNotes.childMarkdownRemark.internal.description'
  | 'inboundReferenceNotes.childMarkdownRemark.internal.fieldOwners'
  | 'inboundReferenceNotes.childMarkdownRemark.internal.ignoreType'
  | 'inboundReferenceNotes.childMarkdownRemark.internal.mediaType'
  | 'inboundReferenceNotes.childMarkdownRemark.internal.owner'
  | 'inboundReferenceNotes.childMarkdownRemark.internal.type'
  | 'inboundReferenceNotes.id'
  | 'inboundReferenceNotes.parent.id'
  | 'inboundReferenceNotes.parent.parent.id'
  | 'inboundReferenceNotes.parent.parent.children'
  | 'inboundReferenceNotes.parent.children'
  | 'inboundReferenceNotes.parent.children.id'
  | 'inboundReferenceNotes.parent.children.children'
  | 'inboundReferenceNotes.parent.internal.content'
  | 'inboundReferenceNotes.parent.internal.contentDigest'
  | 'inboundReferenceNotes.parent.internal.description'
  | 'inboundReferenceNotes.parent.internal.fieldOwners'
  | 'inboundReferenceNotes.parent.internal.ignoreType'
  | 'inboundReferenceNotes.parent.internal.mediaType'
  | 'inboundReferenceNotes.parent.internal.owner'
  | 'inboundReferenceNotes.parent.internal.type'
  | 'inboundReferenceNotes.children'
  | 'inboundReferenceNotes.children.id'
  | 'inboundReferenceNotes.children.parent.id'
  | 'inboundReferenceNotes.children.parent.children'
  | 'inboundReferenceNotes.children.children'
  | 'inboundReferenceNotes.children.children.id'
  | 'inboundReferenceNotes.children.children.children'
  | 'inboundReferenceNotes.children.internal.content'
  | 'inboundReferenceNotes.children.internal.contentDigest'
  | 'inboundReferenceNotes.children.internal.description'
  | 'inboundReferenceNotes.children.internal.fieldOwners'
  | 'inboundReferenceNotes.children.internal.ignoreType'
  | 'inboundReferenceNotes.children.internal.mediaType'
  | 'inboundReferenceNotes.children.internal.owner'
  | 'inboundReferenceNotes.children.internal.type'
  | 'inboundReferenceNotes.internal.content'
  | 'inboundReferenceNotes.internal.contentDigest'
  | 'inboundReferenceNotes.internal.description'
  | 'inboundReferenceNotes.internal.fieldOwners'
  | 'inboundReferenceNotes.internal.ignoreType'
  | 'inboundReferenceNotes.internal.mediaType'
  | 'inboundReferenceNotes.internal.owner'
  | 'inboundReferenceNotes.internal.type'
  | 'inboundReferencePreview'
  | 'inboundReferencePreview.source'
  | 'inboundReferencePreview.previewHtml'
  | 'externalInboundReferences'
  | 'externalInboundReferences.siteName'
  | 'externalInboundReferences.sourcePage'
  | 'externalInboundReferences.sourceUrl'
  | 'externalInboundReferences.previewHtml'
  | 'externalOutboundReferences'
  | 'externalOutboundReferences.targetSite'
  | 'externalOutboundReferences.targetPage'
  | 'externalOutboundReferences.previewHtml'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.frontmatter.description'
  | 'childMdx.frontmatter.date'
  | 'childMdx.frontmatter.cover_image.sourceInstanceName'
  | 'childMdx.frontmatter.cover_image.absolutePath'
  | 'childMdx.frontmatter.cover_image.relativePath'
  | 'childMdx.frontmatter.cover_image.extension'
  | 'childMdx.frontmatter.cover_image.size'
  | 'childMdx.frontmatter.cover_image.prettySize'
  | 'childMdx.frontmatter.cover_image.modifiedTime'
  | 'childMdx.frontmatter.cover_image.accessTime'
  | 'childMdx.frontmatter.cover_image.changeTime'
  | 'childMdx.frontmatter.cover_image.birthTime'
  | 'childMdx.frontmatter.cover_image.root'
  | 'childMdx.frontmatter.cover_image.dir'
  | 'childMdx.frontmatter.cover_image.base'
  | 'childMdx.frontmatter.cover_image.ext'
  | 'childMdx.frontmatter.cover_image.name'
  | 'childMdx.frontmatter.cover_image.relativeDirectory'
  | 'childMdx.frontmatter.cover_image.dev'
  | 'childMdx.frontmatter.cover_image.mode'
  | 'childMdx.frontmatter.cover_image.nlink'
  | 'childMdx.frontmatter.cover_image.uid'
  | 'childMdx.frontmatter.cover_image.gid'
  | 'childMdx.frontmatter.cover_image.rdev'
  | 'childMdx.frontmatter.cover_image.ino'
  | 'childMdx.frontmatter.cover_image.atimeMs'
  | 'childMdx.frontmatter.cover_image.mtimeMs'
  | 'childMdx.frontmatter.cover_image.ctimeMs'
  | 'childMdx.frontmatter.cover_image.atime'
  | 'childMdx.frontmatter.cover_image.mtime'
  | 'childMdx.frontmatter.cover_image.ctime'
  | 'childMdx.frontmatter.cover_image.birthtime'
  | 'childMdx.frontmatter.cover_image.birthtimeMs'
  | 'childMdx.frontmatter.cover_image.blksize'
  | 'childMdx.frontmatter.cover_image.blocks'
  | 'childMdx.frontmatter.cover_image.publicURL'
  | 'childMdx.frontmatter.cover_image.childrenImageSharp'
  | 'childMdx.frontmatter.cover_image.childrenMdx'
  | 'childMdx.frontmatter.cover_image.id'
  | 'childMdx.frontmatter.cover_image.children'
  | 'childMdx.frontmatter.slug'
  | 'childMdx.frontmatter.tags'
  | 'childMdx.frontmatter.subtitle'
  | 'childMdx.frontmatter.featured'
  | 'childMdx.frontmatter.public'
  | 'childMdx.frontmatter.tag'
  | 'childMdx.frontmatter.filters'
  | 'childMdx.frontmatter.categories'
  | 'childMdx.frontmatter.published'
  | 'childMdx.frontmatter.updated'
  | 'childMdx.frontmatter.external_url'
  | 'childMdx.frontmatter.epistemic_status'
  | 'childMdx.frontmatter.layout'
  | 'childMdx.frontmatter.created'
  | 'childMdx.frontmatter.date_updated'
  | 'childMdx.frontmatter.social_image'
  | 'childMdx.frontmatter.abstract'
  | 'childMdx.frontmatter.draft'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.fields.readingTime.text'
  | 'childMdx.fields.readingTime.minutes'
  | 'childMdx.fields.readingTime.time'
  | 'childMdx.fields.readingTime.words'
  | 'childMdx.fields.source'
  | 'childMdx.fields.slug'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type'
  | 'absolutePath'
  | 'inboundReferencePreviews'
  | 'inboundReferencePreviews.source'
  | 'inboundReferencePreviews.previewMarkdown'
  | 'inboundReferencePreviews.previewHtml'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.frontmatter.description'
  | 'childrenMdx.frontmatter.date'
  | 'childrenMdx.frontmatter.cover_image.sourceInstanceName'
  | 'childrenMdx.frontmatter.cover_image.absolutePath'
  | 'childrenMdx.frontmatter.cover_image.relativePath'
  | 'childrenMdx.frontmatter.cover_image.extension'
  | 'childrenMdx.frontmatter.cover_image.size'
  | 'childrenMdx.frontmatter.cover_image.prettySize'
  | 'childrenMdx.frontmatter.cover_image.modifiedTime'
  | 'childrenMdx.frontmatter.cover_image.accessTime'
  | 'childrenMdx.frontmatter.cover_image.changeTime'
  | 'childrenMdx.frontmatter.cover_image.birthTime'
  | 'childrenMdx.frontmatter.cover_image.root'
  | 'childrenMdx.frontmatter.cover_image.dir'
  | 'childrenMdx.frontmatter.cover_image.base'
  | 'childrenMdx.frontmatter.cover_image.ext'
  | 'childrenMdx.frontmatter.cover_image.name'
  | 'childrenMdx.frontmatter.cover_image.relativeDirectory'
  | 'childrenMdx.frontmatter.cover_image.dev'
  | 'childrenMdx.frontmatter.cover_image.mode'
  | 'childrenMdx.frontmatter.cover_image.nlink'
  | 'childrenMdx.frontmatter.cover_image.uid'
  | 'childrenMdx.frontmatter.cover_image.gid'
  | 'childrenMdx.frontmatter.cover_image.rdev'
  | 'childrenMdx.frontmatter.cover_image.ino'
  | 'childrenMdx.frontmatter.cover_image.atimeMs'
  | 'childrenMdx.frontmatter.cover_image.mtimeMs'
  | 'childrenMdx.frontmatter.cover_image.ctimeMs'
  | 'childrenMdx.frontmatter.cover_image.atime'
  | 'childrenMdx.frontmatter.cover_image.mtime'
  | 'childrenMdx.frontmatter.cover_image.ctime'
  | 'childrenMdx.frontmatter.cover_image.birthtime'
  | 'childrenMdx.frontmatter.cover_image.birthtimeMs'
  | 'childrenMdx.frontmatter.cover_image.blksize'
  | 'childrenMdx.frontmatter.cover_image.blocks'
  | 'childrenMdx.frontmatter.cover_image.publicURL'
  | 'childrenMdx.frontmatter.cover_image.childrenImageSharp'
  | 'childrenMdx.frontmatter.cover_image.childrenMdx'
  | 'childrenMdx.frontmatter.cover_image.id'
  | 'childrenMdx.frontmatter.cover_image.children'
  | 'childrenMdx.frontmatter.slug'
  | 'childrenMdx.frontmatter.tags'
  | 'childrenMdx.frontmatter.subtitle'
  | 'childrenMdx.frontmatter.featured'
  | 'childrenMdx.frontmatter.public'
  | 'childrenMdx.frontmatter.tag'
  | 'childrenMdx.frontmatter.filters'
  | 'childrenMdx.frontmatter.categories'
  | 'childrenMdx.frontmatter.published'
  | 'childrenMdx.frontmatter.updated'
  | 'childrenMdx.frontmatter.external_url'
  | 'childrenMdx.frontmatter.epistemic_status'
  | 'childrenMdx.frontmatter.layout'
  | 'childrenMdx.frontmatter.created'
  | 'childrenMdx.frontmatter.date_updated'
  | 'childrenMdx.frontmatter.social_image'
  | 'childrenMdx.frontmatter.abstract'
  | 'childrenMdx.frontmatter.draft'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.fields.readingTime.text'
  | 'childrenMdx.fields.readingTime.minutes'
  | 'childrenMdx.fields.readingTime.time'
  | 'childrenMdx.fields.readingTime.words'
  | 'childrenMdx.fields.source'
  | 'childrenMdx.fields.slug'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.frontmatter.tags'
  | 'childrenMarkdownRemark.frontmatter.date'
  | 'childrenMarkdownRemark.frontmatter.updated'
  | 'childrenMarkdownRemark.frontmatter.created'
  | 'childrenMarkdownRemark.frontmatter.date_updated'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.fields.readingTime.text'
  | 'childrenMarkdownRemark.fields.readingTime.minutes'
  | 'childrenMarkdownRemark.fields.readingTime.time'
  | 'childrenMarkdownRemark.fields.readingTime.words'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.frontmatter.tags'
  | 'childMarkdownRemark.frontmatter.date'
  | 'childMarkdownRemark.frontmatter.updated'
  | 'childMarkdownRemark.frontmatter.created'
  | 'childMarkdownRemark.frontmatter.date_updated'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.fields.readingTime.text'
  | 'childMarkdownRemark.fields.readingTime.minutes'
  | 'childMarkdownRemark.fields.readingTime.time'
  | 'childMarkdownRemark.fields.readingTime.words'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type BrainNoteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<BrainNoteEdge>;
  readonly nodes: ReadonlyArray<BrainNote>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<BrainNoteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type BrainNoteGroupConnection_distinctArgs = {
  field: BrainNoteFieldsEnum;
};


type BrainNoteGroupConnection_maxArgs = {
  field: BrainNoteFieldsEnum;
};


type BrainNoteGroupConnection_minArgs = {
  field: BrainNoteFieldsEnum;
};


type BrainNoteGroupConnection_sumArgs = {
  field: BrainNoteFieldsEnum;
};


type BrainNoteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: BrainNoteFieldsEnum;
};

type BrainNoteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<BrainNoteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type BrainNoteWithRefsBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type BrainNoteWithRefsBySlugQuery = { readonly brainNote: Maybe<(
    Pick<BrainNote, 'slug' | 'title' | 'absolutePath'>
    & { readonly childMdx: Maybe<(
      Pick<Mdx, 'body'>
      & { readonly frontmatter: Pick<Frontmatter, 'date' | 'title' | 'slug' | 'tags'> }
    )>, readonly inboundReferenceNotes: Maybe<ReadonlyArray<Maybe<(
      Pick<BrainNote, 'title' | 'slug'>
      & { readonly childMdx: Maybe<(
        Pick<Mdx, 'excerpt'>
        & { readonly frontmatter: Pick<Frontmatter, 'title' | 'slug' | 'tags'> }
      )> }
    )>>>, readonly outboundReferenceNotes: Maybe<ReadonlyArray<Maybe<(
      Pick<BrainNote, 'title' | 'slug'>
      & { readonly childMdx: Maybe<(
        Pick<Mdx, 'excerpt'>
        & { readonly frontmatter: Pick<Frontmatter, 'title' | 'slug' | 'tags'> }
      )> }
    )>>> }
  )> };

type EssayFragment = (
  Pick<Mdx, 'id' | 'slug' | 'body'>
  & EssayFrontmatterFragment
  & ReadingTimeFragment
);

type EssayFrontmatterFragment = { readonly frontmatter: (
    Pick<Frontmatter, 'title' | 'slug' | 'date' | 'subtitle' | 'tags'>
    & { readonly cover_image: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<Pick<ImageSharpFluid, 'src'>> }> }> }
  ) };

type ReadingTimeFragment = { readonly fields: Maybe<{ readonly readingTime: Maybe<Pick<MdxFieldsReadingTime, 'text'>> }> };

type BlogPostBySlugQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type BlogPostBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly allMdx: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'tableOfContents'>
      & EssayFragment
    )> } };

type WorkFragment = (
  Pick<Mdx, 'id' | 'slug' | 'body'>
  & WorkFrontmatterFragment
);

type WorkFrontmatterFragment = { readonly frontmatter: (
    Pick<Frontmatter, 'title' | 'tags' | 'subtitle' | 'slug'>
    & { readonly cover_image: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
  ) };

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type WorksBySlugQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type WorksBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly allMdx: { readonly nodes: ReadonlyArray<WorkFragment> } };

type AssemblageFrontmatterFragment = { readonly frontmatter: (
    Pick<Frontmatter, 'title' | 'subtitle'>
    & { readonly cover_image: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
  ) };

type EssayPreviewFragment = (
  Pick<Mdx, 'id' | 'slug' | 'excerpt'>
  & EssayFrontmatterFragment
  & ReadingTimeFragment
);

type pageUsersdevinCodeSitesoikosGardensrctemplatestagJs3927187473QueryVariables = Exact<{
  tag: Maybe<Scalars['String']>;
}>;


type pageUsersdevinCodeSitesoikosGardensrctemplatestagJs3927187473Query = { readonly assemblagesQuery: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'id' | 'slug'>
      & AssemblageFrontmatterFragment
    )> }, readonly notesQuery: { readonly nodes: ReadonlyArray<(
      Pick<BrainNote, 'id' | 'slug'>
      & { readonly childMdx: Maybe<{ readonly frontmatter: Pick<Frontmatter, 'date' | 'title' | 'tags'> }> }
    )> }, readonly essaysQuery: { readonly nodes: ReadonlyArray<EssayPreviewFragment> }, readonly relatedMdxTags: { readonly group: ReadonlyArray<(
      Pick<MdxGroupConnection, 'totalCount'>
      & { tag: MdxGroupConnection['fieldValue'] }
    )> }, readonly relatedBrainTags: { readonly group: ReadonlyArray<(
      Pick<BrainNoteGroupConnection, 'totalCount'>
      & { tag: BrainNoteGroupConnection['fieldValue'] }
    )> } };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type pageUsersdevinCodeSitesoikosGardensrcpagesessaysJsx2646689613QueryVariables = Exact<{ [key: string]: never; }>;


type pageUsersdevinCodeSitesoikosGardensrcpagesessaysJsx2646689613Query = { readonly allMdx: { readonly nodes: ReadonlyArray<EssayPreviewFragment> } };

type pageUsersdevinCodeSitesoikosGardensrcpagesindexTsx4170242568QueryVariables = Exact<{ [key: string]: never; }>;


type pageUsersdevinCodeSitesoikosGardensrcpagesindexTsx4170242568Query = { readonly assemblagesQuery: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<Mdx, 'id' | 'slug'>
        & AssemblageFrontmatterFragment
      ) }> }, readonly worksQuery: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<Mdx, 'id' | 'slug'>
        & WorkFrontmatterFragment
      ) }> }, readonly notesQuery: { readonly nodes: ReadonlyArray<(
      Pick<BrainNote, 'id' | 'slug' | 'title'>
      & { readonly childMdx: Maybe<{ readonly frontmatter: Pick<Frontmatter, 'date' | 'tags'> }> }
    )> }, readonly essaysQuery: { readonly nodes: ReadonlyArray<EssayPreviewFragment> } };

type allNotesQueryVariables = Exact<{ [key: string]: never; }>;


type allNotesQuery = { readonly brainNotes: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<BrainNote, 'title' | 'slug'>
        & { readonly childMdx: Maybe<{ readonly frontmatter: Pick<Frontmatter, 'date' | 'subtitle' | 'published' | 'tags'> }> }
      ) }> } };

type pageUsersdevinCodeSitesoikosGardensrcpagestagsJsx932778392QueryVariables = Exact<{ [key: string]: never; }>;


type pageUsersdevinCodeSitesoikosGardensrcpagestagsJsx932778392Query = { readonly allMdx: { readonly group: ReadonlyArray<(
      Pick<MdxGroupConnection, 'totalCount'>
      & { tag: MdxGroupConnection['fieldValue'] }
    )> }, readonly allBrainNote: { readonly group: ReadonlyArray<(
      Pick<BrainNoteGroupConnection, 'totalCount'>
      & { tag: BrainNoteGroupConnection['fieldValue'] }
    )> } };

type pageUsersdevinCodeSitesoikosGardensrcpagesworksJsx242300695QueryVariables = Exact<{ [key: string]: never; }>;


type pageUsersdevinCodeSitesoikosGardensrcpagesworksJsx242300695Query = { readonly worksQuery: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<Mdx, 'id' | 'slug'>
        & WorkFrontmatterFragment
      ) }> } };

type AssemblageBySlugQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type AssemblageBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly allMdx: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'id' | 'excerpt' | 'body' | 'slug'>
      & AssemblageFrontmatterFragment
    )> } };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type BrainNoteBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type BrainNoteBySlugQuery = { readonly brainNote: Maybe<(
    Pick<BrainNote, 'slug' | 'title' | 'inboundReferences'>
    & { readonly externalInboundReferences: Maybe<ReadonlyArray<Maybe<Pick<ExternalInboundReference, 'siteName' | 'sourcePage' | 'sourceUrl' | 'previewHtml'>>>>, readonly inboundReferencePreviews: Maybe<ReadonlyArray<Maybe<Pick<BrainNoteInboundReferencePreviews, 'source' | 'previewHtml'>>>>, readonly childMdx: Maybe<Pick<Mdx, 'body'>> }
  )> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  File: ResolverTypeWrapper<File>;
  Node: ResolversTypes['File'] | ResolversTypes['Directory'] | ResolversTypes['Site'] | ResolversTypes['SiteFunction'] | ResolversTypes['SitePage'] | ResolversTypes['SitePlugin'] | ResolversTypes['SiteBuildMetadata'] | ResolversTypes['ImageSharp'] | ResolversTypes['Mdx'] | ResolversTypes['MarkdownRemark'] | ResolversTypes['BrainNote'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Internal: ResolverTypeWrapper<Internal>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Directory: ResolverTypeWrapper<Directory>;
  Site: ResolverTypeWrapper<Site>;
  SiteFlags: ResolverTypeWrapper<SiteFlags>;
  SiteSiteMetadata: ResolverTypeWrapper<SiteSiteMetadata>;
  SiteSiteMetadataOrganization: ResolverTypeWrapper<SiteSiteMetadataOrganization>;
  SiteFunction: ResolverTypeWrapper<SiteFunction>;
  SitePage: ResolverTypeWrapper<SitePage>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  SitePlugin: ResolverTypeWrapper<SitePlugin>;
  SiteBuildMetadata: ResolverTypeWrapper<SiteBuildMetadata>;
  GatsbyImageFormat: GatsbyImageFormat;
  GatsbyImageLayout: GatsbyImageLayout;
  GatsbyImagePlaceholder: GatsbyImagePlaceholder;
  ImageFormat: ImageFormat;
  ImageFit: ImageFit;
  ImageLayout: ImageLayout;
  ImageCropFocus: ImageCropFocus;
  DuotoneGradient: DuotoneGradient;
  PotraceTurnPolicy: PotraceTurnPolicy;
  Potrace: Potrace;
  ImageSharp: ResolverTypeWrapper<ImageSharp>;
  ImageSharpFixed: ResolverTypeWrapper<ImageSharpFixed>;
  ImageSharpFluid: ResolverTypeWrapper<ImageSharpFluid>;
  ImagePlaceholder: ImagePlaceholder;
  BlurredOptions: BlurredOptions;
  JPGOptions: JPGOptions;
  PNGOptions: PNGOptions;
  WebPOptions: WebPOptions;
  AVIFOptions: AVIFOptions;
  TransformOptions: TransformOptions;
  ImageSharpOriginal: ResolverTypeWrapper<ImageSharpOriginal>;
  ImageSharpResize: ResolverTypeWrapper<ImageSharpResize>;
  MdxFrontmatter: ResolverTypeWrapper<MdxFrontmatter>;
  MdxHeadingMdx: ResolverTypeWrapper<MdxHeadingMdx>;
  HeadingsMdx: HeadingsMdx;
  MdxWordCount: ResolverTypeWrapper<MdxWordCount>;
  Mdx: ResolverTypeWrapper<Mdx>;
  MdxFields: ResolverTypeWrapper<MdxFields>;
  MdxFieldsReadingTime: ResolverTypeWrapper<MdxFieldsReadingTime>;
  MarkdownHeading: ResolverTypeWrapper<MarkdownHeading>;
  MarkdownHeadingLevels: MarkdownHeadingLevels;
  MarkdownExcerptFormats: MarkdownExcerptFormats;
  MarkdownWordCount: ResolverTypeWrapper<MarkdownWordCount>;
  MarkdownRemark: ResolverTypeWrapper<MarkdownRemark>;
  MarkdownRemarkFrontmatter: ResolverTypeWrapper<MarkdownRemarkFrontmatter>;
  MarkdownRemarkFields: ResolverTypeWrapper<MarkdownRemarkFields>;
  MarkdownRemarkFieldsReadingTime: ResolverTypeWrapper<MarkdownRemarkFieldsReadingTime>;
  BrainNote: ResolverTypeWrapper<BrainNote>;
  BrainNoteInboundReferencePreviews: ResolverTypeWrapper<BrainNoteInboundReferencePreviews>;
  ExternalInboundReference: ResolverTypeWrapper<ExternalInboundReference>;
  ExternalOutboundReference: ResolverTypeWrapper<ExternalOutboundReference>;
  InboundReferencePreview: ResolverTypeWrapper<InboundReferencePreview>;
  Author: ResolverTypeWrapper<Author>;
  Social: ResolverTypeWrapper<Social>;
  Frontmatter: ResolverTypeWrapper<Frontmatter>;
  Query: ResolverTypeWrapper<{}>;
  StringQueryOperatorInput: StringQueryOperatorInput;
  IntQueryOperatorInput: IntQueryOperatorInput;
  DateQueryOperatorInput: DateQueryOperatorInput;
  FloatQueryOperatorInput: FloatQueryOperatorInput;
  ImageSharpFilterListInput: ImageSharpFilterListInput;
  ImageSharpFilterInput: ImageSharpFilterInput;
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput;
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput;
  JSONQueryOperatorInput: JSONQueryOperatorInput;
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput;
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput;
  NodeFilterInput: NodeFilterInput;
  NodeFilterListInput: NodeFilterListInput;
  InternalFilterInput: InternalFilterInput;
  BooleanQueryOperatorInput: BooleanQueryOperatorInput;
  MdxFilterListInput: MdxFilterListInput;
  MdxFilterInput: MdxFilterInput;
  FrontmatterFilterInput: FrontmatterFilterInput;
  FileFilterInput: FileFilterInput;
  MdxHeadingMdxFilterListInput: MdxHeadingMdxFilterListInput;
  MdxHeadingMdxFilterInput: MdxHeadingMdxFilterInput;
  MdxWordCountFilterInput: MdxWordCountFilterInput;
  MdxFieldsFilterInput: MdxFieldsFilterInput;
  MdxFieldsReadingTimeFilterInput: MdxFieldsReadingTimeFilterInput;
  FileConnection: ResolverTypeWrapper<FileConnection>;
  FileEdge: ResolverTypeWrapper<FileEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  FileFieldsEnum: FileFieldsEnum;
  FileGroupConnection: ResolverTypeWrapper<FileGroupConnection>;
  FileSortInput: FileSortInput;
  SortOrderEnum: SortOrderEnum;
  DirectoryConnection: ResolverTypeWrapper<DirectoryConnection>;
  DirectoryEdge: ResolverTypeWrapper<DirectoryEdge>;
  DirectoryFieldsEnum: DirectoryFieldsEnum;
  DirectoryGroupConnection: ResolverTypeWrapper<DirectoryGroupConnection>;
  DirectoryFilterInput: DirectoryFilterInput;
  DirectorySortInput: DirectorySortInput;
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput;
  AuthorFilterInput: AuthorFilterInput;
  SocialFilterInput: SocialFilterInput;
  SiteSiteMetadataOrganizationFilterInput: SiteSiteMetadataOrganizationFilterInput;
  SiteFlagsFilterInput: SiteFlagsFilterInput;
  SiteConnection: ResolverTypeWrapper<SiteConnection>;
  SiteEdge: ResolverTypeWrapper<SiteEdge>;
  SiteFieldsEnum: SiteFieldsEnum;
  SiteGroupConnection: ResolverTypeWrapper<SiteGroupConnection>;
  SiteFilterInput: SiteFilterInput;
  SiteSortInput: SiteSortInput;
  SiteFunctionConnection: ResolverTypeWrapper<SiteFunctionConnection>;
  SiteFunctionEdge: ResolverTypeWrapper<SiteFunctionEdge>;
  SiteFunctionFieldsEnum: SiteFunctionFieldsEnum;
  SiteFunctionGroupConnection: ResolverTypeWrapper<SiteFunctionGroupConnection>;
  SiteFunctionFilterInput: SiteFunctionFilterInput;
  SiteFunctionSortInput: SiteFunctionSortInput;
  SitePluginFilterInput: SitePluginFilterInput;
  SitePageConnection: ResolverTypeWrapper<SitePageConnection>;
  SitePageEdge: ResolverTypeWrapper<SitePageEdge>;
  SitePageFieldsEnum: SitePageFieldsEnum;
  SitePageGroupConnection: ResolverTypeWrapper<SitePageGroupConnection>;
  SitePageFilterInput: SitePageFilterInput;
  SitePageSortInput: SitePageSortInput;
  SitePluginConnection: ResolverTypeWrapper<SitePluginConnection>;
  SitePluginEdge: ResolverTypeWrapper<SitePluginEdge>;
  SitePluginFieldsEnum: SitePluginFieldsEnum;
  SitePluginGroupConnection: ResolverTypeWrapper<SitePluginGroupConnection>;
  SitePluginSortInput: SitePluginSortInput;
  SiteBuildMetadataConnection: ResolverTypeWrapper<SiteBuildMetadataConnection>;
  SiteBuildMetadataEdge: ResolverTypeWrapper<SiteBuildMetadataEdge>;
  SiteBuildMetadataFieldsEnum: SiteBuildMetadataFieldsEnum;
  SiteBuildMetadataGroupConnection: ResolverTypeWrapper<SiteBuildMetadataGroupConnection>;
  SiteBuildMetadataFilterInput: SiteBuildMetadataFilterInput;
  SiteBuildMetadataSortInput: SiteBuildMetadataSortInput;
  ImageSharpConnection: ResolverTypeWrapper<ImageSharpConnection>;
  ImageSharpEdge: ResolverTypeWrapper<ImageSharpEdge>;
  ImageSharpFieldsEnum: ImageSharpFieldsEnum;
  ImageSharpGroupConnection: ResolverTypeWrapper<ImageSharpGroupConnection>;
  ImageSharpSortInput: ImageSharpSortInput;
  MdxConnection: ResolverTypeWrapper<MdxConnection>;
  MdxEdge: ResolverTypeWrapper<MdxEdge>;
  MdxFieldsEnum: MdxFieldsEnum;
  MdxGroupConnection: ResolverTypeWrapper<MdxGroupConnection>;
  MdxSortInput: MdxSortInput;
  MarkdownRemarkFrontmatterFilterInput: MarkdownRemarkFrontmatterFilterInput;
  MarkdownRemarkFieldsFilterInput: MarkdownRemarkFieldsFilterInput;
  MarkdownRemarkFieldsReadingTimeFilterInput: MarkdownRemarkFieldsReadingTimeFilterInput;
  MarkdownHeadingFilterListInput: MarkdownHeadingFilterListInput;
  MarkdownHeadingFilterInput: MarkdownHeadingFilterInput;
  MarkdownWordCountFilterInput: MarkdownWordCountFilterInput;
  MarkdownRemarkConnection: ResolverTypeWrapper<MarkdownRemarkConnection>;
  MarkdownRemarkEdge: ResolverTypeWrapper<MarkdownRemarkEdge>;
  MarkdownRemarkFieldsEnum: MarkdownRemarkFieldsEnum;
  MarkdownRemarkGroupConnection: ResolverTypeWrapper<MarkdownRemarkGroupConnection>;
  MarkdownRemarkFilterInput: MarkdownRemarkFilterInput;
  MarkdownRemarkSortInput: MarkdownRemarkSortInput;
  BrainNoteFilterListInput: BrainNoteFilterListInput;
  BrainNoteFilterInput: BrainNoteFilterInput;
  InboundReferencePreviewFilterListInput: InboundReferencePreviewFilterListInput;
  InboundReferencePreviewFilterInput: InboundReferencePreviewFilterInput;
  ExternalInboundReferenceFilterListInput: ExternalInboundReferenceFilterListInput;
  ExternalInboundReferenceFilterInput: ExternalInboundReferenceFilterInput;
  ExternalOutboundReferenceFilterListInput: ExternalOutboundReferenceFilterListInput;
  ExternalOutboundReferenceFilterInput: ExternalOutboundReferenceFilterInput;
  BrainNoteInboundReferencePreviewsFilterListInput: BrainNoteInboundReferencePreviewsFilterListInput;
  BrainNoteInboundReferencePreviewsFilterInput: BrainNoteInboundReferencePreviewsFilterInput;
  MarkdownRemarkFilterListInput: MarkdownRemarkFilterListInput;
  BrainNoteConnection: ResolverTypeWrapper<BrainNoteConnection>;
  BrainNoteEdge: ResolverTypeWrapper<BrainNoteEdge>;
  BrainNoteFieldsEnum: BrainNoteFieldsEnum;
  BrainNoteGroupConnection: ResolverTypeWrapper<BrainNoteGroupConnection>;
  BrainNoteSortInput: BrainNoteSortInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  File: File;
  Node: ResolversParentTypes['File'] | ResolversParentTypes['Directory'] | ResolversParentTypes['Site'] | ResolversParentTypes['SiteFunction'] | ResolversParentTypes['SitePage'] | ResolversParentTypes['SitePlugin'] | ResolversParentTypes['SiteBuildMetadata'] | ResolversParentTypes['ImageSharp'] | ResolversParentTypes['Mdx'] | ResolversParentTypes['MarkdownRemark'] | ResolversParentTypes['BrainNote'];
  ID: Scalars['ID'];
  Internal: Internal;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  Directory: Directory;
  Site: Site;
  SiteFlags: SiteFlags;
  SiteSiteMetadata: SiteSiteMetadata;
  SiteSiteMetadataOrganization: SiteSiteMetadataOrganization;
  SiteFunction: SiteFunction;
  SitePage: SitePage;
  JSON: Scalars['JSON'];
  SitePlugin: SitePlugin;
  SiteBuildMetadata: SiteBuildMetadata;
  DuotoneGradient: DuotoneGradient;
  Potrace: Potrace;
  ImageSharp: ImageSharp;
  ImageSharpFixed: ImageSharpFixed;
  ImageSharpFluid: ImageSharpFluid;
  BlurredOptions: BlurredOptions;
  JPGOptions: JPGOptions;
  PNGOptions: PNGOptions;
  WebPOptions: WebPOptions;
  AVIFOptions: AVIFOptions;
  TransformOptions: TransformOptions;
  ImageSharpOriginal: ImageSharpOriginal;
  ImageSharpResize: ImageSharpResize;
  MdxFrontmatter: MdxFrontmatter;
  MdxHeadingMdx: MdxHeadingMdx;
  MdxWordCount: MdxWordCount;
  Mdx: Mdx;
  MdxFields: MdxFields;
  MdxFieldsReadingTime: MdxFieldsReadingTime;
  MarkdownHeading: MarkdownHeading;
  MarkdownWordCount: MarkdownWordCount;
  MarkdownRemark: MarkdownRemark;
  MarkdownRemarkFrontmatter: MarkdownRemarkFrontmatter;
  MarkdownRemarkFields: MarkdownRemarkFields;
  MarkdownRemarkFieldsReadingTime: MarkdownRemarkFieldsReadingTime;
  BrainNote: BrainNote;
  BrainNoteInboundReferencePreviews: BrainNoteInboundReferencePreviews;
  ExternalInboundReference: ExternalInboundReference;
  ExternalOutboundReference: ExternalOutboundReference;
  InboundReferencePreview: InboundReferencePreview;
  Author: Author;
  Social: Social;
  Frontmatter: Frontmatter;
  Query: {};
  StringQueryOperatorInput: StringQueryOperatorInput;
  IntQueryOperatorInput: IntQueryOperatorInput;
  DateQueryOperatorInput: DateQueryOperatorInput;
  FloatQueryOperatorInput: FloatQueryOperatorInput;
  ImageSharpFilterListInput: ImageSharpFilterListInput;
  ImageSharpFilterInput: ImageSharpFilterInput;
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput;
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput;
  JSONQueryOperatorInput: JSONQueryOperatorInput;
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput;
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput;
  NodeFilterInput: NodeFilterInput;
  NodeFilterListInput: NodeFilterListInput;
  InternalFilterInput: InternalFilterInput;
  BooleanQueryOperatorInput: BooleanQueryOperatorInput;
  MdxFilterListInput: MdxFilterListInput;
  MdxFilterInput: MdxFilterInput;
  FrontmatterFilterInput: FrontmatterFilterInput;
  FileFilterInput: FileFilterInput;
  MdxHeadingMdxFilterListInput: MdxHeadingMdxFilterListInput;
  MdxHeadingMdxFilterInput: MdxHeadingMdxFilterInput;
  MdxWordCountFilterInput: MdxWordCountFilterInput;
  MdxFieldsFilterInput: MdxFieldsFilterInput;
  MdxFieldsReadingTimeFilterInput: MdxFieldsReadingTimeFilterInput;
  FileConnection: FileConnection;
  FileEdge: FileEdge;
  PageInfo: PageInfo;
  FileGroupConnection: FileGroupConnection;
  FileSortInput: FileSortInput;
  DirectoryConnection: DirectoryConnection;
  DirectoryEdge: DirectoryEdge;
  DirectoryGroupConnection: DirectoryGroupConnection;
  DirectoryFilterInput: DirectoryFilterInput;
  DirectorySortInput: DirectorySortInput;
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput;
  AuthorFilterInput: AuthorFilterInput;
  SocialFilterInput: SocialFilterInput;
  SiteSiteMetadataOrganizationFilterInput: SiteSiteMetadataOrganizationFilterInput;
  SiteFlagsFilterInput: SiteFlagsFilterInput;
  SiteConnection: SiteConnection;
  SiteEdge: SiteEdge;
  SiteGroupConnection: SiteGroupConnection;
  SiteFilterInput: SiteFilterInput;
  SiteSortInput: SiteSortInput;
  SiteFunctionConnection: SiteFunctionConnection;
  SiteFunctionEdge: SiteFunctionEdge;
  SiteFunctionGroupConnection: SiteFunctionGroupConnection;
  SiteFunctionFilterInput: SiteFunctionFilterInput;
  SiteFunctionSortInput: SiteFunctionSortInput;
  SitePluginFilterInput: SitePluginFilterInput;
  SitePageConnection: SitePageConnection;
  SitePageEdge: SitePageEdge;
  SitePageGroupConnection: SitePageGroupConnection;
  SitePageFilterInput: SitePageFilterInput;
  SitePageSortInput: SitePageSortInput;
  SitePluginConnection: SitePluginConnection;
  SitePluginEdge: SitePluginEdge;
  SitePluginGroupConnection: SitePluginGroupConnection;
  SitePluginSortInput: SitePluginSortInput;
  SiteBuildMetadataConnection: SiteBuildMetadataConnection;
  SiteBuildMetadataEdge: SiteBuildMetadataEdge;
  SiteBuildMetadataGroupConnection: SiteBuildMetadataGroupConnection;
  SiteBuildMetadataFilterInput: SiteBuildMetadataFilterInput;
  SiteBuildMetadataSortInput: SiteBuildMetadataSortInput;
  ImageSharpConnection: ImageSharpConnection;
  ImageSharpEdge: ImageSharpEdge;
  ImageSharpGroupConnection: ImageSharpGroupConnection;
  ImageSharpSortInput: ImageSharpSortInput;
  MdxConnection: MdxConnection;
  MdxEdge: MdxEdge;
  MdxGroupConnection: MdxGroupConnection;
  MdxSortInput: MdxSortInput;
  MarkdownRemarkFrontmatterFilterInput: MarkdownRemarkFrontmatterFilterInput;
  MarkdownRemarkFieldsFilterInput: MarkdownRemarkFieldsFilterInput;
  MarkdownRemarkFieldsReadingTimeFilterInput: MarkdownRemarkFieldsReadingTimeFilterInput;
  MarkdownHeadingFilterListInput: MarkdownHeadingFilterListInput;
  MarkdownHeadingFilterInput: MarkdownHeadingFilterInput;
  MarkdownWordCountFilterInput: MarkdownWordCountFilterInput;
  MarkdownRemarkConnection: MarkdownRemarkConnection;
  MarkdownRemarkEdge: MarkdownRemarkEdge;
  MarkdownRemarkGroupConnection: MarkdownRemarkGroupConnection;
  MarkdownRemarkFilterInput: MarkdownRemarkFilterInput;
  MarkdownRemarkSortInput: MarkdownRemarkSortInput;
  BrainNoteFilterListInput: BrainNoteFilterListInput;
  BrainNoteFilterInput: BrainNoteFilterInput;
  InboundReferencePreviewFilterListInput: InboundReferencePreviewFilterListInput;
  InboundReferencePreviewFilterInput: InboundReferencePreviewFilterInput;
  ExternalInboundReferenceFilterListInput: ExternalInboundReferenceFilterListInput;
  ExternalInboundReferenceFilterInput: ExternalInboundReferenceFilterInput;
  ExternalOutboundReferenceFilterListInput: ExternalOutboundReferenceFilterListInput;
  ExternalOutboundReferenceFilterInput: ExternalOutboundReferenceFilterInput;
  BrainNoteInboundReferencePreviewsFilterListInput: BrainNoteInboundReferencePreviewsFilterListInput;
  BrainNoteInboundReferencePreviewsFilterInput: BrainNoteInboundReferencePreviewsFilterInput;
  MarkdownRemarkFilterListInput: MarkdownRemarkFilterListInput;
  BrainNoteConnection: BrainNoteConnection;
  BrainNoteEdge: BrainNoteEdge;
  BrainNoteGroupConnection: BrainNoteGroupConnection;
  BrainNoteSortInput: BrainNoteSortInput;
};

export type dateformatDirectiveArgs = {   formatString?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>; };

export type dateformatDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = dateformatDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type linkDirectiveArgs = {   by?: Scalars['String'];
  from?: Maybe<Scalars['String']>;
  on?: Maybe<Scalars['String']>; };

export type linkDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = linkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type fileByRelativePathDirectiveArgs = {   from?: Maybe<Scalars['String']>; };

export type fileByRelativePathDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = fileByRelativePathDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type proxyDirectiveArgs = {   from: Scalars['String'];
  fromNode?: Scalars['Boolean']; };

export type proxyDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = proxyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type inferDirectiveArgs = {  };

export type inferDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = inferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type dontInferDirectiveArgs = {  };

export type dontInferDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = dontInferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type mimeTypesDirectiveArgs = {   types?: Array<Scalars['String']>; };

export type mimeTypesDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = mimeTypesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type childOfDirectiveArgs = {   mimeTypes?: Array<Scalars['String']>;
  types?: Array<Scalars['String']>; };

export type childOfDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = childOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type nodeInterfaceDirectiveArgs = {  };

export type nodeInterfaceDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = nodeInterfaceDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FileResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  sourceInstanceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prettySize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_modifiedTimeArgs, never>>;
  accessTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_accessTimeArgs, never>>;
  changeTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_changeTimeArgs, never>>;
  birthTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_birthTimeArgs, never>>;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeDirectory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nlink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rdev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ino?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mtimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ctimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_atimeArgs, never>>;
  mtime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_mtimeArgs, never>>;
  ctime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_ctimeArgs, never>>;
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  blksize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publicURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childrenImageSharp?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageSharp']>>>, ParentType, ContextType>;
  childImageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  childrenMdx?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mdx']>>>, ParentType, ContextType>;
  childMdx?: Resolver<Maybe<ResolversTypes['Mdx']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'File' | 'Directory' | 'Site' | 'SiteFunction' | 'SitePage' | 'SitePlugin' | 'SiteBuildMetadata' | 'ImageSharp' | 'Mdx' | 'MarkdownRemark' | 'BrainNote', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
};

export type InternalResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Internal'] = ResolversParentTypes['Internal']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentDigest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldOwners?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ignoreType?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mediaType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DirectoryResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Directory'] = ResolversParentTypes['Directory']> = {
  sourceInstanceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prettySize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_modifiedTimeArgs, never>>;
  accessTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_accessTimeArgs, never>>;
  changeTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_changeTimeArgs, never>>;
  birthTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_birthTimeArgs, never>>;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeDirectory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nlink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rdev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ino?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mtimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ctimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_atimeArgs, never>>;
  mtime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_mtimeArgs, never>>;
  ctime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_ctimeArgs, never>>;
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = {
  buildTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<Site_buildTimeArgs, never>>;
  siteMetadata?: Resolver<Maybe<ResolversTypes['SiteSiteMetadata']>, ParentType, ContextType>;
  port?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flags?: Resolver<Maybe<ResolversTypes['SiteFlags']>, ParentType, ContextType>;
  polyfill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pathPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jsxRuntime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFlagsResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteFlags'] = ResolversParentTypes['SiteFlags']> = {
  FAST_DEV?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  DEV_SSR?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  PARALLEL_SOURCING?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteSiteMetadata'] = ResolversParentTypes['SiteSiteMetadata']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social?: Resolver<Maybe<ResolversTypes['Social']>, ParentType, ContextType>;
  twitterHandle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywords?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['SiteSiteMetadataOrganization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataOrganizationResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteSiteMetadataOrganization'] = ResolversParentTypes['SiteSiteMetadataOrganization']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteFunction'] = ResolversParentTypes['SiteFunction']> = {
  functionRoute?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pluginName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalAbsoluteFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalRelativeFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeCompiledFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absoluteCompiledFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePage'] = ResolversParentTypes['SitePage']> = {
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  component?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  internalComponentName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  componentChunkName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageContext?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  pluginCreator?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type SitePluginResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePlugin'] = ResolversParentTypes['SitePlugin']> = {
  resolve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  browserAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ssrAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  pluginFilepath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pluginOptions?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  packageJson?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteBuildMetadata'] = ResolversParentTypes['SiteBuildMetadata']> = {
  buildTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<SiteBuildMetadata_buildTimeArgs, never>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GatsbyImageFormatResolvers = { NO_CHANGE: 'undefined', AUTO: 'auto', JPG: 'jpg', PNG: 'png', WEBP: 'webp', AVIF: 'avif' };

export type GatsbyImageLayoutResolvers = { FIXED: 'fixed', FULL_WIDTH: 'fullWidth', CONSTRAINED: 'constrained' };

export type GatsbyImagePlaceholderResolvers = { DOMINANT_COLOR: 'dominantColor', TRACED_SVG: 'tracedSVG', BLURRED: 'blurred', NONE: 'none' };

export type ImageFormatResolvers = { NO_CHANGE: 'undefined', AUTO: 'undefined', JPG: 'jpg', PNG: 'png', WEBP: 'webp', AVIF: 'avif' };

export type ImageFitResolvers = { COVER: 'cover', CONTAIN: 'contain', FILL: 'fill', INSIDE: 'inside', OUTSIDE: 'outside' };

export type ImageLayoutResolvers = { FIXED: 'fixed', FULL_WIDTH: 'fullWidth', CONSTRAINED: 'constrained' };

export type ImageCropFocusResolvers = { CENTER: 'undefined', NORTH: 1, NORTHEAST: 5, EAST: 2, SOUTHEAST: 6, SOUTH: 3, SOUTHWEST: 7, WEST: 4, NORTHWEST: 8, ENTROPY: 16, ATTENTION: 17 };

export type PotraceTurnPolicyResolvers = { TURNPOLICY_BLACK: 'black', TURNPOLICY_WHITE: 'white', TURNPOLICY_LEFT: 'left', TURNPOLICY_RIGHT: 'right', TURNPOLICY_MINORITY: 'minority', TURNPOLICY_MAJORITY: 'majority' };

export type ImageSharpResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharp'] = ResolversParentTypes['ImageSharp']> = {
  fixed?: Resolver<Maybe<ResolversTypes['ImageSharpFixed']>, ParentType, ContextType, RequireFields<ImageSharp_fixedArgs, 'jpegProgressive' | 'pngCompressionSpeed' | 'grayscale' | 'toFormat' | 'toFormatBase64' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim'>>;
  fluid?: Resolver<Maybe<ResolversTypes['ImageSharpFluid']>, ParentType, ContextType, RequireFields<ImageSharp_fluidArgs, 'grayscale' | 'jpegProgressive' | 'pngCompressionSpeed' | 'toFormat' | 'toFormatBase64' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim' | 'sizes' | 'srcSetBreakpoints'>>;
  gatsbyImageData?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<ImageSharp_gatsbyImageDataArgs, 'layout'>>;
  original?: Resolver<Maybe<ResolversTypes['ImageSharpOriginal']>, ParentType, ContextType>;
  resize?: Resolver<Maybe<ResolversTypes['ImageSharpResize']>, ParentType, ContextType, RequireFields<ImageSharp_resizeArgs, 'jpegProgressive' | 'pngCompressionLevel' | 'pngCompressionSpeed' | 'grayscale' | 'base64' | 'toFormat' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFixedResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpFixed'] = ResolversParentTypes['ImageSharpFixed']> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFluidResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpFluid'] = ResolversParentTypes['ImageSharpFluid']> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sizes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presentationWidth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  presentationHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImagePlaceholderResolvers = { DOMINANT_COLOR: 'dominantColor', TRACED_SVG: 'tracedSVG', BLURRED: 'blurred', NONE: 'none' };

export type ImageSharpOriginalResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpOriginal'] = ResolversParentTypes['ImageSharpOriginal']> = {
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpResizeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpResize'] = ResolversParentTypes['ImageSharpResize']> = {
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MdxFrontmatterResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MdxFrontmatter'] = ResolversParentTypes['MdxFrontmatter']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MdxHeadingMdxResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MdxHeadingMdx'] = ResolversParentTypes['MdxHeadingMdx']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MdxWordCountResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MdxWordCount'] = ResolversParentTypes['MdxWordCount']> = {
  paragraphs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sentences?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  words?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MdxResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Mdx'] = ResolversParentTypes['Mdx']> = {
  rawBody?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileAbsolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  frontmatter?: Resolver<ResolversTypes['Frontmatter'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  excerpt?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<Mdx_excerptArgs, 'pruneLength' | 'truncate'>>;
  headings?: Resolver<Maybe<Array<Maybe<ResolversTypes['MdxHeadingMdx']>>>, ParentType, ContextType, RequireFields<Mdx_headingsArgs, never>>;
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mdxAST?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  tableOfContents?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mdx_tableOfContentsArgs, never>>;
  timeToRead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wordCount?: Resolver<Maybe<ResolversTypes['MdxWordCount']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['MdxFields']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MdxFieldsResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MdxFields'] = ResolversParentTypes['MdxFields']> = {
  readingTime?: Resolver<Maybe<ResolversTypes['MdxFieldsReadingTime']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MdxFieldsReadingTimeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MdxFieldsReadingTime'] = ResolversParentTypes['MdxFieldsReadingTime']> = {
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minutes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  words?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownHeadingResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MarkdownHeading'] = ResolversParentTypes['MarkdownHeading']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownWordCountResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MarkdownWordCount'] = ResolversParentTypes['MarkdownWordCount']> = {
  paragraphs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sentences?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  words?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MarkdownRemark'] = ResolversParentTypes['MarkdownRemark']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  frontmatter?: Resolver<Maybe<ResolversTypes['MarkdownRemarkFrontmatter']>, ParentType, ContextType>;
  excerpt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MarkdownRemark_excerptArgs, 'pruneLength' | 'truncate' | 'format'>>;
  rawMarkdownBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['MarkdownRemarkFields']>, ParentType, ContextType>;
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  htmlAst?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  excerptAst?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MarkdownRemark_excerptAstArgs, 'pruneLength' | 'truncate'>>;
  headings?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarkdownHeading']>>>, ParentType, ContextType, RequireFields<MarkdownRemark_headingsArgs, never>>;
  timeToRead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tableOfContents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MarkdownRemark_tableOfContentsArgs, 'absolute' | 'pathToSlugField'>>;
  wordCount?: Resolver<Maybe<ResolversTypes['MarkdownWordCount']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkFrontmatterResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MarkdownRemarkFrontmatter'] = ResolversParentTypes['MarkdownRemarkFrontmatter']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<MarkdownRemarkFrontmatter_dateArgs, never>>;
  updated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<MarkdownRemarkFrontmatter_updatedArgs, never>>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<MarkdownRemarkFrontmatter_createdArgs, never>>;
  date_updated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<MarkdownRemarkFrontmatter_date_updatedArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkFieldsResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MarkdownRemarkFields'] = ResolversParentTypes['MarkdownRemarkFields']> = {
  readingTime?: Resolver<Maybe<ResolversTypes['MarkdownRemarkFieldsReadingTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkFieldsReadingTimeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MarkdownRemarkFieldsReadingTime'] = ResolversParentTypes['MarkdownRemarkFieldsReadingTime']> = {
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minutes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  words?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrainNoteResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['BrainNote'] = ResolversParentTypes['BrainNote']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rawContent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  noteTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aliases?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  outboundReferences?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  outboundReferenceNotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['BrainNote']>>>, ParentType, ContextType>;
  inboundReferences?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  inboundReferenceNotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['BrainNote']>>>, ParentType, ContextType>;
  inboundReferencePreview?: Resolver<Maybe<Array<Maybe<ResolversTypes['InboundReferencePreview']>>>, ParentType, ContextType>;
  externalInboundReferences?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExternalInboundReference']>>>, ParentType, ContextType>;
  externalOutboundReferences?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExternalOutboundReference']>>>, ParentType, ContextType>;
  childMdx?: Resolver<Maybe<ResolversTypes['Mdx']>, ParentType, ContextType>;
  absolutePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inboundReferencePreviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['BrainNoteInboundReferencePreviews']>>>, ParentType, ContextType>;
  childrenMdx?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mdx']>>>, ParentType, ContextType>;
  childrenMarkdownRemark?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarkdownRemark']>>>, ParentType, ContextType>;
  childMarkdownRemark?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrainNoteInboundReferencePreviewsResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['BrainNoteInboundReferencePreviews'] = ResolversParentTypes['BrainNoteInboundReferencePreviews']> = {
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previewMarkdown?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previewHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalInboundReferenceResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ExternalInboundReference'] = ResolversParentTypes['ExternalInboundReference']> = {
  siteName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourcePage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewHtml?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalOutboundReferenceResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ExternalOutboundReference'] = ResolversParentTypes['ExternalOutboundReference']> = {
  targetSite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewHtml?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InboundReferencePreviewResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['InboundReferencePreview'] = ResolversParentTypes['InboundReferencePreview']> = {
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewHtml?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Social'] = ResolversParentTypes['Social']> = {
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FrontmatterResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Frontmatter'] = ResolversParentTypes['Frontmatter']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<Frontmatter_dateArgs, never>>;
  cover_image?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  public?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filters?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  published?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<Frontmatter_updatedArgs, never>>;
  external_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  epistemic_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<Frontmatter_createdArgs, never>>;
  date_updated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<Frontmatter_date_updatedArgs, never>>;
  social_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  abstract?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<Query_fileArgs, never>>;
  allFile?: Resolver<ResolversTypes['FileConnection'], ParentType, ContextType, RequireFields<Query_allFileArgs, never>>;
  directory?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType, RequireFields<Query_directoryArgs, never>>;
  allDirectory?: Resolver<ResolversTypes['DirectoryConnection'], ParentType, ContextType, RequireFields<Query_allDirectoryArgs, never>>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType, RequireFields<Query_siteArgs, never>>;
  allSite?: Resolver<ResolversTypes['SiteConnection'], ParentType, ContextType, RequireFields<Query_allSiteArgs, never>>;
  siteFunction?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType, RequireFields<Query_siteFunctionArgs, never>>;
  allSiteFunction?: Resolver<ResolversTypes['SiteFunctionConnection'], ParentType, ContextType, RequireFields<Query_allSiteFunctionArgs, never>>;
  sitePage?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType, RequireFields<Query_sitePageArgs, never>>;
  allSitePage?: Resolver<ResolversTypes['SitePageConnection'], ParentType, ContextType, RequireFields<Query_allSitePageArgs, never>>;
  sitePlugin?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType, RequireFields<Query_sitePluginArgs, never>>;
  allSitePlugin?: Resolver<ResolversTypes['SitePluginConnection'], ParentType, ContextType, RequireFields<Query_allSitePluginArgs, never>>;
  siteBuildMetadata?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType, RequireFields<Query_siteBuildMetadataArgs, never>>;
  allSiteBuildMetadata?: Resolver<ResolversTypes['SiteBuildMetadataConnection'], ParentType, ContextType, RequireFields<Query_allSiteBuildMetadataArgs, never>>;
  imageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType, RequireFields<Query_imageSharpArgs, never>>;
  allImageSharp?: Resolver<ResolversTypes['ImageSharpConnection'], ParentType, ContextType, RequireFields<Query_allImageSharpArgs, never>>;
  mdx?: Resolver<Maybe<ResolversTypes['Mdx']>, ParentType, ContextType, RequireFields<Query_mdxArgs, never>>;
  allMdx?: Resolver<ResolversTypes['MdxConnection'], ParentType, ContextType, RequireFields<Query_allMdxArgs, never>>;
  markdownRemark?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType, RequireFields<Query_markdownRemarkArgs, never>>;
  allMarkdownRemark?: Resolver<ResolversTypes['MarkdownRemarkConnection'], ParentType, ContextType, RequireFields<Query_allMarkdownRemarkArgs, never>>;
  brainNote?: Resolver<Maybe<ResolversTypes['BrainNote']>, ParentType, ContextType, RequireFields<Query_brainNoteArgs, never>>;
  allBrainNote?: Resolver<ResolversTypes['BrainNoteConnection'], ParentType, ContextType, RequireFields<Query_allBrainNoteArgs, never>>;
};

export type FileConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['FileConnection'] = ResolversParentTypes['FileConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<FileConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['FileGroupConnection']>, ParentType, ContextType, RequireFields<FileConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['FileEdge'] = ResolversParentTypes['FileEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileFieldsEnumResolvers = { sourceInstanceName: 'undefined', absolutePath: 'undefined', relativePath: 'undefined', extension: 'undefined', size: 'undefined', prettySize: 'undefined', modifiedTime: 'undefined', accessTime: 'undefined', changeTime: 'undefined', birthTime: 'undefined', root: 'undefined', dir: 'undefined', base: 'undefined', ext: 'undefined', name: 'undefined', relativeDirectory: 'undefined', dev: 'undefined', mode: 'undefined', nlink: 'undefined', uid: 'undefined', gid: 'undefined', rdev: 'undefined', ino: 'undefined', atimeMs: 'undefined', mtimeMs: 'undefined', ctimeMs: 'undefined', atime: 'undefined', mtime: 'undefined', ctime: 'undefined', birthtime: 'undefined', birthtimeMs: 'undefined', blksize: 'undefined', blocks: 'undefined', publicURL: 'undefined', childrenImageSharp: 'undefined', childrenImageSharp___fixed___base64: 'childrenImageSharp.fixed.base64', childrenImageSharp___fixed___tracedSVG: 'childrenImageSharp.fixed.tracedSVG', childrenImageSharp___fixed___aspectRatio: 'childrenImageSharp.fixed.aspectRatio', childrenImageSharp___fixed___width: 'childrenImageSharp.fixed.width', childrenImageSharp___fixed___height: 'childrenImageSharp.fixed.height', childrenImageSharp___fixed___src: 'childrenImageSharp.fixed.src', childrenImageSharp___fixed___srcSet: 'childrenImageSharp.fixed.srcSet', childrenImageSharp___fixed___srcWebp: 'childrenImageSharp.fixed.srcWebp', childrenImageSharp___fixed___srcSetWebp: 'childrenImageSharp.fixed.srcSetWebp', childrenImageSharp___fixed___originalName: 'childrenImageSharp.fixed.originalName', childrenImageSharp___fluid___base64: 'childrenImageSharp.fluid.base64', childrenImageSharp___fluid___tracedSVG: 'childrenImageSharp.fluid.tracedSVG', childrenImageSharp___fluid___aspectRatio: 'childrenImageSharp.fluid.aspectRatio', childrenImageSharp___fluid___src: 'childrenImageSharp.fluid.src', childrenImageSharp___fluid___srcSet: 'childrenImageSharp.fluid.srcSet', childrenImageSharp___fluid___srcWebp: 'childrenImageSharp.fluid.srcWebp', childrenImageSharp___fluid___srcSetWebp: 'childrenImageSharp.fluid.srcSetWebp', childrenImageSharp___fluid___sizes: 'childrenImageSharp.fluid.sizes', childrenImageSharp___fluid___originalImg: 'childrenImageSharp.fluid.originalImg', childrenImageSharp___fluid___originalName: 'childrenImageSharp.fluid.originalName', childrenImageSharp___fluid___presentationWidth: 'childrenImageSharp.fluid.presentationWidth', childrenImageSharp___fluid___presentationHeight: 'childrenImageSharp.fluid.presentationHeight', childrenImageSharp___gatsbyImageData: 'childrenImageSharp.gatsbyImageData', childrenImageSharp___original___width: 'childrenImageSharp.original.width', childrenImageSharp___original___height: 'childrenImageSharp.original.height', childrenImageSharp___original___src: 'childrenImageSharp.original.src', childrenImageSharp___resize___src: 'childrenImageSharp.resize.src', childrenImageSharp___resize___tracedSVG: 'childrenImageSharp.resize.tracedSVG', childrenImageSharp___resize___width: 'childrenImageSharp.resize.width', childrenImageSharp___resize___height: 'childrenImageSharp.resize.height', childrenImageSharp___resize___aspectRatio: 'childrenImageSharp.resize.aspectRatio', childrenImageSharp___resize___originalName: 'childrenImageSharp.resize.originalName', childrenImageSharp___id: 'childrenImageSharp.id', childrenImageSharp___parent___id: 'childrenImageSharp.parent.id', childrenImageSharp___parent___parent___id: 'childrenImageSharp.parent.parent.id', childrenImageSharp___parent___parent___children: 'childrenImageSharp.parent.parent.children', childrenImageSharp___parent___children: 'childrenImageSharp.parent.children', childrenImageSharp___parent___children___id: 'childrenImageSharp.parent.children.id', childrenImageSharp___parent___children___children: 'childrenImageSharp.parent.children.children', childrenImageSharp___parent___internal___content: 'childrenImageSharp.parent.internal.content', childrenImageSharp___parent___internal___contentDigest: 'childrenImageSharp.parent.internal.contentDigest', childrenImageSharp___parent___internal___description: 'childrenImageSharp.parent.internal.description', childrenImageSharp___parent___internal___fieldOwners: 'childrenImageSharp.parent.internal.fieldOwners', childrenImageSharp___parent___internal___ignoreType: 'childrenImageSharp.parent.internal.ignoreType', childrenImageSharp___parent___internal___mediaType: 'childrenImageSharp.parent.internal.mediaType', childrenImageSharp___parent___internal___owner: 'childrenImageSharp.parent.internal.owner', childrenImageSharp___parent___internal___type: 'childrenImageSharp.parent.internal.type', childrenImageSharp___children: 'childrenImageSharp.children', childrenImageSharp___children___id: 'childrenImageSharp.children.id', childrenImageSharp___children___parent___id: 'childrenImageSharp.children.parent.id', childrenImageSharp___children___parent___children: 'childrenImageSharp.children.parent.children', childrenImageSharp___children___children: 'childrenImageSharp.children.children', childrenImageSharp___children___children___id: 'childrenImageSharp.children.children.id', childrenImageSharp___children___children___children: 'childrenImageSharp.children.children.children', childrenImageSharp___children___internal___content: 'childrenImageSharp.children.internal.content', childrenImageSharp___children___internal___contentDigest: 'childrenImageSharp.children.internal.contentDigest', childrenImageSharp___children___internal___description: 'childrenImageSharp.children.internal.description', childrenImageSharp___children___internal___fieldOwners: 'childrenImageSharp.children.internal.fieldOwners', childrenImageSharp___children___internal___ignoreType: 'childrenImageSharp.children.internal.ignoreType', childrenImageSharp___children___internal___mediaType: 'childrenImageSharp.children.internal.mediaType', childrenImageSharp___children___internal___owner: 'childrenImageSharp.children.internal.owner', childrenImageSharp___children___internal___type: 'childrenImageSharp.children.internal.type', childrenImageSharp___internal___content: 'childrenImageSharp.internal.content', childrenImageSharp___internal___contentDigest: 'childrenImageSharp.internal.contentDigest', childrenImageSharp___internal___description: 'childrenImageSharp.internal.description', childrenImageSharp___internal___fieldOwners: 'childrenImageSharp.internal.fieldOwners', childrenImageSharp___internal___ignoreType: 'childrenImageSharp.internal.ignoreType', childrenImageSharp___internal___mediaType: 'childrenImageSharp.internal.mediaType', childrenImageSharp___internal___owner: 'childrenImageSharp.internal.owner', childrenImageSharp___internal___type: 'childrenImageSharp.internal.type', childImageSharp___fixed___base64: 'childImageSharp.fixed.base64', childImageSharp___fixed___tracedSVG: 'childImageSharp.fixed.tracedSVG', childImageSharp___fixed___aspectRatio: 'childImageSharp.fixed.aspectRatio', childImageSharp___fixed___width: 'childImageSharp.fixed.width', childImageSharp___fixed___height: 'childImageSharp.fixed.height', childImageSharp___fixed___src: 'childImageSharp.fixed.src', childImageSharp___fixed___srcSet: 'childImageSharp.fixed.srcSet', childImageSharp___fixed___srcWebp: 'childImageSharp.fixed.srcWebp', childImageSharp___fixed___srcSetWebp: 'childImageSharp.fixed.srcSetWebp', childImageSharp___fixed___originalName: 'childImageSharp.fixed.originalName', childImageSharp___fluid___base64: 'childImageSharp.fluid.base64', childImageSharp___fluid___tracedSVG: 'childImageSharp.fluid.tracedSVG', childImageSharp___fluid___aspectRatio: 'childImageSharp.fluid.aspectRatio', childImageSharp___fluid___src: 'childImageSharp.fluid.src', childImageSharp___fluid___srcSet: 'childImageSharp.fluid.srcSet', childImageSharp___fluid___srcWebp: 'childImageSharp.fluid.srcWebp', childImageSharp___fluid___srcSetWebp: 'childImageSharp.fluid.srcSetWebp', childImageSharp___fluid___sizes: 'childImageSharp.fluid.sizes', childImageSharp___fluid___originalImg: 'childImageSharp.fluid.originalImg', childImageSharp___fluid___originalName: 'childImageSharp.fluid.originalName', childImageSharp___fluid___presentationWidth: 'childImageSharp.fluid.presentationWidth', childImageSharp___fluid___presentationHeight: 'childImageSharp.fluid.presentationHeight', childImageSharp___gatsbyImageData: 'childImageSharp.gatsbyImageData', childImageSharp___original___width: 'childImageSharp.original.width', childImageSharp___original___height: 'childImageSharp.original.height', childImageSharp___original___src: 'childImageSharp.original.src', childImageSharp___resize___src: 'childImageSharp.resize.src', childImageSharp___resize___tracedSVG: 'childImageSharp.resize.tracedSVG', childImageSharp___resize___width: 'childImageSharp.resize.width', childImageSharp___resize___height: 'childImageSharp.resize.height', childImageSharp___resize___aspectRatio: 'childImageSharp.resize.aspectRatio', childImageSharp___resize___originalName: 'childImageSharp.resize.originalName', childImageSharp___id: 'childImageSharp.id', childImageSharp___parent___id: 'childImageSharp.parent.id', childImageSharp___parent___parent___id: 'childImageSharp.parent.parent.id', childImageSharp___parent___parent___children: 'childImageSharp.parent.parent.children', childImageSharp___parent___children: 'childImageSharp.parent.children', childImageSharp___parent___children___id: 'childImageSharp.parent.children.id', childImageSharp___parent___children___children: 'childImageSharp.parent.children.children', childImageSharp___parent___internal___content: 'childImageSharp.parent.internal.content', childImageSharp___parent___internal___contentDigest: 'childImageSharp.parent.internal.contentDigest', childImageSharp___parent___internal___description: 'childImageSharp.parent.internal.description', childImageSharp___parent___internal___fieldOwners: 'childImageSharp.parent.internal.fieldOwners', childImageSharp___parent___internal___ignoreType: 'childImageSharp.parent.internal.ignoreType', childImageSharp___parent___internal___mediaType: 'childImageSharp.parent.internal.mediaType', childImageSharp___parent___internal___owner: 'childImageSharp.parent.internal.owner', childImageSharp___parent___internal___type: 'childImageSharp.parent.internal.type', childImageSharp___children: 'childImageSharp.children', childImageSharp___children___id: 'childImageSharp.children.id', childImageSharp___children___parent___id: 'childImageSharp.children.parent.id', childImageSharp___children___parent___children: 'childImageSharp.children.parent.children', childImageSharp___children___children: 'childImageSharp.children.children', childImageSharp___children___children___id: 'childImageSharp.children.children.id', childImageSharp___children___children___children: 'childImageSharp.children.children.children', childImageSharp___children___internal___content: 'childImageSharp.children.internal.content', childImageSharp___children___internal___contentDigest: 'childImageSharp.children.internal.contentDigest', childImageSharp___children___internal___description: 'childImageSharp.children.internal.description', childImageSharp___children___internal___fieldOwners: 'childImageSharp.children.internal.fieldOwners', childImageSharp___children___internal___ignoreType: 'childImageSharp.children.internal.ignoreType', childImageSharp___children___internal___mediaType: 'childImageSharp.children.internal.mediaType', childImageSharp___children___internal___owner: 'childImageSharp.children.internal.owner', childImageSharp___children___internal___type: 'childImageSharp.children.internal.type', childImageSharp___internal___content: 'childImageSharp.internal.content', childImageSharp___internal___contentDigest: 'childImageSharp.internal.contentDigest', childImageSharp___internal___description: 'childImageSharp.internal.description', childImageSharp___internal___fieldOwners: 'childImageSharp.internal.fieldOwners', childImageSharp___internal___ignoreType: 'childImageSharp.internal.ignoreType', childImageSharp___internal___mediaType: 'childImageSharp.internal.mediaType', childImageSharp___internal___owner: 'childImageSharp.internal.owner', childImageSharp___internal___type: 'childImageSharp.internal.type', childrenMdx: 'undefined', childrenMdx___rawBody: 'childrenMdx.rawBody', childrenMdx___fileAbsolutePath: 'childrenMdx.fileAbsolutePath', childrenMdx___frontmatter___title: 'childrenMdx.frontmatter.title', childrenMdx___frontmatter___description: 'childrenMdx.frontmatter.description', childrenMdx___frontmatter___date: 'childrenMdx.frontmatter.date', childrenMdx___frontmatter___cover_image___sourceInstanceName: 'childrenMdx.frontmatter.cover_image.sourceInstanceName', childrenMdx___frontmatter___cover_image___absolutePath: 'childrenMdx.frontmatter.cover_image.absolutePath', childrenMdx___frontmatter___cover_image___relativePath: 'childrenMdx.frontmatter.cover_image.relativePath', childrenMdx___frontmatter___cover_image___extension: 'childrenMdx.frontmatter.cover_image.extension', childrenMdx___frontmatter___cover_image___size: 'childrenMdx.frontmatter.cover_image.size', childrenMdx___frontmatter___cover_image___prettySize: 'childrenMdx.frontmatter.cover_image.prettySize', childrenMdx___frontmatter___cover_image___modifiedTime: 'childrenMdx.frontmatter.cover_image.modifiedTime', childrenMdx___frontmatter___cover_image___accessTime: 'childrenMdx.frontmatter.cover_image.accessTime', childrenMdx___frontmatter___cover_image___changeTime: 'childrenMdx.frontmatter.cover_image.changeTime', childrenMdx___frontmatter___cover_image___birthTime: 'childrenMdx.frontmatter.cover_image.birthTime', childrenMdx___frontmatter___cover_image___root: 'childrenMdx.frontmatter.cover_image.root', childrenMdx___frontmatter___cover_image___dir: 'childrenMdx.frontmatter.cover_image.dir', childrenMdx___frontmatter___cover_image___base: 'childrenMdx.frontmatter.cover_image.base', childrenMdx___frontmatter___cover_image___ext: 'childrenMdx.frontmatter.cover_image.ext', childrenMdx___frontmatter___cover_image___name: 'childrenMdx.frontmatter.cover_image.name', childrenMdx___frontmatter___cover_image___relativeDirectory: 'childrenMdx.frontmatter.cover_image.relativeDirectory', childrenMdx___frontmatter___cover_image___dev: 'childrenMdx.frontmatter.cover_image.dev', childrenMdx___frontmatter___cover_image___mode: 'childrenMdx.frontmatter.cover_image.mode', childrenMdx___frontmatter___cover_image___nlink: 'childrenMdx.frontmatter.cover_image.nlink', childrenMdx___frontmatter___cover_image___uid: 'childrenMdx.frontmatter.cover_image.uid', childrenMdx___frontmatter___cover_image___gid: 'childrenMdx.frontmatter.cover_image.gid', childrenMdx___frontmatter___cover_image___rdev: 'childrenMdx.frontmatter.cover_image.rdev', childrenMdx___frontmatter___cover_image___ino: 'childrenMdx.frontmatter.cover_image.ino', childrenMdx___frontmatter___cover_image___atimeMs: 'childrenMdx.frontmatter.cover_image.atimeMs', childrenMdx___frontmatter___cover_image___mtimeMs: 'childrenMdx.frontmatter.cover_image.mtimeMs', childrenMdx___frontmatter___cover_image___ctimeMs: 'childrenMdx.frontmatter.cover_image.ctimeMs', childrenMdx___frontmatter___cover_image___atime: 'childrenMdx.frontmatter.cover_image.atime', childrenMdx___frontmatter___cover_image___mtime: 'childrenMdx.frontmatter.cover_image.mtime', childrenMdx___frontmatter___cover_image___ctime: 'childrenMdx.frontmatter.cover_image.ctime', childrenMdx___frontmatter___cover_image___birthtime: 'childrenMdx.frontmatter.cover_image.birthtime', childrenMdx___frontmatter___cover_image___birthtimeMs: 'childrenMdx.frontmatter.cover_image.birthtimeMs', childrenMdx___frontmatter___cover_image___blksize: 'childrenMdx.frontmatter.cover_image.blksize', childrenMdx___frontmatter___cover_image___blocks: 'childrenMdx.frontmatter.cover_image.blocks', childrenMdx___frontmatter___cover_image___publicURL: 'childrenMdx.frontmatter.cover_image.publicURL', childrenMdx___frontmatter___cover_image___childrenImageSharp: 'childrenMdx.frontmatter.cover_image.childrenImageSharp', childrenMdx___frontmatter___cover_image___childrenMdx: 'childrenMdx.frontmatter.cover_image.childrenMdx', childrenMdx___frontmatter___cover_image___id: 'childrenMdx.frontmatter.cover_image.id', childrenMdx___frontmatter___cover_image___children: 'childrenMdx.frontmatter.cover_image.children', childrenMdx___frontmatter___slug: 'childrenMdx.frontmatter.slug', childrenMdx___frontmatter___tags: 'childrenMdx.frontmatter.tags', childrenMdx___frontmatter___subtitle: 'childrenMdx.frontmatter.subtitle', childrenMdx___frontmatter___featured: 'childrenMdx.frontmatter.featured', childrenMdx___frontmatter___public: 'childrenMdx.frontmatter.public', childrenMdx___frontmatter___tag: 'childrenMdx.frontmatter.tag', childrenMdx___frontmatter___filters: 'childrenMdx.frontmatter.filters', childrenMdx___frontmatter___categories: 'childrenMdx.frontmatter.categories', childrenMdx___frontmatter___published: 'childrenMdx.frontmatter.published', childrenMdx___frontmatter___updated: 'childrenMdx.frontmatter.updated', childrenMdx___frontmatter___external_url: 'childrenMdx.frontmatter.external_url', childrenMdx___frontmatter___epistemic_status: 'childrenMdx.frontmatter.epistemic_status', childrenMdx___frontmatter___layout: 'childrenMdx.frontmatter.layout', childrenMdx___frontmatter___created: 'childrenMdx.frontmatter.created', childrenMdx___frontmatter___date_updated: 'childrenMdx.frontmatter.date_updated', childrenMdx___frontmatter___social_image: 'childrenMdx.frontmatter.social_image', childrenMdx___frontmatter___abstract: 'childrenMdx.frontmatter.abstract', childrenMdx___frontmatter___draft: 'childrenMdx.frontmatter.draft', childrenMdx___slug: 'childrenMdx.slug', childrenMdx___body: 'childrenMdx.body', childrenMdx___excerpt: 'childrenMdx.excerpt', childrenMdx___headings: 'childrenMdx.headings', childrenMdx___headings___value: 'childrenMdx.headings.value', childrenMdx___headings___depth: 'childrenMdx.headings.depth', childrenMdx___html: 'childrenMdx.html', childrenMdx___mdxAST: 'childrenMdx.mdxAST', childrenMdx___tableOfContents: 'childrenMdx.tableOfContents', childrenMdx___timeToRead: 'childrenMdx.timeToRead', childrenMdx___wordCount___paragraphs: 'childrenMdx.wordCount.paragraphs', childrenMdx___wordCount___sentences: 'childrenMdx.wordCount.sentences', childrenMdx___wordCount___words: 'childrenMdx.wordCount.words', childrenMdx___fields___readingTime___text: 'childrenMdx.fields.readingTime.text', childrenMdx___fields___readingTime___minutes: 'childrenMdx.fields.readingTime.minutes', childrenMdx___fields___readingTime___time: 'childrenMdx.fields.readingTime.time', childrenMdx___fields___readingTime___words: 'childrenMdx.fields.readingTime.words', childrenMdx___fields___source: 'childrenMdx.fields.source', childrenMdx___fields___slug: 'childrenMdx.fields.slug', childrenMdx___id: 'childrenMdx.id', childrenMdx___parent___id: 'childrenMdx.parent.id', childrenMdx___parent___parent___id: 'childrenMdx.parent.parent.id', childrenMdx___parent___parent___children: 'childrenMdx.parent.parent.children', childrenMdx___parent___children: 'childrenMdx.parent.children', childrenMdx___parent___children___id: 'childrenMdx.parent.children.id', childrenMdx___parent___children___children: 'childrenMdx.parent.children.children', childrenMdx___parent___internal___content: 'childrenMdx.parent.internal.content', childrenMdx___parent___internal___contentDigest: 'childrenMdx.parent.internal.contentDigest', childrenMdx___parent___internal___description: 'childrenMdx.parent.internal.description', childrenMdx___parent___internal___fieldOwners: 'childrenMdx.parent.internal.fieldOwners', childrenMdx___parent___internal___ignoreType: 'childrenMdx.parent.internal.ignoreType', childrenMdx___parent___internal___mediaType: 'childrenMdx.parent.internal.mediaType', childrenMdx___parent___internal___owner: 'childrenMdx.parent.internal.owner', childrenMdx___parent___internal___type: 'childrenMdx.parent.internal.type', childrenMdx___children: 'childrenMdx.children', childrenMdx___children___id: 'childrenMdx.children.id', childrenMdx___children___parent___id: 'childrenMdx.children.parent.id', childrenMdx___children___parent___children: 'childrenMdx.children.parent.children', childrenMdx___children___children: 'childrenMdx.children.children', childrenMdx___children___children___id: 'childrenMdx.children.children.id', childrenMdx___children___children___children: 'childrenMdx.children.children.children', childrenMdx___children___internal___content: 'childrenMdx.children.internal.content', childrenMdx___children___internal___contentDigest: 'childrenMdx.children.internal.contentDigest', childrenMdx___children___internal___description: 'childrenMdx.children.internal.description', childrenMdx___children___internal___fieldOwners: 'childrenMdx.children.internal.fieldOwners', childrenMdx___children___internal___ignoreType: 'childrenMdx.children.internal.ignoreType', childrenMdx___children___internal___mediaType: 'childrenMdx.children.internal.mediaType', childrenMdx___children___internal___owner: 'childrenMdx.children.internal.owner', childrenMdx___children___internal___type: 'childrenMdx.children.internal.type', childrenMdx___internal___content: 'childrenMdx.internal.content', childrenMdx___internal___contentDigest: 'childrenMdx.internal.contentDigest', childrenMdx___internal___description: 'childrenMdx.internal.description', childrenMdx___internal___fieldOwners: 'childrenMdx.internal.fieldOwners', childrenMdx___internal___ignoreType: 'childrenMdx.internal.ignoreType', childrenMdx___internal___mediaType: 'childrenMdx.internal.mediaType', childrenMdx___internal___owner: 'childrenMdx.internal.owner', childrenMdx___internal___type: 'childrenMdx.internal.type', childMdx___rawBody: 'childMdx.rawBody', childMdx___fileAbsolutePath: 'childMdx.fileAbsolutePath', childMdx___frontmatter___title: 'childMdx.frontmatter.title', childMdx___frontmatter___description: 'childMdx.frontmatter.description', childMdx___frontmatter___date: 'childMdx.frontmatter.date', childMdx___frontmatter___cover_image___sourceInstanceName: 'childMdx.frontmatter.cover_image.sourceInstanceName', childMdx___frontmatter___cover_image___absolutePath: 'childMdx.frontmatter.cover_image.absolutePath', childMdx___frontmatter___cover_image___relativePath: 'childMdx.frontmatter.cover_image.relativePath', childMdx___frontmatter___cover_image___extension: 'childMdx.frontmatter.cover_image.extension', childMdx___frontmatter___cover_image___size: 'childMdx.frontmatter.cover_image.size', childMdx___frontmatter___cover_image___prettySize: 'childMdx.frontmatter.cover_image.prettySize', childMdx___frontmatter___cover_image___modifiedTime: 'childMdx.frontmatter.cover_image.modifiedTime', childMdx___frontmatter___cover_image___accessTime: 'childMdx.frontmatter.cover_image.accessTime', childMdx___frontmatter___cover_image___changeTime: 'childMdx.frontmatter.cover_image.changeTime', childMdx___frontmatter___cover_image___birthTime: 'childMdx.frontmatter.cover_image.birthTime', childMdx___frontmatter___cover_image___root: 'childMdx.frontmatter.cover_image.root', childMdx___frontmatter___cover_image___dir: 'childMdx.frontmatter.cover_image.dir', childMdx___frontmatter___cover_image___base: 'childMdx.frontmatter.cover_image.base', childMdx___frontmatter___cover_image___ext: 'childMdx.frontmatter.cover_image.ext', childMdx___frontmatter___cover_image___name: 'childMdx.frontmatter.cover_image.name', childMdx___frontmatter___cover_image___relativeDirectory: 'childMdx.frontmatter.cover_image.relativeDirectory', childMdx___frontmatter___cover_image___dev: 'childMdx.frontmatter.cover_image.dev', childMdx___frontmatter___cover_image___mode: 'childMdx.frontmatter.cover_image.mode', childMdx___frontmatter___cover_image___nlink: 'childMdx.frontmatter.cover_image.nlink', childMdx___frontmatter___cover_image___uid: 'childMdx.frontmatter.cover_image.uid', childMdx___frontmatter___cover_image___gid: 'childMdx.frontmatter.cover_image.gid', childMdx___frontmatter___cover_image___rdev: 'childMdx.frontmatter.cover_image.rdev', childMdx___frontmatter___cover_image___ino: 'childMdx.frontmatter.cover_image.ino', childMdx___frontmatter___cover_image___atimeMs: 'childMdx.frontmatter.cover_image.atimeMs', childMdx___frontmatter___cover_image___mtimeMs: 'childMdx.frontmatter.cover_image.mtimeMs', childMdx___frontmatter___cover_image___ctimeMs: 'childMdx.frontmatter.cover_image.ctimeMs', childMdx___frontmatter___cover_image___atime: 'childMdx.frontmatter.cover_image.atime', childMdx___frontmatter___cover_image___mtime: 'childMdx.frontmatter.cover_image.mtime', childMdx___frontmatter___cover_image___ctime: 'childMdx.frontmatter.cover_image.ctime', childMdx___frontmatter___cover_image___birthtime: 'childMdx.frontmatter.cover_image.birthtime', childMdx___frontmatter___cover_image___birthtimeMs: 'childMdx.frontmatter.cover_image.birthtimeMs', childMdx___frontmatter___cover_image___blksize: 'childMdx.frontmatter.cover_image.blksize', childMdx___frontmatter___cover_image___blocks: 'childMdx.frontmatter.cover_image.blocks', childMdx___frontmatter___cover_image___publicURL: 'childMdx.frontmatter.cover_image.publicURL', childMdx___frontmatter___cover_image___childrenImageSharp: 'childMdx.frontmatter.cover_image.childrenImageSharp', childMdx___frontmatter___cover_image___childrenMdx: 'childMdx.frontmatter.cover_image.childrenMdx', childMdx___frontmatter___cover_image___id: 'childMdx.frontmatter.cover_image.id', childMdx___frontmatter___cover_image___children: 'childMdx.frontmatter.cover_image.children', childMdx___frontmatter___slug: 'childMdx.frontmatter.slug', childMdx___frontmatter___tags: 'childMdx.frontmatter.tags', childMdx___frontmatter___subtitle: 'childMdx.frontmatter.subtitle', childMdx___frontmatter___featured: 'childMdx.frontmatter.featured', childMdx___frontmatter___public: 'childMdx.frontmatter.public', childMdx___frontmatter___tag: 'childMdx.frontmatter.tag', childMdx___frontmatter___filters: 'childMdx.frontmatter.filters', childMdx___frontmatter___categories: 'childMdx.frontmatter.categories', childMdx___frontmatter___published: 'childMdx.frontmatter.published', childMdx___frontmatter___updated: 'childMdx.frontmatter.updated', childMdx___frontmatter___external_url: 'childMdx.frontmatter.external_url', childMdx___frontmatter___epistemic_status: 'childMdx.frontmatter.epistemic_status', childMdx___frontmatter___layout: 'childMdx.frontmatter.layout', childMdx___frontmatter___created: 'childMdx.frontmatter.created', childMdx___frontmatter___date_updated: 'childMdx.frontmatter.date_updated', childMdx___frontmatter___social_image: 'childMdx.frontmatter.social_image', childMdx___frontmatter___abstract: 'childMdx.frontmatter.abstract', childMdx___frontmatter___draft: 'childMdx.frontmatter.draft', childMdx___slug: 'childMdx.slug', childMdx___body: 'childMdx.body', childMdx___excerpt: 'childMdx.excerpt', childMdx___headings: 'childMdx.headings', childMdx___headings___value: 'childMdx.headings.value', childMdx___headings___depth: 'childMdx.headings.depth', childMdx___html: 'childMdx.html', childMdx___mdxAST: 'childMdx.mdxAST', childMdx___tableOfContents: 'childMdx.tableOfContents', childMdx___timeToRead: 'childMdx.timeToRead', childMdx___wordCount___paragraphs: 'childMdx.wordCount.paragraphs', childMdx___wordCount___sentences: 'childMdx.wordCount.sentences', childMdx___wordCount___words: 'childMdx.wordCount.words', childMdx___fields___readingTime___text: 'childMdx.fields.readingTime.text', childMdx___fields___readingTime___minutes: 'childMdx.fields.readingTime.minutes', childMdx___fields___readingTime___time: 'childMdx.fields.readingTime.time', childMdx___fields___readingTime___words: 'childMdx.fields.readingTime.words', childMdx___fields___source: 'childMdx.fields.source', childMdx___fields___slug: 'childMdx.fields.slug', childMdx___id: 'childMdx.id', childMdx___parent___id: 'childMdx.parent.id', childMdx___parent___parent___id: 'childMdx.parent.parent.id', childMdx___parent___parent___children: 'childMdx.parent.parent.children', childMdx___parent___children: 'childMdx.parent.children', childMdx___parent___children___id: 'childMdx.parent.children.id', childMdx___parent___children___children: 'childMdx.parent.children.children', childMdx___parent___internal___content: 'childMdx.parent.internal.content', childMdx___parent___internal___contentDigest: 'childMdx.parent.internal.contentDigest', childMdx___parent___internal___description: 'childMdx.parent.internal.description', childMdx___parent___internal___fieldOwners: 'childMdx.parent.internal.fieldOwners', childMdx___parent___internal___ignoreType: 'childMdx.parent.internal.ignoreType', childMdx___parent___internal___mediaType: 'childMdx.parent.internal.mediaType', childMdx___parent___internal___owner: 'childMdx.parent.internal.owner', childMdx___parent___internal___type: 'childMdx.parent.internal.type', childMdx___children: 'childMdx.children', childMdx___children___id: 'childMdx.children.id', childMdx___children___parent___id: 'childMdx.children.parent.id', childMdx___children___parent___children: 'childMdx.children.parent.children', childMdx___children___children: 'childMdx.children.children', childMdx___children___children___id: 'childMdx.children.children.id', childMdx___children___children___children: 'childMdx.children.children.children', childMdx___children___internal___content: 'childMdx.children.internal.content', childMdx___children___internal___contentDigest: 'childMdx.children.internal.contentDigest', childMdx___children___internal___description: 'childMdx.children.internal.description', childMdx___children___internal___fieldOwners: 'childMdx.children.internal.fieldOwners', childMdx___children___internal___ignoreType: 'childMdx.children.internal.ignoreType', childMdx___children___internal___mediaType: 'childMdx.children.internal.mediaType', childMdx___children___internal___owner: 'childMdx.children.internal.owner', childMdx___children___internal___type: 'childMdx.children.internal.type', childMdx___internal___content: 'childMdx.internal.content', childMdx___internal___contentDigest: 'childMdx.internal.contentDigest', childMdx___internal___description: 'childMdx.internal.description', childMdx___internal___fieldOwners: 'childMdx.internal.fieldOwners', childMdx___internal___ignoreType: 'childMdx.internal.ignoreType', childMdx___internal___mediaType: 'childMdx.internal.mediaType', childMdx___internal___owner: 'childMdx.internal.owner', childMdx___internal___type: 'childMdx.internal.type', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type FileGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['FileGroupConnection'] = ResolversParentTypes['FileGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<FileGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['FileGroupConnection']>, ParentType, ContextType, RequireFields<FileGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['DirectoryConnection'] = ResolversParentTypes['DirectoryConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<DirectoryConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['DirectoryGroupConnection']>, ParentType, ContextType, RequireFields<DirectoryConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['DirectoryEdge'] = ResolversParentTypes['DirectoryEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Directory'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryFieldsEnumResolvers = { sourceInstanceName: 'undefined', absolutePath: 'undefined', relativePath: 'undefined', extension: 'undefined', size: 'undefined', prettySize: 'undefined', modifiedTime: 'undefined', accessTime: 'undefined', changeTime: 'undefined', birthTime: 'undefined', root: 'undefined', dir: 'undefined', base: 'undefined', ext: 'undefined', name: 'undefined', relativeDirectory: 'undefined', dev: 'undefined', mode: 'undefined', nlink: 'undefined', uid: 'undefined', gid: 'undefined', rdev: 'undefined', ino: 'undefined', atimeMs: 'undefined', mtimeMs: 'undefined', ctimeMs: 'undefined', atime: 'undefined', mtime: 'undefined', ctime: 'undefined', birthtime: 'undefined', birthtimeMs: 'undefined', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type DirectoryGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['DirectoryGroupConnection'] = ResolversParentTypes['DirectoryGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<DirectoryGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['DirectoryGroupConnection']>, ParentType, ContextType, RequireFields<DirectoryGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteConnection'] = ResolversParentTypes['SiteConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteGroupConnection']>, ParentType, ContextType, RequireFields<SiteConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteEdge'] = ResolversParentTypes['SiteEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Site'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFieldsEnumResolvers = { buildTime: 'undefined', siteMetadata___title: 'siteMetadata.title', siteMetadata___description: 'siteMetadata.description', siteMetadata___author___name: 'siteMetadata.author.name', siteMetadata___author___summary: 'siteMetadata.author.summary', siteMetadata___siteUrl: 'siteMetadata.siteUrl', siteMetadata___social___twitter: 'siteMetadata.social.twitter', siteMetadata___twitterHandle: 'siteMetadata.twitterHandle', siteMetadata___keywords: 'siteMetadata.keywords', siteMetadata___canonicalUrl: 'siteMetadata.canonicalUrl', siteMetadata___organization___name: 'siteMetadata.organization.name', siteMetadata___organization___url: 'siteMetadata.organization.url', port: 'undefined', host: 'undefined', flags___FAST_DEV: 'flags.FAST_DEV', flags___DEV_SSR: 'flags.DEV_SSR', flags___PARALLEL_SOURCING: 'flags.PARALLEL_SOURCING', polyfill: 'undefined', pathPrefix: 'undefined', jsxRuntime: 'undefined', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type SiteGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteGroupConnection'] = ResolversParentTypes['SiteGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteGroupConnection']>, ParentType, ContextType, RequireFields<SiteGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteFunctionConnection'] = ResolversParentTypes['SiteFunctionConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteFunctionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteFunctionConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteFunctionGroupConnection']>, ParentType, ContextType, RequireFields<SiteFunctionConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteFunctionEdge'] = ResolversParentTypes['SiteFunctionEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SiteFunction'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionFieldsEnumResolvers = { functionRoute: 'undefined', pluginName: 'undefined', originalAbsoluteFilePath: 'undefined', originalRelativeFilePath: 'undefined', relativeCompiledFilePath: 'undefined', absoluteCompiledFilePath: 'undefined', matchPath: 'undefined', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type SiteFunctionGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteFunctionGroupConnection'] = ResolversParentTypes['SiteFunctionGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteFunctionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteFunctionGroupConnection']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePageConnection'] = ResolversParentTypes['SitePageConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePageConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SitePageGroupConnection']>, ParentType, ContextType, RequireFields<SitePageConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePageEdge'] = ResolversParentTypes['SitePageEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SitePage'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageFieldsEnumResolvers = { path: 'undefined', component: 'undefined', internalComponentName: 'undefined', componentChunkName: 'undefined', matchPath: 'undefined', pageContext: 'undefined', pluginCreator___resolve: 'pluginCreator.resolve', pluginCreator___name: 'pluginCreator.name', pluginCreator___version: 'pluginCreator.version', pluginCreator___nodeAPIs: 'pluginCreator.nodeAPIs', pluginCreator___browserAPIs: 'pluginCreator.browserAPIs', pluginCreator___ssrAPIs: 'pluginCreator.ssrAPIs', pluginCreator___pluginFilepath: 'pluginCreator.pluginFilepath', pluginCreator___pluginOptions: 'pluginCreator.pluginOptions', pluginCreator___packageJson: 'pluginCreator.packageJson', pluginCreator___id: 'pluginCreator.id', pluginCreator___parent___id: 'pluginCreator.parent.id', pluginCreator___parent___parent___id: 'pluginCreator.parent.parent.id', pluginCreator___parent___parent___children: 'pluginCreator.parent.parent.children', pluginCreator___parent___children: 'pluginCreator.parent.children', pluginCreator___parent___children___id: 'pluginCreator.parent.children.id', pluginCreator___parent___children___children: 'pluginCreator.parent.children.children', pluginCreator___parent___internal___content: 'pluginCreator.parent.internal.content', pluginCreator___parent___internal___contentDigest: 'pluginCreator.parent.internal.contentDigest', pluginCreator___parent___internal___description: 'pluginCreator.parent.internal.description', pluginCreator___parent___internal___fieldOwners: 'pluginCreator.parent.internal.fieldOwners', pluginCreator___parent___internal___ignoreType: 'pluginCreator.parent.internal.ignoreType', pluginCreator___parent___internal___mediaType: 'pluginCreator.parent.internal.mediaType', pluginCreator___parent___internal___owner: 'pluginCreator.parent.internal.owner', pluginCreator___parent___internal___type: 'pluginCreator.parent.internal.type', pluginCreator___children: 'pluginCreator.children', pluginCreator___children___id: 'pluginCreator.children.id', pluginCreator___children___parent___id: 'pluginCreator.children.parent.id', pluginCreator___children___parent___children: 'pluginCreator.children.parent.children', pluginCreator___children___children: 'pluginCreator.children.children', pluginCreator___children___children___id: 'pluginCreator.children.children.id', pluginCreator___children___children___children: 'pluginCreator.children.children.children', pluginCreator___children___internal___content: 'pluginCreator.children.internal.content', pluginCreator___children___internal___contentDigest: 'pluginCreator.children.internal.contentDigest', pluginCreator___children___internal___description: 'pluginCreator.children.internal.description', pluginCreator___children___internal___fieldOwners: 'pluginCreator.children.internal.fieldOwners', pluginCreator___children___internal___ignoreType: 'pluginCreator.children.internal.ignoreType', pluginCreator___children___internal___mediaType: 'pluginCreator.children.internal.mediaType', pluginCreator___children___internal___owner: 'pluginCreator.children.internal.owner', pluginCreator___children___internal___type: 'pluginCreator.children.internal.type', pluginCreator___internal___content: 'pluginCreator.internal.content', pluginCreator___internal___contentDigest: 'pluginCreator.internal.contentDigest', pluginCreator___internal___description: 'pluginCreator.internal.description', pluginCreator___internal___fieldOwners: 'pluginCreator.internal.fieldOwners', pluginCreator___internal___ignoreType: 'pluginCreator.internal.ignoreType', pluginCreator___internal___mediaType: 'pluginCreator.internal.mediaType', pluginCreator___internal___owner: 'pluginCreator.internal.owner', pluginCreator___internal___type: 'pluginCreator.internal.type', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type SitePageGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePageGroupConnection'] = ResolversParentTypes['SitePageGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePageGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SitePageGroupConnection']>, ParentType, ContextType, RequireFields<SitePageGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginConnection'] = ResolversParentTypes['SitePluginConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePluginConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SitePluginGroupConnection']>, ParentType, ContextType, RequireFields<SitePluginConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginEdge'] = ResolversParentTypes['SitePluginEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SitePlugin'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginFieldsEnumResolvers = { resolve: 'undefined', name: 'undefined', version: 'undefined', nodeAPIs: 'undefined', browserAPIs: 'undefined', ssrAPIs: 'undefined', pluginFilepath: 'undefined', pluginOptions: 'undefined', packageJson: 'undefined', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type SitePluginGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginGroupConnection'] = ResolversParentTypes['SitePluginGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePluginGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SitePluginGroupConnection']>, ParentType, ContextType, RequireFields<SitePluginGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteBuildMetadataConnection'] = ResolversParentTypes['SiteBuildMetadataConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteBuildMetadataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteBuildMetadataGroupConnection']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteBuildMetadataEdge'] = ResolversParentTypes['SiteBuildMetadataEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SiteBuildMetadata'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataFieldsEnumResolvers = { buildTime: 'undefined', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type SiteBuildMetadataGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteBuildMetadataGroupConnection'] = ResolversParentTypes['SiteBuildMetadataGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteBuildMetadataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteBuildMetadataGroupConnection']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpConnection'] = ResolversParentTypes['ImageSharpConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ImageSharpConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['ImageSharpGroupConnection']>, ParentType, ContextType, RequireFields<ImageSharpConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpEdge'] = ResolversParentTypes['ImageSharpEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ImageSharp'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFieldsEnumResolvers = { fixed___base64: 'fixed.base64', fixed___tracedSVG: 'fixed.tracedSVG', fixed___aspectRatio: 'fixed.aspectRatio', fixed___width: 'fixed.width', fixed___height: 'fixed.height', fixed___src: 'fixed.src', fixed___srcSet: 'fixed.srcSet', fixed___srcWebp: 'fixed.srcWebp', fixed___srcSetWebp: 'fixed.srcSetWebp', fixed___originalName: 'fixed.originalName', fluid___base64: 'fluid.base64', fluid___tracedSVG: 'fluid.tracedSVG', fluid___aspectRatio: 'fluid.aspectRatio', fluid___src: 'fluid.src', fluid___srcSet: 'fluid.srcSet', fluid___srcWebp: 'fluid.srcWebp', fluid___srcSetWebp: 'fluid.srcSetWebp', fluid___sizes: 'fluid.sizes', fluid___originalImg: 'fluid.originalImg', fluid___originalName: 'fluid.originalName', fluid___presentationWidth: 'fluid.presentationWidth', fluid___presentationHeight: 'fluid.presentationHeight', gatsbyImageData: 'undefined', original___width: 'original.width', original___height: 'original.height', original___src: 'original.src', resize___src: 'resize.src', resize___tracedSVG: 'resize.tracedSVG', resize___width: 'resize.width', resize___height: 'resize.height', resize___aspectRatio: 'resize.aspectRatio', resize___originalName: 'resize.originalName', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type ImageSharpGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpGroupConnection'] = ResolversParentTypes['ImageSharpGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['ImageSharpGroupConnection']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MdxConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MdxConnection'] = ResolversParentTypes['MdxConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['MdxEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Mdx']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MdxConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MdxConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MdxConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MdxConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['MdxGroupConnection']>, ParentType, ContextType, RequireFields<MdxConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MdxEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MdxEdge'] = ResolversParentTypes['MdxEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Mdx']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Mdx'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Mdx']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MdxFieldsEnumResolvers = { rawBody: 'undefined', fileAbsolutePath: 'undefined', frontmatter___title: 'frontmatter.title', frontmatter___description: 'frontmatter.description', frontmatter___date: 'frontmatter.date', frontmatter___cover_image___sourceInstanceName: 'frontmatter.cover_image.sourceInstanceName', frontmatter___cover_image___absolutePath: 'frontmatter.cover_image.absolutePath', frontmatter___cover_image___relativePath: 'frontmatter.cover_image.relativePath', frontmatter___cover_image___extension: 'frontmatter.cover_image.extension', frontmatter___cover_image___size: 'frontmatter.cover_image.size', frontmatter___cover_image___prettySize: 'frontmatter.cover_image.prettySize', frontmatter___cover_image___modifiedTime: 'frontmatter.cover_image.modifiedTime', frontmatter___cover_image___accessTime: 'frontmatter.cover_image.accessTime', frontmatter___cover_image___changeTime: 'frontmatter.cover_image.changeTime', frontmatter___cover_image___birthTime: 'frontmatter.cover_image.birthTime', frontmatter___cover_image___root: 'frontmatter.cover_image.root', frontmatter___cover_image___dir: 'frontmatter.cover_image.dir', frontmatter___cover_image___base: 'frontmatter.cover_image.base', frontmatter___cover_image___ext: 'frontmatter.cover_image.ext', frontmatter___cover_image___name: 'frontmatter.cover_image.name', frontmatter___cover_image___relativeDirectory: 'frontmatter.cover_image.relativeDirectory', frontmatter___cover_image___dev: 'frontmatter.cover_image.dev', frontmatter___cover_image___mode: 'frontmatter.cover_image.mode', frontmatter___cover_image___nlink: 'frontmatter.cover_image.nlink', frontmatter___cover_image___uid: 'frontmatter.cover_image.uid', frontmatter___cover_image___gid: 'frontmatter.cover_image.gid', frontmatter___cover_image___rdev: 'frontmatter.cover_image.rdev', frontmatter___cover_image___ino: 'frontmatter.cover_image.ino', frontmatter___cover_image___atimeMs: 'frontmatter.cover_image.atimeMs', frontmatter___cover_image___mtimeMs: 'frontmatter.cover_image.mtimeMs', frontmatter___cover_image___ctimeMs: 'frontmatter.cover_image.ctimeMs', frontmatter___cover_image___atime: 'frontmatter.cover_image.atime', frontmatter___cover_image___mtime: 'frontmatter.cover_image.mtime', frontmatter___cover_image___ctime: 'frontmatter.cover_image.ctime', frontmatter___cover_image___birthtime: 'frontmatter.cover_image.birthtime', frontmatter___cover_image___birthtimeMs: 'frontmatter.cover_image.birthtimeMs', frontmatter___cover_image___blksize: 'frontmatter.cover_image.blksize', frontmatter___cover_image___blocks: 'frontmatter.cover_image.blocks', frontmatter___cover_image___publicURL: 'frontmatter.cover_image.publicURL', frontmatter___cover_image___childrenImageSharp: 'frontmatter.cover_image.childrenImageSharp', frontmatter___cover_image___childrenImageSharp___gatsbyImageData: 'frontmatter.cover_image.childrenImageSharp.gatsbyImageData', frontmatter___cover_image___childrenImageSharp___id: 'frontmatter.cover_image.childrenImageSharp.id', frontmatter___cover_image___childrenImageSharp___children: 'frontmatter.cover_image.childrenImageSharp.children', frontmatter___cover_image___childImageSharp___gatsbyImageData: 'frontmatter.cover_image.childImageSharp.gatsbyImageData', frontmatter___cover_image___childImageSharp___id: 'frontmatter.cover_image.childImageSharp.id', frontmatter___cover_image___childImageSharp___children: 'frontmatter.cover_image.childImageSharp.children', frontmatter___cover_image___childrenMdx: 'frontmatter.cover_image.childrenMdx', frontmatter___cover_image___childrenMdx___rawBody: 'frontmatter.cover_image.childrenMdx.rawBody', frontmatter___cover_image___childrenMdx___fileAbsolutePath: 'frontmatter.cover_image.childrenMdx.fileAbsolutePath', frontmatter___cover_image___childrenMdx___slug: 'frontmatter.cover_image.childrenMdx.slug', frontmatter___cover_image___childrenMdx___body: 'frontmatter.cover_image.childrenMdx.body', frontmatter___cover_image___childrenMdx___excerpt: 'frontmatter.cover_image.childrenMdx.excerpt', frontmatter___cover_image___childrenMdx___headings: 'frontmatter.cover_image.childrenMdx.headings', frontmatter___cover_image___childrenMdx___html: 'frontmatter.cover_image.childrenMdx.html', frontmatter___cover_image___childrenMdx___mdxAST: 'frontmatter.cover_image.childrenMdx.mdxAST', frontmatter___cover_image___childrenMdx___tableOfContents: 'frontmatter.cover_image.childrenMdx.tableOfContents', frontmatter___cover_image___childrenMdx___timeToRead: 'frontmatter.cover_image.childrenMdx.timeToRead', frontmatter___cover_image___childrenMdx___id: 'frontmatter.cover_image.childrenMdx.id', frontmatter___cover_image___childrenMdx___children: 'frontmatter.cover_image.childrenMdx.children', frontmatter___cover_image___childMdx___rawBody: 'frontmatter.cover_image.childMdx.rawBody', frontmatter___cover_image___childMdx___fileAbsolutePath: 'frontmatter.cover_image.childMdx.fileAbsolutePath', frontmatter___cover_image___childMdx___slug: 'frontmatter.cover_image.childMdx.slug', frontmatter___cover_image___childMdx___body: 'frontmatter.cover_image.childMdx.body', frontmatter___cover_image___childMdx___excerpt: 'frontmatter.cover_image.childMdx.excerpt', frontmatter___cover_image___childMdx___headings: 'frontmatter.cover_image.childMdx.headings', frontmatter___cover_image___childMdx___html: 'frontmatter.cover_image.childMdx.html', frontmatter___cover_image___childMdx___mdxAST: 'frontmatter.cover_image.childMdx.mdxAST', frontmatter___cover_image___childMdx___tableOfContents: 'frontmatter.cover_image.childMdx.tableOfContents', frontmatter___cover_image___childMdx___timeToRead: 'frontmatter.cover_image.childMdx.timeToRead', frontmatter___cover_image___childMdx___id: 'frontmatter.cover_image.childMdx.id', frontmatter___cover_image___childMdx___children: 'frontmatter.cover_image.childMdx.children', frontmatter___cover_image___id: 'frontmatter.cover_image.id', frontmatter___cover_image___parent___id: 'frontmatter.cover_image.parent.id', frontmatter___cover_image___parent___children: 'frontmatter.cover_image.parent.children', frontmatter___cover_image___children: 'frontmatter.cover_image.children', frontmatter___cover_image___children___id: 'frontmatter.cover_image.children.id', frontmatter___cover_image___children___children: 'frontmatter.cover_image.children.children', frontmatter___cover_image___internal___content: 'frontmatter.cover_image.internal.content', frontmatter___cover_image___internal___contentDigest: 'frontmatter.cover_image.internal.contentDigest', frontmatter___cover_image___internal___description: 'frontmatter.cover_image.internal.description', frontmatter___cover_image___internal___fieldOwners: 'frontmatter.cover_image.internal.fieldOwners', frontmatter___cover_image___internal___ignoreType: 'frontmatter.cover_image.internal.ignoreType', frontmatter___cover_image___internal___mediaType: 'frontmatter.cover_image.internal.mediaType', frontmatter___cover_image___internal___owner: 'frontmatter.cover_image.internal.owner', frontmatter___cover_image___internal___type: 'frontmatter.cover_image.internal.type', frontmatter___slug: 'frontmatter.slug', frontmatter___tags: 'frontmatter.tags', frontmatter___subtitle: 'frontmatter.subtitle', frontmatter___featured: 'frontmatter.featured', frontmatter___public: 'frontmatter.public', frontmatter___tag: 'frontmatter.tag', frontmatter___filters: 'frontmatter.filters', frontmatter___categories: 'frontmatter.categories', frontmatter___published: 'frontmatter.published', frontmatter___updated: 'frontmatter.updated', frontmatter___external_url: 'frontmatter.external_url', frontmatter___epistemic_status: 'frontmatter.epistemic_status', frontmatter___layout: 'frontmatter.layout', frontmatter___created: 'frontmatter.created', frontmatter___date_updated: 'frontmatter.date_updated', frontmatter___social_image: 'frontmatter.social_image', frontmatter___abstract: 'frontmatter.abstract', frontmatter___draft: 'frontmatter.draft', slug: 'undefined', body: 'undefined', excerpt: 'undefined', headings: 'undefined', headings___value: 'headings.value', headings___depth: 'headings.depth', html: 'undefined', mdxAST: 'undefined', tableOfContents: 'undefined', timeToRead: 'undefined', wordCount___paragraphs: 'wordCount.paragraphs', wordCount___sentences: 'wordCount.sentences', wordCount___words: 'wordCount.words', fields___readingTime___text: 'fields.readingTime.text', fields___readingTime___minutes: 'fields.readingTime.minutes', fields___readingTime___time: 'fields.readingTime.time', fields___readingTime___words: 'fields.readingTime.words', fields___source: 'fields.source', fields___slug: 'fields.slug', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type MdxGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MdxGroupConnection'] = ResolversParentTypes['MdxGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['MdxEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Mdx']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MdxGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MdxGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MdxGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MdxGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['MdxGroupConnection']>, ParentType, ContextType, RequireFields<MdxGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MarkdownRemarkConnection'] = ResolversParentTypes['MarkdownRemarkConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['MarkdownRemarkEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MarkdownRemarkConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MarkdownRemarkConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MarkdownRemarkConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MarkdownRemarkConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['MarkdownRemarkGroupConnection']>, ParentType, ContextType, RequireFields<MarkdownRemarkConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MarkdownRemarkEdge'] = ResolversParentTypes['MarkdownRemarkEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MarkdownRemark'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkFieldsEnumResolvers = { id: 'undefined', frontmatter___title: 'frontmatter.title', frontmatter___tags: 'frontmatter.tags', frontmatter___date: 'frontmatter.date', frontmatter___updated: 'frontmatter.updated', frontmatter___created: 'frontmatter.created', frontmatter___date_updated: 'frontmatter.date_updated', excerpt: 'undefined', rawMarkdownBody: 'undefined', fields___readingTime___text: 'fields.readingTime.text', fields___readingTime___minutes: 'fields.readingTime.minutes', fields___readingTime___time: 'fields.readingTime.time', fields___readingTime___words: 'fields.readingTime.words', html: 'undefined', htmlAst: 'undefined', excerptAst: 'undefined', headings: 'undefined', headings___id: 'headings.id', headings___value: 'headings.value', headings___depth: 'headings.depth', timeToRead: 'undefined', tableOfContents: 'undefined', wordCount___paragraphs: 'wordCount.paragraphs', wordCount___sentences: 'wordCount.sentences', wordCount___words: 'wordCount.words', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type MarkdownRemarkGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['MarkdownRemarkGroupConnection'] = ResolversParentTypes['MarkdownRemarkGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['MarkdownRemarkEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MarkdownRemarkGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MarkdownRemarkGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MarkdownRemarkGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MarkdownRemarkGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['MarkdownRemarkGroupConnection']>, ParentType, ContextType, RequireFields<MarkdownRemarkGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrainNoteConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['BrainNoteConnection'] = ResolversParentTypes['BrainNoteConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['BrainNoteEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['BrainNote']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<BrainNoteConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<BrainNoteConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<BrainNoteConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<BrainNoteConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['BrainNoteGroupConnection']>, ParentType, ContextType, RequireFields<BrainNoteConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrainNoteEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['BrainNoteEdge'] = ResolversParentTypes['BrainNoteEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['BrainNote']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BrainNote'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['BrainNote']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrainNoteFieldsEnumResolvers = { title: 'undefined', slug: 'undefined', rawContent: 'undefined', content: 'undefined', noteTemplate: 'undefined', aliases: 'undefined', outboundReferences: 'undefined', outboundReferenceNotes: 'undefined', outboundReferenceNotes___title: 'outboundReferenceNotes.title', outboundReferenceNotes___slug: 'outboundReferenceNotes.slug', outboundReferenceNotes___rawContent: 'outboundReferenceNotes.rawContent', outboundReferenceNotes___content: 'outboundReferenceNotes.content', outboundReferenceNotes___noteTemplate: 'outboundReferenceNotes.noteTemplate', outboundReferenceNotes___aliases: 'outboundReferenceNotes.aliases', outboundReferenceNotes___outboundReferences: 'outboundReferenceNotes.outboundReferences', outboundReferenceNotes___outboundReferenceNotes: 'outboundReferenceNotes.outboundReferenceNotes', outboundReferenceNotes___outboundReferenceNotes___title: 'outboundReferenceNotes.outboundReferenceNotes.title', outboundReferenceNotes___outboundReferenceNotes___slug: 'outboundReferenceNotes.outboundReferenceNotes.slug', outboundReferenceNotes___outboundReferenceNotes___rawContent: 'outboundReferenceNotes.outboundReferenceNotes.rawContent', outboundReferenceNotes___outboundReferenceNotes___content: 'outboundReferenceNotes.outboundReferenceNotes.content', outboundReferenceNotes___outboundReferenceNotes___noteTemplate: 'outboundReferenceNotes.outboundReferenceNotes.noteTemplate', outboundReferenceNotes___outboundReferenceNotes___aliases: 'outboundReferenceNotes.outboundReferenceNotes.aliases', outboundReferenceNotes___outboundReferenceNotes___outboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferences', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___title: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.title', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___slug: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.slug', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___rawContent: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.rawContent', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___content: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.content', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___noteTemplate: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.noteTemplate', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___aliases: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.aliases', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___outboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.outboundReferences', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___inboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferences', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreview: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___externalInboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___absolutePath: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.absolutePath', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___childrenMdx: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.childrenMdx', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___id: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.id', outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___children: 'outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.children', outboundReferenceNotes___outboundReferenceNotes___inboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferences', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___title: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.title', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___slug: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.slug', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___rawContent: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.rawContent', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___content: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.content', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___noteTemplate: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.noteTemplate', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___aliases: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.aliases', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___outboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.outboundReferences', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___inboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferences', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreview: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___externalInboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___absolutePath: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.absolutePath', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___childrenMdx: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.childrenMdx', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___id: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.id', outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___children: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.children', outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreview: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview', outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreview___source: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview.source', outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreview___previewHtml: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview.previewHtml', outboundReferenceNotes___outboundReferenceNotes___externalInboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences', outboundReferenceNotes___outboundReferenceNotes___externalInboundReferences___siteName: 'outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.siteName', outboundReferenceNotes___outboundReferenceNotes___externalInboundReferences___sourcePage: 'outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.sourcePage', outboundReferenceNotes___outboundReferenceNotes___externalInboundReferences___sourceUrl: 'outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.sourceUrl', outboundReferenceNotes___outboundReferenceNotes___externalInboundReferences___previewHtml: 'outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.previewHtml', outboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences: 'outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences', outboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences___targetSite: 'outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.targetSite', outboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences___targetPage: 'outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.targetPage', outboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences___previewHtml: 'outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.previewHtml', outboundReferenceNotes___outboundReferenceNotes___childMdx___rawBody: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.rawBody', outboundReferenceNotes___outboundReferenceNotes___childMdx___fileAbsolutePath: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.fileAbsolutePath', outboundReferenceNotes___outboundReferenceNotes___childMdx___slug: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.slug', outboundReferenceNotes___outboundReferenceNotes___childMdx___body: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.body', outboundReferenceNotes___outboundReferenceNotes___childMdx___excerpt: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.excerpt', outboundReferenceNotes___outboundReferenceNotes___childMdx___headings: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.headings', outboundReferenceNotes___outboundReferenceNotes___childMdx___html: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.html', outboundReferenceNotes___outboundReferenceNotes___childMdx___mdxAST: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.mdxAST', outboundReferenceNotes___outboundReferenceNotes___childMdx___tableOfContents: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.tableOfContents', outboundReferenceNotes___outboundReferenceNotes___childMdx___timeToRead: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.timeToRead', outboundReferenceNotes___outboundReferenceNotes___childMdx___id: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.id', outboundReferenceNotes___outboundReferenceNotes___childMdx___children: 'outboundReferenceNotes.outboundReferenceNotes.childMdx.children', outboundReferenceNotes___outboundReferenceNotes___absolutePath: 'outboundReferenceNotes.outboundReferenceNotes.absolutePath', outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews', outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews___source: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.source', outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews___previewMarkdown: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.previewMarkdown', outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews___previewHtml: 'outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.previewHtml', outboundReferenceNotes___outboundReferenceNotes___childrenMdx: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___rawBody: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.rawBody', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___fileAbsolutePath: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.fileAbsolutePath', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___slug: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.slug', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___body: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.body', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___excerpt: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.excerpt', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___headings: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.headings', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___html: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.html', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___mdxAST: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.mdxAST', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___tableOfContents: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.tableOfContents', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___timeToRead: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.timeToRead', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___id: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.id', outboundReferenceNotes___outboundReferenceNotes___childrenMdx___children: 'outboundReferenceNotes.outboundReferenceNotes.childrenMdx.children', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___id: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.id', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___excerpt: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.excerpt', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___rawMarkdownBody: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___html: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.html', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___htmlAst: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.htmlAst', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___excerptAst: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.excerptAst', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___headings: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.headings', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___timeToRead: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.timeToRead', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___tableOfContents: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.tableOfContents', outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___children: 'outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.children', outboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___id: 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.id', outboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___excerpt: 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.excerpt', outboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___rawMarkdownBody: 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.rawMarkdownBody', outboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___html: 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.html', outboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___htmlAst: 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.htmlAst', outboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___excerptAst: 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.excerptAst', outboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___headings: 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.headings', outboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___timeToRead: 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.timeToRead', outboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___tableOfContents: 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.tableOfContents', outboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___children: 'outboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.children', outboundReferenceNotes___outboundReferenceNotes___id: 'outboundReferenceNotes.outboundReferenceNotes.id', outboundReferenceNotes___outboundReferenceNotes___parent___id: 'outboundReferenceNotes.outboundReferenceNotes.parent.id', outboundReferenceNotes___outboundReferenceNotes___parent___children: 'outboundReferenceNotes.outboundReferenceNotes.parent.children', outboundReferenceNotes___outboundReferenceNotes___children: 'outboundReferenceNotes.outboundReferenceNotes.children', outboundReferenceNotes___outboundReferenceNotes___children___id: 'outboundReferenceNotes.outboundReferenceNotes.children.id', outboundReferenceNotes___outboundReferenceNotes___children___children: 'outboundReferenceNotes.outboundReferenceNotes.children.children', outboundReferenceNotes___outboundReferenceNotes___internal___content: 'outboundReferenceNotes.outboundReferenceNotes.internal.content', outboundReferenceNotes___outboundReferenceNotes___internal___contentDigest: 'outboundReferenceNotes.outboundReferenceNotes.internal.contentDigest', outboundReferenceNotes___outboundReferenceNotes___internal___description: 'outboundReferenceNotes.outboundReferenceNotes.internal.description', outboundReferenceNotes___outboundReferenceNotes___internal___fieldOwners: 'outboundReferenceNotes.outboundReferenceNotes.internal.fieldOwners', outboundReferenceNotes___outboundReferenceNotes___internal___ignoreType: 'outboundReferenceNotes.outboundReferenceNotes.internal.ignoreType', outboundReferenceNotes___outboundReferenceNotes___internal___mediaType: 'outboundReferenceNotes.outboundReferenceNotes.internal.mediaType', outboundReferenceNotes___outboundReferenceNotes___internal___owner: 'outboundReferenceNotes.outboundReferenceNotes.internal.owner', outboundReferenceNotes___outboundReferenceNotes___internal___type: 'outboundReferenceNotes.outboundReferenceNotes.internal.type', outboundReferenceNotes___inboundReferences: 'outboundReferenceNotes.inboundReferences', outboundReferenceNotes___inboundReferenceNotes: 'outboundReferenceNotes.inboundReferenceNotes', outboundReferenceNotes___inboundReferenceNotes___title: 'outboundReferenceNotes.inboundReferenceNotes.title', outboundReferenceNotes___inboundReferenceNotes___slug: 'outboundReferenceNotes.inboundReferenceNotes.slug', outboundReferenceNotes___inboundReferenceNotes___rawContent: 'outboundReferenceNotes.inboundReferenceNotes.rawContent', outboundReferenceNotes___inboundReferenceNotes___content: 'outboundReferenceNotes.inboundReferenceNotes.content', outboundReferenceNotes___inboundReferenceNotes___noteTemplate: 'outboundReferenceNotes.inboundReferenceNotes.noteTemplate', outboundReferenceNotes___inboundReferenceNotes___aliases: 'outboundReferenceNotes.inboundReferenceNotes.aliases', outboundReferenceNotes___inboundReferenceNotes___outboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferences', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___title: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.title', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___slug: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.slug', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___rawContent: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.rawContent', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___content: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.content', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___noteTemplate: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.noteTemplate', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___aliases: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.aliases', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___outboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.outboundReferences', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___inboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferences', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreview: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___externalInboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___absolutePath: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.absolutePath', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___childrenMdx: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.childrenMdx', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___id: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.id', outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___children: 'outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.children', outboundReferenceNotes___inboundReferenceNotes___inboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferences', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___title: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.title', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___slug: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.slug', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___rawContent: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.rawContent', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___content: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.content', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___noteTemplate: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.noteTemplate', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___aliases: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.aliases', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___outboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.outboundReferences', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___inboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferences', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreview: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___externalInboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___absolutePath: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.absolutePath', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___childrenMdx: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.childrenMdx', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___id: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.id', outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___children: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.children', outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreview: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview', outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreview___source: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview.source', outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreview___previewHtml: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview.previewHtml', outboundReferenceNotes___inboundReferenceNotes___externalInboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences', outboundReferenceNotes___inboundReferenceNotes___externalInboundReferences___siteName: 'outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.siteName', outboundReferenceNotes___inboundReferenceNotes___externalInboundReferences___sourcePage: 'outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.sourcePage', outboundReferenceNotes___inboundReferenceNotes___externalInboundReferences___sourceUrl: 'outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.sourceUrl', outboundReferenceNotes___inboundReferenceNotes___externalInboundReferences___previewHtml: 'outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.previewHtml', outboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences: 'outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences', outboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences___targetSite: 'outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.targetSite', outboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences___targetPage: 'outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.targetPage', outboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences___previewHtml: 'outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.previewHtml', outboundReferenceNotes___inboundReferenceNotes___childMdx___rawBody: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.rawBody', outboundReferenceNotes___inboundReferenceNotes___childMdx___fileAbsolutePath: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.fileAbsolutePath', outboundReferenceNotes___inboundReferenceNotes___childMdx___slug: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.slug', outboundReferenceNotes___inboundReferenceNotes___childMdx___body: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.body', outboundReferenceNotes___inboundReferenceNotes___childMdx___excerpt: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.excerpt', outboundReferenceNotes___inboundReferenceNotes___childMdx___headings: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.headings', outboundReferenceNotes___inboundReferenceNotes___childMdx___html: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.html', outboundReferenceNotes___inboundReferenceNotes___childMdx___mdxAST: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.mdxAST', outboundReferenceNotes___inboundReferenceNotes___childMdx___tableOfContents: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.tableOfContents', outboundReferenceNotes___inboundReferenceNotes___childMdx___timeToRead: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.timeToRead', outboundReferenceNotes___inboundReferenceNotes___childMdx___id: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.id', outboundReferenceNotes___inboundReferenceNotes___childMdx___children: 'outboundReferenceNotes.inboundReferenceNotes.childMdx.children', outboundReferenceNotes___inboundReferenceNotes___absolutePath: 'outboundReferenceNotes.inboundReferenceNotes.absolutePath', outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews', outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews___source: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.source', outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews___previewMarkdown: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.previewMarkdown', outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews___previewHtml: 'outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.previewHtml', outboundReferenceNotes___inboundReferenceNotes___childrenMdx: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___rawBody: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.rawBody', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___fileAbsolutePath: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.fileAbsolutePath', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___slug: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.slug', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___body: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.body', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___excerpt: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.excerpt', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___headings: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.headings', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___html: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.html', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___mdxAST: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.mdxAST', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___tableOfContents: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.tableOfContents', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___timeToRead: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.timeToRead', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___id: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.id', outboundReferenceNotes___inboundReferenceNotes___childrenMdx___children: 'outboundReferenceNotes.inboundReferenceNotes.childrenMdx.children', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___id: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.id', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___excerpt: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.excerpt', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___rawMarkdownBody: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___html: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.html', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___htmlAst: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.htmlAst', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___excerptAst: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.excerptAst', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___headings: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.headings', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___timeToRead: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.timeToRead', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___tableOfContents: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.tableOfContents', outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___children: 'outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.children', outboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___id: 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.id', outboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___excerpt: 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.excerpt', outboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___rawMarkdownBody: 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.rawMarkdownBody', outboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___html: 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.html', outboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___htmlAst: 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.htmlAst', outboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___excerptAst: 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.excerptAst', outboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___headings: 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.headings', outboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___timeToRead: 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.timeToRead', outboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___tableOfContents: 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.tableOfContents', outboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___children: 'outboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.children', outboundReferenceNotes___inboundReferenceNotes___id: 'outboundReferenceNotes.inboundReferenceNotes.id', outboundReferenceNotes___inboundReferenceNotes___parent___id: 'outboundReferenceNotes.inboundReferenceNotes.parent.id', outboundReferenceNotes___inboundReferenceNotes___parent___children: 'outboundReferenceNotes.inboundReferenceNotes.parent.children', outboundReferenceNotes___inboundReferenceNotes___children: 'outboundReferenceNotes.inboundReferenceNotes.children', outboundReferenceNotes___inboundReferenceNotes___children___id: 'outboundReferenceNotes.inboundReferenceNotes.children.id', outboundReferenceNotes___inboundReferenceNotes___children___children: 'outboundReferenceNotes.inboundReferenceNotes.children.children', outboundReferenceNotes___inboundReferenceNotes___internal___content: 'outboundReferenceNotes.inboundReferenceNotes.internal.content', outboundReferenceNotes___inboundReferenceNotes___internal___contentDigest: 'outboundReferenceNotes.inboundReferenceNotes.internal.contentDigest', outboundReferenceNotes___inboundReferenceNotes___internal___description: 'outboundReferenceNotes.inboundReferenceNotes.internal.description', outboundReferenceNotes___inboundReferenceNotes___internal___fieldOwners: 'outboundReferenceNotes.inboundReferenceNotes.internal.fieldOwners', outboundReferenceNotes___inboundReferenceNotes___internal___ignoreType: 'outboundReferenceNotes.inboundReferenceNotes.internal.ignoreType', outboundReferenceNotes___inboundReferenceNotes___internal___mediaType: 'outboundReferenceNotes.inboundReferenceNotes.internal.mediaType', outboundReferenceNotes___inboundReferenceNotes___internal___owner: 'outboundReferenceNotes.inboundReferenceNotes.internal.owner', outboundReferenceNotes___inboundReferenceNotes___internal___type: 'outboundReferenceNotes.inboundReferenceNotes.internal.type', outboundReferenceNotes___inboundReferencePreview: 'outboundReferenceNotes.inboundReferencePreview', outboundReferenceNotes___inboundReferencePreview___source: 'outboundReferenceNotes.inboundReferencePreview.source', outboundReferenceNotes___inboundReferencePreview___previewHtml: 'outboundReferenceNotes.inboundReferencePreview.previewHtml', outboundReferenceNotes___externalInboundReferences: 'outboundReferenceNotes.externalInboundReferences', outboundReferenceNotes___externalInboundReferences___siteName: 'outboundReferenceNotes.externalInboundReferences.siteName', outboundReferenceNotes___externalInboundReferences___sourcePage: 'outboundReferenceNotes.externalInboundReferences.sourcePage', outboundReferenceNotes___externalInboundReferences___sourceUrl: 'outboundReferenceNotes.externalInboundReferences.sourceUrl', outboundReferenceNotes___externalInboundReferences___previewHtml: 'outboundReferenceNotes.externalInboundReferences.previewHtml', outboundReferenceNotes___externalOutboundReferences: 'outboundReferenceNotes.externalOutboundReferences', outboundReferenceNotes___externalOutboundReferences___targetSite: 'outboundReferenceNotes.externalOutboundReferences.targetSite', outboundReferenceNotes___externalOutboundReferences___targetPage: 'outboundReferenceNotes.externalOutboundReferences.targetPage', outboundReferenceNotes___externalOutboundReferences___previewHtml: 'outboundReferenceNotes.externalOutboundReferences.previewHtml', outboundReferenceNotes___childMdx___rawBody: 'outboundReferenceNotes.childMdx.rawBody', outboundReferenceNotes___childMdx___fileAbsolutePath: 'outboundReferenceNotes.childMdx.fileAbsolutePath', outboundReferenceNotes___childMdx___frontmatter___title: 'outboundReferenceNotes.childMdx.frontmatter.title', outboundReferenceNotes___childMdx___frontmatter___description: 'outboundReferenceNotes.childMdx.frontmatter.description', outboundReferenceNotes___childMdx___frontmatter___date: 'outboundReferenceNotes.childMdx.frontmatter.date', outboundReferenceNotes___childMdx___frontmatter___slug: 'outboundReferenceNotes.childMdx.frontmatter.slug', outboundReferenceNotes___childMdx___frontmatter___tags: 'outboundReferenceNotes.childMdx.frontmatter.tags', outboundReferenceNotes___childMdx___frontmatter___subtitle: 'outboundReferenceNotes.childMdx.frontmatter.subtitle', outboundReferenceNotes___childMdx___frontmatter___featured: 'outboundReferenceNotes.childMdx.frontmatter.featured', outboundReferenceNotes___childMdx___frontmatter___public: 'outboundReferenceNotes.childMdx.frontmatter.public', outboundReferenceNotes___childMdx___frontmatter___tag: 'outboundReferenceNotes.childMdx.frontmatter.tag', outboundReferenceNotes___childMdx___frontmatter___filters: 'outboundReferenceNotes.childMdx.frontmatter.filters', outboundReferenceNotes___childMdx___frontmatter___categories: 'outboundReferenceNotes.childMdx.frontmatter.categories', outboundReferenceNotes___childMdx___frontmatter___published: 'outboundReferenceNotes.childMdx.frontmatter.published', outboundReferenceNotes___childMdx___frontmatter___updated: 'outboundReferenceNotes.childMdx.frontmatter.updated', outboundReferenceNotes___childMdx___frontmatter___external_url: 'outboundReferenceNotes.childMdx.frontmatter.external_url', outboundReferenceNotes___childMdx___frontmatter___epistemic_status: 'outboundReferenceNotes.childMdx.frontmatter.epistemic_status', outboundReferenceNotes___childMdx___frontmatter___layout: 'outboundReferenceNotes.childMdx.frontmatter.layout', outboundReferenceNotes___childMdx___frontmatter___created: 'outboundReferenceNotes.childMdx.frontmatter.created', outboundReferenceNotes___childMdx___frontmatter___date_updated: 'outboundReferenceNotes.childMdx.frontmatter.date_updated', outboundReferenceNotes___childMdx___frontmatter___social_image: 'outboundReferenceNotes.childMdx.frontmatter.social_image', outboundReferenceNotes___childMdx___frontmatter___abstract: 'outboundReferenceNotes.childMdx.frontmatter.abstract', outboundReferenceNotes___childMdx___frontmatter___draft: 'outboundReferenceNotes.childMdx.frontmatter.draft', outboundReferenceNotes___childMdx___slug: 'outboundReferenceNotes.childMdx.slug', outboundReferenceNotes___childMdx___body: 'outboundReferenceNotes.childMdx.body', outboundReferenceNotes___childMdx___excerpt: 'outboundReferenceNotes.childMdx.excerpt', outboundReferenceNotes___childMdx___headings: 'outboundReferenceNotes.childMdx.headings', outboundReferenceNotes___childMdx___headings___value: 'outboundReferenceNotes.childMdx.headings.value', outboundReferenceNotes___childMdx___headings___depth: 'outboundReferenceNotes.childMdx.headings.depth', outboundReferenceNotes___childMdx___html: 'outboundReferenceNotes.childMdx.html', outboundReferenceNotes___childMdx___mdxAST: 'outboundReferenceNotes.childMdx.mdxAST', outboundReferenceNotes___childMdx___tableOfContents: 'outboundReferenceNotes.childMdx.tableOfContents', outboundReferenceNotes___childMdx___timeToRead: 'outboundReferenceNotes.childMdx.timeToRead', outboundReferenceNotes___childMdx___wordCount___paragraphs: 'outboundReferenceNotes.childMdx.wordCount.paragraphs', outboundReferenceNotes___childMdx___wordCount___sentences: 'outboundReferenceNotes.childMdx.wordCount.sentences', outboundReferenceNotes___childMdx___wordCount___words: 'outboundReferenceNotes.childMdx.wordCount.words', outboundReferenceNotes___childMdx___fields___source: 'outboundReferenceNotes.childMdx.fields.source', outboundReferenceNotes___childMdx___fields___slug: 'outboundReferenceNotes.childMdx.fields.slug', outboundReferenceNotes___childMdx___id: 'outboundReferenceNotes.childMdx.id', outboundReferenceNotes___childMdx___parent___id: 'outboundReferenceNotes.childMdx.parent.id', outboundReferenceNotes___childMdx___parent___children: 'outboundReferenceNotes.childMdx.parent.children', outboundReferenceNotes___childMdx___children: 'outboundReferenceNotes.childMdx.children', outboundReferenceNotes___childMdx___children___id: 'outboundReferenceNotes.childMdx.children.id', outboundReferenceNotes___childMdx___children___children: 'outboundReferenceNotes.childMdx.children.children', outboundReferenceNotes___childMdx___internal___content: 'outboundReferenceNotes.childMdx.internal.content', outboundReferenceNotes___childMdx___internal___contentDigest: 'outboundReferenceNotes.childMdx.internal.contentDigest', outboundReferenceNotes___childMdx___internal___description: 'outboundReferenceNotes.childMdx.internal.description', outboundReferenceNotes___childMdx___internal___fieldOwners: 'outboundReferenceNotes.childMdx.internal.fieldOwners', outboundReferenceNotes___childMdx___internal___ignoreType: 'outboundReferenceNotes.childMdx.internal.ignoreType', outboundReferenceNotes___childMdx___internal___mediaType: 'outboundReferenceNotes.childMdx.internal.mediaType', outboundReferenceNotes___childMdx___internal___owner: 'outboundReferenceNotes.childMdx.internal.owner', outboundReferenceNotes___childMdx___internal___type: 'outboundReferenceNotes.childMdx.internal.type', outboundReferenceNotes___absolutePath: 'outboundReferenceNotes.absolutePath', outboundReferenceNotes___inboundReferencePreviews: 'outboundReferenceNotes.inboundReferencePreviews', outboundReferenceNotes___inboundReferencePreviews___source: 'outboundReferenceNotes.inboundReferencePreviews.source', outboundReferenceNotes___inboundReferencePreviews___previewMarkdown: 'outboundReferenceNotes.inboundReferencePreviews.previewMarkdown', outboundReferenceNotes___inboundReferencePreviews___previewHtml: 'outboundReferenceNotes.inboundReferencePreviews.previewHtml', outboundReferenceNotes___childrenMdx: 'outboundReferenceNotes.childrenMdx', outboundReferenceNotes___childrenMdx___rawBody: 'outboundReferenceNotes.childrenMdx.rawBody', outboundReferenceNotes___childrenMdx___fileAbsolutePath: 'outboundReferenceNotes.childrenMdx.fileAbsolutePath', outboundReferenceNotes___childrenMdx___frontmatter___title: 'outboundReferenceNotes.childrenMdx.frontmatter.title', outboundReferenceNotes___childrenMdx___frontmatter___description: 'outboundReferenceNotes.childrenMdx.frontmatter.description', outboundReferenceNotes___childrenMdx___frontmatter___date: 'outboundReferenceNotes.childrenMdx.frontmatter.date', outboundReferenceNotes___childrenMdx___frontmatter___slug: 'outboundReferenceNotes.childrenMdx.frontmatter.slug', outboundReferenceNotes___childrenMdx___frontmatter___tags: 'outboundReferenceNotes.childrenMdx.frontmatter.tags', outboundReferenceNotes___childrenMdx___frontmatter___subtitle: 'outboundReferenceNotes.childrenMdx.frontmatter.subtitle', outboundReferenceNotes___childrenMdx___frontmatter___featured: 'outboundReferenceNotes.childrenMdx.frontmatter.featured', outboundReferenceNotes___childrenMdx___frontmatter___public: 'outboundReferenceNotes.childrenMdx.frontmatter.public', outboundReferenceNotes___childrenMdx___frontmatter___tag: 'outboundReferenceNotes.childrenMdx.frontmatter.tag', outboundReferenceNotes___childrenMdx___frontmatter___filters: 'outboundReferenceNotes.childrenMdx.frontmatter.filters', outboundReferenceNotes___childrenMdx___frontmatter___categories: 'outboundReferenceNotes.childrenMdx.frontmatter.categories', outboundReferenceNotes___childrenMdx___frontmatter___published: 'outboundReferenceNotes.childrenMdx.frontmatter.published', outboundReferenceNotes___childrenMdx___frontmatter___updated: 'outboundReferenceNotes.childrenMdx.frontmatter.updated', outboundReferenceNotes___childrenMdx___frontmatter___external_url: 'outboundReferenceNotes.childrenMdx.frontmatter.external_url', outboundReferenceNotes___childrenMdx___frontmatter___epistemic_status: 'outboundReferenceNotes.childrenMdx.frontmatter.epistemic_status', outboundReferenceNotes___childrenMdx___frontmatter___layout: 'outboundReferenceNotes.childrenMdx.frontmatter.layout', outboundReferenceNotes___childrenMdx___frontmatter___created: 'outboundReferenceNotes.childrenMdx.frontmatter.created', outboundReferenceNotes___childrenMdx___frontmatter___date_updated: 'outboundReferenceNotes.childrenMdx.frontmatter.date_updated', outboundReferenceNotes___childrenMdx___frontmatter___social_image: 'outboundReferenceNotes.childrenMdx.frontmatter.social_image', outboundReferenceNotes___childrenMdx___frontmatter___abstract: 'outboundReferenceNotes.childrenMdx.frontmatter.abstract', outboundReferenceNotes___childrenMdx___frontmatter___draft: 'outboundReferenceNotes.childrenMdx.frontmatter.draft', outboundReferenceNotes___childrenMdx___slug: 'outboundReferenceNotes.childrenMdx.slug', outboundReferenceNotes___childrenMdx___body: 'outboundReferenceNotes.childrenMdx.body', outboundReferenceNotes___childrenMdx___excerpt: 'outboundReferenceNotes.childrenMdx.excerpt', outboundReferenceNotes___childrenMdx___headings: 'outboundReferenceNotes.childrenMdx.headings', outboundReferenceNotes___childrenMdx___headings___value: 'outboundReferenceNotes.childrenMdx.headings.value', outboundReferenceNotes___childrenMdx___headings___depth: 'outboundReferenceNotes.childrenMdx.headings.depth', outboundReferenceNotes___childrenMdx___html: 'outboundReferenceNotes.childrenMdx.html', outboundReferenceNotes___childrenMdx___mdxAST: 'outboundReferenceNotes.childrenMdx.mdxAST', outboundReferenceNotes___childrenMdx___tableOfContents: 'outboundReferenceNotes.childrenMdx.tableOfContents', outboundReferenceNotes___childrenMdx___timeToRead: 'outboundReferenceNotes.childrenMdx.timeToRead', outboundReferenceNotes___childrenMdx___wordCount___paragraphs: 'outboundReferenceNotes.childrenMdx.wordCount.paragraphs', outboundReferenceNotes___childrenMdx___wordCount___sentences: 'outboundReferenceNotes.childrenMdx.wordCount.sentences', outboundReferenceNotes___childrenMdx___wordCount___words: 'outboundReferenceNotes.childrenMdx.wordCount.words', outboundReferenceNotes___childrenMdx___fields___source: 'outboundReferenceNotes.childrenMdx.fields.source', outboundReferenceNotes___childrenMdx___fields___slug: 'outboundReferenceNotes.childrenMdx.fields.slug', outboundReferenceNotes___childrenMdx___id: 'outboundReferenceNotes.childrenMdx.id', outboundReferenceNotes___childrenMdx___parent___id: 'outboundReferenceNotes.childrenMdx.parent.id', outboundReferenceNotes___childrenMdx___parent___children: 'outboundReferenceNotes.childrenMdx.parent.children', outboundReferenceNotes___childrenMdx___children: 'outboundReferenceNotes.childrenMdx.children', outboundReferenceNotes___childrenMdx___children___id: 'outboundReferenceNotes.childrenMdx.children.id', outboundReferenceNotes___childrenMdx___children___children: 'outboundReferenceNotes.childrenMdx.children.children', outboundReferenceNotes___childrenMdx___internal___content: 'outboundReferenceNotes.childrenMdx.internal.content', outboundReferenceNotes___childrenMdx___internal___contentDigest: 'outboundReferenceNotes.childrenMdx.internal.contentDigest', outboundReferenceNotes___childrenMdx___internal___description: 'outboundReferenceNotes.childrenMdx.internal.description', outboundReferenceNotes___childrenMdx___internal___fieldOwners: 'outboundReferenceNotes.childrenMdx.internal.fieldOwners', outboundReferenceNotes___childrenMdx___internal___ignoreType: 'outboundReferenceNotes.childrenMdx.internal.ignoreType', outboundReferenceNotes___childrenMdx___internal___mediaType: 'outboundReferenceNotes.childrenMdx.internal.mediaType', outboundReferenceNotes___childrenMdx___internal___owner: 'outboundReferenceNotes.childrenMdx.internal.owner', outboundReferenceNotes___childrenMdx___internal___type: 'outboundReferenceNotes.childrenMdx.internal.type', outboundReferenceNotes___childrenMarkdownRemark: 'outboundReferenceNotes.childrenMarkdownRemark', outboundReferenceNotes___childrenMarkdownRemark___id: 'outboundReferenceNotes.childrenMarkdownRemark.id', outboundReferenceNotes___childrenMarkdownRemark___frontmatter___title: 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.title', outboundReferenceNotes___childrenMarkdownRemark___frontmatter___tags: 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.tags', outboundReferenceNotes___childrenMarkdownRemark___frontmatter___date: 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.date', outboundReferenceNotes___childrenMarkdownRemark___frontmatter___updated: 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.updated', outboundReferenceNotes___childrenMarkdownRemark___frontmatter___created: 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.created', outboundReferenceNotes___childrenMarkdownRemark___frontmatter___date_updated: 'outboundReferenceNotes.childrenMarkdownRemark.frontmatter.date_updated', outboundReferenceNotes___childrenMarkdownRemark___excerpt: 'outboundReferenceNotes.childrenMarkdownRemark.excerpt', outboundReferenceNotes___childrenMarkdownRemark___rawMarkdownBody: 'outboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody', outboundReferenceNotes___childrenMarkdownRemark___html: 'outboundReferenceNotes.childrenMarkdownRemark.html', outboundReferenceNotes___childrenMarkdownRemark___htmlAst: 'outboundReferenceNotes.childrenMarkdownRemark.htmlAst', outboundReferenceNotes___childrenMarkdownRemark___excerptAst: 'outboundReferenceNotes.childrenMarkdownRemark.excerptAst', outboundReferenceNotes___childrenMarkdownRemark___headings: 'outboundReferenceNotes.childrenMarkdownRemark.headings', outboundReferenceNotes___childrenMarkdownRemark___headings___id: 'outboundReferenceNotes.childrenMarkdownRemark.headings.id', outboundReferenceNotes___childrenMarkdownRemark___headings___value: 'outboundReferenceNotes.childrenMarkdownRemark.headings.value', outboundReferenceNotes___childrenMarkdownRemark___headings___depth: 'outboundReferenceNotes.childrenMarkdownRemark.headings.depth', outboundReferenceNotes___childrenMarkdownRemark___timeToRead: 'outboundReferenceNotes.childrenMarkdownRemark.timeToRead', outboundReferenceNotes___childrenMarkdownRemark___tableOfContents: 'outboundReferenceNotes.childrenMarkdownRemark.tableOfContents', outboundReferenceNotes___childrenMarkdownRemark___wordCount___paragraphs: 'outboundReferenceNotes.childrenMarkdownRemark.wordCount.paragraphs', outboundReferenceNotes___childrenMarkdownRemark___wordCount___sentences: 'outboundReferenceNotes.childrenMarkdownRemark.wordCount.sentences', outboundReferenceNotes___childrenMarkdownRemark___wordCount___words: 'outboundReferenceNotes.childrenMarkdownRemark.wordCount.words', outboundReferenceNotes___childrenMarkdownRemark___parent___id: 'outboundReferenceNotes.childrenMarkdownRemark.parent.id', outboundReferenceNotes___childrenMarkdownRemark___parent___children: 'outboundReferenceNotes.childrenMarkdownRemark.parent.children', outboundReferenceNotes___childrenMarkdownRemark___children: 'outboundReferenceNotes.childrenMarkdownRemark.children', outboundReferenceNotes___childrenMarkdownRemark___children___id: 'outboundReferenceNotes.childrenMarkdownRemark.children.id', outboundReferenceNotes___childrenMarkdownRemark___children___children: 'outboundReferenceNotes.childrenMarkdownRemark.children.children', outboundReferenceNotes___childrenMarkdownRemark___internal___content: 'outboundReferenceNotes.childrenMarkdownRemark.internal.content', outboundReferenceNotes___childrenMarkdownRemark___internal___contentDigest: 'outboundReferenceNotes.childrenMarkdownRemark.internal.contentDigest', outboundReferenceNotes___childrenMarkdownRemark___internal___description: 'outboundReferenceNotes.childrenMarkdownRemark.internal.description', outboundReferenceNotes___childrenMarkdownRemark___internal___fieldOwners: 'outboundReferenceNotes.childrenMarkdownRemark.internal.fieldOwners', outboundReferenceNotes___childrenMarkdownRemark___internal___ignoreType: 'outboundReferenceNotes.childrenMarkdownRemark.internal.ignoreType', outboundReferenceNotes___childrenMarkdownRemark___internal___mediaType: 'outboundReferenceNotes.childrenMarkdownRemark.internal.mediaType', outboundReferenceNotes___childrenMarkdownRemark___internal___owner: 'outboundReferenceNotes.childrenMarkdownRemark.internal.owner', outboundReferenceNotes___childrenMarkdownRemark___internal___type: 'outboundReferenceNotes.childrenMarkdownRemark.internal.type', outboundReferenceNotes___childMarkdownRemark___id: 'outboundReferenceNotes.childMarkdownRemark.id', outboundReferenceNotes___childMarkdownRemark___frontmatter___title: 'outboundReferenceNotes.childMarkdownRemark.frontmatter.title', outboundReferenceNotes___childMarkdownRemark___frontmatter___tags: 'outboundReferenceNotes.childMarkdownRemark.frontmatter.tags', outboundReferenceNotes___childMarkdownRemark___frontmatter___date: 'outboundReferenceNotes.childMarkdownRemark.frontmatter.date', outboundReferenceNotes___childMarkdownRemark___frontmatter___updated: 'outboundReferenceNotes.childMarkdownRemark.frontmatter.updated', outboundReferenceNotes___childMarkdownRemark___frontmatter___created: 'outboundReferenceNotes.childMarkdownRemark.frontmatter.created', outboundReferenceNotes___childMarkdownRemark___frontmatter___date_updated: 'outboundReferenceNotes.childMarkdownRemark.frontmatter.date_updated', outboundReferenceNotes___childMarkdownRemark___excerpt: 'outboundReferenceNotes.childMarkdownRemark.excerpt', outboundReferenceNotes___childMarkdownRemark___rawMarkdownBody: 'outboundReferenceNotes.childMarkdownRemark.rawMarkdownBody', outboundReferenceNotes___childMarkdownRemark___html: 'outboundReferenceNotes.childMarkdownRemark.html', outboundReferenceNotes___childMarkdownRemark___htmlAst: 'outboundReferenceNotes.childMarkdownRemark.htmlAst', outboundReferenceNotes___childMarkdownRemark___excerptAst: 'outboundReferenceNotes.childMarkdownRemark.excerptAst', outboundReferenceNotes___childMarkdownRemark___headings: 'outboundReferenceNotes.childMarkdownRemark.headings', outboundReferenceNotes___childMarkdownRemark___headings___id: 'outboundReferenceNotes.childMarkdownRemark.headings.id', outboundReferenceNotes___childMarkdownRemark___headings___value: 'outboundReferenceNotes.childMarkdownRemark.headings.value', outboundReferenceNotes___childMarkdownRemark___headings___depth: 'outboundReferenceNotes.childMarkdownRemark.headings.depth', outboundReferenceNotes___childMarkdownRemark___timeToRead: 'outboundReferenceNotes.childMarkdownRemark.timeToRead', outboundReferenceNotes___childMarkdownRemark___tableOfContents: 'outboundReferenceNotes.childMarkdownRemark.tableOfContents', outboundReferenceNotes___childMarkdownRemark___wordCount___paragraphs: 'outboundReferenceNotes.childMarkdownRemark.wordCount.paragraphs', outboundReferenceNotes___childMarkdownRemark___wordCount___sentences: 'outboundReferenceNotes.childMarkdownRemark.wordCount.sentences', outboundReferenceNotes___childMarkdownRemark___wordCount___words: 'outboundReferenceNotes.childMarkdownRemark.wordCount.words', outboundReferenceNotes___childMarkdownRemark___parent___id: 'outboundReferenceNotes.childMarkdownRemark.parent.id', outboundReferenceNotes___childMarkdownRemark___parent___children: 'outboundReferenceNotes.childMarkdownRemark.parent.children', outboundReferenceNotes___childMarkdownRemark___children: 'outboundReferenceNotes.childMarkdownRemark.children', outboundReferenceNotes___childMarkdownRemark___children___id: 'outboundReferenceNotes.childMarkdownRemark.children.id', outboundReferenceNotes___childMarkdownRemark___children___children: 'outboundReferenceNotes.childMarkdownRemark.children.children', outboundReferenceNotes___childMarkdownRemark___internal___content: 'outboundReferenceNotes.childMarkdownRemark.internal.content', outboundReferenceNotes___childMarkdownRemark___internal___contentDigest: 'outboundReferenceNotes.childMarkdownRemark.internal.contentDigest', outboundReferenceNotes___childMarkdownRemark___internal___description: 'outboundReferenceNotes.childMarkdownRemark.internal.description', outboundReferenceNotes___childMarkdownRemark___internal___fieldOwners: 'outboundReferenceNotes.childMarkdownRemark.internal.fieldOwners', outboundReferenceNotes___childMarkdownRemark___internal___ignoreType: 'outboundReferenceNotes.childMarkdownRemark.internal.ignoreType', outboundReferenceNotes___childMarkdownRemark___internal___mediaType: 'outboundReferenceNotes.childMarkdownRemark.internal.mediaType', outboundReferenceNotes___childMarkdownRemark___internal___owner: 'outboundReferenceNotes.childMarkdownRemark.internal.owner', outboundReferenceNotes___childMarkdownRemark___internal___type: 'outboundReferenceNotes.childMarkdownRemark.internal.type', outboundReferenceNotes___id: 'outboundReferenceNotes.id', outboundReferenceNotes___parent___id: 'outboundReferenceNotes.parent.id', outboundReferenceNotes___parent___parent___id: 'outboundReferenceNotes.parent.parent.id', outboundReferenceNotes___parent___parent___children: 'outboundReferenceNotes.parent.parent.children', outboundReferenceNotes___parent___children: 'outboundReferenceNotes.parent.children', outboundReferenceNotes___parent___children___id: 'outboundReferenceNotes.parent.children.id', outboundReferenceNotes___parent___children___children: 'outboundReferenceNotes.parent.children.children', outboundReferenceNotes___parent___internal___content: 'outboundReferenceNotes.parent.internal.content', outboundReferenceNotes___parent___internal___contentDigest: 'outboundReferenceNotes.parent.internal.contentDigest', outboundReferenceNotes___parent___internal___description: 'outboundReferenceNotes.parent.internal.description', outboundReferenceNotes___parent___internal___fieldOwners: 'outboundReferenceNotes.parent.internal.fieldOwners', outboundReferenceNotes___parent___internal___ignoreType: 'outboundReferenceNotes.parent.internal.ignoreType', outboundReferenceNotes___parent___internal___mediaType: 'outboundReferenceNotes.parent.internal.mediaType', outboundReferenceNotes___parent___internal___owner: 'outboundReferenceNotes.parent.internal.owner', outboundReferenceNotes___parent___internal___type: 'outboundReferenceNotes.parent.internal.type', outboundReferenceNotes___children: 'outboundReferenceNotes.children', outboundReferenceNotes___children___id: 'outboundReferenceNotes.children.id', outboundReferenceNotes___children___parent___id: 'outboundReferenceNotes.children.parent.id', outboundReferenceNotes___children___parent___children: 'outboundReferenceNotes.children.parent.children', outboundReferenceNotes___children___children: 'outboundReferenceNotes.children.children', outboundReferenceNotes___children___children___id: 'outboundReferenceNotes.children.children.id', outboundReferenceNotes___children___children___children: 'outboundReferenceNotes.children.children.children', outboundReferenceNotes___children___internal___content: 'outboundReferenceNotes.children.internal.content', outboundReferenceNotes___children___internal___contentDigest: 'outboundReferenceNotes.children.internal.contentDigest', outboundReferenceNotes___children___internal___description: 'outboundReferenceNotes.children.internal.description', outboundReferenceNotes___children___internal___fieldOwners: 'outboundReferenceNotes.children.internal.fieldOwners', outboundReferenceNotes___children___internal___ignoreType: 'outboundReferenceNotes.children.internal.ignoreType', outboundReferenceNotes___children___internal___mediaType: 'outboundReferenceNotes.children.internal.mediaType', outboundReferenceNotes___children___internal___owner: 'outboundReferenceNotes.children.internal.owner', outboundReferenceNotes___children___internal___type: 'outboundReferenceNotes.children.internal.type', outboundReferenceNotes___internal___content: 'outboundReferenceNotes.internal.content', outboundReferenceNotes___internal___contentDigest: 'outboundReferenceNotes.internal.contentDigest', outboundReferenceNotes___internal___description: 'outboundReferenceNotes.internal.description', outboundReferenceNotes___internal___fieldOwners: 'outboundReferenceNotes.internal.fieldOwners', outboundReferenceNotes___internal___ignoreType: 'outboundReferenceNotes.internal.ignoreType', outboundReferenceNotes___internal___mediaType: 'outboundReferenceNotes.internal.mediaType', outboundReferenceNotes___internal___owner: 'outboundReferenceNotes.internal.owner', outboundReferenceNotes___internal___type: 'outboundReferenceNotes.internal.type', inboundReferences: 'undefined', inboundReferenceNotes: 'undefined', inboundReferenceNotes___title: 'inboundReferenceNotes.title', inboundReferenceNotes___slug: 'inboundReferenceNotes.slug', inboundReferenceNotes___rawContent: 'inboundReferenceNotes.rawContent', inboundReferenceNotes___content: 'inboundReferenceNotes.content', inboundReferenceNotes___noteTemplate: 'inboundReferenceNotes.noteTemplate', inboundReferenceNotes___aliases: 'inboundReferenceNotes.aliases', inboundReferenceNotes___outboundReferences: 'inboundReferenceNotes.outboundReferences', inboundReferenceNotes___outboundReferenceNotes: 'inboundReferenceNotes.outboundReferenceNotes', inboundReferenceNotes___outboundReferenceNotes___title: 'inboundReferenceNotes.outboundReferenceNotes.title', inboundReferenceNotes___outboundReferenceNotes___slug: 'inboundReferenceNotes.outboundReferenceNotes.slug', inboundReferenceNotes___outboundReferenceNotes___rawContent: 'inboundReferenceNotes.outboundReferenceNotes.rawContent', inboundReferenceNotes___outboundReferenceNotes___content: 'inboundReferenceNotes.outboundReferenceNotes.content', inboundReferenceNotes___outboundReferenceNotes___noteTemplate: 'inboundReferenceNotes.outboundReferenceNotes.noteTemplate', inboundReferenceNotes___outboundReferenceNotes___aliases: 'inboundReferenceNotes.outboundReferenceNotes.aliases', inboundReferenceNotes___outboundReferenceNotes___outboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferences', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___title: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.title', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___slug: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.slug', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___rawContent: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.rawContent', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___content: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.content', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___noteTemplate: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.noteTemplate', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___aliases: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.aliases', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___outboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.outboundReferences', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___inboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferences', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreview: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___externalInboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.externalInboundReferences', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___absolutePath: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.absolutePath', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___childrenMdx: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.childrenMdx', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___id: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.id', inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes___children: 'inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes.children', inboundReferenceNotes___outboundReferenceNotes___inboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferences', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___title: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.title', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___slug: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.slug', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___rawContent: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.rawContent', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___content: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.content', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___noteTemplate: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.noteTemplate', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___aliases: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.aliases', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___outboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.outboundReferences', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___inboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferences', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreview: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___externalInboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.externalInboundReferences', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___absolutePath: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.absolutePath', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___childrenMdx: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.childrenMdx', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___id: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.id', inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes___children: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes.children', inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreview: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview', inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreview___source: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview.source', inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreview___previewHtml: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview.previewHtml', inboundReferenceNotes___outboundReferenceNotes___externalInboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences', inboundReferenceNotes___outboundReferenceNotes___externalInboundReferences___siteName: 'inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.siteName', inboundReferenceNotes___outboundReferenceNotes___externalInboundReferences___sourcePage: 'inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.sourcePage', inboundReferenceNotes___outboundReferenceNotes___externalInboundReferences___sourceUrl: 'inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.sourceUrl', inboundReferenceNotes___outboundReferenceNotes___externalInboundReferences___previewHtml: 'inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences.previewHtml', inboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences: 'inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences', inboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences___targetSite: 'inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.targetSite', inboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences___targetPage: 'inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.targetPage', inboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences___previewHtml: 'inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences.previewHtml', inboundReferenceNotes___outboundReferenceNotes___childMdx___rawBody: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.rawBody', inboundReferenceNotes___outboundReferenceNotes___childMdx___fileAbsolutePath: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.fileAbsolutePath', inboundReferenceNotes___outboundReferenceNotes___childMdx___slug: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.slug', inboundReferenceNotes___outboundReferenceNotes___childMdx___body: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.body', inboundReferenceNotes___outboundReferenceNotes___childMdx___excerpt: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.excerpt', inboundReferenceNotes___outboundReferenceNotes___childMdx___headings: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.headings', inboundReferenceNotes___outboundReferenceNotes___childMdx___html: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.html', inboundReferenceNotes___outboundReferenceNotes___childMdx___mdxAST: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.mdxAST', inboundReferenceNotes___outboundReferenceNotes___childMdx___tableOfContents: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.tableOfContents', inboundReferenceNotes___outboundReferenceNotes___childMdx___timeToRead: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.timeToRead', inboundReferenceNotes___outboundReferenceNotes___childMdx___id: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.id', inboundReferenceNotes___outboundReferenceNotes___childMdx___children: 'inboundReferenceNotes.outboundReferenceNotes.childMdx.children', inboundReferenceNotes___outboundReferenceNotes___absolutePath: 'inboundReferenceNotes.outboundReferenceNotes.absolutePath', inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews', inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews___source: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.source', inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews___previewMarkdown: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.previewMarkdown', inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews___previewHtml: 'inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews.previewHtml', inboundReferenceNotes___outboundReferenceNotes___childrenMdx: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___rawBody: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.rawBody', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___fileAbsolutePath: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.fileAbsolutePath', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___slug: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.slug', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___body: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.body', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___excerpt: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.excerpt', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___headings: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.headings', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___html: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.html', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___mdxAST: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.mdxAST', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___tableOfContents: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.tableOfContents', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___timeToRead: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.timeToRead', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___id: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.id', inboundReferenceNotes___outboundReferenceNotes___childrenMdx___children: 'inboundReferenceNotes.outboundReferenceNotes.childrenMdx.children', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___id: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.id', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___excerpt: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.excerpt', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___rawMarkdownBody: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___html: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.html', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___htmlAst: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.htmlAst', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___excerptAst: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.excerptAst', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___headings: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.headings', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___timeToRead: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.timeToRead', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___tableOfContents: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.tableOfContents', inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark___children: 'inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark.children', inboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___id: 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.id', inboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___excerpt: 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.excerpt', inboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___rawMarkdownBody: 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.rawMarkdownBody', inboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___html: 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.html', inboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___htmlAst: 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.htmlAst', inboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___excerptAst: 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.excerptAst', inboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___headings: 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.headings', inboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___timeToRead: 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.timeToRead', inboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___tableOfContents: 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.tableOfContents', inboundReferenceNotes___outboundReferenceNotes___childMarkdownRemark___children: 'inboundReferenceNotes.outboundReferenceNotes.childMarkdownRemark.children', inboundReferenceNotes___outboundReferenceNotes___id: 'inboundReferenceNotes.outboundReferenceNotes.id', inboundReferenceNotes___outboundReferenceNotes___parent___id: 'inboundReferenceNotes.outboundReferenceNotes.parent.id', inboundReferenceNotes___outboundReferenceNotes___parent___children: 'inboundReferenceNotes.outboundReferenceNotes.parent.children', inboundReferenceNotes___outboundReferenceNotes___children: 'inboundReferenceNotes.outboundReferenceNotes.children', inboundReferenceNotes___outboundReferenceNotes___children___id: 'inboundReferenceNotes.outboundReferenceNotes.children.id', inboundReferenceNotes___outboundReferenceNotes___children___children: 'inboundReferenceNotes.outboundReferenceNotes.children.children', inboundReferenceNotes___outboundReferenceNotes___internal___content: 'inboundReferenceNotes.outboundReferenceNotes.internal.content', inboundReferenceNotes___outboundReferenceNotes___internal___contentDigest: 'inboundReferenceNotes.outboundReferenceNotes.internal.contentDigest', inboundReferenceNotes___outboundReferenceNotes___internal___description: 'inboundReferenceNotes.outboundReferenceNotes.internal.description', inboundReferenceNotes___outboundReferenceNotes___internal___fieldOwners: 'inboundReferenceNotes.outboundReferenceNotes.internal.fieldOwners', inboundReferenceNotes___outboundReferenceNotes___internal___ignoreType: 'inboundReferenceNotes.outboundReferenceNotes.internal.ignoreType', inboundReferenceNotes___outboundReferenceNotes___internal___mediaType: 'inboundReferenceNotes.outboundReferenceNotes.internal.mediaType', inboundReferenceNotes___outboundReferenceNotes___internal___owner: 'inboundReferenceNotes.outboundReferenceNotes.internal.owner', inboundReferenceNotes___outboundReferenceNotes___internal___type: 'inboundReferenceNotes.outboundReferenceNotes.internal.type', inboundReferenceNotes___inboundReferences: 'inboundReferenceNotes.inboundReferences', inboundReferenceNotes___inboundReferenceNotes: 'inboundReferenceNotes.inboundReferenceNotes', inboundReferenceNotes___inboundReferenceNotes___title: 'inboundReferenceNotes.inboundReferenceNotes.title', inboundReferenceNotes___inboundReferenceNotes___slug: 'inboundReferenceNotes.inboundReferenceNotes.slug', inboundReferenceNotes___inboundReferenceNotes___rawContent: 'inboundReferenceNotes.inboundReferenceNotes.rawContent', inboundReferenceNotes___inboundReferenceNotes___content: 'inboundReferenceNotes.inboundReferenceNotes.content', inboundReferenceNotes___inboundReferenceNotes___noteTemplate: 'inboundReferenceNotes.inboundReferenceNotes.noteTemplate', inboundReferenceNotes___inboundReferenceNotes___aliases: 'inboundReferenceNotes.inboundReferenceNotes.aliases', inboundReferenceNotes___inboundReferenceNotes___outboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferences', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___title: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.title', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___slug: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.slug', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___rawContent: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.rawContent', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___content: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.content', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___noteTemplate: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.noteTemplate', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___aliases: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.aliases', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___outboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.outboundReferences', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___outboundReferenceNotes: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.outboundReferenceNotes', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___inboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferences', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___inboundReferenceNotes: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferenceNotes', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreview: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreview', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___externalInboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.externalInboundReferences', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___externalOutboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.externalOutboundReferences', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___absolutePath: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.absolutePath', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___inboundReferencePreviews: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.inboundReferencePreviews', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___childrenMdx: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.childrenMdx', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___childrenMarkdownRemark: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.childrenMarkdownRemark', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___id: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.id', inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes___children: 'inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes.children', inboundReferenceNotes___inboundReferenceNotes___inboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferences', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___title: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.title', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___slug: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.slug', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___rawContent: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.rawContent', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___content: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.content', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___noteTemplate: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.noteTemplate', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___aliases: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.aliases', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___outboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.outboundReferences', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___outboundReferenceNotes: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.outboundReferenceNotes', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___inboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferences', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreview: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___externalInboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___absolutePath: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.absolutePath', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___childrenMdx: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.childrenMdx', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___id: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.id', inboundReferenceNotes___inboundReferenceNotes___inboundReferenceNotes___children: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferenceNotes.children', inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreview: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview', inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreview___source: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview.source', inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreview___previewHtml: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreview.previewHtml', inboundReferenceNotes___inboundReferenceNotes___externalInboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences', inboundReferenceNotes___inboundReferenceNotes___externalInboundReferences___siteName: 'inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.siteName', inboundReferenceNotes___inboundReferenceNotes___externalInboundReferences___sourcePage: 'inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.sourcePage', inboundReferenceNotes___inboundReferenceNotes___externalInboundReferences___sourceUrl: 'inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.sourceUrl', inboundReferenceNotes___inboundReferenceNotes___externalInboundReferences___previewHtml: 'inboundReferenceNotes.inboundReferenceNotes.externalInboundReferences.previewHtml', inboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences: 'inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences', inboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences___targetSite: 'inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.targetSite', inboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences___targetPage: 'inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.targetPage', inboundReferenceNotes___inboundReferenceNotes___externalOutboundReferences___previewHtml: 'inboundReferenceNotes.inboundReferenceNotes.externalOutboundReferences.previewHtml', inboundReferenceNotes___inboundReferenceNotes___childMdx___rawBody: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.rawBody', inboundReferenceNotes___inboundReferenceNotes___childMdx___fileAbsolutePath: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.fileAbsolutePath', inboundReferenceNotes___inboundReferenceNotes___childMdx___slug: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.slug', inboundReferenceNotes___inboundReferenceNotes___childMdx___body: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.body', inboundReferenceNotes___inboundReferenceNotes___childMdx___excerpt: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.excerpt', inboundReferenceNotes___inboundReferenceNotes___childMdx___headings: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.headings', inboundReferenceNotes___inboundReferenceNotes___childMdx___html: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.html', inboundReferenceNotes___inboundReferenceNotes___childMdx___mdxAST: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.mdxAST', inboundReferenceNotes___inboundReferenceNotes___childMdx___tableOfContents: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.tableOfContents', inboundReferenceNotes___inboundReferenceNotes___childMdx___timeToRead: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.timeToRead', inboundReferenceNotes___inboundReferenceNotes___childMdx___id: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.id', inboundReferenceNotes___inboundReferenceNotes___childMdx___children: 'inboundReferenceNotes.inboundReferenceNotes.childMdx.children', inboundReferenceNotes___inboundReferenceNotes___absolutePath: 'inboundReferenceNotes.inboundReferenceNotes.absolutePath', inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews', inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews___source: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.source', inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews___previewMarkdown: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.previewMarkdown', inboundReferenceNotes___inboundReferenceNotes___inboundReferencePreviews___previewHtml: 'inboundReferenceNotes.inboundReferenceNotes.inboundReferencePreviews.previewHtml', inboundReferenceNotes___inboundReferenceNotes___childrenMdx: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___rawBody: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.rawBody', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___fileAbsolutePath: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.fileAbsolutePath', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___slug: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.slug', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___body: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.body', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___excerpt: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.excerpt', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___headings: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.headings', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___html: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.html', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___mdxAST: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.mdxAST', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___tableOfContents: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.tableOfContents', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___timeToRead: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.timeToRead', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___id: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.id', inboundReferenceNotes___inboundReferenceNotes___childrenMdx___children: 'inboundReferenceNotes.inboundReferenceNotes.childrenMdx.children', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___id: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.id', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___excerpt: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.excerpt', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___rawMarkdownBody: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___html: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.html', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___htmlAst: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.htmlAst', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___excerptAst: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.excerptAst', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___headings: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.headings', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___timeToRead: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.timeToRead', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___tableOfContents: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.tableOfContents', inboundReferenceNotes___inboundReferenceNotes___childrenMarkdownRemark___children: 'inboundReferenceNotes.inboundReferenceNotes.childrenMarkdownRemark.children', inboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___id: 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.id', inboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___excerpt: 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.excerpt', inboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___rawMarkdownBody: 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.rawMarkdownBody', inboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___html: 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.html', inboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___htmlAst: 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.htmlAst', inboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___excerptAst: 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.excerptAst', inboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___headings: 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.headings', inboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___timeToRead: 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.timeToRead', inboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___tableOfContents: 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.tableOfContents', inboundReferenceNotes___inboundReferenceNotes___childMarkdownRemark___children: 'inboundReferenceNotes.inboundReferenceNotes.childMarkdownRemark.children', inboundReferenceNotes___inboundReferenceNotes___id: 'inboundReferenceNotes.inboundReferenceNotes.id', inboundReferenceNotes___inboundReferenceNotes___parent___id: 'inboundReferenceNotes.inboundReferenceNotes.parent.id', inboundReferenceNotes___inboundReferenceNotes___parent___children: 'inboundReferenceNotes.inboundReferenceNotes.parent.children', inboundReferenceNotes___inboundReferenceNotes___children: 'inboundReferenceNotes.inboundReferenceNotes.children', inboundReferenceNotes___inboundReferenceNotes___children___id: 'inboundReferenceNotes.inboundReferenceNotes.children.id', inboundReferenceNotes___inboundReferenceNotes___children___children: 'inboundReferenceNotes.inboundReferenceNotes.children.children', inboundReferenceNotes___inboundReferenceNotes___internal___content: 'inboundReferenceNotes.inboundReferenceNotes.internal.content', inboundReferenceNotes___inboundReferenceNotes___internal___contentDigest: 'inboundReferenceNotes.inboundReferenceNotes.internal.contentDigest', inboundReferenceNotes___inboundReferenceNotes___internal___description: 'inboundReferenceNotes.inboundReferenceNotes.internal.description', inboundReferenceNotes___inboundReferenceNotes___internal___fieldOwners: 'inboundReferenceNotes.inboundReferenceNotes.internal.fieldOwners', inboundReferenceNotes___inboundReferenceNotes___internal___ignoreType: 'inboundReferenceNotes.inboundReferenceNotes.internal.ignoreType', inboundReferenceNotes___inboundReferenceNotes___internal___mediaType: 'inboundReferenceNotes.inboundReferenceNotes.internal.mediaType', inboundReferenceNotes___inboundReferenceNotes___internal___owner: 'inboundReferenceNotes.inboundReferenceNotes.internal.owner', inboundReferenceNotes___inboundReferenceNotes___internal___type: 'inboundReferenceNotes.inboundReferenceNotes.internal.type', inboundReferenceNotes___inboundReferencePreview: 'inboundReferenceNotes.inboundReferencePreview', inboundReferenceNotes___inboundReferencePreview___source: 'inboundReferenceNotes.inboundReferencePreview.source', inboundReferenceNotes___inboundReferencePreview___previewHtml: 'inboundReferenceNotes.inboundReferencePreview.previewHtml', inboundReferenceNotes___externalInboundReferences: 'inboundReferenceNotes.externalInboundReferences', inboundReferenceNotes___externalInboundReferences___siteName: 'inboundReferenceNotes.externalInboundReferences.siteName', inboundReferenceNotes___externalInboundReferences___sourcePage: 'inboundReferenceNotes.externalInboundReferences.sourcePage', inboundReferenceNotes___externalInboundReferences___sourceUrl: 'inboundReferenceNotes.externalInboundReferences.sourceUrl', inboundReferenceNotes___externalInboundReferences___previewHtml: 'inboundReferenceNotes.externalInboundReferences.previewHtml', inboundReferenceNotes___externalOutboundReferences: 'inboundReferenceNotes.externalOutboundReferences', inboundReferenceNotes___externalOutboundReferences___targetSite: 'inboundReferenceNotes.externalOutboundReferences.targetSite', inboundReferenceNotes___externalOutboundReferences___targetPage: 'inboundReferenceNotes.externalOutboundReferences.targetPage', inboundReferenceNotes___externalOutboundReferences___previewHtml: 'inboundReferenceNotes.externalOutboundReferences.previewHtml', inboundReferenceNotes___childMdx___rawBody: 'inboundReferenceNotes.childMdx.rawBody', inboundReferenceNotes___childMdx___fileAbsolutePath: 'inboundReferenceNotes.childMdx.fileAbsolutePath', inboundReferenceNotes___childMdx___frontmatter___title: 'inboundReferenceNotes.childMdx.frontmatter.title', inboundReferenceNotes___childMdx___frontmatter___description: 'inboundReferenceNotes.childMdx.frontmatter.description', inboundReferenceNotes___childMdx___frontmatter___date: 'inboundReferenceNotes.childMdx.frontmatter.date', inboundReferenceNotes___childMdx___frontmatter___slug: 'inboundReferenceNotes.childMdx.frontmatter.slug', inboundReferenceNotes___childMdx___frontmatter___tags: 'inboundReferenceNotes.childMdx.frontmatter.tags', inboundReferenceNotes___childMdx___frontmatter___subtitle: 'inboundReferenceNotes.childMdx.frontmatter.subtitle', inboundReferenceNotes___childMdx___frontmatter___featured: 'inboundReferenceNotes.childMdx.frontmatter.featured', inboundReferenceNotes___childMdx___frontmatter___public: 'inboundReferenceNotes.childMdx.frontmatter.public', inboundReferenceNotes___childMdx___frontmatter___tag: 'inboundReferenceNotes.childMdx.frontmatter.tag', inboundReferenceNotes___childMdx___frontmatter___filters: 'inboundReferenceNotes.childMdx.frontmatter.filters', inboundReferenceNotes___childMdx___frontmatter___categories: 'inboundReferenceNotes.childMdx.frontmatter.categories', inboundReferenceNotes___childMdx___frontmatter___published: 'inboundReferenceNotes.childMdx.frontmatter.published', inboundReferenceNotes___childMdx___frontmatter___updated: 'inboundReferenceNotes.childMdx.frontmatter.updated', inboundReferenceNotes___childMdx___frontmatter___external_url: 'inboundReferenceNotes.childMdx.frontmatter.external_url', inboundReferenceNotes___childMdx___frontmatter___epistemic_status: 'inboundReferenceNotes.childMdx.frontmatter.epistemic_status', inboundReferenceNotes___childMdx___frontmatter___layout: 'inboundReferenceNotes.childMdx.frontmatter.layout', inboundReferenceNotes___childMdx___frontmatter___created: 'inboundReferenceNotes.childMdx.frontmatter.created', inboundReferenceNotes___childMdx___frontmatter___date_updated: 'inboundReferenceNotes.childMdx.frontmatter.date_updated', inboundReferenceNotes___childMdx___frontmatter___social_image: 'inboundReferenceNotes.childMdx.frontmatter.social_image', inboundReferenceNotes___childMdx___frontmatter___abstract: 'inboundReferenceNotes.childMdx.frontmatter.abstract', inboundReferenceNotes___childMdx___frontmatter___draft: 'inboundReferenceNotes.childMdx.frontmatter.draft', inboundReferenceNotes___childMdx___slug: 'inboundReferenceNotes.childMdx.slug', inboundReferenceNotes___childMdx___body: 'inboundReferenceNotes.childMdx.body', inboundReferenceNotes___childMdx___excerpt: 'inboundReferenceNotes.childMdx.excerpt', inboundReferenceNotes___childMdx___headings: 'inboundReferenceNotes.childMdx.headings', inboundReferenceNotes___childMdx___headings___value: 'inboundReferenceNotes.childMdx.headings.value', inboundReferenceNotes___childMdx___headings___depth: 'inboundReferenceNotes.childMdx.headings.depth', inboundReferenceNotes___childMdx___html: 'inboundReferenceNotes.childMdx.html', inboundReferenceNotes___childMdx___mdxAST: 'inboundReferenceNotes.childMdx.mdxAST', inboundReferenceNotes___childMdx___tableOfContents: 'inboundReferenceNotes.childMdx.tableOfContents', inboundReferenceNotes___childMdx___timeToRead: 'inboundReferenceNotes.childMdx.timeToRead', inboundReferenceNotes___childMdx___wordCount___paragraphs: 'inboundReferenceNotes.childMdx.wordCount.paragraphs', inboundReferenceNotes___childMdx___wordCount___sentences: 'inboundReferenceNotes.childMdx.wordCount.sentences', inboundReferenceNotes___childMdx___wordCount___words: 'inboundReferenceNotes.childMdx.wordCount.words', inboundReferenceNotes___childMdx___fields___source: 'inboundReferenceNotes.childMdx.fields.source', inboundReferenceNotes___childMdx___fields___slug: 'inboundReferenceNotes.childMdx.fields.slug', inboundReferenceNotes___childMdx___id: 'inboundReferenceNotes.childMdx.id', inboundReferenceNotes___childMdx___parent___id: 'inboundReferenceNotes.childMdx.parent.id', inboundReferenceNotes___childMdx___parent___children: 'inboundReferenceNotes.childMdx.parent.children', inboundReferenceNotes___childMdx___children: 'inboundReferenceNotes.childMdx.children', inboundReferenceNotes___childMdx___children___id: 'inboundReferenceNotes.childMdx.children.id', inboundReferenceNotes___childMdx___children___children: 'inboundReferenceNotes.childMdx.children.children', inboundReferenceNotes___childMdx___internal___content: 'inboundReferenceNotes.childMdx.internal.content', inboundReferenceNotes___childMdx___internal___contentDigest: 'inboundReferenceNotes.childMdx.internal.contentDigest', inboundReferenceNotes___childMdx___internal___description: 'inboundReferenceNotes.childMdx.internal.description', inboundReferenceNotes___childMdx___internal___fieldOwners: 'inboundReferenceNotes.childMdx.internal.fieldOwners', inboundReferenceNotes___childMdx___internal___ignoreType: 'inboundReferenceNotes.childMdx.internal.ignoreType', inboundReferenceNotes___childMdx___internal___mediaType: 'inboundReferenceNotes.childMdx.internal.mediaType', inboundReferenceNotes___childMdx___internal___owner: 'inboundReferenceNotes.childMdx.internal.owner', inboundReferenceNotes___childMdx___internal___type: 'inboundReferenceNotes.childMdx.internal.type', inboundReferenceNotes___absolutePath: 'inboundReferenceNotes.absolutePath', inboundReferenceNotes___inboundReferencePreviews: 'inboundReferenceNotes.inboundReferencePreviews', inboundReferenceNotes___inboundReferencePreviews___source: 'inboundReferenceNotes.inboundReferencePreviews.source', inboundReferenceNotes___inboundReferencePreviews___previewMarkdown: 'inboundReferenceNotes.inboundReferencePreviews.previewMarkdown', inboundReferenceNotes___inboundReferencePreviews___previewHtml: 'inboundReferenceNotes.inboundReferencePreviews.previewHtml', inboundReferenceNotes___childrenMdx: 'inboundReferenceNotes.childrenMdx', inboundReferenceNotes___childrenMdx___rawBody: 'inboundReferenceNotes.childrenMdx.rawBody', inboundReferenceNotes___childrenMdx___fileAbsolutePath: 'inboundReferenceNotes.childrenMdx.fileAbsolutePath', inboundReferenceNotes___childrenMdx___frontmatter___title: 'inboundReferenceNotes.childrenMdx.frontmatter.title', inboundReferenceNotes___childrenMdx___frontmatter___description: 'inboundReferenceNotes.childrenMdx.frontmatter.description', inboundReferenceNotes___childrenMdx___frontmatter___date: 'inboundReferenceNotes.childrenMdx.frontmatter.date', inboundReferenceNotes___childrenMdx___frontmatter___slug: 'inboundReferenceNotes.childrenMdx.frontmatter.slug', inboundReferenceNotes___childrenMdx___frontmatter___tags: 'inboundReferenceNotes.childrenMdx.frontmatter.tags', inboundReferenceNotes___childrenMdx___frontmatter___subtitle: 'inboundReferenceNotes.childrenMdx.frontmatter.subtitle', inboundReferenceNotes___childrenMdx___frontmatter___featured: 'inboundReferenceNotes.childrenMdx.frontmatter.featured', inboundReferenceNotes___childrenMdx___frontmatter___public: 'inboundReferenceNotes.childrenMdx.frontmatter.public', inboundReferenceNotes___childrenMdx___frontmatter___tag: 'inboundReferenceNotes.childrenMdx.frontmatter.tag', inboundReferenceNotes___childrenMdx___frontmatter___filters: 'inboundReferenceNotes.childrenMdx.frontmatter.filters', inboundReferenceNotes___childrenMdx___frontmatter___categories: 'inboundReferenceNotes.childrenMdx.frontmatter.categories', inboundReferenceNotes___childrenMdx___frontmatter___published: 'inboundReferenceNotes.childrenMdx.frontmatter.published', inboundReferenceNotes___childrenMdx___frontmatter___updated: 'inboundReferenceNotes.childrenMdx.frontmatter.updated', inboundReferenceNotes___childrenMdx___frontmatter___external_url: 'inboundReferenceNotes.childrenMdx.frontmatter.external_url', inboundReferenceNotes___childrenMdx___frontmatter___epistemic_status: 'inboundReferenceNotes.childrenMdx.frontmatter.epistemic_status', inboundReferenceNotes___childrenMdx___frontmatter___layout: 'inboundReferenceNotes.childrenMdx.frontmatter.layout', inboundReferenceNotes___childrenMdx___frontmatter___created: 'inboundReferenceNotes.childrenMdx.frontmatter.created', inboundReferenceNotes___childrenMdx___frontmatter___date_updated: 'inboundReferenceNotes.childrenMdx.frontmatter.date_updated', inboundReferenceNotes___childrenMdx___frontmatter___social_image: 'inboundReferenceNotes.childrenMdx.frontmatter.social_image', inboundReferenceNotes___childrenMdx___frontmatter___abstract: 'inboundReferenceNotes.childrenMdx.frontmatter.abstract', inboundReferenceNotes___childrenMdx___frontmatter___draft: 'inboundReferenceNotes.childrenMdx.frontmatter.draft', inboundReferenceNotes___childrenMdx___slug: 'inboundReferenceNotes.childrenMdx.slug', inboundReferenceNotes___childrenMdx___body: 'inboundReferenceNotes.childrenMdx.body', inboundReferenceNotes___childrenMdx___excerpt: 'inboundReferenceNotes.childrenMdx.excerpt', inboundReferenceNotes___childrenMdx___headings: 'inboundReferenceNotes.childrenMdx.headings', inboundReferenceNotes___childrenMdx___headings___value: 'inboundReferenceNotes.childrenMdx.headings.value', inboundReferenceNotes___childrenMdx___headings___depth: 'inboundReferenceNotes.childrenMdx.headings.depth', inboundReferenceNotes___childrenMdx___html: 'inboundReferenceNotes.childrenMdx.html', inboundReferenceNotes___childrenMdx___mdxAST: 'inboundReferenceNotes.childrenMdx.mdxAST', inboundReferenceNotes___childrenMdx___tableOfContents: 'inboundReferenceNotes.childrenMdx.tableOfContents', inboundReferenceNotes___childrenMdx___timeToRead: 'inboundReferenceNotes.childrenMdx.timeToRead', inboundReferenceNotes___childrenMdx___wordCount___paragraphs: 'inboundReferenceNotes.childrenMdx.wordCount.paragraphs', inboundReferenceNotes___childrenMdx___wordCount___sentences: 'inboundReferenceNotes.childrenMdx.wordCount.sentences', inboundReferenceNotes___childrenMdx___wordCount___words: 'inboundReferenceNotes.childrenMdx.wordCount.words', inboundReferenceNotes___childrenMdx___fields___source: 'inboundReferenceNotes.childrenMdx.fields.source', inboundReferenceNotes___childrenMdx___fields___slug: 'inboundReferenceNotes.childrenMdx.fields.slug', inboundReferenceNotes___childrenMdx___id: 'inboundReferenceNotes.childrenMdx.id', inboundReferenceNotes___childrenMdx___parent___id: 'inboundReferenceNotes.childrenMdx.parent.id', inboundReferenceNotes___childrenMdx___parent___children: 'inboundReferenceNotes.childrenMdx.parent.children', inboundReferenceNotes___childrenMdx___children: 'inboundReferenceNotes.childrenMdx.children', inboundReferenceNotes___childrenMdx___children___id: 'inboundReferenceNotes.childrenMdx.children.id', inboundReferenceNotes___childrenMdx___children___children: 'inboundReferenceNotes.childrenMdx.children.children', inboundReferenceNotes___childrenMdx___internal___content: 'inboundReferenceNotes.childrenMdx.internal.content', inboundReferenceNotes___childrenMdx___internal___contentDigest: 'inboundReferenceNotes.childrenMdx.internal.contentDigest', inboundReferenceNotes___childrenMdx___internal___description: 'inboundReferenceNotes.childrenMdx.internal.description', inboundReferenceNotes___childrenMdx___internal___fieldOwners: 'inboundReferenceNotes.childrenMdx.internal.fieldOwners', inboundReferenceNotes___childrenMdx___internal___ignoreType: 'inboundReferenceNotes.childrenMdx.internal.ignoreType', inboundReferenceNotes___childrenMdx___internal___mediaType: 'inboundReferenceNotes.childrenMdx.internal.mediaType', inboundReferenceNotes___childrenMdx___internal___owner: 'inboundReferenceNotes.childrenMdx.internal.owner', inboundReferenceNotes___childrenMdx___internal___type: 'inboundReferenceNotes.childrenMdx.internal.type', inboundReferenceNotes___childrenMarkdownRemark: 'inboundReferenceNotes.childrenMarkdownRemark', inboundReferenceNotes___childrenMarkdownRemark___id: 'inboundReferenceNotes.childrenMarkdownRemark.id', inboundReferenceNotes___childrenMarkdownRemark___frontmatter___title: 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.title', inboundReferenceNotes___childrenMarkdownRemark___frontmatter___tags: 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.tags', inboundReferenceNotes___childrenMarkdownRemark___frontmatter___date: 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.date', inboundReferenceNotes___childrenMarkdownRemark___frontmatter___updated: 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.updated', inboundReferenceNotes___childrenMarkdownRemark___frontmatter___created: 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.created', inboundReferenceNotes___childrenMarkdownRemark___frontmatter___date_updated: 'inboundReferenceNotes.childrenMarkdownRemark.frontmatter.date_updated', inboundReferenceNotes___childrenMarkdownRemark___excerpt: 'inboundReferenceNotes.childrenMarkdownRemark.excerpt', inboundReferenceNotes___childrenMarkdownRemark___rawMarkdownBody: 'inboundReferenceNotes.childrenMarkdownRemark.rawMarkdownBody', inboundReferenceNotes___childrenMarkdownRemark___html: 'inboundReferenceNotes.childrenMarkdownRemark.html', inboundReferenceNotes___childrenMarkdownRemark___htmlAst: 'inboundReferenceNotes.childrenMarkdownRemark.htmlAst', inboundReferenceNotes___childrenMarkdownRemark___excerptAst: 'inboundReferenceNotes.childrenMarkdownRemark.excerptAst', inboundReferenceNotes___childrenMarkdownRemark___headings: 'inboundReferenceNotes.childrenMarkdownRemark.headings', inboundReferenceNotes___childrenMarkdownRemark___headings___id: 'inboundReferenceNotes.childrenMarkdownRemark.headings.id', inboundReferenceNotes___childrenMarkdownRemark___headings___value: 'inboundReferenceNotes.childrenMarkdownRemark.headings.value', inboundReferenceNotes___childrenMarkdownRemark___headings___depth: 'inboundReferenceNotes.childrenMarkdownRemark.headings.depth', inboundReferenceNotes___childrenMarkdownRemark___timeToRead: 'inboundReferenceNotes.childrenMarkdownRemark.timeToRead', inboundReferenceNotes___childrenMarkdownRemark___tableOfContents: 'inboundReferenceNotes.childrenMarkdownRemark.tableOfContents', inboundReferenceNotes___childrenMarkdownRemark___wordCount___paragraphs: 'inboundReferenceNotes.childrenMarkdownRemark.wordCount.paragraphs', inboundReferenceNotes___childrenMarkdownRemark___wordCount___sentences: 'inboundReferenceNotes.childrenMarkdownRemark.wordCount.sentences', inboundReferenceNotes___childrenMarkdownRemark___wordCount___words: 'inboundReferenceNotes.childrenMarkdownRemark.wordCount.words', inboundReferenceNotes___childrenMarkdownRemark___parent___id: 'inboundReferenceNotes.childrenMarkdownRemark.parent.id', inboundReferenceNotes___childrenMarkdownRemark___parent___children: 'inboundReferenceNotes.childrenMarkdownRemark.parent.children', inboundReferenceNotes___childrenMarkdownRemark___children: 'inboundReferenceNotes.childrenMarkdownRemark.children', inboundReferenceNotes___childrenMarkdownRemark___children___id: 'inboundReferenceNotes.childrenMarkdownRemark.children.id', inboundReferenceNotes___childrenMarkdownRemark___children___children: 'inboundReferenceNotes.childrenMarkdownRemark.children.children', inboundReferenceNotes___childrenMarkdownRemark___internal___content: 'inboundReferenceNotes.childrenMarkdownRemark.internal.content', inboundReferenceNotes___childrenMarkdownRemark___internal___contentDigest: 'inboundReferenceNotes.childrenMarkdownRemark.internal.contentDigest', inboundReferenceNotes___childrenMarkdownRemark___internal___description: 'inboundReferenceNotes.childrenMarkdownRemark.internal.description', inboundReferenceNotes___childrenMarkdownRemark___internal___fieldOwners: 'inboundReferenceNotes.childrenMarkdownRemark.internal.fieldOwners', inboundReferenceNotes___childrenMarkdownRemark___internal___ignoreType: 'inboundReferenceNotes.childrenMarkdownRemark.internal.ignoreType', inboundReferenceNotes___childrenMarkdownRemark___internal___mediaType: 'inboundReferenceNotes.childrenMarkdownRemark.internal.mediaType', inboundReferenceNotes___childrenMarkdownRemark___internal___owner: 'inboundReferenceNotes.childrenMarkdownRemark.internal.owner', inboundReferenceNotes___childrenMarkdownRemark___internal___type: 'inboundReferenceNotes.childrenMarkdownRemark.internal.type', inboundReferenceNotes___childMarkdownRemark___id: 'inboundReferenceNotes.childMarkdownRemark.id', inboundReferenceNotes___childMarkdownRemark___frontmatter___title: 'inboundReferenceNotes.childMarkdownRemark.frontmatter.title', inboundReferenceNotes___childMarkdownRemark___frontmatter___tags: 'inboundReferenceNotes.childMarkdownRemark.frontmatter.tags', inboundReferenceNotes___childMarkdownRemark___frontmatter___date: 'inboundReferenceNotes.childMarkdownRemark.frontmatter.date', inboundReferenceNotes___childMarkdownRemark___frontmatter___updated: 'inboundReferenceNotes.childMarkdownRemark.frontmatter.updated', inboundReferenceNotes___childMarkdownRemark___frontmatter___created: 'inboundReferenceNotes.childMarkdownRemark.frontmatter.created', inboundReferenceNotes___childMarkdownRemark___frontmatter___date_updated: 'inboundReferenceNotes.childMarkdownRemark.frontmatter.date_updated', inboundReferenceNotes___childMarkdownRemark___excerpt: 'inboundReferenceNotes.childMarkdownRemark.excerpt', inboundReferenceNotes___childMarkdownRemark___rawMarkdownBody: 'inboundReferenceNotes.childMarkdownRemark.rawMarkdownBody', inboundReferenceNotes___childMarkdownRemark___html: 'inboundReferenceNotes.childMarkdownRemark.html', inboundReferenceNotes___childMarkdownRemark___htmlAst: 'inboundReferenceNotes.childMarkdownRemark.htmlAst', inboundReferenceNotes___childMarkdownRemark___excerptAst: 'inboundReferenceNotes.childMarkdownRemark.excerptAst', inboundReferenceNotes___childMarkdownRemark___headings: 'inboundReferenceNotes.childMarkdownRemark.headings', inboundReferenceNotes___childMarkdownRemark___headings___id: 'inboundReferenceNotes.childMarkdownRemark.headings.id', inboundReferenceNotes___childMarkdownRemark___headings___value: 'inboundReferenceNotes.childMarkdownRemark.headings.value', inboundReferenceNotes___childMarkdownRemark___headings___depth: 'inboundReferenceNotes.childMarkdownRemark.headings.depth', inboundReferenceNotes___childMarkdownRemark___timeToRead: 'inboundReferenceNotes.childMarkdownRemark.timeToRead', inboundReferenceNotes___childMarkdownRemark___tableOfContents: 'inboundReferenceNotes.childMarkdownRemark.tableOfContents', inboundReferenceNotes___childMarkdownRemark___wordCount___paragraphs: 'inboundReferenceNotes.childMarkdownRemark.wordCount.paragraphs', inboundReferenceNotes___childMarkdownRemark___wordCount___sentences: 'inboundReferenceNotes.childMarkdownRemark.wordCount.sentences', inboundReferenceNotes___childMarkdownRemark___wordCount___words: 'inboundReferenceNotes.childMarkdownRemark.wordCount.words', inboundReferenceNotes___childMarkdownRemark___parent___id: 'inboundReferenceNotes.childMarkdownRemark.parent.id', inboundReferenceNotes___childMarkdownRemark___parent___children: 'inboundReferenceNotes.childMarkdownRemark.parent.children', inboundReferenceNotes___childMarkdownRemark___children: 'inboundReferenceNotes.childMarkdownRemark.children', inboundReferenceNotes___childMarkdownRemark___children___id: 'inboundReferenceNotes.childMarkdownRemark.children.id', inboundReferenceNotes___childMarkdownRemark___children___children: 'inboundReferenceNotes.childMarkdownRemark.children.children', inboundReferenceNotes___childMarkdownRemark___internal___content: 'inboundReferenceNotes.childMarkdownRemark.internal.content', inboundReferenceNotes___childMarkdownRemark___internal___contentDigest: 'inboundReferenceNotes.childMarkdownRemark.internal.contentDigest', inboundReferenceNotes___childMarkdownRemark___internal___description: 'inboundReferenceNotes.childMarkdownRemark.internal.description', inboundReferenceNotes___childMarkdownRemark___internal___fieldOwners: 'inboundReferenceNotes.childMarkdownRemark.internal.fieldOwners', inboundReferenceNotes___childMarkdownRemark___internal___ignoreType: 'inboundReferenceNotes.childMarkdownRemark.internal.ignoreType', inboundReferenceNotes___childMarkdownRemark___internal___mediaType: 'inboundReferenceNotes.childMarkdownRemark.internal.mediaType', inboundReferenceNotes___childMarkdownRemark___internal___owner: 'inboundReferenceNotes.childMarkdownRemark.internal.owner', inboundReferenceNotes___childMarkdownRemark___internal___type: 'inboundReferenceNotes.childMarkdownRemark.internal.type', inboundReferenceNotes___id: 'inboundReferenceNotes.id', inboundReferenceNotes___parent___id: 'inboundReferenceNotes.parent.id', inboundReferenceNotes___parent___parent___id: 'inboundReferenceNotes.parent.parent.id', inboundReferenceNotes___parent___parent___children: 'inboundReferenceNotes.parent.parent.children', inboundReferenceNotes___parent___children: 'inboundReferenceNotes.parent.children', inboundReferenceNotes___parent___children___id: 'inboundReferenceNotes.parent.children.id', inboundReferenceNotes___parent___children___children: 'inboundReferenceNotes.parent.children.children', inboundReferenceNotes___parent___internal___content: 'inboundReferenceNotes.parent.internal.content', inboundReferenceNotes___parent___internal___contentDigest: 'inboundReferenceNotes.parent.internal.contentDigest', inboundReferenceNotes___parent___internal___description: 'inboundReferenceNotes.parent.internal.description', inboundReferenceNotes___parent___internal___fieldOwners: 'inboundReferenceNotes.parent.internal.fieldOwners', inboundReferenceNotes___parent___internal___ignoreType: 'inboundReferenceNotes.parent.internal.ignoreType', inboundReferenceNotes___parent___internal___mediaType: 'inboundReferenceNotes.parent.internal.mediaType', inboundReferenceNotes___parent___internal___owner: 'inboundReferenceNotes.parent.internal.owner', inboundReferenceNotes___parent___internal___type: 'inboundReferenceNotes.parent.internal.type', inboundReferenceNotes___children: 'inboundReferenceNotes.children', inboundReferenceNotes___children___id: 'inboundReferenceNotes.children.id', inboundReferenceNotes___children___parent___id: 'inboundReferenceNotes.children.parent.id', inboundReferenceNotes___children___parent___children: 'inboundReferenceNotes.children.parent.children', inboundReferenceNotes___children___children: 'inboundReferenceNotes.children.children', inboundReferenceNotes___children___children___id: 'inboundReferenceNotes.children.children.id', inboundReferenceNotes___children___children___children: 'inboundReferenceNotes.children.children.children', inboundReferenceNotes___children___internal___content: 'inboundReferenceNotes.children.internal.content', inboundReferenceNotes___children___internal___contentDigest: 'inboundReferenceNotes.children.internal.contentDigest', inboundReferenceNotes___children___internal___description: 'inboundReferenceNotes.children.internal.description', inboundReferenceNotes___children___internal___fieldOwners: 'inboundReferenceNotes.children.internal.fieldOwners', inboundReferenceNotes___children___internal___ignoreType: 'inboundReferenceNotes.children.internal.ignoreType', inboundReferenceNotes___children___internal___mediaType: 'inboundReferenceNotes.children.internal.mediaType', inboundReferenceNotes___children___internal___owner: 'inboundReferenceNotes.children.internal.owner', inboundReferenceNotes___children___internal___type: 'inboundReferenceNotes.children.internal.type', inboundReferenceNotes___internal___content: 'inboundReferenceNotes.internal.content', inboundReferenceNotes___internal___contentDigest: 'inboundReferenceNotes.internal.contentDigest', inboundReferenceNotes___internal___description: 'inboundReferenceNotes.internal.description', inboundReferenceNotes___internal___fieldOwners: 'inboundReferenceNotes.internal.fieldOwners', inboundReferenceNotes___internal___ignoreType: 'inboundReferenceNotes.internal.ignoreType', inboundReferenceNotes___internal___mediaType: 'inboundReferenceNotes.internal.mediaType', inboundReferenceNotes___internal___owner: 'inboundReferenceNotes.internal.owner', inboundReferenceNotes___internal___type: 'inboundReferenceNotes.internal.type', inboundReferencePreview: 'undefined', inboundReferencePreview___source: 'inboundReferencePreview.source', inboundReferencePreview___previewHtml: 'inboundReferencePreview.previewHtml', externalInboundReferences: 'undefined', externalInboundReferences___siteName: 'externalInboundReferences.siteName', externalInboundReferences___sourcePage: 'externalInboundReferences.sourcePage', externalInboundReferences___sourceUrl: 'externalInboundReferences.sourceUrl', externalInboundReferences___previewHtml: 'externalInboundReferences.previewHtml', externalOutboundReferences: 'undefined', externalOutboundReferences___targetSite: 'externalOutboundReferences.targetSite', externalOutboundReferences___targetPage: 'externalOutboundReferences.targetPage', externalOutboundReferences___previewHtml: 'externalOutboundReferences.previewHtml', childMdx___rawBody: 'childMdx.rawBody', childMdx___fileAbsolutePath: 'childMdx.fileAbsolutePath', childMdx___frontmatter___title: 'childMdx.frontmatter.title', childMdx___frontmatter___description: 'childMdx.frontmatter.description', childMdx___frontmatter___date: 'childMdx.frontmatter.date', childMdx___frontmatter___cover_image___sourceInstanceName: 'childMdx.frontmatter.cover_image.sourceInstanceName', childMdx___frontmatter___cover_image___absolutePath: 'childMdx.frontmatter.cover_image.absolutePath', childMdx___frontmatter___cover_image___relativePath: 'childMdx.frontmatter.cover_image.relativePath', childMdx___frontmatter___cover_image___extension: 'childMdx.frontmatter.cover_image.extension', childMdx___frontmatter___cover_image___size: 'childMdx.frontmatter.cover_image.size', childMdx___frontmatter___cover_image___prettySize: 'childMdx.frontmatter.cover_image.prettySize', childMdx___frontmatter___cover_image___modifiedTime: 'childMdx.frontmatter.cover_image.modifiedTime', childMdx___frontmatter___cover_image___accessTime: 'childMdx.frontmatter.cover_image.accessTime', childMdx___frontmatter___cover_image___changeTime: 'childMdx.frontmatter.cover_image.changeTime', childMdx___frontmatter___cover_image___birthTime: 'childMdx.frontmatter.cover_image.birthTime', childMdx___frontmatter___cover_image___root: 'childMdx.frontmatter.cover_image.root', childMdx___frontmatter___cover_image___dir: 'childMdx.frontmatter.cover_image.dir', childMdx___frontmatter___cover_image___base: 'childMdx.frontmatter.cover_image.base', childMdx___frontmatter___cover_image___ext: 'childMdx.frontmatter.cover_image.ext', childMdx___frontmatter___cover_image___name: 'childMdx.frontmatter.cover_image.name', childMdx___frontmatter___cover_image___relativeDirectory: 'childMdx.frontmatter.cover_image.relativeDirectory', childMdx___frontmatter___cover_image___dev: 'childMdx.frontmatter.cover_image.dev', childMdx___frontmatter___cover_image___mode: 'childMdx.frontmatter.cover_image.mode', childMdx___frontmatter___cover_image___nlink: 'childMdx.frontmatter.cover_image.nlink', childMdx___frontmatter___cover_image___uid: 'childMdx.frontmatter.cover_image.uid', childMdx___frontmatter___cover_image___gid: 'childMdx.frontmatter.cover_image.gid', childMdx___frontmatter___cover_image___rdev: 'childMdx.frontmatter.cover_image.rdev', childMdx___frontmatter___cover_image___ino: 'childMdx.frontmatter.cover_image.ino', childMdx___frontmatter___cover_image___atimeMs: 'childMdx.frontmatter.cover_image.atimeMs', childMdx___frontmatter___cover_image___mtimeMs: 'childMdx.frontmatter.cover_image.mtimeMs', childMdx___frontmatter___cover_image___ctimeMs: 'childMdx.frontmatter.cover_image.ctimeMs', childMdx___frontmatter___cover_image___atime: 'childMdx.frontmatter.cover_image.atime', childMdx___frontmatter___cover_image___mtime: 'childMdx.frontmatter.cover_image.mtime', childMdx___frontmatter___cover_image___ctime: 'childMdx.frontmatter.cover_image.ctime', childMdx___frontmatter___cover_image___birthtime: 'childMdx.frontmatter.cover_image.birthtime', childMdx___frontmatter___cover_image___birthtimeMs: 'childMdx.frontmatter.cover_image.birthtimeMs', childMdx___frontmatter___cover_image___blksize: 'childMdx.frontmatter.cover_image.blksize', childMdx___frontmatter___cover_image___blocks: 'childMdx.frontmatter.cover_image.blocks', childMdx___frontmatter___cover_image___publicURL: 'childMdx.frontmatter.cover_image.publicURL', childMdx___frontmatter___cover_image___childrenImageSharp: 'childMdx.frontmatter.cover_image.childrenImageSharp', childMdx___frontmatter___cover_image___childrenMdx: 'childMdx.frontmatter.cover_image.childrenMdx', childMdx___frontmatter___cover_image___id: 'childMdx.frontmatter.cover_image.id', childMdx___frontmatter___cover_image___children: 'childMdx.frontmatter.cover_image.children', childMdx___frontmatter___slug: 'childMdx.frontmatter.slug', childMdx___frontmatter___tags: 'childMdx.frontmatter.tags', childMdx___frontmatter___subtitle: 'childMdx.frontmatter.subtitle', childMdx___frontmatter___featured: 'childMdx.frontmatter.featured', childMdx___frontmatter___public: 'childMdx.frontmatter.public', childMdx___frontmatter___tag: 'childMdx.frontmatter.tag', childMdx___frontmatter___filters: 'childMdx.frontmatter.filters', childMdx___frontmatter___categories: 'childMdx.frontmatter.categories', childMdx___frontmatter___published: 'childMdx.frontmatter.published', childMdx___frontmatter___updated: 'childMdx.frontmatter.updated', childMdx___frontmatter___external_url: 'childMdx.frontmatter.external_url', childMdx___frontmatter___epistemic_status: 'childMdx.frontmatter.epistemic_status', childMdx___frontmatter___layout: 'childMdx.frontmatter.layout', childMdx___frontmatter___created: 'childMdx.frontmatter.created', childMdx___frontmatter___date_updated: 'childMdx.frontmatter.date_updated', childMdx___frontmatter___social_image: 'childMdx.frontmatter.social_image', childMdx___frontmatter___abstract: 'childMdx.frontmatter.abstract', childMdx___frontmatter___draft: 'childMdx.frontmatter.draft', childMdx___slug: 'childMdx.slug', childMdx___body: 'childMdx.body', childMdx___excerpt: 'childMdx.excerpt', childMdx___headings: 'childMdx.headings', childMdx___headings___value: 'childMdx.headings.value', childMdx___headings___depth: 'childMdx.headings.depth', childMdx___html: 'childMdx.html', childMdx___mdxAST: 'childMdx.mdxAST', childMdx___tableOfContents: 'childMdx.tableOfContents', childMdx___timeToRead: 'childMdx.timeToRead', childMdx___wordCount___paragraphs: 'childMdx.wordCount.paragraphs', childMdx___wordCount___sentences: 'childMdx.wordCount.sentences', childMdx___wordCount___words: 'childMdx.wordCount.words', childMdx___fields___readingTime___text: 'childMdx.fields.readingTime.text', childMdx___fields___readingTime___minutes: 'childMdx.fields.readingTime.minutes', childMdx___fields___readingTime___time: 'childMdx.fields.readingTime.time', childMdx___fields___readingTime___words: 'childMdx.fields.readingTime.words', childMdx___fields___source: 'childMdx.fields.source', childMdx___fields___slug: 'childMdx.fields.slug', childMdx___id: 'childMdx.id', childMdx___parent___id: 'childMdx.parent.id', childMdx___parent___parent___id: 'childMdx.parent.parent.id', childMdx___parent___parent___children: 'childMdx.parent.parent.children', childMdx___parent___children: 'childMdx.parent.children', childMdx___parent___children___id: 'childMdx.parent.children.id', childMdx___parent___children___children: 'childMdx.parent.children.children', childMdx___parent___internal___content: 'childMdx.parent.internal.content', childMdx___parent___internal___contentDigest: 'childMdx.parent.internal.contentDigest', childMdx___parent___internal___description: 'childMdx.parent.internal.description', childMdx___parent___internal___fieldOwners: 'childMdx.parent.internal.fieldOwners', childMdx___parent___internal___ignoreType: 'childMdx.parent.internal.ignoreType', childMdx___parent___internal___mediaType: 'childMdx.parent.internal.mediaType', childMdx___parent___internal___owner: 'childMdx.parent.internal.owner', childMdx___parent___internal___type: 'childMdx.parent.internal.type', childMdx___children: 'childMdx.children', childMdx___children___id: 'childMdx.children.id', childMdx___children___parent___id: 'childMdx.children.parent.id', childMdx___children___parent___children: 'childMdx.children.parent.children', childMdx___children___children: 'childMdx.children.children', childMdx___children___children___id: 'childMdx.children.children.id', childMdx___children___children___children: 'childMdx.children.children.children', childMdx___children___internal___content: 'childMdx.children.internal.content', childMdx___children___internal___contentDigest: 'childMdx.children.internal.contentDigest', childMdx___children___internal___description: 'childMdx.children.internal.description', childMdx___children___internal___fieldOwners: 'childMdx.children.internal.fieldOwners', childMdx___children___internal___ignoreType: 'childMdx.children.internal.ignoreType', childMdx___children___internal___mediaType: 'childMdx.children.internal.mediaType', childMdx___children___internal___owner: 'childMdx.children.internal.owner', childMdx___children___internal___type: 'childMdx.children.internal.type', childMdx___internal___content: 'childMdx.internal.content', childMdx___internal___contentDigest: 'childMdx.internal.contentDigest', childMdx___internal___description: 'childMdx.internal.description', childMdx___internal___fieldOwners: 'childMdx.internal.fieldOwners', childMdx___internal___ignoreType: 'childMdx.internal.ignoreType', childMdx___internal___mediaType: 'childMdx.internal.mediaType', childMdx___internal___owner: 'childMdx.internal.owner', childMdx___internal___type: 'childMdx.internal.type', absolutePath: 'undefined', inboundReferencePreviews: 'undefined', inboundReferencePreviews___source: 'inboundReferencePreviews.source', inboundReferencePreviews___previewMarkdown: 'inboundReferencePreviews.previewMarkdown', inboundReferencePreviews___previewHtml: 'inboundReferencePreviews.previewHtml', childrenMdx: 'undefined', childrenMdx___rawBody: 'childrenMdx.rawBody', childrenMdx___fileAbsolutePath: 'childrenMdx.fileAbsolutePath', childrenMdx___frontmatter___title: 'childrenMdx.frontmatter.title', childrenMdx___frontmatter___description: 'childrenMdx.frontmatter.description', childrenMdx___frontmatter___date: 'childrenMdx.frontmatter.date', childrenMdx___frontmatter___cover_image___sourceInstanceName: 'childrenMdx.frontmatter.cover_image.sourceInstanceName', childrenMdx___frontmatter___cover_image___absolutePath: 'childrenMdx.frontmatter.cover_image.absolutePath', childrenMdx___frontmatter___cover_image___relativePath: 'childrenMdx.frontmatter.cover_image.relativePath', childrenMdx___frontmatter___cover_image___extension: 'childrenMdx.frontmatter.cover_image.extension', childrenMdx___frontmatter___cover_image___size: 'childrenMdx.frontmatter.cover_image.size', childrenMdx___frontmatter___cover_image___prettySize: 'childrenMdx.frontmatter.cover_image.prettySize', childrenMdx___frontmatter___cover_image___modifiedTime: 'childrenMdx.frontmatter.cover_image.modifiedTime', childrenMdx___frontmatter___cover_image___accessTime: 'childrenMdx.frontmatter.cover_image.accessTime', childrenMdx___frontmatter___cover_image___changeTime: 'childrenMdx.frontmatter.cover_image.changeTime', childrenMdx___frontmatter___cover_image___birthTime: 'childrenMdx.frontmatter.cover_image.birthTime', childrenMdx___frontmatter___cover_image___root: 'childrenMdx.frontmatter.cover_image.root', childrenMdx___frontmatter___cover_image___dir: 'childrenMdx.frontmatter.cover_image.dir', childrenMdx___frontmatter___cover_image___base: 'childrenMdx.frontmatter.cover_image.base', childrenMdx___frontmatter___cover_image___ext: 'childrenMdx.frontmatter.cover_image.ext', childrenMdx___frontmatter___cover_image___name: 'childrenMdx.frontmatter.cover_image.name', childrenMdx___frontmatter___cover_image___relativeDirectory: 'childrenMdx.frontmatter.cover_image.relativeDirectory', childrenMdx___frontmatter___cover_image___dev: 'childrenMdx.frontmatter.cover_image.dev', childrenMdx___frontmatter___cover_image___mode: 'childrenMdx.frontmatter.cover_image.mode', childrenMdx___frontmatter___cover_image___nlink: 'childrenMdx.frontmatter.cover_image.nlink', childrenMdx___frontmatter___cover_image___uid: 'childrenMdx.frontmatter.cover_image.uid', childrenMdx___frontmatter___cover_image___gid: 'childrenMdx.frontmatter.cover_image.gid', childrenMdx___frontmatter___cover_image___rdev: 'childrenMdx.frontmatter.cover_image.rdev', childrenMdx___frontmatter___cover_image___ino: 'childrenMdx.frontmatter.cover_image.ino', childrenMdx___frontmatter___cover_image___atimeMs: 'childrenMdx.frontmatter.cover_image.atimeMs', childrenMdx___frontmatter___cover_image___mtimeMs: 'childrenMdx.frontmatter.cover_image.mtimeMs', childrenMdx___frontmatter___cover_image___ctimeMs: 'childrenMdx.frontmatter.cover_image.ctimeMs', childrenMdx___frontmatter___cover_image___atime: 'childrenMdx.frontmatter.cover_image.atime', childrenMdx___frontmatter___cover_image___mtime: 'childrenMdx.frontmatter.cover_image.mtime', childrenMdx___frontmatter___cover_image___ctime: 'childrenMdx.frontmatter.cover_image.ctime', childrenMdx___frontmatter___cover_image___birthtime: 'childrenMdx.frontmatter.cover_image.birthtime', childrenMdx___frontmatter___cover_image___birthtimeMs: 'childrenMdx.frontmatter.cover_image.birthtimeMs', childrenMdx___frontmatter___cover_image___blksize: 'childrenMdx.frontmatter.cover_image.blksize', childrenMdx___frontmatter___cover_image___blocks: 'childrenMdx.frontmatter.cover_image.blocks', childrenMdx___frontmatter___cover_image___publicURL: 'childrenMdx.frontmatter.cover_image.publicURL', childrenMdx___frontmatter___cover_image___childrenImageSharp: 'childrenMdx.frontmatter.cover_image.childrenImageSharp', childrenMdx___frontmatter___cover_image___childrenMdx: 'childrenMdx.frontmatter.cover_image.childrenMdx', childrenMdx___frontmatter___cover_image___id: 'childrenMdx.frontmatter.cover_image.id', childrenMdx___frontmatter___cover_image___children: 'childrenMdx.frontmatter.cover_image.children', childrenMdx___frontmatter___slug: 'childrenMdx.frontmatter.slug', childrenMdx___frontmatter___tags: 'childrenMdx.frontmatter.tags', childrenMdx___frontmatter___subtitle: 'childrenMdx.frontmatter.subtitle', childrenMdx___frontmatter___featured: 'childrenMdx.frontmatter.featured', childrenMdx___frontmatter___public: 'childrenMdx.frontmatter.public', childrenMdx___frontmatter___tag: 'childrenMdx.frontmatter.tag', childrenMdx___frontmatter___filters: 'childrenMdx.frontmatter.filters', childrenMdx___frontmatter___categories: 'childrenMdx.frontmatter.categories', childrenMdx___frontmatter___published: 'childrenMdx.frontmatter.published', childrenMdx___frontmatter___updated: 'childrenMdx.frontmatter.updated', childrenMdx___frontmatter___external_url: 'childrenMdx.frontmatter.external_url', childrenMdx___frontmatter___epistemic_status: 'childrenMdx.frontmatter.epistemic_status', childrenMdx___frontmatter___layout: 'childrenMdx.frontmatter.layout', childrenMdx___frontmatter___created: 'childrenMdx.frontmatter.created', childrenMdx___frontmatter___date_updated: 'childrenMdx.frontmatter.date_updated', childrenMdx___frontmatter___social_image: 'childrenMdx.frontmatter.social_image', childrenMdx___frontmatter___abstract: 'childrenMdx.frontmatter.abstract', childrenMdx___frontmatter___draft: 'childrenMdx.frontmatter.draft', childrenMdx___slug: 'childrenMdx.slug', childrenMdx___body: 'childrenMdx.body', childrenMdx___excerpt: 'childrenMdx.excerpt', childrenMdx___headings: 'childrenMdx.headings', childrenMdx___headings___value: 'childrenMdx.headings.value', childrenMdx___headings___depth: 'childrenMdx.headings.depth', childrenMdx___html: 'childrenMdx.html', childrenMdx___mdxAST: 'childrenMdx.mdxAST', childrenMdx___tableOfContents: 'childrenMdx.tableOfContents', childrenMdx___timeToRead: 'childrenMdx.timeToRead', childrenMdx___wordCount___paragraphs: 'childrenMdx.wordCount.paragraphs', childrenMdx___wordCount___sentences: 'childrenMdx.wordCount.sentences', childrenMdx___wordCount___words: 'childrenMdx.wordCount.words', childrenMdx___fields___readingTime___text: 'childrenMdx.fields.readingTime.text', childrenMdx___fields___readingTime___minutes: 'childrenMdx.fields.readingTime.minutes', childrenMdx___fields___readingTime___time: 'childrenMdx.fields.readingTime.time', childrenMdx___fields___readingTime___words: 'childrenMdx.fields.readingTime.words', childrenMdx___fields___source: 'childrenMdx.fields.source', childrenMdx___fields___slug: 'childrenMdx.fields.slug', childrenMdx___id: 'childrenMdx.id', childrenMdx___parent___id: 'childrenMdx.parent.id', childrenMdx___parent___parent___id: 'childrenMdx.parent.parent.id', childrenMdx___parent___parent___children: 'childrenMdx.parent.parent.children', childrenMdx___parent___children: 'childrenMdx.parent.children', childrenMdx___parent___children___id: 'childrenMdx.parent.children.id', childrenMdx___parent___children___children: 'childrenMdx.parent.children.children', childrenMdx___parent___internal___content: 'childrenMdx.parent.internal.content', childrenMdx___parent___internal___contentDigest: 'childrenMdx.parent.internal.contentDigest', childrenMdx___parent___internal___description: 'childrenMdx.parent.internal.description', childrenMdx___parent___internal___fieldOwners: 'childrenMdx.parent.internal.fieldOwners', childrenMdx___parent___internal___ignoreType: 'childrenMdx.parent.internal.ignoreType', childrenMdx___parent___internal___mediaType: 'childrenMdx.parent.internal.mediaType', childrenMdx___parent___internal___owner: 'childrenMdx.parent.internal.owner', childrenMdx___parent___internal___type: 'childrenMdx.parent.internal.type', childrenMdx___children: 'childrenMdx.children', childrenMdx___children___id: 'childrenMdx.children.id', childrenMdx___children___parent___id: 'childrenMdx.children.parent.id', childrenMdx___children___parent___children: 'childrenMdx.children.parent.children', childrenMdx___children___children: 'childrenMdx.children.children', childrenMdx___children___children___id: 'childrenMdx.children.children.id', childrenMdx___children___children___children: 'childrenMdx.children.children.children', childrenMdx___children___internal___content: 'childrenMdx.children.internal.content', childrenMdx___children___internal___contentDigest: 'childrenMdx.children.internal.contentDigest', childrenMdx___children___internal___description: 'childrenMdx.children.internal.description', childrenMdx___children___internal___fieldOwners: 'childrenMdx.children.internal.fieldOwners', childrenMdx___children___internal___ignoreType: 'childrenMdx.children.internal.ignoreType', childrenMdx___children___internal___mediaType: 'childrenMdx.children.internal.mediaType', childrenMdx___children___internal___owner: 'childrenMdx.children.internal.owner', childrenMdx___children___internal___type: 'childrenMdx.children.internal.type', childrenMdx___internal___content: 'childrenMdx.internal.content', childrenMdx___internal___contentDigest: 'childrenMdx.internal.contentDigest', childrenMdx___internal___description: 'childrenMdx.internal.description', childrenMdx___internal___fieldOwners: 'childrenMdx.internal.fieldOwners', childrenMdx___internal___ignoreType: 'childrenMdx.internal.ignoreType', childrenMdx___internal___mediaType: 'childrenMdx.internal.mediaType', childrenMdx___internal___owner: 'childrenMdx.internal.owner', childrenMdx___internal___type: 'childrenMdx.internal.type', childrenMarkdownRemark: 'undefined', childrenMarkdownRemark___id: 'childrenMarkdownRemark.id', childrenMarkdownRemark___frontmatter___title: 'childrenMarkdownRemark.frontmatter.title', childrenMarkdownRemark___frontmatter___tags: 'childrenMarkdownRemark.frontmatter.tags', childrenMarkdownRemark___frontmatter___date: 'childrenMarkdownRemark.frontmatter.date', childrenMarkdownRemark___frontmatter___updated: 'childrenMarkdownRemark.frontmatter.updated', childrenMarkdownRemark___frontmatter___created: 'childrenMarkdownRemark.frontmatter.created', childrenMarkdownRemark___frontmatter___date_updated: 'childrenMarkdownRemark.frontmatter.date_updated', childrenMarkdownRemark___excerpt: 'childrenMarkdownRemark.excerpt', childrenMarkdownRemark___rawMarkdownBody: 'childrenMarkdownRemark.rawMarkdownBody', childrenMarkdownRemark___fields___readingTime___text: 'childrenMarkdownRemark.fields.readingTime.text', childrenMarkdownRemark___fields___readingTime___minutes: 'childrenMarkdownRemark.fields.readingTime.minutes', childrenMarkdownRemark___fields___readingTime___time: 'childrenMarkdownRemark.fields.readingTime.time', childrenMarkdownRemark___fields___readingTime___words: 'childrenMarkdownRemark.fields.readingTime.words', childrenMarkdownRemark___html: 'childrenMarkdownRemark.html', childrenMarkdownRemark___htmlAst: 'childrenMarkdownRemark.htmlAst', childrenMarkdownRemark___excerptAst: 'childrenMarkdownRemark.excerptAst', childrenMarkdownRemark___headings: 'childrenMarkdownRemark.headings', childrenMarkdownRemark___headings___id: 'childrenMarkdownRemark.headings.id', childrenMarkdownRemark___headings___value: 'childrenMarkdownRemark.headings.value', childrenMarkdownRemark___headings___depth: 'childrenMarkdownRemark.headings.depth', childrenMarkdownRemark___timeToRead: 'childrenMarkdownRemark.timeToRead', childrenMarkdownRemark___tableOfContents: 'childrenMarkdownRemark.tableOfContents', childrenMarkdownRemark___wordCount___paragraphs: 'childrenMarkdownRemark.wordCount.paragraphs', childrenMarkdownRemark___wordCount___sentences: 'childrenMarkdownRemark.wordCount.sentences', childrenMarkdownRemark___wordCount___words: 'childrenMarkdownRemark.wordCount.words', childrenMarkdownRemark___parent___id: 'childrenMarkdownRemark.parent.id', childrenMarkdownRemark___parent___parent___id: 'childrenMarkdownRemark.parent.parent.id', childrenMarkdownRemark___parent___parent___children: 'childrenMarkdownRemark.parent.parent.children', childrenMarkdownRemark___parent___children: 'childrenMarkdownRemark.parent.children', childrenMarkdownRemark___parent___children___id: 'childrenMarkdownRemark.parent.children.id', childrenMarkdownRemark___parent___children___children: 'childrenMarkdownRemark.parent.children.children', childrenMarkdownRemark___parent___internal___content: 'childrenMarkdownRemark.parent.internal.content', childrenMarkdownRemark___parent___internal___contentDigest: 'childrenMarkdownRemark.parent.internal.contentDigest', childrenMarkdownRemark___parent___internal___description: 'childrenMarkdownRemark.parent.internal.description', childrenMarkdownRemark___parent___internal___fieldOwners: 'childrenMarkdownRemark.parent.internal.fieldOwners', childrenMarkdownRemark___parent___internal___ignoreType: 'childrenMarkdownRemark.parent.internal.ignoreType', childrenMarkdownRemark___parent___internal___mediaType: 'childrenMarkdownRemark.parent.internal.mediaType', childrenMarkdownRemark___parent___internal___owner: 'childrenMarkdownRemark.parent.internal.owner', childrenMarkdownRemark___parent___internal___type: 'childrenMarkdownRemark.parent.internal.type', childrenMarkdownRemark___children: 'childrenMarkdownRemark.children', childrenMarkdownRemark___children___id: 'childrenMarkdownRemark.children.id', childrenMarkdownRemark___children___parent___id: 'childrenMarkdownRemark.children.parent.id', childrenMarkdownRemark___children___parent___children: 'childrenMarkdownRemark.children.parent.children', childrenMarkdownRemark___children___children: 'childrenMarkdownRemark.children.children', childrenMarkdownRemark___children___children___id: 'childrenMarkdownRemark.children.children.id', childrenMarkdownRemark___children___children___children: 'childrenMarkdownRemark.children.children.children', childrenMarkdownRemark___children___internal___content: 'childrenMarkdownRemark.children.internal.content', childrenMarkdownRemark___children___internal___contentDigest: 'childrenMarkdownRemark.children.internal.contentDigest', childrenMarkdownRemark___children___internal___description: 'childrenMarkdownRemark.children.internal.description', childrenMarkdownRemark___children___internal___fieldOwners: 'childrenMarkdownRemark.children.internal.fieldOwners', childrenMarkdownRemark___children___internal___ignoreType: 'childrenMarkdownRemark.children.internal.ignoreType', childrenMarkdownRemark___children___internal___mediaType: 'childrenMarkdownRemark.children.internal.mediaType', childrenMarkdownRemark___children___internal___owner: 'childrenMarkdownRemark.children.internal.owner', childrenMarkdownRemark___children___internal___type: 'childrenMarkdownRemark.children.internal.type', childrenMarkdownRemark___internal___content: 'childrenMarkdownRemark.internal.content', childrenMarkdownRemark___internal___contentDigest: 'childrenMarkdownRemark.internal.contentDigest', childrenMarkdownRemark___internal___description: 'childrenMarkdownRemark.internal.description', childrenMarkdownRemark___internal___fieldOwners: 'childrenMarkdownRemark.internal.fieldOwners', childrenMarkdownRemark___internal___ignoreType: 'childrenMarkdownRemark.internal.ignoreType', childrenMarkdownRemark___internal___mediaType: 'childrenMarkdownRemark.internal.mediaType', childrenMarkdownRemark___internal___owner: 'childrenMarkdownRemark.internal.owner', childrenMarkdownRemark___internal___type: 'childrenMarkdownRemark.internal.type', childMarkdownRemark___id: 'childMarkdownRemark.id', childMarkdownRemark___frontmatter___title: 'childMarkdownRemark.frontmatter.title', childMarkdownRemark___frontmatter___tags: 'childMarkdownRemark.frontmatter.tags', childMarkdownRemark___frontmatter___date: 'childMarkdownRemark.frontmatter.date', childMarkdownRemark___frontmatter___updated: 'childMarkdownRemark.frontmatter.updated', childMarkdownRemark___frontmatter___created: 'childMarkdownRemark.frontmatter.created', childMarkdownRemark___frontmatter___date_updated: 'childMarkdownRemark.frontmatter.date_updated', childMarkdownRemark___excerpt: 'childMarkdownRemark.excerpt', childMarkdownRemark___rawMarkdownBody: 'childMarkdownRemark.rawMarkdownBody', childMarkdownRemark___fields___readingTime___text: 'childMarkdownRemark.fields.readingTime.text', childMarkdownRemark___fields___readingTime___minutes: 'childMarkdownRemark.fields.readingTime.minutes', childMarkdownRemark___fields___readingTime___time: 'childMarkdownRemark.fields.readingTime.time', childMarkdownRemark___fields___readingTime___words: 'childMarkdownRemark.fields.readingTime.words', childMarkdownRemark___html: 'childMarkdownRemark.html', childMarkdownRemark___htmlAst: 'childMarkdownRemark.htmlAst', childMarkdownRemark___excerptAst: 'childMarkdownRemark.excerptAst', childMarkdownRemark___headings: 'childMarkdownRemark.headings', childMarkdownRemark___headings___id: 'childMarkdownRemark.headings.id', childMarkdownRemark___headings___value: 'childMarkdownRemark.headings.value', childMarkdownRemark___headings___depth: 'childMarkdownRemark.headings.depth', childMarkdownRemark___timeToRead: 'childMarkdownRemark.timeToRead', childMarkdownRemark___tableOfContents: 'childMarkdownRemark.tableOfContents', childMarkdownRemark___wordCount___paragraphs: 'childMarkdownRemark.wordCount.paragraphs', childMarkdownRemark___wordCount___sentences: 'childMarkdownRemark.wordCount.sentences', childMarkdownRemark___wordCount___words: 'childMarkdownRemark.wordCount.words', childMarkdownRemark___parent___id: 'childMarkdownRemark.parent.id', childMarkdownRemark___parent___parent___id: 'childMarkdownRemark.parent.parent.id', childMarkdownRemark___parent___parent___children: 'childMarkdownRemark.parent.parent.children', childMarkdownRemark___parent___children: 'childMarkdownRemark.parent.children', childMarkdownRemark___parent___children___id: 'childMarkdownRemark.parent.children.id', childMarkdownRemark___parent___children___children: 'childMarkdownRemark.parent.children.children', childMarkdownRemark___parent___internal___content: 'childMarkdownRemark.parent.internal.content', childMarkdownRemark___parent___internal___contentDigest: 'childMarkdownRemark.parent.internal.contentDigest', childMarkdownRemark___parent___internal___description: 'childMarkdownRemark.parent.internal.description', childMarkdownRemark___parent___internal___fieldOwners: 'childMarkdownRemark.parent.internal.fieldOwners', childMarkdownRemark___parent___internal___ignoreType: 'childMarkdownRemark.parent.internal.ignoreType', childMarkdownRemark___parent___internal___mediaType: 'childMarkdownRemark.parent.internal.mediaType', childMarkdownRemark___parent___internal___owner: 'childMarkdownRemark.parent.internal.owner', childMarkdownRemark___parent___internal___type: 'childMarkdownRemark.parent.internal.type', childMarkdownRemark___children: 'childMarkdownRemark.children', childMarkdownRemark___children___id: 'childMarkdownRemark.children.id', childMarkdownRemark___children___parent___id: 'childMarkdownRemark.children.parent.id', childMarkdownRemark___children___parent___children: 'childMarkdownRemark.children.parent.children', childMarkdownRemark___children___children: 'childMarkdownRemark.children.children', childMarkdownRemark___children___children___id: 'childMarkdownRemark.children.children.id', childMarkdownRemark___children___children___children: 'childMarkdownRemark.children.children.children', childMarkdownRemark___children___internal___content: 'childMarkdownRemark.children.internal.content', childMarkdownRemark___children___internal___contentDigest: 'childMarkdownRemark.children.internal.contentDigest', childMarkdownRemark___children___internal___description: 'childMarkdownRemark.children.internal.description', childMarkdownRemark___children___internal___fieldOwners: 'childMarkdownRemark.children.internal.fieldOwners', childMarkdownRemark___children___internal___ignoreType: 'childMarkdownRemark.children.internal.ignoreType', childMarkdownRemark___children___internal___mediaType: 'childMarkdownRemark.children.internal.mediaType', childMarkdownRemark___children___internal___owner: 'childMarkdownRemark.children.internal.owner', childMarkdownRemark___children___internal___type: 'childMarkdownRemark.children.internal.type', childMarkdownRemark___internal___content: 'childMarkdownRemark.internal.content', childMarkdownRemark___internal___contentDigest: 'childMarkdownRemark.internal.contentDigest', childMarkdownRemark___internal___description: 'childMarkdownRemark.internal.description', childMarkdownRemark___internal___fieldOwners: 'childMarkdownRemark.internal.fieldOwners', childMarkdownRemark___internal___ignoreType: 'childMarkdownRemark.internal.ignoreType', childMarkdownRemark___internal___mediaType: 'childMarkdownRemark.internal.mediaType', childMarkdownRemark___internal___owner: 'childMarkdownRemark.internal.owner', childMarkdownRemark___internal___type: 'childMarkdownRemark.internal.type', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type BrainNoteGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['BrainNoteGroupConnection'] = ResolversParentTypes['BrainNoteGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['BrainNoteEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['BrainNote']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<BrainNoteGroupConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<BrainNoteGroupConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<BrainNoteGroupConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<BrainNoteGroupConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['BrainNoteGroupConnection']>, ParentType, ContextType, RequireFields<BrainNoteGroupConnection_groupArgs, 'field'>>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GatsbyResolverContext> = {
  File?: FileResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Internal?: InternalResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Directory?: DirectoryResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  SiteFlags?: SiteFlagsResolvers<ContextType>;
  SiteSiteMetadata?: SiteSiteMetadataResolvers<ContextType>;
  SiteSiteMetadataOrganization?: SiteSiteMetadataOrganizationResolvers<ContextType>;
  SiteFunction?: SiteFunctionResolvers<ContextType>;
  SitePage?: SitePageResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  SitePlugin?: SitePluginResolvers<ContextType>;
  SiteBuildMetadata?: SiteBuildMetadataResolvers<ContextType>;
  GatsbyImageFormat?: GatsbyImageFormatResolvers;
  GatsbyImageLayout?: GatsbyImageLayoutResolvers;
  GatsbyImagePlaceholder?: GatsbyImagePlaceholderResolvers;
  ImageFormat?: ImageFormatResolvers;
  ImageFit?: ImageFitResolvers;
  ImageLayout?: ImageLayoutResolvers;
  ImageCropFocus?: ImageCropFocusResolvers;
  PotraceTurnPolicy?: PotraceTurnPolicyResolvers;
  ImageSharp?: ImageSharpResolvers<ContextType>;
  ImageSharpFixed?: ImageSharpFixedResolvers<ContextType>;
  ImageSharpFluid?: ImageSharpFluidResolvers<ContextType>;
  ImagePlaceholder?: ImagePlaceholderResolvers;
  ImageSharpOriginal?: ImageSharpOriginalResolvers<ContextType>;
  ImageSharpResize?: ImageSharpResizeResolvers<ContextType>;
  MdxFrontmatter?: MdxFrontmatterResolvers<ContextType>;
  MdxHeadingMdx?: MdxHeadingMdxResolvers<ContextType>;
  MdxWordCount?: MdxWordCountResolvers<ContextType>;
  Mdx?: MdxResolvers<ContextType>;
  MdxFields?: MdxFieldsResolvers<ContextType>;
  MdxFieldsReadingTime?: MdxFieldsReadingTimeResolvers<ContextType>;
  MarkdownHeading?: MarkdownHeadingResolvers<ContextType>;
  MarkdownWordCount?: MarkdownWordCountResolvers<ContextType>;
  MarkdownRemark?: MarkdownRemarkResolvers<ContextType>;
  MarkdownRemarkFrontmatter?: MarkdownRemarkFrontmatterResolvers<ContextType>;
  MarkdownRemarkFields?: MarkdownRemarkFieldsResolvers<ContextType>;
  MarkdownRemarkFieldsReadingTime?: MarkdownRemarkFieldsReadingTimeResolvers<ContextType>;
  BrainNote?: BrainNoteResolvers<ContextType>;
  BrainNoteInboundReferencePreviews?: BrainNoteInboundReferencePreviewsResolvers<ContextType>;
  ExternalInboundReference?: ExternalInboundReferenceResolvers<ContextType>;
  ExternalOutboundReference?: ExternalOutboundReferenceResolvers<ContextType>;
  InboundReferencePreview?: InboundReferencePreviewResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Social?: SocialResolvers<ContextType>;
  Frontmatter?: FrontmatterResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  FileConnection?: FileConnectionResolvers<ContextType>;
  FileEdge?: FileEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  FileFieldsEnum?: FileFieldsEnumResolvers;
  FileGroupConnection?: FileGroupConnectionResolvers<ContextType>;
  DirectoryConnection?: DirectoryConnectionResolvers<ContextType>;
  DirectoryEdge?: DirectoryEdgeResolvers<ContextType>;
  DirectoryFieldsEnum?: DirectoryFieldsEnumResolvers;
  DirectoryGroupConnection?: DirectoryGroupConnectionResolvers<ContextType>;
  SiteConnection?: SiteConnectionResolvers<ContextType>;
  SiteEdge?: SiteEdgeResolvers<ContextType>;
  SiteFieldsEnum?: SiteFieldsEnumResolvers;
  SiteGroupConnection?: SiteGroupConnectionResolvers<ContextType>;
  SiteFunctionConnection?: SiteFunctionConnectionResolvers<ContextType>;
  SiteFunctionEdge?: SiteFunctionEdgeResolvers<ContextType>;
  SiteFunctionFieldsEnum?: SiteFunctionFieldsEnumResolvers;
  SiteFunctionGroupConnection?: SiteFunctionGroupConnectionResolvers<ContextType>;
  SitePageConnection?: SitePageConnectionResolvers<ContextType>;
  SitePageEdge?: SitePageEdgeResolvers<ContextType>;
  SitePageFieldsEnum?: SitePageFieldsEnumResolvers;
  SitePageGroupConnection?: SitePageGroupConnectionResolvers<ContextType>;
  SitePluginConnection?: SitePluginConnectionResolvers<ContextType>;
  SitePluginEdge?: SitePluginEdgeResolvers<ContextType>;
  SitePluginFieldsEnum?: SitePluginFieldsEnumResolvers;
  SitePluginGroupConnection?: SitePluginGroupConnectionResolvers<ContextType>;
  SiteBuildMetadataConnection?: SiteBuildMetadataConnectionResolvers<ContextType>;
  SiteBuildMetadataEdge?: SiteBuildMetadataEdgeResolvers<ContextType>;
  SiteBuildMetadataFieldsEnum?: SiteBuildMetadataFieldsEnumResolvers;
  SiteBuildMetadataGroupConnection?: SiteBuildMetadataGroupConnectionResolvers<ContextType>;
  ImageSharpConnection?: ImageSharpConnectionResolvers<ContextType>;
  ImageSharpEdge?: ImageSharpEdgeResolvers<ContextType>;
  ImageSharpFieldsEnum?: ImageSharpFieldsEnumResolvers;
  ImageSharpGroupConnection?: ImageSharpGroupConnectionResolvers<ContextType>;
  MdxConnection?: MdxConnectionResolvers<ContextType>;
  MdxEdge?: MdxEdgeResolvers<ContextType>;
  MdxFieldsEnum?: MdxFieldsEnumResolvers;
  MdxGroupConnection?: MdxGroupConnectionResolvers<ContextType>;
  MarkdownRemarkConnection?: MarkdownRemarkConnectionResolvers<ContextType>;
  MarkdownRemarkEdge?: MarkdownRemarkEdgeResolvers<ContextType>;
  MarkdownRemarkFieldsEnum?: MarkdownRemarkFieldsEnumResolvers;
  MarkdownRemarkGroupConnection?: MarkdownRemarkGroupConnectionResolvers<ContextType>;
  BrainNoteConnection?: BrainNoteConnectionResolvers<ContextType>;
  BrainNoteEdge?: BrainNoteEdgeResolvers<ContextType>;
  BrainNoteFieldsEnum?: BrainNoteFieldsEnumResolvers;
  BrainNoteGroupConnection?: BrainNoteGroupConnectionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = GatsbyResolverContext> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = GatsbyResolverContext> = {
  dateformat?: dateformatDirectiveResolver<any, any, ContextType>;
  link?: linkDirectiveResolver<any, any, ContextType>;
  fileByRelativePath?: fileByRelativePathDirectiveResolver<any, any, ContextType>;
  proxy?: proxyDirectiveResolver<any, any, ContextType>;
  infer?: inferDirectiveResolver<any, any, ContextType>;
  dontInfer?: dontInferDirectiveResolver<any, any, ContextType>;
  mimeTypes?: mimeTypesDirectiveResolver<any, any, ContextType>;
  childOf?: childOfDirectiveResolver<any, any, ContextType>;
  nodeInterface?: nodeInterfaceDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = GatsbyResolverContext> = DirectiveResolvers<ContextType>;
}