const PageUpBtn = () => {
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className="fixed bottom-5 right-5 flex w-full justify-end"
      onClick={scrollToTop}
    >
      <span className="material-symbols-outlined phone:text-2rem text-[3rem] text-white">
        arrow_circle_up
      </span>
    </button>
  );
};

export default PageUpBtn;
