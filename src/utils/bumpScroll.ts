const bumpScroll = () => {
  if (window) {
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  }
};

export default bumpScroll;
