export const updateMetaTags = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
}) => {
  if (title) {
    document.title = title;
    const metaTitle = document.querySelector("meta[name='title']");
    if (metaTitle) {
      metaTitle.setAttribute("content", title);
    }
  }
  if (description) {
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }
  if (ogTitle) {
    const metaOgTitle = document.querySelector("meta[property='og:title']");
    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", ogTitle);
    }
    const metaTwitterTitle = document.querySelector(
      "meta[property='twitter:title']"
    );
    if (metaTwitterTitle) {
      metaTwitterTitle.setAttribute("content", ogTitle);
    }
  }
  if (ogDescription) {
    const metaOgDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (metaOgDescription) {
      metaOgDescription.setAttribute("content", ogDescription);
    }
    const metaTwitterDescription = document.querySelector(
      "meta[property='twitter:description']"
    );
    if (metaTwitterDescription) {
      metaTwitterDescription.setAttribute("content", ogDescription);
    }
  }

  if (ogUrl) {
    const metaOgUrl = document.querySelector("meta[property='og:url']");
    if (metaOgUrl) {
      metaOgUrl.setAttribute("content", ogUrl);
    }
    const metaTwitterUrl = document.querySelector(
      "meta[property='twitter:url']"
    );
    if (metaTwitterUrl) {
      metaTwitterUrl.setAttribute("content", ogUrl);
    }
    const metaCanonical = document.querySelector("link[rel='canonical']");
    if (metaCanonical) {
      metaCanonical.setAttribute("href", ogUrl);
    }
  }
};
