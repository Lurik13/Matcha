import Hologram from "$/layers/Hologram";
import "$/style/styles.scss";

function LanguageButton() {
  function handleClick() {
    document.body.classList.toggle('latin-mode');
    const elem = document.body.classList;
    console.log(elem);
  }

  return (
    <>
    <div className="fixed bottom-0 h-15 w-15 m-5 z-20">
      <Hologram 
        width={67}
        height={80}
      />
    </div>
    <div className="languageButton" onClick={handleClick}>
      <span className="text-3xl">A</span>
      <span className="text-xl">b</span>
    </div>
    </>
  );
}

export default LanguageButton;