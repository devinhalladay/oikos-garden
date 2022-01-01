/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly allMdx: { readonly group: ReadonlyArray<(
      Pick<MdxGroupConnection, 'totalCount'>
      & { tag: MdxGroupConnection['fieldValue'] }
    )> }, readonly allBrainNote: { readonly group: ReadonlyArray<(
      Pick<BrainNoteGroupConnection, 'totalCount'>
      & { tag: BrainNoteGroupConnection['fieldValue'] }
    )> } };

type allNotesQueryVariables = Exact<{ [key: string]: never; }>;


type allNotesQuery = { readonly brainNotes: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<BrainNote, 'title' | 'slug'>
        & { readonly childMdx: Maybe<{ readonly frontmatter: Pick<Frontmatter, 'date' | 'subtitle' | 'published' | 'tags'> }> }
      ) }> } };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly worksQuery: { readonly edges: ReadonlyArray<{ readonly node: (
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

type BlogPostBySlugQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type BlogPostBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly allMdx: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'tableOfContents'>
      & EssayFragment
    )> } };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly allMdx: { readonly nodes: ReadonlyArray<EssayPreviewFragment> } };

type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_4_Query = { readonly assemblagesQuery: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<Mdx, 'id' | 'slug'>
        & AssemblageFrontmatterFragment
      ) }> }, readonly worksQuery: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<Mdx, 'id' | 'slug'>
        & WorkFrontmatterFragment
      ) }> }, readonly notesQuery: { readonly nodes: ReadonlyArray<(
      Pick<BrainNote, 'id' | 'slug' | 'title'>
      & { readonly childMdx: Maybe<{ readonly frontmatter: Pick<Frontmatter, 'date' | 'tags'> }> }
    )> }, readonly essaysQuery: { readonly nodes: ReadonlyArray<EssayPreviewFragment> } };

type Unnamed_5_QueryVariables = Exact<{
  tag: Maybe<Scalars['String']>;
}>;


type Unnamed_5_Query = { readonly assemblagesQuery: { readonly nodes: ReadonlyArray<(
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

type EssayFrontmatterFragment = { readonly frontmatter: (
    Pick<Frontmatter, 'title' | 'slug' | 'date' | 'subtitle' | 'tags'>
    & { readonly cover_image: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<Pick<ImageSharpFluid, 'src'>> }> }> }
  ) };

type ReadingTimeFragment = { readonly fields: Maybe<{ readonly readingTime: Maybe<Pick<MdxFieldsReadingTime, 'text'>> }> };

type EssayPreviewFragment = (
  Pick<Mdx, 'id' | 'slug' | 'excerpt'>
  & EssayFrontmatterFragment
  & ReadingTimeFragment
);

type EssayFragment = (
  Pick<Mdx, 'id' | 'slug' | 'body'>
  & EssayFrontmatterFragment
  & ReadingTimeFragment
);

type AssemblageFrontmatterFragment = { readonly frontmatter: (
    Pick<Frontmatter, 'title' | 'subtitle'>
    & { readonly cover_image: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
  ) };

type WorkFrontmatterFragment = { readonly frontmatter: (
    Pick<Frontmatter, 'title' | 'tags' | 'subtitle' | 'slug'>
    & { readonly cover_image: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
  ) };

type WorkFragment = (
  Pick<Mdx, 'id' | 'slug' | 'body'>
  & WorkFrontmatterFragment
);

type WorksBySlugQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type WorksBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly allMdx: { readonly nodes: ReadonlyArray<WorkFragment> } };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

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

}